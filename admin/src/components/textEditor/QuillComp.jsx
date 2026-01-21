import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default function QuillComp({ initialValues, onChange }) {
    const [value, setValue] = useState(initialValues || '');

    const handleChange = (content) => {
        setValue(content);
        if (onChange) {
            onChange(content);
        }
    };

    useEffect(() => {
        if (initialValues !== value) {
            // Only update if significantly different to avoid cursor jumps, 
            // but for initial load it's fine. 
            // If we strictly sync, we might need a flag or comparison.
            // For now, trusting internal state after init.
        }
    }, [initialValues]);

    return (
        <div className="quill-editor-wrapper">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
            <style>{`
        .quill-editor-wrapper {
          background: white;
        }
        .quill-editor-wrapper .ql-container {
          min-height: 150px;
        }
      `}</style>
        </div>
    );
}
