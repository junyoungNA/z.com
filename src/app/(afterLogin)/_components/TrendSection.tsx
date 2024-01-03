import Trend from './Trend';
import style from './trendSection.module.css';

const TrendSection = () => {
  return (
    <div className={style.trendBig}>
        <div className={style.trend}>
            <Trend/>
            <Trend/>
            <Trend/>
            <Trend/>
            <Trend/>
        </div>
    </div>
  )
}

export default TrendSection