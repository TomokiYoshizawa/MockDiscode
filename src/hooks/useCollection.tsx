/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  Query,
  DocumentData,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

function useCollection(data: string) {
  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, "Channels"));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, [data]);

  return { documents };
}

export default useCollection;
