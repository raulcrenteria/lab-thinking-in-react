import React from 'react';

const SearchBar = ({buscar,checado}) => (
    <div>
        <label htmlFor="">
        <input 
            type="text" 
            name="search" 
            onChange={buscar}
        />


        </label>
        <div><input type="checkbox" onChange={checado}/> Only show products in Stock</div>
    </div>


);


export default SearchBar;