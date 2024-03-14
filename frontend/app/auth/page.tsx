'use client';

import { useState } from 'react';

import Login from './Login';
import Register from './Register';

import ButtonFormRegister from '@/components/form/ButtonFormRegister';
import Alert from '@/components/alerts/Alert';

const Auth = () => {

  const [register, setRegister] = useState(false);

  return (
    <main className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[500px] min-w-[400px] flex flex-col rounded-lg shadow-lg border-solid border-2 border-[#f2f2f2]">
        <section className="header px-6 pt-6 flex justify-center">
          <img className="w-40" src="logo-com.svg" alt="Logo" />
        </section>
        <section className="body p-10 rounded-t-[30px]">
          <h1 className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900">{ register ? 'Crear cuenta' : 'Iniciar sesión'}</h1>
          { register ?
              <Register setRegister={setRegister}/>
            :
              <Login />
          }
        </section>
      </div>
      <div className="w-[500px] min-w-[400px] flex items-center justify-center mt-5">
        <ButtonFormRegister title={ register ? 'Iniciar sesión' : 'Crear cuenta'} register={register} setRegister={setRegister} />
      </div>

      <Alert />
      
    </main>
  )
}

export default Auth;