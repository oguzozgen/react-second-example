import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * @desc The card that defines per person information 
 * @see components function component
 * @param {@} props 
 */
const Card=(props)=>{
  return(
      <div style={{margin:'3em'}}>
        <img width="100" src={props.avartar_url} />
        <div style={{display:'inline-block', marginLeft:12}}>
          <div style={{fontsize:"1.25em",fontWeight:'bold'}}>
              {props.name}
          </div>
          <div>
              {props.company}
          </div>
        </div>
      </div>
  );
};
/**
 * @desc The cardlist that defines all the card that includes people cards who are listed
 * @see components function component
 * @param {@} props 
 */
const CardList=(props)=> {
    return(
     <div>
      {props.cards.map(card=> <Card {...card} />)}
     </div> 
    );
};
/**
 * @desc hardcoded data which is calling from App component
 */
let data=[
  {
    name:"Tom Cat",
    avartar_url:"http://pre08.deviantart.net/2930/th/pre/i/2014/182/a/2/tom_cat_by_1997ael-d7ougoa.png",
    company:"stack"
  },
  {
    name:"John Doe",
    avartar_url:"https://images.maskworld.com/is/image/maskworld/bigview/john-doe-foam-latex-mask--mw-117345-4.jpg",
    company:"WebX"
  }
];


/**
 * @desc the app renders cardlist with defined cards
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardList cards={data} />
      </div>
    );
  }
}
//ReactDOM.render(<CardList />,mountNode);
export default App;
