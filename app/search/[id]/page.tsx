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
  return (
    <div>
      <div>
        <div>
          <h1 className="font-bold">
            Search results for{' '}
            <span className="text-indigo-600">"{snapshot.data()?.search}"</span>
          </h1>
          <p className="text-gray-300">
            {snapshot.data()?.results?.length > 0 &&
              `${snapshot.data()?.results?.length} results found`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
