require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/questionboard.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      <div className="index">

        <div className="notice">Qt  edit <code>src/components/Main.js</code> to get started!</div>
      </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
