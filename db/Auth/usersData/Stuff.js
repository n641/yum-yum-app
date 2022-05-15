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

async function getStuff() {
    const StuffCol = collection(db, "stuff");

    const stuffSnapshot = await (await getDocs(StuffCol));
    const stuffList = stuffSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return stuffList;
}

async function editStuff(stuff) {
    await setDoc(doc(db, "stuff", stuff.id), stuff);
}

async function deleteStuff(id) {
    try {
        await deleteDoc(doc(db, "stuff", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addStuff(order) {
    try {
        const docRef = await addDoc(collection(db, "stuff"), order);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribe(callback) {
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

export { getStuff, addStuff, editStuff, deleteStuff, subscribe };