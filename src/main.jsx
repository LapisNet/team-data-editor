import { createApp } from 'mettle';
import Router from './router/index';
import 'picnic/releases/picnic.min.css';
import Navbar from './components/navbar';
import msg from '@yaohaixiao/message.js/message';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@yaohaixiao/message.js/message.css';
import './style.css';

function App() {
  msg.success({message: '欢迎访问，祝您生活愉快w', customClass: 'top-layer'})
  return <>
    <Navbar></Navbar>
    <div class='container'>
      <div id='router'><Router></Router></div>
      <p class='copyright'>Copyright (c) 2026 LapisNet</p>
    </div>
  </>;
}

createApp(<App />, '#app');
