import React, { useState, useEffect } from 'react';


const Dropdown = ({ options, selected, onSelectedChange }) => {


    const renderOptions = options.map((option, key) => {

        if(option.label === selected.label){
            return null
        }

        return (
            <div key={key} className="item" onClick={() => onSelectedChange(option)}>
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
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderOptions}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dropdown;