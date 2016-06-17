require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Test extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">intpubt to get started!</div>
      </div>
    );
  }
}


class AppComponent extends React.Component {
  render() {
    return (
      <div>
      <Test></Test>
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Qt  edit <code>src/components/Main.js</code> to get started!</div>
      </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
