"use client"
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { isMobilePhone, isEmail } from 'validator';
import InputMask from 'react-input-mask';

type Inputs = {
  nome: string;
  email: string;
  mensagem: string;
  telefone: string;
};

export function FormContato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);
    setLoading(true);

    try {
      await emailjs.send(
        'service_84yp7qt',
        'template_3kjigjr',
        {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          mensagem: data.mensagem,
        },
        'oTSpCfwWyFBJ2ZZCA'
      );

      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  function displayErrors() {
    if (errors) {
      toast.warning('Preencha todos os campos!');
    }
  }

  const validateEmail = (value: string) => {
    return isEmail(value) || 'Por favor, insira um email válido.';
  };

  const validateTelefone = (value: string) => {
    return isMobilePhone(value, 'pt-BR') || 'Por favor, insira um telefone válido.';
  };

  return (
    <div className="w-2/5">
      <h2 className="text-5xl font-bold text-[#A79A86] mb-3">Entre em contato</h2>
      <div className="w-full">
        <form className="flex flex-wrap gap-6" onSubmit={handleSubmit(onSubmit, displayErrors)}>
          <input
            className="text-[#141213] w-full p-3 border-[1px] border-solid border-[#141213] rounded-lg"
            placeholder="Nome:"
            {...register('nome', { required: 'Campo obrigatório' })}
          />
          <input
            className="text-[#141213] w-full p-3 border-[1px] border-solid border-[#141213] rounded-lg"
            placeholder="E-mail:"
            {...register('email', { required: 'Campo obrigatório', validate: validateEmail })}
          />
          <InputMask
            mask="(99) 99999-9999"
            className="text-[#141213] w-full p-3 border-[1px] border-solid border-[#141213] rounded-lg"
            placeholder="Telefone:"
            {...register('telefone', { required: 'Campo obrigatório', validate: validateTelefone })}
          />
          <textarea
            className="h-[150px] text-[#141213] w-full p-3 border-[1px] border-solid border-[#141213] rounded-lg"
            placeholder="Mensagem:"
            {...register('mensagem', { required: 'Campo obrigatório' })}
          />
          <input
            className="transition bg-[#141213] hover:bg-[#A79A86] py-2 px-4 uppercase rounded-lg cursor-pointer"
            type="submit"
            value={loading ? 'Enviando...' : 'Enviar'}
            disabled={loading}
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
