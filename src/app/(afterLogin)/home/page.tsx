import Post from '../_components/Post'
import Tab from './_components/Tab'
import style from './home.module.css'
import TabProvider from './_components/TabProvider'
import PostForm from './_components/PostForm'

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab/>
        <PostForm/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </TabProvider>
    </main>
  )
}
