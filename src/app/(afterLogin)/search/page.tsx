import style from './search.module.css';
import BackButton from '../_components/BackButton';
import SearchForm from '../_components/SearchForm';
import Tab from './_component/Tab';
import Post from '../_components/Post';

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}
export default function Search({ searchParams }: Props) {
  // 검색어 페이지 검색을 통한 url이 변경될때 쿼리스트링값들은 
  // searchParams라는 props안에 들어있다
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton/>
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab/>
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  )
}