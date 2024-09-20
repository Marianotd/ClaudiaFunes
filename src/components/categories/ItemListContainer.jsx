import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getItems, getItemsByCategory } from '../../services/firestore'
import { MdError } from "react-icons/md";
import SwiperList from '../list/SwiperList';
import PaginatedItems from './PaginatedItems';
import LoadingComponent from '../utils/LoadingComponent'
import ErrorComponent from '../utils/ErrorComponent'

export default function ItemListContainer() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  let { cat } = useParams()

  const title = useMemo(() => (cat ? cat : 'Novedades'), [cat]);

  const totalItemsPerPage = useMemo(() => {
    return width < 768 ? 2 : width < 1024 ? 4 : 12;
  }, [width]);

  const fetchData = async () => {
    setLoading(true)
    setError(false)
    try {
      let newData = cat === undefined ? await getItems() : await getItemsByCategory(cat)
      setItems(newData)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = `La Proporción Aurea - ${title}`;
    fetchData();
  }, [title]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <LoadingComponent />
    )
  }

  if (error) {
    return (
      <ErrorComponent message='Ha ocurrido un error' />
    )
  }

  if (!items || items.length === 0) {
    return (
      <ErrorComponent message='Aun no hay productos de la categoría seleccionada' />
    )
  }

  return (
    <section className='flex flex-col items-center gap-6'>
      <div className='w-full flex flex-col gap-6 items-center'>
        {
          title === 'Novedades' ? (
            <SwiperList items={items} />
          ) : (
            <PaginatedItems itemsPerPage={totalItemsPerPage} items={items} />
          )
        }
      </div>
    </section >
  )
}