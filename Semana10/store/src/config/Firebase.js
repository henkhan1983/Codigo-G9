import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  massagingSenderId: process.env.REACT_APP_MESSAGING_ID ,
  appId: process.env.REACT_APP_APP_ID ,
}

const fire = firebase.initializeApp(config)
const storage = firebase.storage()
const auth = firebase.auth()

export {
  fire,
  storage,
  firebase,  // en caso requieran algun tipo de dato de firebase, lo pueden obtener de aqui
  auth
}