import React, { memo } from 'react';

const OutputType = memo(({type,setType}) => {
    return (
        <div className="type_block">
            <label>
                <input type="radio" checked={type === 'images'}
                        onChange={() => setType("images")} />
                <span>Images</span>
            </label>
            <label>
                <input type="radio" checked={type === 'tree'}
                        onChange={() => setType("tree")} />
                <span>Tree</span>
            </label>
        </div>
    );
});

export default OutputType;