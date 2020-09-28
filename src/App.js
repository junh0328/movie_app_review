import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    //isLoading이 true가 되면, 그에 따라 불러올 영화 데이터들이 movies 배열에 담기게 된다.
    isLoading: true,
    movies: [],
    
  };

    getMovies = async () => {
      const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
      console.log(movies);
    };
    

  componentDidMount() {
    //영화 로딩
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading ...' : ' We are ready '}</div>;
   }
}

export default App;


/*
  초기 설정에 대한 state 중 isLoading을 true로 둔다.
  그리고 isLoading 상태에 따라, isLoading이 true이면, Loading ... 이라는 메세지가, false이면  We are ready라는 메세지가 뜨도록 한다.
  실제로 생명주기 함수를 도입하면, isLoading 이 false인 상태가 로딩이 완료되었다는 뜻으로 앱에 영화의 구성을 올리게 될 것이다.
*/

/*
  axios.get('url')을 가져오기 전에 react파일이 실행되면, 빈 창이 뜰 수 있으므로, 반드시 url을 먼저 가져온 후에 실행 시키기 위해서 (비동기 처리)
  async , await 함수를 사용하였다. getMovies를 함수로 만들어서 담긴 값을 담을 변수 movies를 만들고 후에 배열로 저장합니다.
*/