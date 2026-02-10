'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, List, ListOrdered, Quote, Code, Undo, Redo } from 'lucide-react';

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export function TipTapEditor({ content, onChange, placeholder = 'Start typing...', readOnly = false }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editable: !readOnly,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  if (readOnly) {
    return (
      <div className="bg-shell-900 rounded-lg p-4 border border-shell-700 min-h-[200px]">
        <EditorContent editor={editor} className="tiptap prose prose-invert max-w-none" />
      </div>
    );
  }

  return (
    <div className="bg-shell-900 rounded-lg border border-shell-700 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 bg-shell-800 border-b border-shell-700">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded ${editor.isActive('bold') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded ${editor.isActive('italic') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-shell-600 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded ${editor.isActive('bulletList') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded ${editor.isActive('orderedList') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-shell-600 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded ${editor.isActive('blockquote') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-1.5 rounded ${editor.isActive('codeBlock') ? 'bg-crab-600 text-white' : 'text-gray-400 hover:text-white hover:bg-shell-700'}`}
          title="Code Block"
        >
          <Code className="w-4 h-4" />
        </button>
        <div className="flex-1" />
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-shell-700 disabled:opacity-30"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-shell-700 disabled:opacity-30"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content */}
      <div className="p-4 min-h-[300px]">
        <EditorContent
          editor={editor}
          className="tiptap prose prose-invert max-w-none focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
