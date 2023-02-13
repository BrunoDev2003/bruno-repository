import React from 'react';

import {MenuBarContainer} from './styles';
function MenuBar() {
    return (
        <MenuBarContainer>
            <menubar_container>
                elo4
                <select>
                    <option value="first">Materiais</option>
                    <option value="second">Produtos</option>
                    <option value="third">Pessoas e lojas</option>
                </select>
                    <input type="text" name="Buscar"placeholder="Buscar materiais"></input>
                    <button type="submit" name="Buscar">buscar</button>
                    
                
            </menubar_container>
        </MenuBarContainer>
    )
}

export default MenuBar;