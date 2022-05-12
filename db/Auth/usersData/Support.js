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
// Get a list of message from your database
async function getMessage() {
  const messageCol = collection(db, "/Support");
  const q = query(messageCol, orderBy("date"));

  const messageSnapshot = await getDocs(q);
  const messageList = messageSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return messageList;
}




async function editMessage(message) {
  console.log("at editMessage", message);
  await setDoc(doc(db, "/Support", message.id), message);
}

async function deleteMessage(id) {
  try {
    await deleteDoc(doc(db, "/Support", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function addMessage(message) {
  try {
    const docRef = await addDoc(collection(db, "/Support"), message);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "/Support")),
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

export {
  getMessage,
  addMessage,
  editMessage,
  deleteMessage,
  subscribe,
};
