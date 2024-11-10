import "../app/globals.css";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };
  
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('E-mail inválido.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número.');
      return;
    }

    alert(`Registrando com: ${email}, ${password}`);

    router.push('/login');
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Criar Conta</h1>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="border rounded-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Crie sua senha"
              className="border rounded-md p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button type="submit" className="bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
