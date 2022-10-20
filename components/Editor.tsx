import ReactDOM from "react-dom";
import React, { Component, useEffect, useRef, useState } from "react";
import List from '@editorjs/list'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import { createReactEditorJS } from "react-editor-js";
import EditorJS, {OutputData} from '@editorjs/editorjs'
import styles from './WriteForm/WriteForm.module.scss'
import { CodeSharp } from "@material-ui/icons";

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void
}

const Editor: React.FC<EditorProps> = ({onChange}) => {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    setEditor((prevEditor) => {
      if (!prevEditor) {
        const editor = new EditorJS({
          holder: 'editor',
          placeholder: 'Ваш текст',
          tools: {
            image: {
              class: ImageTool,

            }
          },
          async onChange() {
            const {blocks} = await editor.save()
            onChange(blocks)
          }
        });
        return editor
      }
      return null;
    });
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);
    
  
    return <>
      <div id="editor" />
    </>
}

export default Editor