import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc, DocumentData, DocumentReference, Query, query, where } from "firebase/firestore";

import { db } from "@/firebase/app";

export interface FirestoreDocument<Data = DocumentData> {
  id: string;
  data: Data;
}

export interface FirestoreCollection<Data = DocumentData> {
  [key: string]: Data;
}

export async function getDocument<Data = DocumentData>(collectionName: string, documentId: string): Promise<FirestoreDocument<Data> | null> {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, data: docSnap.data() as Data };
  } else {
    console.log(`No document with ID: ${documentId}`);
    return null;
  }
}

export async function getDocumentsWithQuery<Data = DocumentData>(q: Query): Promise<FirestoreDocument<Data>[] | null> {
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() as Data }));
  } else {
    console.log(`No documents found for the provided query.`);
    return null;
  }
}

export async function getDocumentsByUserUid<Data = DocumentData>(collectionName: string, userUid: string): Promise<FirestoreDocument<Data>[] | null> {
  const q = query(collection(db, collectionName), where("userUid", "==", userUid));
  const documents = await getDocumentsWithQuery<Data>(q);

  return documents;
}

export async function getAllDocuments<Data = DocumentData>(collectionName: string): Promise<FirestoreCollection<Data> | null> {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);

  if (!snapshot.empty) {
    let allDocs: FirestoreCollection<Data> = {};
    snapshot.forEach(doc => {
      allDocs[doc.id] = doc.data() as Data;
    });
    return allDocs;
  } else {
    console.log(`No documents found in collection: ${collectionName}`);
    return null;
  }
}

export async function addDocument<Data extends DocumentData = DocumentData>(collectionName: string, data: Data): Promise<DocumentReference | null> {
  try {
    console.log(`Adding document to ${collectionName}`)
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef;
  } catch (e) {
    console.error(`Error adding document to ${collectionName}: `, e);
    return null;
  }
}

export async function editDocument<Data extends DocumentData = DocumentData>(collectionName: string, documentId: string, data: Data): Promise<void> {
  console.log(`Editing document ${documentId} in ${collectionName}`)
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, data);
}

export async function deleteDocument(collectionName: string, documentId: string): Promise<void> {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
}
