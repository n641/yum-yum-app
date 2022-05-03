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
async function getStuff() {
    const StuffCol = collection(db, "stuff");

    const stuffSnapshot = await (await getDocs(StuffCol));
    const stuffList = stuffSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return stuffList;
}

async function editStuff(stuff) {
    console.log("at editStuff", stuff);
    await setDoc(doc(db, "stuff", stuff.id), stuff);
}

async function deleteStuff(id) {
    try {
        await deleteDoc(doc(db, "stuff", id));
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addStuff(order) {
    try {
        const docRef = await addDoc(collection(db, "stuff"), order);
        console.log("Document written with ID: ", docRef.id);
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
                // console.log("changes", change, snapshot.metadata);
                if (callback) callback({ change, snapshot });
            });
            // console.log(source, " data: ", snapshot.data());
        }
    );
    return unsubscribe;
}

export { getStuff, addStuff, editStuff, deleteStuff, subscribe };