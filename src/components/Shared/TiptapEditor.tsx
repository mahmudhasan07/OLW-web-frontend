"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import React, { useEffect } from "react";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaListUl,
    FaListOl,
    FaQuoteRight,
    FaUndo,
    FaRedo,
    FaStrikethrough,
} from "react-icons/fa";

interface TiptapEditorProps {
    value: string;
    onChange?: (newContent: string) => void;
    placeholder?: string;
    editable?: boolean;
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2 p-2 bg-[#111827] border-b border-gray-700 rounded-t-lg">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("bold") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Bold"
            >
                <FaBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("italic") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Italic"
            >
                <FaItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("underline") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Underline"
            >
                <FaUnderline />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("strike") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Strike"
            >
                <FaStrikethrough />
            </button>
            <div className="w-px bg-gray-600 mx-1"></div>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors font-bold text-sm ${editor.isActive("heading", { level: 1 })
                        ? "bg-gray-700 text-[#00A3FF]"
                        : "text-gray-300"
                    }`}
                title="H1"
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors font-bold text-sm ${editor.isActive("heading", { level: 2 })
                        ? "bg-gray-700 text-[#00A3FF]"
                        : "text-gray-300"
                    }`}
                title="H2"
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("bulletList") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Bullet List"
            >
                <FaListUl />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("orderedList") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Ordered List"
            >
                <FaListOl />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded hover:bg-gray-700 transition-colors ${editor.isActive("blockquote") ? "bg-gray-700 text-[#00A3FF]" : "text-gray-300"
                    }`}
                title="Blockquote"
            >
                <FaQuoteRight />
            </button>
            <div className="w-px bg-gray-600 mx-1"></div>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="p-2 rounded hover:bg-gray-700 transition-colors text-gray-300 disabled:opacity-50"
                title="Undo"
            >
                <FaUndo />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="p-2 rounded hover:bg-gray-700 transition-colors text-gray-300 disabled:opacity-50"
                title="Redo"
            >
                <FaRedo />
            </button>
        </div>
    );
};

const TiptapEditor = ({
    value,
    onChange,
    placeholder,
    editable = true,
}: TiptapEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: placeholder || "Write something...",
            }),
        ],
        content: value,
        editable: editable,
        onUpdate: ({ editor }) => {
            if (onChange) {
                onChange(editor.getHTML());
            }
        },
        editorProps: {
            attributes: {
                class:
                    "prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4 text-gray-300 leading-relaxed",
            },
        },
        immediatelyRender: false,
    });

    // Sync content when value changes externally (e.g. initial load)
    useEffect(() => {
        if (editor && value && editor.getHTML() !== value) {
            // Only set content if it's different to prevent cursor jumping or infinite loops
            // Simple check, for more complex scenarios might need better comparison
            const isSame = editor.getHTML() === value;
            if (!isSame) {
                editor.commands.setContent(value);
            }
        }
    }, [value, editor]);

    // Handle editable prop change
    useEffect(() => {
        if (editor) {
            editor.setEditable(editable);
        }
    }, [editable, editor]);

    if (!editor) {
        return null;
    }

    return (
        <div
            className={`w-full bg-[#1A1A2E] border border-gray-700 rounded-lg overflow-hidden ${editable ? "shadow-inner" : "border-0 bg-transparent"
                }`}
        >
            {editable && <MenuBar editor={editor} />}
            <EditorContent editor={editor} />
            <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #6b7280;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror h1 {
            font-size: 2em;
            font-weight: bold;
            color: #fff;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
        .ProseMirror h2 {
            font-size: 1.5em;
            font-weight: bold;
            color: #fff;
             margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
        .ProseMirror ul, .ProseMirror ol {
            padding-left: 1.5em;
        }
        .ProseMirror ul {
            list-style-type: disc;
        }
         .ProseMirror ol {
            list-style-type: decimal;
        }
        .ProseMirror blockquote {
            border-left: 3px solid #00A3FF;
            padding-left: 1em;
            color: #9ca3af;
            font-style: italic;
        }
      `}</style>
        </div>
    );
};

export default TiptapEditor;
