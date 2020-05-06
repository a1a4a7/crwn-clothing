import React, { Component } from 'react';
import ReactDOm from 'react-dom';
import { MenuItem } from '../../components/menu-item/menu-item.component'
import './homepage.styles.scss';
import { Directory} from '../../components/directory/directory.component'

export class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='homepage'>
                <Directory className='directory-menu'>


                </Directory>

            </div>
        )
    }



}