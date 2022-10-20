import {Input, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useCallback, useRef, useState } from "react";
import styles from './WriteForm.module.scss'

import ReactEditor from '../Editor.jsx'

import EditorJS from "@editorjs/editorjs";
import { Button } from "@material-ui/core";
import { Api } from "../../utils/api";

interface WriteFormProps {
    data?: string;
}

const Editor = dynamic(() => import('../Editor'), {ssr: false})
console.log(Editor)


export const WriteForm: React.FC<WriteFormProps> = ({data}) => {
    const [title, setTitle] = useState('')
    const [blocks, setBlocks] = useState([])

    const fileRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const onSubmitForm = async () => {
        let description = 'test'
        const post = await Api().post.create({
            title,
            body: blocks
        })
    }

    const onSubmited = useCallback((e) => {
        const fetchData = (uint8Array) => {
                const response = {...uint8Array}
                console.log(response)                
            
        }


        if(!fileRef.current) return void null

        const reader = new FileReader()
        reader.onloadend = () => {
            const uint8Array = new Uint8Array(reader.result)
            fetchData(uint8Array)
        }

        reader.readAsArrayBuffer(fileRef.current[0]);

    }, [])

    console.log(blocks)
    return (<>
        <div style={{backgroundColor: '#fff', margin: 'auto'}} className={styles.boxForm}>
            <Input 
                classes={{root: styles.titleField}} 
                value={title}
                onChange={e => setTitle(e.target.value)}
                fullWidth 
                placeholder='Заголовокв' 
                defaultValue={title}
            />
            
        </div>
        <div className={styles.boxForm}>
            <Editor onChange={arr => setBlocks(arr)} />
        </div>
        <div className={styles.boxForm}>
            <Button onClick={onSubmitForm} variant="outlined" className={styles.button}>Отправить</Button>
        </div>
        {/* <form onSubmit={onSubmited}>
            <input 
                onChange={e => fileRef.current = e.target.files}
                type='file'
                accept="image/*"
            />
            <Button type="button" className={styles.button}>Сохранить картинку</Button>
        </form>
        <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" /> */}
        </>
        )
}