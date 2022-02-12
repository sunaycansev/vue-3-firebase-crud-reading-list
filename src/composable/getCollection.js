import {ref,watchEffect} from "vue";
// firebase imports
import {db} from "../firebase/config"
import {collection,onSnapshot,query,where} from "firebase/firestore";

const getCollection = (collectionName,queryData) => {
    const documents = ref(null)

    // collection reference
    let colRef = collection(db,collectionName)
    if(queryData){
        colRef = query(colRef,where(...queryData))
    }

    const unsub = onSnapshot(colRef,snapshot => {
        let results = [];
        snapshot.docs.forEach((doc) => {
            results.push({...doc.data(),id:doc.id})
        })
        // update values
        documents.value = results
    })
    watchEffect(onInvalidate => {
        onInvalidate(() => unsub())
    })
    return { documents }
}

export default getCollection