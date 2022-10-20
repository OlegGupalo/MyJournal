import { Button, IconButton } from "@material-ui/core";
import { 
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingDownOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
    Menu as MenuIcon
} from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from './LeftMenu.module.scss'

const menu = [
    {text: 'Лента', icon: <FireIcon />, path: '/'},
    {text: 'Сообщения', icon: <MessageIcon />, path: '/message'},
    {text: 'Рейтинг', icon: <TrendingIcon />, path: '/rating'},
    {text: 'Подписки', icon: <ListIcon />, path: '/follows'},
]

export const LeftMenu: React.FC = () => {
    const router = useRouter()
    return(
        <div className={styles.menu}>
            <ul>
                {menu.map(obj => 
                    <li className={styles.menuItem} key={obj.path}>
                        <Link href={obj.path}>
                            <Button className={styles.btn} variant={router.asPath === obj.path ? 'contained' : 'text'}>
                                {obj.icon}
                                {obj.text}
                            </Button>
                        </Link>
                    </li>    
                )}
            </ul>
        </div>
    )
}