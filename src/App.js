import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

const items = [{
  title: "Why is React js the best?",
  context: "because it is"
},
{
  title: "Why is Eddie the best?",
  context: "because he is"
}, {
  title: "Coin base IPO?",
  context: "406"
},

]

export default () => {
  return <div>
    <Accordion />
  </div>
}