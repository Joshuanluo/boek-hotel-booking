import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";

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
		const q = query(collection(db1, `users/${uid}/reservations`));
		const data = await getDocs(q);
		// console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	},
};

export default firestoreCrud;
