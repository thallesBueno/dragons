'use client'

import { Dragon } from '@/entities';
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function DragonDetails({ params }: { params: { dragonId: string } }) {
  const [dragon, setDragon] = useState<Dragon>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDragons = async () => {
      const response = await DragonsAPI.getDragonDetails(params.dragonId);
      
      setIsLoading(false);
      setDragon(response);
    }

    getDragons();
  }, [params.dragonId]);

  if (isLoading) {
    return <p>Carregando ...</p>
  }

  if (!dragon)
  {
    return <p>Não foi possível achar esse dragão!</p>
  }

  return (
    <div className=' flex flex-col gap-2'>
      <Link href="/" >Voltar</Link>
      <h1 className='text-4xl'>{dragon.name}</h1>
      <p className='px-2 py-0.5 w-max rounded border bg-slate-100 text-slate-900 font-bold'>{dragon.type}</p>
      <p className=''>Histórias {dragon.histories}</p>
      <p className=''>Criado em: {(new Date(dragon.createdAt)).toLocaleString()}</p>
    </div>
  )
}
