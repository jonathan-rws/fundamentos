import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

export function Comment({comment, onDeleteComment}) {
  return (
    <div className={styles.comment}>
      <Avatar 
      src="https://github.com/jonathan-rws.png" 
      alt="" 
      hasBorder={false}
      />
      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <div>
                <strong>Jonathan Martins</strong><span>{' (você)'}</span>
              </div>
              <time
                dateTime="2022-08-18 08:13:30"
                title='18 de Agosto às 8:13h'
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={()=>onDeleteComment(comment.id)} title='Deletar Comentário'><Trash size={24} /></button>
          </header>
          <p>{comment.comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}