var firebaseConfig = {
    apiKey: "AIzaSyBdLtRRp9b6wbCA_fzJG2OAUXGoOURNKuA",
    authDomain: "test-07070.firebaseapp.com",
    databaseURL: "https://test-07070.firebaseio.com",
    projectId: "test-07070",
    storageBucket: "test-07070.appspot.com",
    messagingSenderId: "843268754679",
    appId: "1:843268754679:web:6434e0931d63cd8631d7f2",
    measurementId: "G-B613SZ48F1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
