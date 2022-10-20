// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc , getDoc, getDocs, query, where ,addDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZFHaY3jK7e1nxIaODiYZUeV3Y2Qex3yM",
  authDomain: "proporcionaurea-1f6ef.firebaseapp.com",
  projectId: "proporcionaurea-1f6ef",
  storageBucket: "proporcionaurea-1f6ef.appspot.com",
  messagingSenderId: "571645868431",
  appId: "1:571645868431:web:408d63dffeb7e64ccc33fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems(){
    const myColection = collection(firestore, 'productos') 
    let snapShotDB = await getDocs(myColection)
    let dataDocs = snapShotDB.docs.map(document => {
      let docFormateado = { ...document.data(), id: document.id }
      return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(id) {
  const docRef = doc(firestore, 'productos', id)
  const docSnapshot = await getDoc(docRef)
  return { ...docSnapshot.data(), id: docSnapshot.id}
}

export async function getItemsByCategory(cat){
  const myColection = collection(firestore, 'productos')
  const queryCat = (cat === undefined) ? query(myColection, where('novelty', '==', true)) : query(myColection, where('category', '==', cat))
  const snapShotDB = await getDocs(queryCat)

  let dataDocs = snapShotDB.docs.map(document => {
    let docFormateado = { ...document.data(), id: document.id }
    return docFormateado
  })
  return dataDocs
}

export async function createBuyOrder(orderData){
  const myColection = collection(firestore, 'orders')
  let response = await addDoc(myColection, orderData)
  return response.id
}

export async function getOrder(id) {
  const docRef = doc(firestore, 'orders', id)
  const docSnapshot = await getDoc(docRef)
  return { ...docSnapshot.data(), id: docSnapshot.id}
}

export default firestore