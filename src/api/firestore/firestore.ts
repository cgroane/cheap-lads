import { firestore } from "../firebase.config"
import { collection, DocumentData, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { Special } from "../../types/specials";

const converters = {
    dealsConverter: {
        toFirestore: (data: Special) => data,
        fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Special
    }
}

export const getSpecials = (): DocumentData => {
    return getDocs<DocumentData>(collection(firestore, 'deals').withConverter({
        ...converters.dealsConverter
    }))
};
