"use client";

import style from '../search.module.css';
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent('hot');
    // 검색 탭에서 'use client에서 제공하는 searchParams.get을 통해 q에대한 쿼리스트링 가져오기
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrent('new');
    // 검색 탭에서 현제 주소에 있는 값을 다 사용하며 &f=live 추가
    router.replace(`/search?${searchParams.toString()}&f=live`)
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  );
}