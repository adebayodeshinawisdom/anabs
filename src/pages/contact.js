import React from 'react'
import { useForm } from 'react-hook-form'

export default function contact () {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className='mx-8 md:mx-20 my-10'>
        <p className='text-2xl font-bold'>Contact Us</p>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10'>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} className='w-full bg-slate-600 h-10 rounded-xl text-slate-200' />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className='w-full bg-slate-600 h-10 rounded-xl text-slate-200' />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} className='w-full bg-slate-600 h-10 rounded-xl text-slate-200' />
      <textarea {...register("Message", {required: true})}  className='w-full bg-slate-600 h-20 rounded-xl text-slate-200'/>

      <input type="submit" className='w-full bg-slate-600 h-10 text-slate-200 rounded-xl' value="Submit" />
    </form>
 
    </div>
  )
}


