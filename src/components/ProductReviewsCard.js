import React from 'react'
import '../styles/ProductReviewsCard.css'

const ProductReviewsCard = (image,index,price,name,review) => {
    return (
        <div className="productReviewCard">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewsCard