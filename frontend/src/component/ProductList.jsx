import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ProductList() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setCards(result.data))
        .catch(err => console.log(err))
    })

    
    


  return (
    
    <div>
     <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Product List</h1>
    
    
</div>
<div className='mb-6'> 
<Link to="/productform" class="bg-green-400 text-black px-4 py-2 rounded-md text-2xl font-bold " >Add card</Link>
</div>

<section id="Projects"
                       class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                   
                   {cards.map((card)=> {
                       return (
                   
                   
                       <div  class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                           <a href="">
                               <img src="https://www.shutterstock.com/image-illustration/store-facade-large-storefronts-wellilluminated-600w-2301241861.jpg"
                                       alt="Product" class="object-cover h-56 w-72 rounded-t-xl" /> </a>
                   
                   <div class="flex flex-row justify-center mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl"></p>
                                   
                                   
                               </div>
                               <div className="flex justify-center items-center mb-2">
                                                       <p className="text-blue-600 text-lg">Name:</p>
                                                       <span class="text-lg font-bold text-black">
                                                          {card.name}
                                                          </span>
                                                   </div>
                                      
                                                   <div className="flex justify-center items-center mb-2">
                                                       <p className="text-blue-600 text-lg">Description:</p>
                                                       <span className="text-lg font-bold text-black">
                                                           {card.description}
                                                       </span>
                                                   </div>
                                <div class="px-4 flex flex-row justify-center mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl">Price:</p>
                                   <span class="text-lg font-bold text-black truncate block capitalize">
                                   {card.price}
                                   </span>
                                   
                               </div>

                               <div class="px-4 flex flex-row justify-center mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl">Category:</p>
                                   <span class="text-lg font-bold text-black truncate block capitalize">
                                   {card.category}
                                   </span>
                                   
                               </div>

                               <div class="px-4 flex flex-row justify-center mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl">Stock:</p>
                                   <span class="text-lg font-bold text-black truncate block capitalize">
                                   {card.stock}
                                   </span>
                                   
                               </div>      

                               <div>
                               <div class="flex justify-center items-center">
                               
                   <div class="relative inline-flex  group mt-4 space-x-2">
                       <div
                           class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                       </div>
                       <Link to="" href="#" title="Get quote now"
                           class="relative inline-flex items-center justify-center px-8 py-1 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Edit
                       </Link>
                       <Link  href="#" title="Get quote now"
                           class="relative inline-flex items-center justify-center px-8 py-1 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Delete
                       </Link>
                   </div>
                   </div>
                               </div>
                           
                       </div>
                );
            })}

                   </section>





<script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>

    </div>
  )
}

export default ProductList
