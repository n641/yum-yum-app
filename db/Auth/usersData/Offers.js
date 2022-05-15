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

async function getOffers() {
    const offersCol = collection(db, "offers");

    const offerSnapshot = await (await getDocs(offersCol));
    const offerList = offerSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return offerList;
}

async function editOffer(offer) {
    await setDoc(doc(db, "offers", offer.id), offer);
}

async function deleteOffer(id) {
    try {
        await deleteDoc(doc(db, "offers", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addOffer(offer) {
    try {
        const docRef = await addDoc(collection(db, "offers"), offer);
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
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export { getOffers, addOffer, editOffer, deleteOffer, subscribe };