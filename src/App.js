import React from 'react';


class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout( () => {
      this.setState({ isLoading: false });
    }, 6000);
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

