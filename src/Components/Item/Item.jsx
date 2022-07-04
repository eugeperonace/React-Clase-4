import React from 'react'


const Item = ({product}) => {
  console.log(product)
  const {img, name}= product

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
      <img src={img}className="card-img-top" alt={name}/>
      <div className="card-body">
          <p className="card-text">{name}</p>
      </div>
      <button className='btn btn-primary'>Ver más</button>
    </div>

      /* <div className="card" style={{width:'20rem', margin:'.5rem'}}>
      <img src={img}className="card-img-top" alt={name}/>
      <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="card-text">{description}</p>
      </div>
      <button className='btn btn-primary'>Ver más</button>
      </div> */
    
  )
}

export default Item