import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarRating from './StartRating'
const ProductSection = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    let data = await axios.get('https://fakestoreapi.com/products')
    setData(data.data)

  }



  useEffect(() => {
    getData()
  }, [])



  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>PNZ Collection</h2>
              <p>There are many variations</p>
            </div>
          </div>
        </div>
        <div className="row">

        {data.map((item)=>{
          return(
              
          <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Product */}
          <div className="single-product">
            <div className="product-image">
              <img src={item.image }alt="#" height={250}  width={250}/>
              <div className="button">
                <a href="product-details.html" className="btn"><i className="lni lni-cart" /> Add to Cart</a>
              </div>
            </div>
            <div className="product-info">
              <span className="category">{item.category}</span>
              <h4 className="title">
                <a href="product-grids.html">{item.title.slice(0, 28)}</a>
              </h4>
              <ul className="review">
                {/* <li><i className="lni lni-star-filled" /></li>
                <li><i className="lni lni-star-filled" /></li>
                <li><i className="lni lni-star-filled" /></li>
                <li><i className="lni lni-star-filled" /></li>
                <li><i className="lni lni-star" /></li> */}
                <li><span> <StarRating rating={item?.rating.rate} />{item?.rating.rate}  ({item?.rating.count} Sold)</span></li>
              </ul>
              <div className="price">
                <span>Rs {item.price}</span>
              </div>
            </div>
          </div>
          {/* End Single Product */}
        </div>
          )
        })}


        </div>
        
      </div>
    </section>

  )
}

export default ProductSection