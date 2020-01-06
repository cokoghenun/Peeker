import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const imgSrc = [
  '/image/icon/badge.svg',
  '/image/icon/alarm.svg',
  '/image/icon/plus.svg',
  '/image/icon/palate.svg',
  '/image/icon/picture.svg',
  '/image/icon/archive.svg',
  '/image/icon/trash.svg',
  '/image/icon/options.svg',
  '/image/icon/undo.svg',
  '/image/icon/redo.svg',
  '/image/icon/pin.svg',
  '/image/icon/pin_fill.svg',
  '/image/icon/close.svg',
  '/image/icon/search.svg',
  '/image/icon/add_contact.svg',
  '/image/icon/refresh.svg',
  '/image/icon/settings.svg',
  '/image/icon/hamburger.svg',
  '/image/icon/bulb.svg',
  '/image/icon/bell.svg'
];

ReactDOM.render(
  <>
    {imgSrc.map((d, i) => (
      <img src={d} key={i} alt='' />
    ))}
  </>,
  document.getElementById('imgcache')
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
