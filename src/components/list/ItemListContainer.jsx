import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners';
import { getItems, getItemsByCategory } from '../../services/firestore'
import { MdError } from "react-icons/md";
import SwiperList from './SwiperList';
import PaginatedItems from '../../views/sections/PaginatedItems';

export default function ItemListContainer() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  let { cat } = useParams()
  let title = cat ? cat : 'Novedades'
  const totalItemsPerPage = useMemo(() => {
    return width < 768 ? 2 : width < 1024 ? 4 : 12;
  }, [width]);

  useEffect(() => {
    document.title = `La Proporción Aurea - ${title}`

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

    fetchData()
  }, [cat])

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
      <div className="min-h-80 flex flex-col gap-4 items-center justify-center">
        <PuffLoader color='#ffe7ce' size={100} />
        <p className="text-white">Cargando archivo...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-80 flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
        <MdError /> Ha ocurrido un error
      </div>
    )
  }

  if (!items || items.length === 0) {
    return (
      <div className='min-h-80 flex items-center justify-center text-xl md:text-2xl font-bold gap-2 px-2 flex-grow'>
        <MdError className='min-w-6 min-h-6' /> Aun no hay items
      </div>
    )
  }

  return (
    <section className='flex flex-col items-center gap-6'>
      <div className='w-full flex flex-col gap-6 items-center'>
        {
          title === 'Novedades' && items && items.length > 0 ? (
            <SwiperList items={items} />
          ) : title != 'Novedades' ? (
            <PaginatedItems itemsPerPage={totalItemsPerPage} items={items} />
          ) : (
            <div className='flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
              <MdError /> Ha ocurrido un error
            </div>
          )
        }
      </div>
    </section >
  )
}