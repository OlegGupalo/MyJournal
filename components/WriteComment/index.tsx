import { Button, Input, TextField } from "@mui/material"
import { useState } from "react"
import styles from './WriteComment.module.scss'

export const WriteComment = () => {
    const [row, setRow] = useState(false)
    return (
        <div className={styles.form}>
            <Input 
                minRows={row ? 5 : 1}
                classes={{root: styles.comment}}
                multiline 
                fullWidth 
                onFocus={() => setRow(true)}
                placeholder='Комментарий'
            />
            {row && <Button variant='contained' className={styles.addButton}>
                Отправить
            </Button>}
        </div>
    )
}