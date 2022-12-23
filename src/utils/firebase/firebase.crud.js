import { collection, query, where, getDocs, doc, setDoc, addDoc } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestoreCrud = {
	async getHotelsByLocation(location) {
		const q = query(collection(db1, "hotels"), where("city", "==", location));
		const data = await getDocs(q);
		return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	},
	async getDocByHotel(hotel) {
		const q = query(collection(db1, "hotels"), where("name", "==", hotel));
		const data = await getDocs(q);
		return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	},
	async addOrderbyHotel(id, res) {
		const docRef = await addDoc(collection(db1, `hotels/${id}/reservations`), res);
		return docRef.id;
	},
	async addOrderForUser(uid, res) {
		await addDoc(collection(db1, `users/${uid}/reservations`), res);
	},
	async getOrdersByUserId(uid) {
		await getDocs(collection(db1, `users/${uid}/reservations`));
	},
};

export default firestoreCrud;
