
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uview from '@/uni_modules/uview'

import req from 'utils/req.js'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxzV1U3Bso6RREbG1tQgXng3sAWJTHj5Y",
  authDomain: "application-99523.firebaseapp.com",
  projectId: "application-99523",
  storageBucket: "application-99523.appspot.com",
  messagingSenderId: "287500326138",
  databaseURL:"https://application-99523-default-rtdb.firebaseio.com/",
  appId: "1:287500326138:web:67ca9abd30bb139ffee543",
  measurementId: "G-6569F81DL4"
};

const app2 = initializeApp(firebaseConfig);
const db = getFirestore(app);
// getCities(db);
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'category');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log('@@',cityList);
  return cityList;
}
Vue.prototype.$a=req



Vue.use(uview)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif