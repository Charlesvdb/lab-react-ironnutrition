import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from "./foods.json"
import Foodbox from "./Foodbox.js"
import Searcharea from './Searcharea.js';

class App extends React.Component {
  
  state = {
    foods : foods,
  }

  filterFoods = (e) => {
    let foodsSearcher = [...this.state.foods].filter(food => {
        return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      foods: foodsSearcher 
    })
  }

  render() {
    return (
      <div className="App">
        <h1><strong>IronNutrition</strong></h1>

        <input className="searchinput" type="text" onChange={this.filterFoods} placeholder="Search food"/>

        {          
          this.state.foods.map((foodItem,index) => {
                return <Foodbox
                  key={index}
                  index={index}
                  {...foodItem}  
                />
              }                 
          ) 
        }

      </div>
    );
  }
}

export default App;
