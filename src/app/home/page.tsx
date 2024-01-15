'use client'

import DragonsAPI from '@/services/DragonsAPI';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    const getDragons = async () => {
      const response = await DragonsAPI.getDragons();
      
      setDragons(response)
    }

    getDragons();
  }, []);

  return (
    <main className="w-screen min-h-full p-12 bg-slate-900">
      <h1 className='text-center text-4xl mb-8'>Dragons</h1>
      <div className='w-full flex justify-center'>
        <div className='w-2/3 flex flex-col'>
          {dragons.map(dragon => (
              <div
                className='h-32 text-center flex flex-col justify-center items-center border cursor-pointer bg-slate-800'
                key={dragon.id}
              >
                <h2 className='text-xl font-bold'>{dragon.name}</h2>
                <p>{dragon.type}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
