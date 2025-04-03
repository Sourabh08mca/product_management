import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Productform() {
    const [name , setName] = useState()
    const [description , setDescription] = useState()
    const [price , setPrice] = useState()
    const [category , setCategory] = useState()
    const [stock , setStock] = useState()
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/productform", {name,description,price,category,stock})
        .then(result => {console.log(result)
            navigate('/')

        })
        .catch(err => console.log(err))
    }
    

  return (
    <div>
      <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-10">

            

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Add Product
            </h2>


            <form class="space-y-6" method="POST" onSubmit={Submit}>

                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input name="name" type="username" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            onChange={(e) => setName(e.target.value)}
                             />
                    </div>
                </div>

                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <div class="mt-1">
                        <input name="description" type="description" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                </div>

                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                    <div class="mt-1">
                        <input name="price" type="price" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setPrice(e.target.value)}
                            />
                    </div>
                </div>

                <div>
                    <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                    <div class="mt-1">
                        <input name="category" type="category" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setCategory(e.target.value)}
                            />
                    </div>
                </div> 

                <div>
                    <label for="stock" class="block text-sm font-medium text-gray-700">Stock</label>
                    <div class="mt-1">
                        <input name="stock" type="stock" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setStock(e.target.value)}
                            />
                    </div>
                </div>
               

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                        Add Product
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default Productform
