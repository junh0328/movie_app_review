import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


class App extends React.Component {
  state = {
    //isLoading이 true가 되면, 그에 따라 불러올 영화 데이터들이 movies 배열에 담기게 된다.
    isLoading: true,
    movies: [],
    
  };

    getMovies = async () => {
      const { data: {data: { movies },},} 
      = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=30&&sort_by=download_count');
      // 기존에 movies의 배열이 담길 변수 movies를 구조 분해 할당을 통해 만들었다.

      
      this.setState({ movies : movies, isLoading:false });
      // state에 있는 movies : 구조 분해 할당으로 얻은 movies
      // isLoading은 데이터를 다 가져오게 되면 false로 바꿔준다. 후에 화면에는 we are ready가 출력되게 된다.
    };
    

  componentDidMount() {
    //영화 로딩
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className ="loader">
          <span className="loader_text">'Loading ...'</span>
        </div>
        ) : (
        <div className ="movies">
        {movies.map((movie) => (
       <Movie   
        // Movie 컴포넌트에서 받아오는 프롭스 = { 실제 들어가야할 json의 속성명 } 
        key = {movie.id}
        id={movie.id} 
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
      />
        ))}      
    </div>
      )}
    </section>
    );
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