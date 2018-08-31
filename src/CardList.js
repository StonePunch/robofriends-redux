import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user) => {
                    return (
                        <Card
                            key={user.id} // if provided a key, react will be able to handle any eventual changes to the dom much better, the key should be unchanging
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;