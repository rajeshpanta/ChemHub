import React from 'react';

const ChemicalList = ({ chemicals }) => (
    <div>
        {chemicals.length > 0 ? (
            chemicals.map(chemical => (
                <div key={chemical.id} style={{ padding: "10px", margin: "5px", border: "1px solid #ccc" }}>
                    <h3>{chemical.name}</h3>
                    <p>{chemical.description}</p>
                    <p>CAS Number: {chemical.casNumber}</p>
                </div>
            ))
        ) : (
            <p>No chemicals found</p>
        )}
    </div>
);

export default ChemicalList;
