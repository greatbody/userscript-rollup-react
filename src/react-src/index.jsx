import React from 'react';
import Demo from './../Demo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.message = Demo.message();
  }

  render() {
    return (
      <div>Hello {this.message}</div>
    );
  }
}
