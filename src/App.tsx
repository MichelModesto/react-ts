import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



//author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts: PostType [] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQGzk-aHIn_AKw/profile-displayphoto-shrink_800_800/0/1694009510261?e=1728518400&v=beta&t=68yysRYDA62tVVkp7cVUlgu84RkKfzpMxkbK81Xs1Tc",
      name: 'Michel Modesto',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW   Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'omodesto.webdeveloper/doctorcare'},
    ],
    publishedAt: new Date('2024-08-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFIzLtnZEuq9A/profile-displayphoto-shrink_800_800/0/1695442047367?e=1728518400&v=beta&t=cH-bmXQBw9tLtgkFxZnGfatHbyC4ux2329DGOttjGe4",
      name: 'Guilherme Paiva',
      role: 'Design',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW   Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: 'paivinha.design/doctorcare'},
   
    ],
    publishedAt: new Date('2024-09-01 23:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            )
          })}

        </main>
      </div>
    </div>
  )
}


