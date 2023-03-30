'use client';

import { db } from '../../../firebase';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

type Props = {
  params: {
    id: string;
  };
};

function SearchPage({ params: { id } }: Props) {
  const [snapshot, loading, error] = useDocument(doc(db, 'searches', id));

  if (loading)
    return (
      <h1 className="text-center p-10 animate-pulse text-xl text-indigo-600/50">
        Loading Results...
      </h1>
    );

  if (!snapshot?.exists()) return;

  if (snapshot.data()?.status === 'pending')
    return (
      <div className="flex flex-col gap-y-5 py-10 items-center justify-between">
        <p className="text-indigo-600 animate-pulse text-center">
          Sraping results from Amazon...
        </p>
      </div>
    );
  return <div></div>;
}

export default SearchPage;
