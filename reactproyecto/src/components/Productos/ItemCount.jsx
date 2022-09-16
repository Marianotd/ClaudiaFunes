import React, {useState} from 'react'

export default function ItemCount({initial, stock}) {
    const [cantCount, setCantCount] = useState(initial)

    function cantAdd() {
        if(cantCount < stock ) {
            setCantCount(cantCount + 2)
        }
    }

    function cantSustract() {
        if(cantCount > 2 ) {
            setCantCount(cantCount - 2)
        }
    }

    function onAdd(){
        if(stock > 0) {
            setCantCount(initial)
        }
    }

  return (
    <>
        <div className='cantContainer col-6 d-flex flex-row align-items-center justify-content-center'>
            <button className='buttonCant col-3' onClick={cantSustract}>-</button>
            <span className='spanCant col-6 text-center'>{cantCount}</span>
            <button className='buttonCant col-3' onClick={cantAdd}>+</button>
        </div>
        <div className='col-10 d-flex flex-row align-items-center justify-content-around mt-3'>
            <button className='buttonAdd py-1' onClick={onAdd}>Añadir</button>
            <button className='buttonAdd py-1'>Ver más</button>
        </div>
    </>
  )
}
