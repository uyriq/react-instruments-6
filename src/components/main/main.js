import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main>
        <img alt="фото собачек." src={require("../../images/main.jpg")}/>
      </main>
    );
  }
}

export default Main;