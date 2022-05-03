import { db } from "../../config";
import {
    getDocs,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";

// Get a list of cities from your database
async function getOffers() {
    const offersCol = collection(db, "offers");

    const offerSnapshot = await (await getDocs(offersCol));
    const offerList = offerSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return offerList;
}

async function editOffer(offer) {
    console.log("at editOrder", offer);
    await setDoc(doc(db, "offers", offer.id), offer);
}

async function deleteOffer(id) {
    try {
        await deleteDoc(doc(db, "offers", id));
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addOffer(offer) {
    try {
        const docRef = await addDoc(collection(db, "offers"), offer);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribe(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "offers")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                // console.log("changes", change, snapshot.metadata);
                if (callback) callback({ change, snapshot });
            });
            // console.log(source, " data: ", snapshot.data());
        }
    );
    return unsubscribe;
}

export { getOffers, addOffer, editOffer, deleteOffer, subscribe };