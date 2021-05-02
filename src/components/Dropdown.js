import React, { useState, useEffect } from 'react';


const Dropdown = (props) => {
    let options = props.options;

    const renderOptions = options.map((option,key) => {
        return (
            <div key={key} className="item">
                {option.label}
            </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select Color</div>
                    <div className="menu visible transition">
                        {renderOptions}
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Dropdown;