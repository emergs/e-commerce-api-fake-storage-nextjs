import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { log } from 'console'

interface IProducts {
  category: string,
  description: string,
  id: string,
  title: string,
  image: string,
  price: string,
  rating: any
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])


  return (
    <main className="flex flex-col min-h-screen bg-orange-700 text-xl">
      <div className='flex flex-row justify-between h-20 w-screen bg-orange-800 grid grid-cols-2 gap-4'>
        <div className='h-full flex'>
          <h1 className='self-center'>Fake Storage</h1>
        </div>
        <ul className='flex flex-row justify-evenly self-center'>
          <li>dddd</li>
          <li>ssss</li>
          <li>aaaa</li>
          <li>jjj</li>
          <li>lll</li>
        </ul>
      </div>
      <div className='h-full w-full'>
        <ul>
          {
            products.map((elem) => {
              return <li><img src={elem.image} alt={elem.title} /></li>
            })
          }
        </ul>
      </div>
    </main>
  )
}
