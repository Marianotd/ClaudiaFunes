import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners';
import { getItems, getItemsByCategory } from '../../services/firestore'
import { MdError } from "react-icons/md";
import ItemList from '../ItemList/ItemList'
import SwiperList from './SwiperList';

export default function ItemListContainer() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  let { cat } = useParams()
  let title = cat ? cat : 'Novedades'

  useEffect(() => {
    document.title = `La Proporción Aurea - ${title}`

    const fetchData = async () => {
      setLoading(true)
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

  return (
    <section className='flex flex-col items-center gap-6'>
      <h2 className='text-3xl font-bold tracking-wide lg:text-4xl'>{title}</h2>
      <div className='w-full flex flex-col gap-6 items-center'>
        {
          title === 'Novedades' && items && items.length > 0 ? (
            <SwiperList items={items} />
          ) : title != 'Novedades' ? (
            <ItemList data={items} />
          ) : (
            <div className='flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
              <MdError /> Ha ocurrido un error
            </div>
          )
        }
      </div>
    </section>
  )
}