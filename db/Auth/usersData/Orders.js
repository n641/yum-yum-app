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
async function getOrders() {
    const ordersCol = collection(db, "orders");

    const orderSnapshot = await (await getDocs(ordersCol));
    const ordersList = orderSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return ordersList;
}

async function editOrder(order) {
    await setDoc(doc(db, "orders", order.id), order);
}

async function deleteOrder(id) {
    try {
        await deleteDoc(doc(db, "orders", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addOrder(order) {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribeOrder(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "orders")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export { getOrders, addOrder, editOrder, deleteOrder, subscribeOrder };