import React, { useEffect, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { useNavigate,Link } from "react-router-dom";
import axiosInstance from '../../configs/axios'
import './SignInForm.scss'
import '../NavBar/NavBar'
import NavBar from '../NavBar/NavBar';

const SignInForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const login = (account, password) => {
        axiosInstance.post("auth/signin", {
            account: account,
            password: password,
        })
            .then(() => {
                console.log("login success");
                window.alert("login success, welcome!");
                navigate("../activities"); // 
            })
            .catch(() => {
                console.log("Login failed");
                window.alert("Login failed. please try again");
            });
    };

    const onSubmit = (data) => {
        login(data.account, data.password);
    };

    return (
        <div>
            <div className="signinform-container">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Sign In</h2>
                    <input type="username" placeholder='username or email'{...register("account", { required: true })} />
                    {errors.account && <p className='error'>Please enter username or Password</p>}
                    <br />
                    <input type="password" placeholder='password'{...register("password", { required: true })} />
                    {errors.password && <p className='error'>Please enter password</p>}
                    <br />
                    <button>Sign In</button>
                    <h5>Don't have an account? <span><Link to='/signup'>Sign up</Link></span></h5>
                </form>
            </div>

        </div>
    )

}

export default SignInForm