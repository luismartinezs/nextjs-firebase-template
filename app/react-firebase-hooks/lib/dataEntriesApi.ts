import { addDocument } from "@/firebase/firestore/api"

import { auth } from "@/firebase/app"

type DataEntry = Record<string, any>

const COLLECTION = 'dataEntries'

const mockDataEntry: DataEntry = {
  // id: uuidv4(),
  timestamp: new Date()
}

export const createDataEntry = async (dataEntry: DataEntry = mockDataEntry) => {
  const entry = {}

  if (auth.currentUser === null) {
    throw new Error('create data entry: user not logged in')
  }

  return addDocument(COLLECTION, { ...dataEntry, userUid: auth.currentUser.uid })
}
