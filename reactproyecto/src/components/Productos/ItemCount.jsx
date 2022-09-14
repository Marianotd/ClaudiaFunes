import React, {useState} from 'react'

export default function ItemCount({initial, stock}) {
    const [cantCount, setCantCount] = useState(initial)
    let acumulador = 0

    function cantAdd() {
        if(cantCount < stock ) {
            setCantCount(cantCount + 1)
        }
    }

    function cantSustract() {
        if(cantCount > 1 ) {
            setCantCount(cantCount - 1)
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
        <button className='buttonAdd py-1' onClick={onAdd}>Añadir</button>
    </>
  )
}
