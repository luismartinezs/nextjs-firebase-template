import { addDocument, getDocumentsByUserUid } from "@/firebase/firestore/api";
import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import { auth } from '@/firebase/auth'

const COLLECTION = 'dataEntries'

interface IDataEntry {
  userUid?: string;
  timestamp?: Timestamp | Date;
  id?: string;
}

const mockDataEntry: IDataEntry = {
  // id: uuidv4(),
  // userUid: auth.currentUser?.uid,
  timestamp: new Date()
}


const create = async () => {
  const entry = {}

  if (auth.currentUser === null) {
    throw new Error('create data entry: user not logged in')
  }

  return addDocument(COLLECTION, { ...mockDataEntry, userUid: auth.currentUser.uid })
}

const getAllByUser = async () => {
  if (auth.currentUser === null) {
    throw new Error('get all data entries: user not logged in')
  }

  return getDocumentsByUserUid(COLLECTION, auth.currentUser.uid)
}

const api = {
  create,
  getAllByUser
}

export default api;