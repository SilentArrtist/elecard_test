import React from 'react';
const ImgItem = (({item,delFunc}) => {
    const date = `${new Date(item.timestamp)}`
    return (
        <div className='imageBox'>
            <div onClick={()=>delFunc(item.timestamp)} className="close">&#x2613;</div>
            <div className="meta meta_1">{date}</div>
            <div className="meta meta_2">{item.category}</div>
            <div className="meta meta_3">{item.filesize   }</div>
            <img src={`./images/${item.category}.jpeg`} alt={item.image} title={`${item.category} img`}/>
        </div>
    );
});

export default ImgItem;