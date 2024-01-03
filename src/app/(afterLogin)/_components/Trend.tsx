import Link from 'next/link';
import style from './trend.module.css';
const Trend = () => {
  return (
    <Link href={'/search?q=트렌드'} className={style.container}>
        <div className={style.count}>실시간 트랜드</div>
        <div className={style.title}>제로초</div>
        <div className={style.count}>1.234</div>
    </Link>
  )
}

export default Trend