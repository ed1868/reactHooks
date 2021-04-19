import React, { useState , useEffect } from 'react';



const Search = () => {

    const [term, setTerm] = useState(null);


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Me: </label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>
        </div>
    )
}

export default Search;