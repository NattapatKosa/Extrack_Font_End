import React from 'react'
import './Card.scss'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export default function Card({card, onRemove}) {
    const navigate = useNavigate()

    const removeCard = () => {
        onRemove(card)
    }

    const editCard = () => {
        // OnEditMode(card)
        navigate(`../edit/${card._id}`, { replace: true })
    }


    return (
        <div className='card' key={card._id}>
            <div className='card-content'>
                <div className='card-head'>
                    <p>{card.date.split('T')[0]}</p>
                    <div className='card-button'>
                        <a onClick={removeCard}><img src='./assets/remove.png' className="remove" alt='remove' /></a>
                        <a onClick={editCard}><img src='./assets/edit.png' className="edit" alt='edit' /></a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-detail">
                        <p>type: {card.activity_type}</p>
                        <p>activity: {card.activity_name}</p>
                        <p>duration: {card.duration}</p>
                    </div>
                    <div className="card-text">
                        <p>{card.comment}</p>
                    </div>
                </div>
            </div>
            {/* <div className='card-button'>
                <a><img src={edit} className="edit"/></a>
                <a onClick={removeCard}><img src={remove} className="remove"/></a>
            </div> */}
        </div>
    )
}