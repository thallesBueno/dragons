'use client'

import { FormEvent, useState } from "react"

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
          className="flex flex-col gap-4 w-96 bg-slate-300  p-16 rounded-md"
        >
            <h1 className="text-center mb-8 font-bold text-4xl text-slate-800">Bem Vindo</h1>
            <input
              type="text"
              placeholder="Usuário"
              required
              className="bg-slate-200 border-slate-800 border px-4 h-12 rounded-md text-slate-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              className="bg-slate-200 border-slate-800 border px-4 h-12 mb-4 rounded text-slate-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-600 px-4 h-12 rounded-md text-slate-100 font-semibold"
            >
              Entrar
            </button>
        </form>
      </div>
    </main>
  )
}
