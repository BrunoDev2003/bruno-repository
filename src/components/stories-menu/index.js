import React, {useState} from 'react';
import {StoriesMenuContainer} from './styles';


export default function StoriesMenu() {
    

    return(

        <div className="Products-container">
            <div className="StoriesMenu-container">
                <picture>Imagem aniversário elo7</picture>
            </div>
            <div className="stories-sortable-container">
                <div className="stories-wrap-container">
                    <div className="stories-image-container">
                        <picture>
                            <div className="story-1" data-override-name="true">
                                <img 
                                    className="story-image"
                                    src="https://th.bing.com/th/id/OIP.UGVyoTi4WnEyE59xEk94pAHaFL?pid=ImgDet&rs=1"
                                    width="30%"
                                >

                                </img>
                            </div>
                            <div className="story-2">

                            </div>
                            <div className="story-3">
                                
                            </div>
                            
                        </picture>
                    </div>
                    <div className="stories-editable-text-container">

                    </div>
                </div>
            </div>
        </div>
        
    )
}