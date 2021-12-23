import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon']);
    

    // const handleAdd = () => {
    //     setCategories(['HunterXHUnter', ...categories]);
    // }


    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory />
        <hr />
        

        <ol>
            {
                categories.map( (category, i) => {
                    return <li key={ category }>{category}</li>
                })
            }
        </ol>
            
        </>
    )
}
