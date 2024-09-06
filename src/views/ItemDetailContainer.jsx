import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../services/firestore';
import { PuffLoader } from 'react-spinners';
import ItemDetail from '../components/categories/ItemDetail';
import NotFound from './NotFound';

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      setError(false);

      try {
        const newItem = await getSingleItem(id);
        if (!newItem) {
          setError(true);
        } else {
          setItem(newItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchInfo();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <PuffLoader color='#ffe7ce' size={100} />
        <p className="text-white">Cargando archivo...</p>
      </div>
    );
  }

  if (error || !item) {
    return (
      <NotFound />
    );
  }

  return (
    <div className='min-h-screen p-6'>
      <ItemDetail data={item} />
    </div>
  );
}
