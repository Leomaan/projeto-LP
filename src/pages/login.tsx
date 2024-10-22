import "../app/globals.css";
export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">
            Seja <span className="text-red-600">Bem vindo!</span>
          </h1>
          <p className="text-gray-600">Faça login para começar</p>
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold" htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Entre com o seu e-mail" 
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <form action=""></form>
            <label className="text-sm font-semibold" htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Entre com a sua senha" 
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
  
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2"/>
            <label htmlFor="remember" className="text-sm">Lembrar usuário?</label>
          </div>
          
          <button className="bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition">
            ENTRAR
          </button>
  
          <p className="text-sm text-center text-gray-500">
            Não possui credenciamento? <a href="#" className="text-red-500 font-bold">CRIAR CONTA</a>
          </p>
        </div>
      </div>
    );
  }
  