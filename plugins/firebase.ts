import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: "AIzaSyCL-pvQipJn430kTQQ9dPPdEfImN30JFBo",
            authDomain: "ec-app-59445.firebaseapp.com",
            databaseURL: "https://ec-app-59445.firebaseio.com",
            projectId: "ec-app-59445",
            storageBucket: "ec-app-59445.appspot.com",
            messagingSenderId: "5540485228",
            appId: "1:5540485228:web:76b3b9a12b4f0b39d36049",
            measurementId: "G-9W8BHZCBEY"
        }
    )
}

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const functions = firebase.functions()
export const FirebaseTimeStamp = firebase.firestore.Timestamp
// const settings: Object = { timestampsInSnapshots: true }
// db.settings(settings)
// export default db