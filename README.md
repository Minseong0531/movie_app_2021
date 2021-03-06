# 연민성 201840216
[ 12월 8일]

논리 && 연산자로 If를 인라인으로 표현하기
JSX 안에는 중괄호를 이용해서 표현식을 포함 할 수 있다. 그 안에 JavaScript의 논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있다.
```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```


JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됨.

따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됨 조건이 false라면 React는 무시하고 건너뜀.

falsy 표현식을 반환하면 여전히 && 뒤에 있는 표현식은 건너뛰지만 falsy 표현식이 반환된다는 것에 주의, 아래 예시에서, <div>0</div>이 render 메서드에서 반환
```javascript
render() {
  const count = 0;
  return (
    <div>
      { count && <h1>Messages: {count}</h1>}
    </div>
  );
}
````
## 조건부 연산자로 If-Else구문 인라인으로 표현하기
엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 condition ? true: false를 사용하는 것.


```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

```
## 가독성은 좀 떨어지지만, 더 큰 표현식에도 이 구문을 사용
```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```


## 컴포넌트가 렌더링하는 것을 막기
가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있을 수 있다. 이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있다.



[ 12월 1일]
>React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작.

```javascript

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```
이제 사용자의 로그인 상태에 맞게 위 컴포넌트 중 하나를 보여주는 Greeting 컴포넌트를 만듬
```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
CodePen에서 실행하기

## 엘리먼트 변수
>엘리먼트를 저장하기 위해 변수를 사용할 수 있음. 출력의 >다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 >렌더링 할 수 있다.

## 로그아웃과 로그인 버튼을 나타내는 두 컴포넌트가 있다고 가정
```javascript
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```


>이 컴포넌트는 현재 상태에 맞게 <LoginButton />이나 <LogoutButton />을 렌더링, 이전 예시에서의 <Greeting />도 함께 렌더링한다.
```javascript
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

[ 11월 24일]
## 배포. github pages deployPermalink
1. `npm i gh-pages`

2. packages.json에 “homepage” : “유저명.github.io/프로젝트명/” 추가
맨 뒤에 ‘/’ 필수

3. `npm run build`

4. packages.json의 “scripts”에서 “deploy” : ”gh-pages -d build” 추가. “predeploy” : “npm run build”도 추가.
npm run build를 입력하면 자동으로, predeploy도 실행될 것

## 라우팅Permalink
# 라우팅 세팅을 하기 위한 사전 설정 

1. react-route-dom : 네비게이션을 만들어주는 패키지

2. routes, components 디렉토리를 추가해줌.

3. components에 만들었던 Movie.css, Movie.js 파일 넣기

4. routes 폴더에 About.js Home.js 추가하고, App.js의 코드들을 Home.js에 복사. App.js 의 초기화면을 Home.js에 세팅할 것이기 때문

# App.js에 라우트 생성해주기 

1. 한 개의 prop : 렌더링할 스크린, 한 개의 prop 뭘할지 정해줌.

```javascript
<HashRouter>
  <Route path="/" exact={true} component={Home} />
  <Route path="/about" component={About} />
</HashRouter>
```
> path를 통해서 경로 세팅, component를 통해서 렌더링할 컴포넌트를 전달.

2. 리액트 라우터는 url을 가져와서 비교하고, match가 되면 보여준다. exact={true}를 설정해주지 않으면, `/`가 라우트로 여겨지고, `/`도 그리고 `about`도 그리게 되며, 동시에 두개를 렌더링하는 결과를 보여주게 된다. 이것에 대한 해결책은 `exact=true`를 전달해주는 것이다. url이 `/`때만 정확하게 home을 렌더링 해주고, `/something~~`인 url이라면 무시하게 된다. exact는 정확하게 이 URL이 아니면 렌더링을 해주지 않는다를 의미한다.

# 네비게이션 만들기 

1. 단순하게 navigation을 ‘a’ 태그로 설정하면, 작동을하지 않는다. => html은 전체 페이지를 새로고침 시켜버리기 때문이다. => (sol) link를 import하자

2. Navigation.js 파일에서 Navigation을 link component를 이용해서 만든다.

```javascript
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```
3. 알아두어야할 점

- Navigation은 Router의 안에 존재해야 한다. Navigation 내의 Link 컴포넌트가 라우터 안에 존재해야 하기 때문이다.
- HashRouter 대신, Browserrouter는 ‘#’같은 것이 없다. 즉, BrowserRouter를 사용해도 무방하다. 하지만, github Pages에서 설정하는 것이 어렵기 때문에 현 프로젝트에서는 HashRouter를 사용한다.

# About 페이지, Movie 추가 페이지 만들기 - route props에 대해서

>- route를 거치면, props에 history, location과 같은 기본적인 props가 세팅되어서 컴포넌트 간 이동된다.

>- MovieDetail.js 파일을 만든다.

>- 라우터 설정에서, Home 컴포넌트에서 -> MovieDetail 컴포넌트로 이동할 때, url로 movie id값도 같이 보낼 수 있도록 설정한다.

>- Link 컴포넌트를 이용해서, 값을 던질 때, state : { 던질 변수들 } 을 세팅해서 보내준다.

```javascript
//App.js 파일

<Routepath=“/movie/:id“component={MovieDetail}/>
```
# MovieDetail 페이지 수정 
>- Detail Page를 Material UI를 이용해서 표로 생성하였다.

>- 추가적으로 Button을 구성하고, 뒤로 가기와 상세검색하기 버튼을 만들었다.

>- 상세검색하기는 다음과 같이 구성하였다.

(1) MovieDetail.js에서 RedirectPage.js로 이동할 때, url에 파라미터로 title을 달고, 페이지 이동하도록 하였다.

(2) RedirectPage.js의 componentDidMount에서 window.open을 호출한 후에, 상세검색 결과로 이동할 수 있도록 하였다. 이 때, 상세검색은 새 탭으로 이동할 수 있도록 하였다.

>설정을 해주기 위해서, Router 설정 js 파일에서, Route의 path를 새로 추가해주었다.
```javascript
<Route path=”/search/:title” component={RedirectPage} />
```
>render에서는 alert창을 띄워주고, 리다이렉션 후, 남은 페이지에 `홈으로 이동` 버튼과 영화의 제목이 표출될 수 있도록 구현하였다.

[ 11월 17일]

## React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사합니다. 몇 가지 문법 차이는 다음과 같다.

>React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용
>JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달

```javascript
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
>React에서는 약간 다름

```javascript
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
또 다른 차이점으로, React에서는 false를 반환해도 기본 동작을 방지할 수 없습니다. 반드시 preventDefault를 명시적으로 호출해야 합니다. 예를 들어, 일반 HTML에서 폼을 제출할 때 가지고 있는 기본 동작을 방지하기 위해 다음과 같은 코드를 작성할 수 있다.

```javascript
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

```javascript
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
>React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없다. 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됨

>ES6 클래스를 사용하여 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것입니다. 예를 들어, 다음 Toggle 컴포넌트는 사용자가 “ON”과 “OFF” 상태를 토글 할 수 있는 버튼을 렌더링합니다.
```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

```
# CodePen에서 실행하기

>JSX 콜백 안에서 this의 의미에 대해 주의해야 합니다. JavaScript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않습니다. this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다.

>이는 React만의 특수한 동작이 아니며, JavaScript에서 함수가 작동하는 방식의 일부입니다. 일반적으로 onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 합니다.

>bind를 호출하는 것이 불편하다면, 이를 해결할 수 있는 두 가지 방법이 있습니다. 실험적인 퍼블릭 클래스 필드 문법을 사용하고 있다면, 클래스 필드를 사용하여 콜백을 올바르게 바인딩할 수 있습니다.

```javascript
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
Create React App에서는 이 문법이 기본적으로 설정되어 있습니다.

클래스 필드 문법을 사용하고 있지 않다면, 콜백에 화살표 함수를 사용하는 방법도 있습니다.
```javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

## 이벤트 핸들러에 인자 전달하기
> 루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적 예를 들어, id가 행의 ID일 경우 다음 코드가 모두 작동

```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

>두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달 
>화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달

[ 11월 10일 ]
## 함수 컴포넌트와 클래스 컴포넌트
>컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것입니다.
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
이 함수는 데이터를 가진 하나의 “props” (props는 속성을 나타내는 데이터입니다) 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트입니다. 이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 “함수 컴포넌트”라고 호칭합니다.

또한 ES6 class를 사용하여 컴포넌트를 정의할 수 있습니다.

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

>React의 관점에서 볼 때 위 두 가지 유형의 컴포넌트는 동일합니다.

>class는 몇 가지 추가 기능이 있으며 이에 대해서는 다음 장에서 설명합니다. 그때까지는 간결성을 위해 함수 컴포넌트를 사용하겠습니다. 함수 컴포넌트와 클래스 컴포넌트 둘 다 몇 가지 추가 기능이 있으며 이에 대해서는 다음 장에서 설명합니다.

## 컴포넌트 렌더링
>이전까지는 DOM 태그만을 사용해 React 엘리먼트를 나타냈습니다.

>const element = <div />;
>React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있습니다.

>const element = <Welcome name="Sara" />;
>React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달합니다. 이 객체를 “props”라고 합니다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```


><Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출합니다.
>React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출합니다.
>Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환합니다.
>React DOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트합니다.
>컴포넌트의 이름은 항상 대문자로 시작합니다.

>React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리합니다. 예를 들어 <div />는 HTML div 태그를 나타내지만, <Welcome />은 컴포넌트를 나타내며 범위 안에 Welcome이 있어야 합니다.



## 컴포넌트 합성
>컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있습니다. 이는 모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미합니다. React 앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 흔히 컴포넌트로 표현됩니다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


>일반적으로 새 React 앱은 최상위에 단일 App 컴포넌트를 가지고 있습니다. 하지만 기존 앱에 React를 통합하는 경우에는 Button과 같은 작은 컴포넌트부터 시작해서 뷰 계층의 상단으로 올라가면서 점진적으로 작업해야 할 수 있습니다.

## 컴포넌트 추출
```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

이 컴포넌트는 author(객체), text(문자열) 및 date(날짜)를 props로 받은 후 소셜 미디어 웹 사이트의 코멘트를 나타냅니다.

이 컴포넌트는 구성요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어려울 수 있으며, 각 구성요소를 개별적으로 재사용하기도 힘듭니다. 이 컴포넌트에서 몇 가지 컴포넌트를 추출하겠습니다.

```javascript

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```
Avatar 는 자신이 Comment 내에서 렌더링 된다는 것을 알 필요가 없습니다. 따라서 props의 이름을 author에서 더욱 일반화된 user로 변경하였습니다.

props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장합니다.

이제 Comment 가 살짝 단순해졌습니다.

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

다음으로 Avatar 옆에 사용자의 이름을 렌더링하는 UserInfo 컴포넌트를 추출
```javascript
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

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

맨위로

