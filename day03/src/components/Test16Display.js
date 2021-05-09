import React from 'react';

const Test16Display = ({name, ani}) => {
    return (
        <div>
            <h2>
                {name}님이 좋아하는 동물은 {ani} 입니다.
            </h2>
            <h2>
               {` ${name}님이 좋아하는 동물은 ${ani} 입니다.`}
            </h2>

        </div>
    );
};

export default Test16Display;