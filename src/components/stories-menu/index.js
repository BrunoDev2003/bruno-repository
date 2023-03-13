import React, {useState} from 'react';
import {StoriesMenuContainer} from './styles';
import Elo7Birthday from '../../../src/assets/imgs/elo7Img.png';
import PascoaImg from '../../../src/assets/imgs/PascoaImg.jpg';


export default function StoriesMenu() {
    

    return(

        <div className="Products-container">
            <StoriesMenuContainer>
                            <div className="story-1" data-override-name="true">
                            
                                <img 
                                    className="story-image"
                                    src={Elo7Birthday}
                                >
                                    
                                </img>
                                
                            </div>
                            </StoriesMenuContainer>
            <div className="StoriesMenu-container">
                
            </div>
            <div className="stories-sortable-container">
                <div className="stories-wrap-container">
                    <div className="stories-image-container">
                        <picture>
                        <StoriesMenuContainer>
                            <div className="story-2" data-override-name="true">
                            <img 
                                className="story2-image"
                                src={PascoaImg}
                                    
                            >
                                    
                            </img>

                            </div>
                        </StoriesMenuContainer>
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