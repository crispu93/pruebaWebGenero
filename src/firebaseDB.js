import Firebase from 'firebase'

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyCynlESJ3h3R62PeDSuM0SW6Z_fp9T6nms',
    authDomain: 'db-prueba-9d700.firebaseapp.com',
    projectId: 'db-prueba-9d700',
    storageBucket: 'db-prueba-9d700.appspot.com',
    messagingSenderId: '1012219024289',
    appId: '1:1012219024289:web:600701b85dda464d18f1e0',
    measurementId: 'G-59EE1125QF'
  }

  let app = Firebase.initializeApp(firebaseConfig)
  export const db = app.database()