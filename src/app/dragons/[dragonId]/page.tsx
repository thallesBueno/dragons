'use client'

import Button from '@/components/form/Button';
import { Dragon } from '@/entities';
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function DragonDetails({ params }: { params: { dragonId: string } }) {
  const router = useRouter();
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

  const deleteDragon = async () => {
    await DragonsAPI.deleteDragon(params.dragonId);
    router.push('/');
  }

  return (
    <>
      <Link className='mb-4' href="/" >Voltar</Link>
      <div className=' flex flex-col gap-2 items-center'>
        <h1 className='text-4xl mb-2'>{dragon.name}</h1>
        <p className='px-2 py-0.5 w-max rounded border bg-slate-100 text-slate-900 font-bold'>{dragon.type}</p>
        <p className=''>Histórias: {dragon.histories}</p>
        <p className='mb-4'>Criado em: {dragon.createdAt && (new Date(dragon.createdAt)).toLocaleString()}</p>

        <div className='flex gap-4'>
          <Button className='bg-red-600' onClick={deleteDragon}>Deletar</Button>
          <Button>Editar</Button>
        </div>
      </div>
    </>
  )
}
