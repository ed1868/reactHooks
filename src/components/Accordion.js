import React, { useState } from 'react';


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (value) => {
        setActiveIndex(value);
    }


    const renderedItems = items.map((item, key) => {

        return (
            <React.Fragment key={key}>
                <div className="title active" onClick={() => onTitleClick(key)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>

            </React.Fragment>
        )
    });

    return <div className="ui styled accordion">{renderedItems}</div>
}


export default Accordion;