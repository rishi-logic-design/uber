import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1585393948915-011d724d4c2e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 flex justify-between flex-col w-full text-black'>
        <img className='w-16 ml-8' src="src\img\Uber.png"/>
        <div className='py-5 pb-7 px-10'>
          <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full inline-block bg-black text-white py-2 rounded mt-2'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home