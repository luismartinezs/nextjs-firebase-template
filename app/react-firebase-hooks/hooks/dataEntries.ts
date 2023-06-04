import { collection, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db, auth } from '@/firebase/app';

const COLLECTION = 'dataEntries'

export const useDataEntries = () => {
  const userUid = auth.currentUser?.uid

  if (userUid === undefined) {
    throw new Error('useDataEntries: user not logged in')
  }

  const q = query(collection(db, COLLECTION), where("userUid", "==", userUid))
  return useCollection(
    q,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}