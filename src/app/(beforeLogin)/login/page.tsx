'use client'
import { useRouter } from "next/navigation"
import styles from '../../page.module.css'
import Link from "next/link";
import Image from 'next/image';
import zLogo from '../../../../public/zlogo.png';

// import { redirect } from "next/navigation"

//서버에서 redirect 시키기
//intercepting route 기능이 서버에서는 제대로 동작하지 않음?
//그렇기때문에 client 컴포넌트로 바꿔줘야함
export default function Loign() {
    // redirect('/i/flow/login');  서버에서 리다이렉트
    const router = useRouter(); // client에서 리다이렉트
    router.replace('/i/flow/login');
    return (
        <>
        <div className={styles.left}> 
            <Image src={zLogo} alt="logo"/>
        </div>
        <div className={styles.right}>
          <h1>지금 일어나고있는 일</h1>
          <h2>지금 가입하세요.</h2>
          <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link href="/login" className={styles.login}>로그인</Link>
        </div>
      </>
    );
}
