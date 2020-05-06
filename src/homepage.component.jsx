import React, { Component } from 'react';
import ReactDOm from 'react-dom';
import './homepage.styles.scss';

export class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='homepage'>
                <div className='directory-menu'>
                    <div className='menu-item'>
                        <div className='content'>
                            <div className='title'>
                                <h1 className='title'>HATS</h1>
                                <span className='subtitle'>SHOP NOW
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='menu-item'>
                        <div className='content'>
                            <div className='title'>
                                <h1 className='title'>HATS</h1>
                                <span className='subtitle'>SHOP NOW
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className='menu-item'>
                        <div className='content'>
                            <div className='title'>
                                <h1 className='title'>HATS</h1>
                                <span className='subtitle'>SHOP NOW
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='menu-item'>
                        <div className='content'>
                            <div className='title'>
                                <h1 className='title'>HATS</h1>
                                <span className='subtitle'>SHOP NOW
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}