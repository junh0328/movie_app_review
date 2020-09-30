# REACT_MOVIE_APP_CLONE

전에 만들었던 리액트 앱 복기 및 클론해보기

가져올 .json 파일명 
>>  "https://yts-proxy.now.sh/list_movies.json?limit=30&&sort_by=download_count"

- 영화 앱 만들기 워밍업
초기 설정에 대한 state 중 isLoading을 true로 둔다.
그리고 isLoading 상태에 따라, isLoading이 true이면, Loading ... 이라는 메세지가, false이면  We are ready라는 메세지가 뜨도록 한다.
실제로 생명주기 함수를 도입하면, isLoading 이 false인 상태가 로딩이 완료되었다는 뜻으로 앱에 영화의 구성을 올리게 될 것이다.

- 영화 API 사용해 보기
- 영화 데이터 화면에 그리기
- MOVIE 컴포넌트 만들기
가져온 json 파일을 배열로 만든 movies = [] 를 출력해줄 컴포넌트 Movie.js를 만든다.
해당 속성값 또한 구조 분해 할당으로 가져오게 된다.
proptypes를 통해 가져온 해당 속성의 타입을 알 수 있다. (실수를 방지하기 위해서)
- 영화 앱 스타일링

- 영화 앱 전체 모습 수정하기

- react-router-dom 설치하고 프로젝트 폴더 정리하기
- 라우터 만들어 보기
- 내비게이션 만들어 보기
- 영화 상세 정보 기능 만들어 보기
- 리다이렉트 기능 만들어 보기