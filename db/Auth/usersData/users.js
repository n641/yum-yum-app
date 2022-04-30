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
async function getUsers() {
    const usersCol = collection(db, "users");

    const userSnapshot = await (await getDocs(usersCol));
    const userList = userSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return userList;
}

async function editUser(user) {
    console.log("at editUsers", user);
    await setDoc(doc(db, "users", user.id), user);
}

async function deleteUserDB(id) {
    try {
        await deleteDoc(doc(db, "users", id));
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addUser(user) {
    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribeUser(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "users")),
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

export { getUsers, addUser, editUser, deleteUserDB, subscribeUser };