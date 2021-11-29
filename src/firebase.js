import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyAXH3B0S6NiPj398DqEEhs0WgyKT_z59Bs',
    authDomain: 'clone-6d7ec.firebaseapp.com',
    projectId: 'clone-6d7ec',
    storageBucket: 'clone-6d7ec.appspot.com',
    messagingSenderId: '566703753400',
    appId: '1:566703753400:web:65a7cf4c17563639334c4d',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
