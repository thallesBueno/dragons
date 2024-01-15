'use client'

import { FormEvent, useState } from "react";
import AuthenticationService from "@/services/AuthenticationService";
import { useRouter } from "next/navigation";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const isLoginSuccefull = await AuthenticationService.login(username, password);
    setIsLoading(false);

    if (isLoginSuccefull) {
      router.push('/');
    } else {
      setShowError(true);
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
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
          disabled={isLoading}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="password"
          placeholder="Senha"
          required
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className="h-4"
        >
          {showError && <p className="text-red-600 text-center">Usuário ou senha incorretos</p>}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
        >
          Entrar
        </Button>
      </form>
    </div>
  )
}
