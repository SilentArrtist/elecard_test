import React, { memo } from 'react';

const ModalImg = memo(({img,modalActive,setModalActive}) => {

    const toggleModal = function(e){
        e.preventDefault();
        setModalActive(!modalActive)
    }

    return (
        <div className={!modalActive?"ModalImage":"ModalImage active"} onClick={(e)=>toggleModal(e)}>
            <div className="ModalImage_body"onClick = {(e)=>e.stopPropagation()} >
                <img id='modalImg' src={`./images/${img.category}.jpeg`} alt={img.image} title={`${img.category} img`}/>  
            </div>
        </div>
    );
});

export default ModalImg;