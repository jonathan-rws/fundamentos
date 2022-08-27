import { useState } from 'react'
import { v4 } from 'uuid'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './styles.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [newComment, setNewComment] = useState('')

  const [comments, setComments] = useState([])

  function handleCreateNewComment(e) {
    e.preventDefault()
    setComments([{ id: v4(), comment: newComment }, ...comments])
    setNewComment('')
  }

  function handleDeleteComment(id) {
    const data = comments.filter(comment => {
      return (
        comment.id !== id
      )
    })
    setComments(data)
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Se liga nesse campo aqui!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.profileInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormated}
        >Publicado {publishedDateRelative}</time>
      </header>
      <div className={styles.content}>
        {
          content.map((content) => {
            if (content.type == 'paragraph') {
              return (
                <p
                  key={content.content}
                >{content.content}</p>
              )
            } else if (content.type == 'link') {
              return (
                <a
                  key={content.content}
                  href='#'>{content.content}</a>
              )
            }

          })
        }
      </div>

      <form
        className={styles.comentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value)
            e.target.setCustomValidity('')
          }}
          placeholder='Deixe um comentário...'
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>

          <button type='submit' disabled={newComment.length == 0} >Puvlicar</button>
        </footer>
      </form>

      <div className={styles.commentlist}>

        {comments.map(comment => {
          return (
            <Comment
              onDeleteComment={handleDeleteComment}
              key={comment.id}
              comment={comment}
            />
          )
        })}


      </div>
    </article>
  )
}
