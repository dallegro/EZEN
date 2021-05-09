import React from 'react';

const FriendItem = ({ item }) => {
    //비구조할당
    const {name, image, age} = item

    return (
        <li>
            <p><img src={image} alt={name}/></p>
            <div>
                <strong>이름 : {name}</strong>
                <span>나이 : {age} 살</span>
                </div>
        </li>
                
    );
};

export default FriendItem;