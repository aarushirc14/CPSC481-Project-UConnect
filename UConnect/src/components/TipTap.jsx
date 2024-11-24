// The text Editor for 

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import React, { useCallback } from 'react'
import { RiBold,
        RiItalic,
        RiStrikethrough,
        RiUnderline,
        RiFormatClear,
        RiFontColor,
        } from "react-icons/ri";
import { MdOutlineUndo,
        MdOutlineRedo,
        MdHorizontalRule,
        } from "react-icons/md";
import { BsListOl,
        BsListUl,
 } from "react-icons/bs";
import { IoImagesSharp } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";




const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const addImage = useCallback(() => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = () => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  }, [editor]);


  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  if (!editor) {
    return null
  }

  if (!editor) {
    return null
  }

  return (
    <div className="p-2 flex items-center justify-center">
        <div className="button-group dark:text-uConnectDark-textSub text-uConnectLight-textSub transition">
            <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive('bold') ? 'is-active' : ''}
            >
            <RiBold />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
            <RiItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <RiUnderline />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') ? 'is-active' : ''}
            >
            <RiStrikethrough />
            </button>
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <RiFormatClear />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
            <BsListUl />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
            <BsListOl />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <MdHorizontalRule />
            </button>
            <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
            >
            <MdOutlineUndo />
            </button>
            <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
            >
            <MdOutlineRedo />
            </button>
            <input
                type="color"
                onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color}
                data-testid="setColor"
            />
            <button
            onClick={() => editor.chain().focus().setColor('#958DF1').run()}
            className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
            >
            <RiFontColor />
            </button>
            <button onClick={addImage}>
                <IoImagesSharp />
            </button>
            <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
            <IoMdLink/>
            </button>
        </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Underline,
  TextStyle.configure({ types: [ListItem.name] }),
  Image.configure({inline: true,}),
  Placeholder.configure({
    // Use a placeholder:
    emptyEditorClass: "before:content-[attr(data-placeholder)] before:float-left text-uConnectLight-textSub dark:text-uConnectDark-layer3 before:h-0 before:pointer-events-none",
    placeholder: 'Content...',
    // Use different placeholders depending on the node type:
    // placeholder: ({ node }) => {
    //   if (node.type.name === 'heading') {
    //     return 'What’s the title?'
    //   }

    //   return 'Can you add some further context?'
    // },
  }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      HTMLAttributes: {
        class: 'list-disc pl-4 my-5 mr-4 ml-1.5'
      }
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      HTMLAttributes: {
        class: 'list-decimal pl-4 my-5 mr-4 ml-1.5'
      }
    },
  }),
  Link.configure({
    openOnClick: true,
    autolink: true,
    linkOnPaste: true,
    defaultProtocol: 'https',
    protocols: ['http', 'https'],
    isAllowedUri: (url, ctx) => {
      try {
        // construct URL
        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

        // use default validation
        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false
        }

        // disallowed protocols
        const disallowedProtocols = ['ftp', 'file', 'mailto']
        const protocol = parsedUrl.protocol.replace(':', '')

        if (disallowedProtocols.includes(protocol)) {
          return false
        }

        // only allow protocols specified in ctx.protocols
        const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

        if (!allowedProtocols.includes(protocol)) {
          return false
        }

        // disallowed domains
        const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
        const domain = parsedUrl.hostname

        if (disallowedDomains.includes(domain)) {
          return false
        }

        // all checks have passed
        return true
      } catch (error) {
        return false
      }
    },
    shouldAutoLink: url => {
      try {
        // construct URL
        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

        // only auto-link if the domain is not in the disallowed list
        const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
        const domain = parsedUrl.hostname

        return !disallowedDomains.includes(domain)
      } catch (error) {
        return false
      }
    },

  }),
]

const content = ``



export default function TipTap() {
  return (
    <div className = "dark:bg-uConnectDark-textBox  bg-uConnectLight-layer3 rounded-md dark:text-uConnectDark-textMain text-uConnectLight-textMain transition">
        <EditorProvider slotBefore={<div><MenuBar /><hr class="w-9/12 mx-auto bg-white border-1" /></div>} extensions={extensions} content={content}> </EditorProvider>
    </div>
  )
}