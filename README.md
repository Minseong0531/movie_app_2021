# 연민성 201840216

[ 10월 6일]
## axios 설치하기
>자바스크립트에서는 데이터를 로딩 할 때 fetch()함수를 사용한다.
>하지만 이 시간은 자바스크립트의 시간이 아니여서 그 대신 axios를 사용한다.
>터미널에서 >npm install axios

## 데이터 API
>API는 특정 주소를 입력하면 그 주소에 맞는 결과를 보내준다. ( 조건도 붙일 수 있도록 제공.)

## JSON Viewer 확장 도구 설치
> 크롬 웹스토어에서 검색하고 설치를 진행하면 정상적으로 볼 수 있다.

## axios의 동작 여부 확인 방법
> network탭을 열고 브라우저 새로고침을 한다.
> name이라는 항목에 list_파일이름.json 이라고 나온 부분이 바로 axios가 api를 호출해서 발생한 것이다.




[ 09월 29일]

## prop-type 설치하기

>터미널에서 다음 명령을 입력해서 prop-types를 설치 해보기.
>npm install prop-types

## 정상 설치 여부 확인 방법

>Package.json 파일을 열어 dependencies 키에 있는 값을 살펴보자.
>Prop-types가 등록되어 있으면 설치가 정상적으로 된 것이다.

## Prop-types는?
> 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.

>prop-types를 통해 미리 특정 컴포넌트는 반드시 picure props가 전달되야 한다고 정의 할 수 있다.

## state로 숫자 증감 기능 만들어 보기.

>props는 정적인 데이터만 다룰 수 있다.
>state는 반대로 동적인 데이터를 다루기 위해 사용된다.
>state는 클래스형 컴포넌트에서 사용된다.

## 클래스형 컴포넌트 작성하기
## App클래스가 React.Component 클래스를 상속받도록 하기.


[ 09월 15일 ]

## 세 번째 리액트 기초 개념: props
>컴포넌트에서 컴포넌트로 전달하는 데이터를 뜻함
>함수의 매개변수 역할을 하는 것

## 구조 분해 할당으로 props 사용해보기
>구조 분해 할당을 사용하면 점 연산자를 사용하지 않아도 된다.
>데이터의 개수가 많아질수록 구조 분할 할당을 사용하는 것이 편리
```javascript
import rReact from 'react';
function Food(props){
    {fav} = props;
    return <h1>I Like {fav}</h1>;
}
```


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
