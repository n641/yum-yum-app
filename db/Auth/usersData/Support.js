import { db } from "../../config";
import {
  getDocs,
  doc,
  orderBy,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
async function getMessage() {
  const supportsCol = collection(db, "Support");

    const supportSnapshot = await (await getDocs(supportsCol));
    const supportList = supportSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return supportList;
}




async function editMessage(Support) {
    await setDoc(doc(db, "Support", Support.id), Support);
}

async function deleteMessage(id) {
  try {
    await deleteDoc(doc(db, "Support", id));
  } catch (error) {
      console.error("Error deleting document: ", error);
  }
}

async function addMessage(message) {
  try {
    const docRef = await addDoc(collection(db, "Support"), message);
} catch (e) {
    console.error("Error adding document: ", e);
}
}

function subscribeMessage(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "Support")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export {
  getMessage,
  addMessage,
  editMessage,
  deleteMessage,
  subscribeMessage,
};
