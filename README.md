# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

## 김수빈

1년차 프론트엔드 개발자로 개발 스킬을 증진시키고 취업을 목표로 공부하고 싶어 프리온보딩 코스에 참가신청을 합니다.

## 배포

<a href="https://soob1008.github.io/wanted-pre-onboarding-fe/" target="_blank">과제 배포 페이지</a>

**메인화면 - 로컬스토리지 이메일 없으면 로그인 창으로 이동하도록 처리**

# :: 과제

---

icon : react-icons 사용  
로컬 스토리지에 이메일이 저장되어 있지 않을 경우 alert 창이 뜨고
로그인 화면으로 이동되도록 처리

## 파일 구조

> /assets - 이미지  
> /components/base - 공통 컴포넌트 폴더  
> /components/feed - 피드 관련 컴포넌트 폴더  
> /components/member - 로그인 컴포넌트 폴더  
> /pages - 페이지 파일이 있는 폴더  
> /styles - css/scss 파일이 있는 폴더

## Assignment 1 - `Login`

> 로그인 컴포넌트
> 로그인 페이지와 폼 컴포넌트로 구성
> /page/Login.jsx
> /components/LoginForm.jsx

- 닉네임, 이메일, 비밀번호를 입력 받아 로그인합니다. 닉네임은 피드의 댓글 입력 시 아이디로 사용하기 위해 input 추가하였습니다.
- 반응형 적용하지 않아도 괜찮다고 하여 css px 단위로 작업

```js
const inputId = useRef();
const idCurrent = inputId.current.value;

<input type="text" name="user" ref={inputId} />;
```

useRef: DOM 요소에 접근하기 위해 사용되는 hook  
useRef를 통해 현재 입력 값을 받아와서 로컬 스토리지에 저장해줍니다.

```js
//로컬 스토리지 값 받아오기
localStorage.getItem("user", user);
//로컬 스토리지 값 넣기
localStorage.setItem("user", user);
```

## Assignment2 - `GNB`

- position: sticky 속성을 사용하여 gnb 구현했습니다.

## Assignment3 - `Validation`

- 이메일, 비밀번호 정규표현식을 사용하였고 비밀번호의 경우에는 소문자는 상관없이 대문자, 숫자 특수문자가 반드시 포함되도록 했습니다.
- 이메일과 비밀번호가 로컬스토리지에 등록된 값과 동일하면 alert이 뜹니다.
- onChange 이벤트로 error 클래스를 추가하여 input 에러 구분

```js
<input
  type="text"
  name="user"
  ref={inputId}
  onChange={onChangeHandler}
  placeholder="닉네임"
  className={(statusId ? "" : "error") + " w100"}
/>
```

유효성 검사 후 상태값에 따라 error 클래스로 border를 추가하였습니다. 인풋에 입력하면 onChangeHandler가 실행됩니다. 닉네임 칸이 비워져있거나 이메일, 비밀번호 유효성 검사를 통과하지 못했을 경우 해당 인풋에 레드라인이 보이고 버튼이 비활성화됩니다. 모든 조건을 만족할 경우 버튼이 활성화됩니다. 값은 ref의 current.value로 받아옵니다.
onSubmitHandler 함수는 로컬스토리지에 담긴 값이 입력한 값과 같은지 검사하고 같으면 alert창을 띄워주고 다르면 값을 넣어줍니다.

## Assignment4 - `Routing`

- useNavigate를 사용하여 이동되도록 구현했습니다.

react-dom-router v6부터는 useHistory()에서 useNavigate()로 변경되었습니다.

```js
const navigate = useNavigate();

navigate("/login");
```

헤더에 logout 버튼을 누르면 onLogout이 실행됩니다.

```js
//로컬 스토리지 user 삭제
localStorage.removeItem("user");
```

## Assignment5 - `Feeds`

- public/data/feedData.json 파일에 데이터 작성했습니다.
- Feeds 컴포넌트는 피드 전체를 감싸는 컴포넌트입니다.
- Feed 컴포넌트는 피드 아이템 컴포넌트 입니다. (반복문으로 돌려줌)
- 이미지는 기재되어 있는 링크 사용하였습니다.

Home.jsx에 axios로 값을 받아 Feeds로 넘겨줍니다.
Feeds에서는 데이터에 들어있는 feed 개수 만큼 반복문을 돌려줍니다.
Feed 컴포넌트는 하나의 아이템 컴포넌트입니다.(반복문으로 돌려준 컴포넌트)

#### 이미지 로딩

이미지가 로딩된 후 뜨도록 onLoad 이벤트로 loaded 상태값을 변경해줍니다.
loaded가 true일 경우 요소들이 뜨도록 합니다.

#### 댓글

onClick, onKeyDown 이벤트로 댓글 입력을 받습니다. 엔터키 값을 경우엔 `e.key === 'Enter'`로 구분해줍니다. feedData.json에서 받아온 기존 댓글들을 스프레드 연산자로 받아와서 담아주고 새로 입력한 댓글을 함께 추가해 줍니다. 입력 후에 useRef를 사용하여 input 값을 초기화 해줍니다.

키보드 입력 할 때 한글을 입력하면 두 번 실행되는 이슈가 있었습니다. `KeyboardEvent.isComposing`은 입력된 문자가 조합 문자인지 아닌지를 반환하는 함수로 이를 사용하여 조건문에 추가해주었습니다.

```js
//댓글 키보드 입력 이벤트
const onPostPressHandeler = (e) => {
  if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
    setCommentFunc();
  }
};

//초기화
inputComment.current.value = "";
```

## 보완해야할 부분

**효율적인 컴포넌트 구조에 대한 고민**

**onLoad 이벤트 렌더링 문제**  
onLoad이벤트에서 loaded가 true로 바뀌었을 때, 컴포넌트를 어떻게 렌더링할지 어려움이 있었습니다. img 태그가 {loaded && 컴포넌트(img 태그 포함)} 조건문에 따라서 보이게 되면 요소 자체가 없기 때문에 요소가 뜨지 않습니다. 그래서 구현은 이미지 태그는 존재하고 그 외에 요소만 loaded가 true일 경우에 보이도록 했고 상위 요소에 `className={"feed-item " + (loaded && "on")}`로 on 클래스 존재 여부로 자연스럽게 보이도록 했습니다. 좋은 방식으로 구현한 예제가 있다면 참고하고 싶습니다.

**React.StrictMode**. 
App 내의 잠재적인 문제를 알아내기 위한 도구로
두 번 렌더링 된다. 개발할 때는 사용하는 것이 좋다.
