import { collection, query, where, getDocs } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";

const firestoreCrud = {
	async getHotelsByLocation(location) {
		const q = query(collection(db1, "hotels"), where("city", "==", location));
		const data = await getDocs(q);
		return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	},
};

export default firestoreCrud;