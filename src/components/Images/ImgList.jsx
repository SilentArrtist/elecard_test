import React from 'react';
import ImgItem from './ImgItem';
import TreeImgItem from './TreeImgItem';
import '../../styles/Image.css'
import '../../styles/ModalImage.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ImgList = ({images,type,sortedImagesForTree,delFunc}) => {

    return (
        <>
        {type==="images"
        &&
                <TransitionGroup className="imagesBlock" component="div">
                        {images.map((item)=>
                        <CSSTransition
                        key={item.timestamp}
                        timeout={500}
                        classNames="imageBox"
                        >
                            <ImgItem item={item} delFunc={delFunc}/>
                        </CSSTransition>
                        )}
                    </TransitionGroup>
        ||
            <div className="TreeImagesBlock">
                <details>
                <summary>Wrapper</summary>
                {sortedImagesForTree.map((item,index)=>
                 <TreeImgItem key={item.timestamp} item={item} index = {index}/>
                )}
                </details>
            </div> 
        }
        </>
    );
};

export default ImgList;