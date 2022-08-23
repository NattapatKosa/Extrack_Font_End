import React from "react"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import axiosInstance from "../../configs/axios"
import './SignUpForm.scss'
import { useNavigate } from "react-router-dom"

const  SignUpForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm({
        // defaultValues: {
        //     username: '',
        //     name: '',
        //     email: '',
        //     password: '',
        //     dateOfBirth: '',
        //     height: '',
        //     weight: ''
        // }
    });
    const onSubmit = async (data) => {
        const response = await axiosInstance.post("auth/signup", data)
        console.log(response.data);
        navigate("../setgoal");
      };

    return (
        <div className='regis-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src='./assets/SignInImage.png' alt="pic" />
                <h2>Create Account</h2>
                <input {...register('username', { required: true, minLength: 6, maxLength: 15 })} id='username' placeholder='Username' /><br />
                {errors.username && errors.username.type === 'required' && <span>Invalid or empty username.</span>}
                {errors.username && (errors.username.type === 'minLength' || errors.username.type === 'maxLength') && <span>Username should be between 6-15 characters.</span>}
                <br></br>
                <input {...register('name', { required: true, minLength: 1, maxLength: 50 })} id='name' placeholder='Name' /><br />
                {errors.name && errors.name.type === 'required' && <span>What's your name?</span>}
                {errors.name && (errors.name.type === 'minLength' || errors.name.type === 'maxLength') && <span>Name should be between less than 50 characters.</span>}
                <br></br>
                <input {...register('email', { required: true })} type='email' placeholder='email' /><br />
                {errors.email && errors.email.type === 'required' && <span>Please enter a valid email.</span>}
                <br></br>
                <input {...register('password', { required: true, minLength: 8, maxLength: 16 })} id='password' type="password" placeholder="Password" /><br />
                {errors.password && errors.password.type === 'required' && <span>Password is required</span>}
                {errors.password && (errors.password.type === 'minLength' || errors.password.type === 'maxLength') && <span>Your password must be between 8-16 characters.</span>}
                <br></br>
                <input {...register('dateOfBirth', { required: true })} id='dateOfBirth' placeholder="Date of birth"  type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}   /><br />
                <br></br>
                <input {...register('height', { required: true })} id='height' type="number" placeholder="Height(cm)" /><br />
                {errors.height && errors.height.type === 'required' && <span>What's your height?</span>}
                <br></br>
                <input {...register('weight', { required: true })} id='weight' type="number" placeholder="Weight(kg)" /><br />
                {errors.weight && errors.weight.type === 'required' && <span>What's your weight?</span>}
                <br></br>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;