import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';



const items = [{
  title: "Why is React js the best?",
  content: "because it is"
},
{
  title: "Why is Eddie the best?",
  content: "because he is"
}, {
  title: "Coin base IPO?",
  content: "406"
},

]

const options = [
  {
    label: "red",
    value: "red"
  },
  {
    label: "green",
    value: "green"
  },
  {
    label: "blue",
    value: "blue"
  }
]
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);


  return (

    <div>

      <br></br>
      {/* <img src={logo}></img> */}
      {/* <Accordion items={items} /> */}

      {/* <Search /> */}

      <Dropdown options={options}
        onSelectedChange={setSelected}
        selected={selected}

      />



    </div>
  )
}