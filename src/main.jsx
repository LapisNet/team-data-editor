import { createApp } from 'mettle';
import Router from './router/index';
import 'picnic/releases/picnic.min.css';
import Navbar from './components/navbar';
import msg from './libs/message';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@yaohaixiao/message.js/message.css';
import './style.css';

function App() {
  msg.success('欢迎访问，祝您生活愉快w')
  msg.warn('该版本仅展示UI和交互，无写入功能')
  return <>
    <Navbar></Navbar>
    <div class='container'>
      <div id='router'><Router></Router></div>
      <p class='copyright'>Copyright (c) 2026 LapisNet</p>
    </div>
  </>;
}

createApp(<App />, '#app');
