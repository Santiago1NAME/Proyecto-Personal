import { useState } from 'react';

import Input from '@/components/form/Input';
import ButtonForm from '@/components/form/ButtonForm';

import { useAlertContext } from '@/contexts/useAlert';

import requestApiPost from '@/services/requestApiPost';

interface Props{
  setRegister: any;
}

const Register: React.FC<Props> = ({ setRegister }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { showAlertMessage } = useAlertContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = 'http://localhost:3002/home/user/register';
    const data = await requestApiPost(formData, url);
    showAlertMessage(data.status === 200 ? 'success' : 'error', data.message);
    setRegister(false);
  }

  return (
    <>
      <form className="flex flex-col z-50" onSubmit={handleFormSubmit}>
        <Input title="Nombre"  name="name" type="text" onChange={handleInputChange}/>
        <Input title="Correo electrónico" name="email" type="text" onChange={handleInputChange} />
        <Input title="Contraseña" name="password" type="password" onChange={handleInputChange} />
        <div className="w-full flex items-center justify-center">
          <ButtonForm title='Crear' />
        </div>
      </form>
    </>
  )
}

export default Register;