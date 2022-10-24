import React, { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// Loader
import { FadeLoader } from "react-spinners";
import SwiperNovs from '../SwiperNovs/SwiperNovs';
// FireBase
import { getItemsByCategory } from '../../services/firestore'
// Componentes
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  let { cat } = useParams()
  let title = cat === undefined ? 'Novedades' : cat

  useEffect( () => {
    getItemsByCategory(cat).then((responseData) => {
      setData(responseData)
      setLoading(false)
    } )
  }, [cat])

  return (
    <section>
      <h2 className='sectionTitle mt-4 ps-4'>{title}</h2>
      <div className="itemListContainer d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4 my-3">
        {
          title === 'Novedades'
          ? <>
            <div className='col-12 d-flex justify-content-center'>
              <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
            </div>
              <SwiperNovs data={data}/>
            </> 
          : <>
              <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
              <ItemList data={data}/>
            </>
        }
      </div> 
    </section>
  )
}