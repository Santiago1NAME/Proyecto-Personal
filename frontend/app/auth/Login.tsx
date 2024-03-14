import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/form/Input';
import ButtonForm from '@/components/form/ButtonForm';
import requestApiPost from '@/services/requestApiPost';
import { useAlertContext } from '@/contexts/useAlert';
import { useRouter } from 'next/navigation';
import { IconShowPassword, IconHidePassword } from '@/public/icons';
import { useState } from 'react';
import Cookies from 'js-cookie';

interface DataForm {
  email: string;
  password: string;
}

const Login = () => {

  const router = useRouter();
  const { showAlertMessage } = useAlertContext();
  const [showPassword, setShowPassword] = useState('password');

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico no es válido.').required('El campo Correo electrónico es requerido.'),
    password: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres.').required('El campo Contraseña es requerido.'),
  });

  const handleFormSubmit = async (values: DataForm) => {
    const url = 'http://localhost:3002/auth/login';
    const infoReq = await requestApiPost(values, url);
    showAlertMessage(infoReq.status === 'success' ? 'success' : 'error', infoReq.message);
    if(infoReq.status === 'success'){
      const { data } = infoReq;
      Cookies.set('token', data.token);
      setTimeout(() => {
        router.replace('/admin');
      }, 3000);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(showPassword == 'password' ? 'text' : 'password');
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className="flex flex-col z-50">
        <Field name="email">
          {({ field }: any) => (
            <div>
              <Input title="Correo electrónico" type='text' {...field}/>
              <ErrorMessage name="email" component="div" className="error text-[#d64937] scale-75" />
            </div>
          )}
        </Field>
        <Field name="password">
          {({ field }: any) => (
            <>
            <div className="relative flex items-center">
              <Input title="Contraseña" type={ showPassword } {...field}/>
              <div className="absolute right-2">
                { showPassword == 'password' ?
                  <IconShowPassword onClick={handleShowPassword}/>
                  :
                  <IconHidePassword onClick={handleShowPassword}/>
                }
              </div>
            </div>
            <ErrorMessage name="password" component="div" className="error text-[#d64937] scale-75" />
            </>
          )}
        </Field>
        <Link href="/otra-pagina" className="text-bluec hover:underline  hover:text-blue mb-3">¿Olvido contraseña?</Link>
        <div className="w-full flex items-center justify-center">
          <ButtonForm title='Ingresar' />
        </div>
      </Form>
    </Formik>
  )
}

export default Login;