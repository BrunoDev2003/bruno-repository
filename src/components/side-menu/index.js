import React, {useState} from 'react';

import {SideMenuContainer} from './styles';
import Icon from '@mui/material/Icon';

export default function SideMenu() {
    return (
        <SideMenuContainer>
            <div className="container">
                <ul>
                    <li>Categorias</li>
                </ul>
            </div>
        </SideMenuContainer>
    )
}