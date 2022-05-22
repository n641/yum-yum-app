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
async function getdelivery() {
    const ordersCol = collection(db, "delivery");

    const orderSnapshot = await (await getDocs(ordersCol));
    const ordersList = orderSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return ordersList;
}

async function editdelivery(order) {
    await setDoc(doc(db, "delivery", order.id), order);
}

async function deletedelivery(id) {
    try {
        await deleteDoc(doc(db, "delivery", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function adddelivery(d) {
    try {
        const docRef = await addDoc(collection(db, "delivery"), d);
        console.log("done in delivery" , docRef.id)
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribedelivery(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "delivery")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export { getdelivery, editdelivery, deletedelivery, adddelivery, subscribedelivery };