import { ThumbsUp, Trash } from 'phosphor-react';
import{useState} from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState (0);

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handleLikeComment () {
           setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C5603AQH4aznzuUolkA/profile-displayphoto-shrink_800_800/0/1651620196655?e=1729123200&v=beta&t=Rt9Amt36wVFeigYBqLCcygvxDfkHrCzq4yxSJBjQGHk" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Paveliski Maranini</strong>
                            <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>


                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}