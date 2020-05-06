import React, { Component } from 'react';
import ReactDOm from 'react-dom';
import './menu-item.styles.scss'


export const MenuItem = ({ title, imageUrl, size }) => {



    return (


        <div className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image' />
            <div className='content'>
                <div className='title'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW
                                </span>
                </div>

            </div>

        </div>



    )
}



