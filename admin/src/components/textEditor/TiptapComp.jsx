import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../../index.css'; // Make sure to import core styles

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    // Always show menu for now to ensure visibility
    // if (!editor.isFocused) { return null; }

    return (
        <div className="tiptap-menu-bar show">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                Italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                Strike
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                Code
            </button>
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                Clear marks
            </button>
            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                Clear nodes
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                Paragraph
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                H3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                Ordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                Code block
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                Blockquote
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                Horizontal rule
            </button>
            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                Hard break
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                Undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                Redo
            </button>
        </div>
    );
};

export default function TiptapComp({ initialValues, onChange }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: initialValues,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange(html);
        },
        // Ensure styles are applied to the editor content container
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
    });

    // Re-sync content if initialValues changes externally (optional, but good for reset)
    useEffect(() => {
        if (editor && initialValues && editor.getHTML() !== initialValues) {
            // We avoid resetting if content is "similar" to avoid cursor jumps, 
            // but for a true external reset we might need it.
            // For now, let's assume initialValues is truly initial.
        }
    }, [initialValues, editor]);

    return (
        <div className="tiptap-editor-container">
            {/* MenuBar is fixed or properly positioned */}
            <div className="tiptap-menubar-wrapper">
                <MenuBar editor={editor} />
            </div>
            <EditorContent editor={editor} />

            <style>{`
        .tiptap-editor-container {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 10px;
            min-height: 150px;
            position: relative;
        }
        .tiptap-menu-bar {
            position: absolute;
            top: -40px; /* Position above the editor */
            left: 0;
            z-index: 1000;
            background: white;
            border: 1px solid #ddd;
            padding: 5px;
            border-radius: 4px;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .tiptap-menu-bar button {
            padding: 2px 5px;
            border: 1px solid #eee;
            background: #fff;
            cursor: pointer;
            font-size: 12px;
        }
        .tiptap-menu-bar button.is-active {
            background: #333;
            color: white;
        }
        .tiptap-menu-bar button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        /* ProseMirror specific styles */
        .ProseMirror {
            outline: none;
            min-height: 120px;
            padding: 10px;
            cursor: text;
        }
        .ProseMirror p {
            margin: 0.5em 0;
        }
        .ProseMirror ul, .ProseMirror ol {
            padding: 0 1rem;
        }
      `}</style>
        </div>
    );
}
