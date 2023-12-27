import styles from './page.module.css'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
      애프터 로그인 레이아웃
      {children}
    </div>
  )
}
