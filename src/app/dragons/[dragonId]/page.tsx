'use client'

import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import { Dragon } from '@/entities';
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function DragonDetails({ params }: { params: { dragonId: string } }) {
  const router = useRouter();
  const [dragon, setDragon] = useState<Dragon>();
  const [isLoading, setIsLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editType, setEditType] = useState('');
  const [editHistories, setEditHistories] = useState('');
  
  const getDragonDetails = async () => {

    setIsLoading(true);
    const response = await DragonsAPI.getDragonDetails(params.dragonId);
    setIsLoading(false);

    if (response) {
      setDragon(response);
    }
  }

  const deleteDragon = async () => {
    await DragonsAPI.deleteDragon(params.dragonId);
    router.push('/');
  }

  const updateDragon = async () => {
    await DragonsAPI.updateDragon(params.dragonId, editName, editType, editHistories);
    await getDragonDetails();
    setIsEditing(false);
  }

  useEffect(() => {
    getDragonDetails();
  }, [params.dragonId]);
    
  useEffect(() => {
    if (dragon) {
      setEditName(dragon.name);
      setEditType(dragon.type);
      setEditHistories(dragon.histories);
    }
  }, [isEditing, dragon]);

  if (isLoading) {
    return <p>Carregando ...</p>
  }

  if (!dragon)
  {
    return <p>Não foi possível achar esse dragão!</p>
  }

  const editingLayout = (
    <div className=' flex flex-col gap-2 items-center'>

        <Input
          placeholder='Nome'
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <Input
          placeholder='Tipo'
          value={editType}
          onChange={(e) => setEditType(e.target.value)}
        />
        <Input
          placeholder='Histórias'
          value={editHistories}
          onChange={(e) => setEditHistories(e.target.value)}
        />
        <p className='mb-4'>Criado em: {dragon.createdAt && (new Date(dragon.createdAt)).toLocaleString()}</p>

        <div className='flex gap-4'>
          <Button className='bg-red-600' onClick={() => setIsEditing(false)}>Cancelar</Button>
          <Button onClick={updateDragon}>Salvar</Button>
        </div>
      </div>
  );

  const basicLayout = (
    <div className=' flex flex-col gap-2 items-center'>
        <h1 className='text-4xl mb-2'>{dragon.name}</h1>
        <p className='px-2 py-0.5 w-max rounded border bg-slate-100 text-slate-900 font-bold'>{dragon.type}</p>
        <p className=''>Histórias: {dragon.histories}</p>
        <p className='mb-4'>Criado em: {dragon.createdAt && (new Date(dragon.createdAt)).toLocaleString()}</p>

        <div className='flex gap-4'>
          <Button className='bg-red-600' onClick={deleteDragon}>Deletar</Button>
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
        </div>
      </div>
  );


  return (
    <>
      <Link className='mb-4' href="/" >Voltar</Link>
      {isEditing ? editingLayout : basicLayout}
    </>
  )
}
