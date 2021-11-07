# 연민성 201840216
[ 11월 3일]

## Navigation 컴포넌트 만들기
>home과 about이라는 2개의 버튼을 만들고 각각 벙튼을 눌렀을 때 해당 화면이 보이도록 설정
>먼저 components폴더에 Navigation.js파일을 만들고 2개의 태그를 반환하도록 작성

## 네비게이션 컴포넌트 앱 컴포넌트에 포함시키기
>App컴포넌트에 Navigation을 임포트 시키고, <HashRoute>에서 불러오게 한다.
>앱을 실행하면 Navigation이 출력되는 것을 확인할 수 있다.

## Home 링크 눌러 보기
>Home링크를 눌러본다.
>react-router-dom의 Link컴포넌트를 사용하면 된다.

## a 태그 Link 컴포넌트로 바꾸기
>Navigation 컴포넌트에 Link 컴포넌트를 import하고 a 태그를 Link 컴포넌트로 바꾼다.

>href속성은 to로 수정

>앱을 실행하고 링크를 클릭해 본다. 페이지 전체 고칠 문제가 해결된 것을 확인 가능

## Navigation 컴포넌트 위치 다시 확인하기
>Link, Router 컴포넌트는 반드시 HashRouter안에 포함되어야 한다.

## 디테일 컴포넌트 만들기
>Detail 컴포넌트를 routes폴더에 추가한다.
>Detail 컴포넌트에서 Movie컴포넌트의 Link 컴포넌트가 보내준 영화 데이터를 확인할 수 있도록 콘솔을 작성한다

## Movie 컴포넌트에 Link 컴포넌트와 Route컴포넌트 추가하기




[ 10월 27일]
## 1. react-router-dom 설치하기
>명령어
>npm install react-router-dom

## 2. 컴포넌트 폴더에 Movie 컴포넌트 옮기기

## 3. routes 폴더에 라우터가 보여줄 화면 만들기
>routes 폴더를 만들고 홈.js와 어바웃.js파일을 생성한다.

## 4. home.js 수정
> app.js내용을 Home.js로 복사하고 컴포넌트 이름을 홈으로 수정한다.

## About.hs 내용 ex)

```javascript
    function About(props) {
        consele.log(props);
        return(
            <div className="about-container">
            <span>
            내용
            </span>
            <span>- 내용2</span>
            </div>
        )
    }

    export default About
```
>내용은 이 곳에 앱의 설명이나 자기 소개 등으로 채워 넣기.
>라우터 테스트는 localhost:300/#에 path props로 전달했던 값 /about을 붙여 다시 접속한다.

## 홈 컴포넌트를 위한 라우트 컴포넌트 추가하기

```javascript

function App() {
        return(
            <HashRouter>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            </HashRouter>
        )
    }

export default App
```
>"/"으로 입력한 이유는 로컬호스트:3000에 접속하면 기본으로 보여줄 컴포넌트를 홈 컴포넌트로 하기 위해서이다.

[ 10월 13일]
## 무비 컴포넌트 만들기

>컴포넌트의 기본 골격을 작성한다.
```javascript
import PropTypes from 'prop-types';

function Movie() {
    return <h1></h1>;
}

Movie.propTypes = {};

export defalut Movie;
```
M>ovie에 넘어와야 하는 영화 데이터를 정의하고, 관리하기 위해 prop-types을 사용.

>무비 컴포넌트는 state가 필요x 클래스형 컴포넌트가 아닌 함수형으로 작성

>list_movies.json을 접속해서 데이터를 확인

## 무비 프롭 타입 작성

>id를 Movie.propTypes 추가
>id의 자료형은 Number, 반드시 있어야 한다.

```javascript
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired
};

```
>poster props는 영화 포스터 이미지 주소를 저장하기 위한 것

## 무비 컴포넌트에서 props를 추가하고 출력해보기
> Movie 컴포넌트에서 id,title,year,summary,poster props를 받아 출력할 수 있도록 수정하기

>App 컴포넌트에서 Movie컴포넌트를 그릴 때 title만 우선 출력하도록 설정

```javascript
function Movie({id,title,year,summary,poster}){
    return <h4>{title}</h4>;
}
```

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
