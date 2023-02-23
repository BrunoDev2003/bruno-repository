import React, {useState} from 'react';

import {MenuBarContainer} from './styles';
import Icon from '@mui/material/Icon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function MenuBar() { 

    //função que atualiza o estado do nome é o setNameValue
    const [nameValue, setNameValue] = useState(['Buscar Materiais','Buscar Produtos','Buscar Pessoas e lojas']);
    const onChangeHandle = event => {
        setNameValue(event.target.value);
    }


    
    const [inputValue, setInputValue] = useState('Buscar Materiais', ' Buscar Produtos', ' Buscar Pessoas e lojas');


    const onChangeHandler = event => {
        setInputValue(event.target.value);
    }
    
    return (
        <MenuBarContainer>
            <menubar_container>
                <div className="select-container">
                elo4
                <select>
                    <option value="first">Materiais</option>
                    <option value="second">Produtos</option>
                    <option value="third">Pessoas e lojas</option>
                </select>
                    <input type="text" name="Buscar" onChange={onChangeHandler} value={inputValue} placeholder={nameValue}></input>
                    <button type="submit" name="Buscar">buscar</button>
                    <ShoppingCartIcon color="primary"></ShoppingCartIcon>
                    <ChatBubbleIcon color="primary"></ChatBubbleIcon>
                    <FavoriteIcon color="primary"></FavoriteIcon>
                </div>
                
            </menubar_container>
        </MenuBarContainer>
    )
}
