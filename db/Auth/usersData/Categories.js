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

async function getCategories() {
    const categoriesCol = collection(db, "Categories");

    const CategorySnapshot = await (await getDocs(categoriesCol));
    const CategoryList = CategorySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return CategoryList;
}

async function editCategory(category) {
    await setDoc(doc(db, "Categories", category.id), category);
}

async function deleteCategory(id) {
    try {
        await deleteDoc(doc(db, "Categories", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addCategory(category) {
    try {
        const docRef = await addDoc(collection(db, "Categories"), category);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribe(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "Categories")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export { getCategories, addCategory, editCategory, deleteCategory, subscribe };