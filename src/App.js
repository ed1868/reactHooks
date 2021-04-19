import logo from './logo.svg';
import './App.css';
// import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (

    <div>

      <br></br>
      {/* <img src={logo}></img> */}
      {/* <Accordion items={items} /> */}

      <Search />


    </div>
  )
}