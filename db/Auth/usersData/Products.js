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
    orderBy
} from "firebase/firestore";

// Get a list of cities from your database
async function getProducts() {
    const productsCol = collection(db, "Products");
    const q = query(productsCol, orderBy('count'));


    const ProductSnapshot = await (await getDocs(q));
    const ProductList = ProductSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return ProductList;
}

async function editProduct(product) {
    console.log("at editProduct", product);
    await setDoc(doc(db, "Products", product.id), product);
}

async function deleteProduct(id) {
    try {
        await deleteDoc(doc(db, "Products", id));
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

async function addProduct(product) {
    try {
        const docRef = await addDoc(collection(db, "Products"), product);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function subscribe(callback) {
    const unsubscribe = onSnapshot(
    query(collection(db, "Products")),
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

export { getProducts, addProduct, editProduct, deleteProduct, subscribe };