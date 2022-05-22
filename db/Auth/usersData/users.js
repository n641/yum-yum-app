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

async function getUsers() {
    const usersCol = collection(db, "users");

    const userSnapshot = await (await getDocs(usersCol));
    const userList = userSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return userList;
}
async function getUser(email) {
  const userRef = collection(db, "users");

  const q = query(userRef, where("email", "==", email));
  const userSnapshot = await getDocs(q);
  const userobject = userSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return userobject[0];
}

async function editUser(user) {
    await setDoc(doc(db, "users", user.id), user);
}

async function deleteUserDB(id) {
    try {
        await deleteDoc(doc(db, "users", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addUser(user) {
    try {
        const docRef = await addDoc(collection(db, "users"), user);
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
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export { getUsers, getUser, addUser, editUser, deleteUserDB, subscribeUser };