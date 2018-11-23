import React from 'react';

const ProductTable = ({data,name,checked}) => (
    <tbody>
        <tr>
             <th>{data.length > 0 ? name: ""}</th>
        </tr>
        
            {data.map((datito, i)=> 
            !checked ? 
            <tr>
                
                <td style={datito.stocked ? null : styles.texto}>{datito.name}</td>
                <td>{datito.price}</td>
            </tr>
            :
            [
                datito.stocked ? 
                
                <tr>
                
                <td style={datito.stocked ? null : styles.texto}>{datito.name}</td>
                <td>{datito.price}</td>
            </tr>
            : null
            ]
                
            
            
        
        )}
            
       
    </tbody>
    

);

const styles ={
    texto:{
        color: "red"
    }
}

export default ProductTable;

