## npxt create-next-app@latest 시import alias 란?

- import alias를 커스터마이징 할거냐?라는 질문은 import시에 '@' 사용하여 루트를 표시하기할 수있게 (../app/~ -> @/app/~)
  하는 import문을 ~표시나 다른표기로 커스터마이징할건지 물어보는 질문이다.

## 디렉토리(afterLogin),소괄호 기능

- 주소창에 관여를 안하지만 그룹을 만들 수 있음
- 폴더 주고가 app/(afterLogin)/home 이어도
  브라우저에서는 /home으로 주소가 나온다.

  ## next template 기능

  - 매번 새롭게 마운트되는 기능?

  ## next Image 컴포넌트

  - next 지원하는 Image 기능은 알아서 최적화를 진행해준다. -https://nextjs.org/docs/app/building-your-application/optimizing/images

## CSS.moudle 사용이유?

- css module : 같은 클래스더라도 다른 모듈 파일에 있다면 브라우저상 css모듈이 무작위문자로 바꿔서 클래스를 바꿔줌
- Emotion : next13과 연동안됨
- Styled Component : Server Component SSR(서버컴포넌트와 문제가 있음)
- vanilla extract : 새롭게 나온 css 라이브러리로 SSR 문제를 해결하였지만 Windows와 문제가 있음
- sass, tailwind : 호불호 및 가독성

## parallel Rotues, Intercepting Routes 모달 구현

- parallel rotue는 같은 폴더 디렉토리, 위치에
  있다면 주소는 디렉토리를 파일 경로를 따른다.
  @modal폴더 안의 page.tsx를 통해 모달 컴포넌트의 로직 구현 후
  @modal 폴더 경로와 같은위치에 layout.tsx 컴포넌트를 작성하여
  해당 경로에서 modal 컴포넌트를 import 하여 children처럼 사용하다면
  @modal 안에 있는 page.tsx 컴포넌트를 가져온다 경로는 layout 경로를 따름
- Intercepting Routes 기능은 서로 다른 경로, 즉 주소가 다른지만
  바로 위에서 서로 다른 주소에 있는 컴포넌트를 렌더링할 수 있는 기능
- 이 두가지 기능을 통해 모달을 구현 가능
  폴더의 경로가 다른 두 컴포넌트를 이어주는 것
  parallel route가 컴포넌트를 Intercepting 했다.

## \_폴더이름 private 폴더 next13부터

- 폴더 이름의 \_(언더바) 를 붙이면 route 기능은 없는 private 폴더가 생성됨!

## next 에서 제공하는 컴포넌트는 서버 컴포넌트

- next에서 'use client'를 사용하지 않았다면 서버 컴포넌트로 동작한다
  async 등 비동기 컴포넌트로 구현가능
- 서버 컴포넌트는 데이터를 다룰때 사용?

## default.tsx에는 parallel Routes가 필요없을때?

- next에서는 paller Route 기능에 대한 기본적인 컴포넌트를 작성해야한다? page.tsx or default.tsx
- default.tsx가 제공하는 기능은 parellet Route기능이 필요가없거나 사용하지 않을 때 작성한다? return null 값으로 컴포넌트작성?
- 주소가 localhost:3000 일 때는 children -> page.tsx, modal=>@modal/default.tsx
  해당 default.tsx를 작성하지않았다면 404 에러가 발생했다.
- 주소가 localhost:3000/i/flow/login 일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx

## next/navigation에 route.push 와 router.replace

- router.push는 localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
  와 같은 폴더 구조이고 login으로 이동시 rotue.push가 진행되어 i/flow/login으로 route가 된다면
  해당 i/flow/login애서 뒤로가기시 다시 login주소로 돌아옹면서 또 router.push가 진행되는 오류가 생긴다.

- router.replace는 localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
  와 같은 폴더 구조이고 login으로 이동시 router.replace가 진행되어 i/flow/login으로 route가 된다면
  기존 localhost:3000/login 주소를 히스토리(기억)에서 지워버린다. 그러므로 localhost:3000/i/flow/login에서 뒤로가기시 localhost:3000/ 으로 이동하게됨

  ## useSelectedLayoutSegment next에서 지원해주는 경로 추출 방법
  -     localhost://3000/home 경로에 잇다면 home을 추출
        현재 layout 경로에있는 폴더 경로들을 추출해 주는 것!
        /home/content 경로라면 home만 나오게 됨
  ## useSelectedLayoutSegments 로 모든 경로 추출
  -      layout 구조와 아래에 있는 모든 폴더 경로들을 추출!
         home/content 라면 ['home', 'content'] 가 나옴!
  
## classnames 로 조건부 스타일링 주기

-         const commented = false; 
          const reposted = false;
          const liked = false; 
          * componentButton의 스타일 지정되며 commented 가 true라면 commented 스타일도 함께 지정됨!
          <div className={cx(style.componentButton, commented && style.commented)}><div>
          <div className={cx(style.repostButton, reposted && style.reposted)}></div>
          <div className={cx([style.hearButton, liked && style.liked])}></div>
          
