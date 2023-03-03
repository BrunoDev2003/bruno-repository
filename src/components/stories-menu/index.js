import React, {useState} from 'react';
import {StoriesMenuContainer} from './styles';


export default function StoriesMenu() {


    return(

        <div className="products-container">
            <div className="storiesmenu-container">
                <picture>Imagem aniversário elo4</picture>
            </div>
            <div className="stories-sortable-container">
                <div className="stories-wrap-container">
                    <div className="stories-image-container">
                        <picture>
                            <a href="#" className="story-link"></a>
                        </picture>
                    </div>
                    <div className="stories-editable-text-container">
                        Texto deve ser passado por prop
                    </div>
                </div>
            </div>
        </div>
        
    )
}