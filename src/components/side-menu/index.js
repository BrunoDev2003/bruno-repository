import React, {useState} from 'react';

import {SideMenuContainer} from './styles';
import Icon from '@mui/material/Icon';

export default function SideMenu() {
    return (
        <SideMenuContainer>
            <div className="sidemenu-container">
                <ul>
                    <h1>Categorias</h1>
                    <li>Acessórios</li>
                    <li>Aniversário e Festas</li>
                    <li>Bebê</li>
                    <li>Bijuterias</li>
                    <li>Bolsas e Carteiras</li>
                    <li>Casa</li>
                    <li>Casamento</li> 
                    <li>Convites</li>
                </ul>
            </div>
            <div className="sidemenu-container_2">
            <ul>
                    <h1>Materiais para artesanato</h1>
                    <li>Bijuterias e acessórios</li>
                    <li>Papel e scrapbooking</li>
                    <li>Patchwork e costura</li>
                </ul>
            </div>
            <div className="sidemenu-container_2">
                <button>Ver Todos</button>
            </div>
        </SideMenuContainer>
    )
}