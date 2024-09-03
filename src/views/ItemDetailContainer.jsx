import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '../services/firestore';
import { MdError } from "react-icons/md";
import { PuffLoader } from 'react-spinners';
import ItemDetail from  '../components/categories/ItemDetail'

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true)
      setError(false)

      try {
        const newItem = await getSingleItem(id)
        setItem(newItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchInfo()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <PuffLoader color='#ffe7ce' size={100} />
        <p className="text-white">Cargando archivo...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
        <MdError /> Ha ocurrido un error
      </div>
    )
  }

  return (
    <div className='min-h-screen p-6'>
      <ItemDetail data={item} />
    </div>
  )
}
