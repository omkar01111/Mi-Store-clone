import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import '../styles/ProductReviews.css'

const ProductReviews = (ProductReviews) => {
    return (
        <div className="productReview">
            {productReview.map((item, index)=>(
                <ProductReviewsCard price={item.price} name={item.name}review={item.review} index={index} key={item.image}/>
            ))}
            
        </div>
    )
}

export default ProductReviews
