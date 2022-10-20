import { Box, IconButton } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { 
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    Favorite as FavoriteIcon
 } from "@material-ui/icons"
 

const styles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '5',
    listStyle: 'none',
    padding: '0 20px 0 20px'
}

export const PostActions = ({className}: any) => {
    return <div className={className}>
        <ul style={styles}>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <CommentsIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
        </ul>
    </div>
}