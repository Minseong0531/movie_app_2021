# 연민성 201840216

[ 09월 15일 ]

## 세 번째 리액트 기초 개념: props
>컴포넌트에서 컴포넌트로 전달하는 데이터를 뜻함
>함수의 매개변수 역할을 하는 것

## 구조 분해 할당으로 props 사용해보기
>구조 분해 할당을 사용하면 점 연산자를 사용하지 않아도 된다.
>데이터의 개수가 많아질수록 구조 분할 할당을 사용하는 것이 편리
---javascript
import rReact from 'react';
function Food(props){
    {fav} = props;
    return <h1>I Like {fav}</h1>;
}

---

[ 09월 08일 ]
## 리액트 설치 명령어
>npx create-react-app movie_app_2021
## 실행
>npm start

## git 최초설정
>git config --global user.name "계정이름"

>git config --global user.email "github 이메일"

## React의 동작 원리
>index.js 파일을 리액트가 받아와서 해석한다. 해석하고 만든 결과물을 index.html에 끼워 넣는다.

## 첫 번째 리액트 기초 개념 : 컴포넌트, JSX
> 1. function으로 정의 내린 곳을 컴포넌트(component)라고 한다.
> 2. 리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성된다.
>   - <App /> -> render..
> 3. 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.
>   - 인접한 JSX요소는 반드시 하나의 태그로 감싸야 한다.
>   - 최종적으로 단 한개의 컴포넌트를 그려야 한다.
