import React from 'react';
import ReactDOM from 'react-dom';
import App from './react-src/index.jsx';

function init() {
  const base = document.createElement('div');
  const styles = [];
  styles.push('position: absolute');
  styles.push('left: 10px');
  styles.push('top: 40px');
  styles.push('padding: 5px');
  styles.push('background-color: #b6b2a4');
  styles.push('opacity: 0.7');

  base.setAttribute('id', 'windows');
  base.setAttribute('style', styles.join(';'));
  document.body.appendChild(base);
  console.log(ReactDOM);
  ReactDOM.render(<App />, base);
}

init();
