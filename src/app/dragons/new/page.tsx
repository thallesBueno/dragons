'use client'

import React, { FormEvent, useState } from 'react'
import Button from '@/components/form/Button'
import Input from '@/components/form/Input'
import DragonsAPI from '@/services/DragonsAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewDragonPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  const onSubmit = async  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await DragonsAPI.createDragon(name, type, histories);

    router.push('/');
  }

  return (
    <>
      <Link className='mb-4' href="/">Voltar</Link>
      <form
        onSubmit={onSubmit}
        className='flex flex-col gap-4 items-center'
      >
        <h1 className='text-4xl mb-8'>Cadastro de dragão</h1>
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome'
            required
          />
        </div>
        <div>
          <Input
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder='Tipo'
            required
          />
        </div>
        <div className='mb-8'>
          <Input
            value={histories}
            onChange={(e) => setHistories(e.target.value)}
            placeholder='Histórias'
            required
          />
        </div>
        <div>
          <Button
            type='submit'
          >
            Cadastrar dragão
          </Button>
        </div>
      </form>
    </>
  )
}
