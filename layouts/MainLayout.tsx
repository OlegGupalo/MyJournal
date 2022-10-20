import clsx from "clsx"
import React, { ReactNode } from "react"
import { CommentSide } from "../components/CommentSide/CommentSide"
import Header from "../components/Header"
import { LeftMenu } from "../components/LeftMenu/LeftMenu"
import styles from './Layouts.module.css'

interface MainLayoutProps {
    children?: ReactNode, 
    hideMenu?: boolean,
    hideComments?: boolean,
    contentFullWith?: boolean,
    className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    hideMenu,
    contentFullWith,
    hideComments,
    className
}) => {
    return (
        <div className={styles.container}>
            {!hideMenu && 
                <div className="leftSide">
                    <LeftMenu />
                </div>
            }
            <div>{children}</div>
            <div>
                {!hideComments && 
                    <div>
                        <CommentSide />
                    </div>
                }
            </div>
        </div>
    )
}