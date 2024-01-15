'use client'

import { FormEvent, useState } from "react";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className="w-full h-full flex items-center justify-center bg-slate-900">
      <div>
        <form
          onSubmit={onSubmitForm}
          className="flex flex-col gap-4 w-96 bg-slate-300 p-16 rounded-md"
        >
          <h1 className="text-center mb-8 font-bold text-4xl text-slate-800">Bem Vindo</h1>
          <Input
            type="text"
            placeholder="Usuário"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            type="password"
            placeholder="Senha"
            required
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </main>
  )
}
