import React from 'react';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='bg-light'>
      <p>Contact</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" placeholder='Jane Doe' {...register("name", {required: true, maxLength: 20})} />
          {errors.name?.type === 'required' && "Name required."}
        </div>

        <div>
          <label>Email Address: </label>
          <input type="email" name="email" placeholder='jane@mail.com' {...register("email", {required: true, maxLength: 50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
          {errors.email?.type === 'required' && "Email required."}
        </div>

        <div>
          <label>Message: </label>
          <textarea type="text" name="message" rows="5" placeholder="Wow! You're so cool, Tyler. We'd love to offer you a job..." {...register("message", {required: true, maxLength: 300})} />
          {errors.message?.type === 'required' && "Message required."}
        </div>

        <input type="Submit" />
      </form>
    </div>
  );
}

export default Contact;