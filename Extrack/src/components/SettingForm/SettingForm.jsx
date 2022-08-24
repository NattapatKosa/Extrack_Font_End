import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import axiosInstance from '../../configs/axios';
import './SettingFrom.scss'
// const picture = 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007'


const SettingFrom = ({ user, signOut }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();




    const updateUserInfo = (data) => {
        console.log('test', data)
        axiosInstance.patch('user/me', data)
            .then(response => {
                console.log(response.data)
                navigate('/dashboard');
            }).catch(error => { console.log(error) });
    }



    return (
        <form className='setting' onSubmit={handleSubmit(updateUserInfo)}>
            <div className='setting-forms'>
                <div id='info-container' >
                    <h2>Personal Information</h2>
                    <div className='personal-infomation'>
                        <label>Username</label>
                        <input type='text' defaultValue={user.username} placeholder='username' {...register('username')} />
                        {errors.username && <span>Username is required</span>}
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='***********'
                            {...register('password')}/>
                        <br/>
                        <label>Name</label>
                        <input type='text' defaultValue={user.name} placeholder='name' {...register('name')} />
                        {errors.name && <span>Name is required</span>}
                    </div>
                    <div>
                        <span>Height</span><input type='number' defaultValue={user.height} style={{ width: '110px' }} placeholder='height' {...register('height')} />
                        <span>cm</span>
                        <br></br>
                        <span>Weight</span>
                        <input type='number' defaultValue={user.weight} style={{ width: '110px' }} placeholder='weight' {...register('weight')} />
                        <span>kg</span><br />
                        {(errors.height || errors.weight) && <span>Height and Weight are required</span>}
                    </div>
                </div>
                <div className='update-goal'>
                    <div>
                        <h2 id='goal-h2'>Update your goal</h2>
                        <div className='goal-form'>
                            <label>weekly goal</label>
                            <input type='number' defaultValue={user.weekly_goal} placeholder='days per week' {...register('weekly_goal')} />
                            <label>weight</label>
                            <input type='number' defaultValue={user.goal_weight} placeholder='goal weight' {...register('weight_goal')} />
                            <label>inspiration</label>
                            <input type='text' defaultValue={user.inspiration} placeholder='inspiration' {...register('inspiration')} />
                        </div>
                    </div>
                </div>
            </div>
            <button type='submit' style={{ width: '328px', height: '49px' }}>Save</button>
        </form>
    )
}
export default SettingFrom