import React, { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// Loader
import { FadeLoader } from "react-spinners";
import SwiperNovs from '../SwiperNovs/SwiperNovs';
// FireBase
import { getItems, getItemsByCategory } from '../../services/firestore'
// Componentes
import ItemList from '../ItemList/ItemList'
import NotFound from '../NotFound/NotFound';

export default function ItemListContainer() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  let { cat } = useParams()
  let title = cat === undefined ? 'Novedades' : cat

  useEffect( () => {
    document.title = `La Proporción Aurea - ${title}`
    if(cat === undefined) {
      getItems().then(responseData => {
        setData(responseData)
        setLoading(false)
      })
    } else {
      getItemsByCategory(cat).then((responseData) => {
        setData(responseData)
        setLoading(false)
      } )
    }
  }, [cat])

  return (
    <section className='carouselContainer'>
      <h2 className='sectionTitle ps-4'>{title}</h2>
      <div className="itemListContainer p-4 mt-3 gap-2">
        { title === 'Novedades'
          ? loading
              ? <div className='loaderContainer d-flex justify-content-center align-items-center'>
                  <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
                </div>
              : <>
                  <SwiperNovs data={data.filter(item => item.category === 'Ilustraciones' && item.novelty === true)}/>
                  <SwiperNovs data={data.filter(item => item.category === 'Tarot' && item.novelty === true)}/>
                  <SwiperNovs data={data.filter(item => item.category === 'Astrologia' && item.novelty === true)}/>
                </>

          : loading
              ? <div className='loaderContainer d-flex justify-content-center align-items-center'>
                  <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
                </div>
              : data.length === 0 && !loading
                ? <NotFound text={'Lo sentimos, aun no hay productos en esta sección'} />
                : <ItemList data={data}/>   
        }
      </div> 
    </section>
  )
}