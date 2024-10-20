import React from 'react'

export const RatingStars = ({rating}) => {
    const stars =[]
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            // Add filled stars if i is less than or equal to the rating
            stars.push(<i key={i} className="ri-star-fill text-yellow-500"></i>);
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Add half star for a decimal rating
            stars.push(<i key={i} className="ri-star-half-s-line text-yellow-500"></i>);
        } else {
            // Add empty stars for the remaining
            stars.push(<i key={i} className="ri-star-line text-gray-400"></i>);
        }
    }
  return (
    <div>{stars}</div>
  )
}
