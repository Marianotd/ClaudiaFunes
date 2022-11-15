// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { getFirestore, collection, doc , getDoc, getDocs, query, where ,addDoc, setDoc } from 'firebase/firestore'

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
const storage = getStorage(app)

export async function getUrl(archivo){ 
  const portadaRef = ref(storage, archivo)
  const url = await getDownloadURL(portadaRef)
  return url
}

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

export async function getOrder(collection, id) {
  const docRef = doc(firestore, collection, id)
  const docSnapshot = await getDoc(docRef)
  return { ...docSnapshot.data(), id: docSnapshot.id}
}

export async function stockFit(item){
  await setDoc(doc(firestore, "productos", item.id), { 
    category: item.category,
    category2: item.category2,
    description: item.description,
    img: item.img,
    name: item.name,
    novelty: item.novelty,
    price: item.price,
    stock: item.stock
  })
}

export async function createMessage(messageData){
  const myColection = collection(firestore, 'messages')
  let response = await addDoc(myColection, messageData)
  return response.id
}

export default firestore