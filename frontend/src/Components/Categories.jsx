import React from 'react'
import cat1 from '../../src/assets/category-1.jpg'
import cat2 from '../../src/assets/category-2.jpg'
import cat3 from '../../src/assets/category-3.jpg'
import cat4 from '../../src/assets/category-4.jpg'
import { Link } from 'react-router-dom'


function Categories() {
  const categories = [{
    name: "Accesories",
    path: "accesories",
    image: cat1
  }, {
    name: "Dress collection",
    path: "dress-collection",
    image: cat2
  },
    , {
      name: "Jewellery",
    path: "jewellery",
    image: cat3
  },
    , {
      name: "Cosmetics",
    path: "cosmetics",
    image: cat4
  }]
  return (
    <>
      <div className="product__grid ">
        {
          categories.map((category)=>(
           <Link to={`/categories/${category.path}`} key={category.name} className='categories__card'>
            <img src={category.image} alt={categories.name} />
            <h4>{category.name}</h4>

           </Link>
          ))

        }

      </div>
    </>
  )
}

export default Categories
