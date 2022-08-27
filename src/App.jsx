import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
import "./global.css"

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'http://github.com/jonathan-rws.png',
      name: 'Jonathan Martins',
      role: 'Web Development Student'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content:'#novoprojeto'},
      {type: 'link', content:'#nlw'},
      {type: 'link', content:'#rocketseat'},
    ],
    publishedAt: new Date('2022-08-03 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'http://github.com/rocketseat.png',
      name: 'RocketSeat',
      role: 'Developement School'
    },
    content: [
      {type: 'paragraph', content:'Fala deeev 👋' },
      {type: 'paragraph', content:'Vamos desenvolver uma aplicação web completa juntos? Um projeto todo responsivo e com as ferramentas mais requisitadas pelas grander empresas.' },
      {type: 'link', content:'#react'},
      {type: 'link', content:'#vite'},
      {type: 'link', content:'#foguetenaotemre'},
    ],
    publishedAt: new Date('2022-08-15 20:00:00')
  },
]

export function App() {
  return (
   <>
    <Header/>
    <div className={styles.wrapper} >
      <Sidebar/>
      <main>

      {
        posts.map(post =>{
          return(
            <Post
              key={post.id}
              author= {post.author}
              content= {post.content}
              publishedAt = {post.publishedAt}
            />
          )
        })
      }


      </main>
    </div>

   </>

  )
} 