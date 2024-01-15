'use client'

import Button from '@/components/form/Button';
import { Dragon } from '@/entities';
import AuthenticationService from '@/services/AuthenticationService';
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter();
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    AuthenticationService.logout();
    router.push('/login');
  }

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
    <>
      <div className='flex justify-end mb-2'>
        <Button onClick={logout}>Sair</Button>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-1/2'>
          <h1 className='text-center text-4xl mb-8'>Dragons</h1>

          <div className='flex justify-end mb-4'>
            <Link href="/dragons/new">
              <Button>Cadastrar dragão</Button>
            </Link>
          </div>

          <div className='flex justify-center'>
            <div className='w-full flex flex-col'>
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
      </div>
    </>
  )
}
