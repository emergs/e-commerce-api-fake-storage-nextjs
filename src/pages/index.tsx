import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


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

  console.log(products)

  return (
    <main className="flex flex-col min-h-screen bg-orange-700 text-xl">
      <div className='flex justify-end'>
        <span><Link href="/register">Cadastre-se</Link></span>
        <span><Link href="/login">Entrar</Link></span>
      </div>
      <div className='flex flex-row justify-between h-20 w-screen bg-orange-800 grid grid-cols-2 gap-4'>
        <div className='h-full flex'>
          <h1 className='self-center'>Fake Storage</h1>
        </div>
        <ul className='flex flex-row justify-evenly self-center'>
          <li>home</li>
          <li>promoções</li>
          <li>contato</li>
          <li>carreira</li>
          <li>sobre</li>
        </ul>
      </div>
      <div className='h-full w-full'>
        <ul className='flex flex-wrap justify-center'>
          {
            products.map((elem) => {
              return <li className='w-96 h-auto p-5 flex flex-col'>
                <img className='h-50  w-full' src={elem.image} alt={elem.title} />
                <span>{elem.title}</span>
                <span>{`R$${elem.price}`}</span>
                <p>{elem.description}</p>
              </li>
            })
          }
        </ul>
      </div>
    </main>
  )
}
