import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import QuillComp from "./QuillComp";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = $;
}

// Global instance tracker for CKEditor instances
const globalEditorInstances = new Map();

function GridEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    const loadStyle = (href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    const waitForGridEditor = () =>
      new Promise((resolve) => {
        const interval = setInterval(() => {
          if ($.fn.gridEditor) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });

    const initEditor = async () => {
      try {
        console.log("GridEditor: Initializing...");

        // Load required styles
        loadStyle("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        loadStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
        loadStyle("https://cdn.jsdelivr.net/npm/@frontwise/grid-editor@1.0.8/dist/grideditor.min.css");

        // Load required scripts
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js");
        await loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/@frontwise/grid-editor@1.0.8/dist/jquery.grideditor.min.js");

        await waitForGridEditor();

        console.log("✅ GridEditor loaded");

        const $el = $(editorRef.current);

        if ($el.data('gridEditor')) {
          console.log('⚠️ GridEditor already initialized');
          return;
        }

        if (!$.fn.gridEditor.RTEs) {
          $.fn.gridEditor.RTEs = {};
        }

        // Initialize custom Quill RTE
        $.fn.gridEditor.RTEs.quill = {
          name: "Quill",
          initialContent: "<p>Start writing...</p>",

          init: function (settings, contentArea) {
            const element = contentArea.get(0);
            const elementId = `quill-${Math.random().toString(36).substr(2, 9)}`;
            element.id = elementId;

            console.log(`[GridEditor] RTE init called for ${elementId}`);

            if (globalEditorInstances.has(element)) {
              console.log(`[GridEditor] Quill instance already exists for ${elementId}`);
              return;
            }

            try {
              const initialHTML = element.innerHTML || "<p>Start writing...</p>";

              element.innerHTML = '';
              element.setAttribute('contenteditable', 'false');

              const wrapper = document.createElement("div");
              wrapper.className = "quill-wrapper-mount ge-content";
              wrapper.onclick = (e) => {
                e.stopPropagation();
              };

              element.appendChild(wrapper);

              const contentRef = { currentHTML: initialHTML };

              const EditorWrapper = () => {
                const handleEditorChange = (data) => {
                  contentRef.currentHTML = data;
                };

                return (
                  <div className="quill-container-wrapper">
                    <QuillComp
                      initialValues={initialHTML}
                      onChange={handleEditorChange}
                    />
                  </div>
                );
              };

              const root = ReactDOM.createRoot(wrapper);
              root.render(<EditorWrapper />);

              globalEditorInstances.set(element, {
                root,
                getHTML: () => contentRef.currentHTML
              });

              console.log(`[GridEditor] Quill React root rendered for ${elementId}`);

            } catch (err) {
              console.error('[GridEditor] Init error:', err);
            }
          },

          deinit: function (settings, contentArea) {
            console.group('[GridEditor] deinit called');

            const element = contentArea.get(0);

            if (!globalEditorInstances.has(element)) {
              console.log('No global instance found for this element.');
              console.groupEnd();
              return;
            }

            console.log('Destroying Quill instance...');
            try {
              const instance = globalEditorInstances.get(element);
              const finalHTML = instance.getHTML();

              if (instance.root) {
                instance.root.unmount();
              }

              globalEditorInstances.delete(element);

              element.innerHTML = finalHTML;
              $(element).trigger('checkChange');

            } catch (e) {
              console.error('Error destroying Quill:', e);
            }
            console.groupEnd();
          }
        };

        // Initialize GridEditor with Quill
        $el.gridEditor({
          new_row_layouts: [[12], [6, 6], [4, 4, 4], [3, 3, 3, 3]],
          content_types: ["quill"],
          row_tools: [],
          col_tools: [],
        });

        console.log("✅ GridEditor initialized with Tiptap");
        isInitialized.current = true;

        if (value) {
          try {
            $el.gridEditor('setHtml', value);
          } catch (e) { }
        }

        function syncContent() {
          try {
            // This function calls getHtml which destroys RTEs.
            // We must only call it when it is safe (e.g. after editing is done).
            const html = $el.gridEditor("getHtml");
            onChange?.(html);
          } catch { }
        }

        // Only listen for explicit 'checkChange' (fired after deinit)
        // AND 'change' events from the grid itself (e.g. added row/col).
        // We REMOVED 'click', 'keyup', 'blur' to prevent accidental destruction.
        $el.on("checkChange change", syncContent);

      } catch (err) {
        console.error("❌ GridEditor init failed:", err);
      }
    };

    initEditor();

    return () => {
      try {
        const $el = $(editorRef.current);
        if ($el.data('gridEditor')) {
          $el.off("checkChange change");
        }
      } catch (e) { }
    };
  }, [onChange, value]);

  return (
    <div className="grid-editor-wrapper">
      <style>{`
        .ge-content {
          min-height: 80px;
          padding: 15px;
          border: 1px dashed #cbd5e0;
          background: #fff;
          outline: none;
          transition: all 0.2s;
        }

        .ge-content:hover {
          border-color: #4299e1;
          background: #f7fafc;
        }

        .ge-content:focus {
          border-color: #3182ce;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
        }

        /* Tiptap Wrapper */
        .tiptap-wrapper-mount {
          position: relative;
          z-index: 100; /* Ensure over grid overlay if needed */
          width: 100%;
        }

        /* Ensure Tiptap menu bar doesn't get hidden */
        .tiptap-menu-bar {
          z-index: 10000 !important;
        }
        
        /* Grid Editor Dropdown Styling */
        .dropdown {
          right: 0;
          top: 0;
          width: 10%;
          z-index: 10;
          backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(209, 213, 219, 0.3);
          cursor: pointer;
        }

        .dropdown-menu {
          backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(209, 213, 219, 0.3);
        }
      `}</style>
      <div ref={editorRef} />
    </div>
  );
}

export default GridEditor;

