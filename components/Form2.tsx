// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzgdpkq");
  if (state.succeeded) {
      return <p>Contato recebido!</p>;
  }
  return (
    
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col lg:flex-row justify-center gap-5 '>
                <input placeholder='Seu nome' id='name' name='name' className='w-full max-w[400px] lg:w-[50%]  text-start pl-5 rounded-3xl py-6 '/>
                <ValidationError prefix='name'
                field='name'
                errors={state.errors}/>

                <input placeholder='Seu e-mail' id='email' type='email' name='email' className='w-full max-w[400px] lg:w-[50%] text-start pl-5 rounded-3xl py-6 '/>
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
        </div>
            

                <textarea placeholder='Mensagem'   
                id="message"
                name="message"
                className='w-[100%] text-start pl-5 rounded-3xl py-12 '
               />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />

<button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}
function Form3() {
  return (
    <ContactForm />
  );
}
export default Form3;
