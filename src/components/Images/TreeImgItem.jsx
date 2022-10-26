import React from 'react';
import { memo } from 'react';
import { useState } from 'react';
import ModalImg from './ModalImg';
const TreeImgItem = memo(({item,index}) => {
    const [modalActive,setModalActive] = useState(false)
    const formatedDate = `${new Date(item.timestamp)}`;

    return (
        <div className='TreeImageBox'>
            <details className='rootDetail'>
                <summary>{index}</summary>
                <div className='detailItem'>category: {item.category}</div>
                <div className='detailItem'>filesize: {item.filesize}</div>
                <div onClick={()=>setModalActive(true)} className='detailItem'>image: <img src={`./images/${item.category}.jpeg`} alt={item.image} title={`${item.category} img`}/></div>
                <div className='detailItem'>timestamp: {formatedDate}</div>
            </details>
            <ModalImg img = {item} modalActive = {modalActive} setModalActive = {setModalActive} />
        </div>
    );
});

export default TreeImgItem;