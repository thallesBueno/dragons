'use client'

import { Dragon } from '@/entities';
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDragons = async () => {
      const response = await DragonsAPI.getDragons();
      
      setIsLoading(false);
      setDragons(response);
    }

    getDragons();
  }, []);

  if (isLoading) {
    return <p>Carregando ...</p>
  }

  return (
    <div>
      <h1 className='text-center text-4xl mb-8'>Dragons</h1>
      <div className='flex justify-center'>
        <div className='w-1/2 flex flex-col'>
          {dragons.map(dragon => (
            <Link key={dragon.id} href={`dragons/${dragon.id}`}>
              <div
                className='py-6 text-center flex flex-col gap-2 justify-center items-center border cursor-pointer bg-slate-800'    
              >
                <h2 className='text-xl font-bold'>{dragon.name}</h2>
                <p className='px-2 py-0.5 rounded border bg-slate-100 text-slate-900 font-bold'>{dragon.type}</p>
              </div>
            </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
