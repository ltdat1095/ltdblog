import React from 'react';

// Import scss
import './scss/style.scss';
import 'bootstrap';

// Import component
import NavBar from './component/CommonComponent/NavBar';
import BackGround from './component/CommonComponent/BackGround';
import MainPage from './component/MainPage/MainPage';

const brandTitle = "LTD's Blog";

class App extends React.Component {
  render() {
    return (
      <div>
        <BackGround />
        <div class="pageLayout">
          <NavBar brand={brandTitle} />
          <MainPage />
        </div>
      </div>
    )
  }
};

export default App;
