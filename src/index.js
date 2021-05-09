import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCxEEuwCuB6BOHf8UVOcEQNJb08y6M6Pc0',
  authDomain: 'mini-notion-f9991.firebaseapp.com',
  projectId: 'mini-notion-f9991',
  storageBucket: 'mini-notion-f9991.appspot.com',
  messagingSenderId: '42441141197',
  appId: '1:42441141197:web:8bd3637254c80402bd7284',
  measurementId: 'G-HZG735KPYJ'
}

firebase.initializeApp(firebaseConfig)

// var db = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
