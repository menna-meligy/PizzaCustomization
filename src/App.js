
import React from 'react'
import Sizes  from './Sizes'
import Toppings from './Toppings'
import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer'

const App = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  function handleSizeChange(size) {
    console.log('size:', size);
    // Set the size to an empty string if no size is selected
    if (!size) {
      setSize('');
      setTotalCost(0);
      return;
    }
  
    setSize(size);
    let cost;
    switch (size) {
      case "Normal Pizza":
        cost = 4.9;
        break;
      case "Family Pizza":
        cost = 7.9;
        break;
      default:
        cost = 0;
        break;
    }
    console.log('cost:', cost);
    setTotalCost(cost);
  }
  
  
  
  
  

  function handleToppingChange(topping) {
    if (!size) {
      // Display an error message indicating that the user must select a size first
      alert("You have to select a size first");
  
      // Find the checkbox element for the topping and uncheck it
      const checkbox = document.querySelector(`input[value="${topping}"]`);
      checkbox.checked = false;
      setTotalCost(0);
      return;
    }
  
    setToppings(prevToppings =>
      prevToppings.includes(topping)
        ? prevToppings.filter(t => t !== topping)
        : [...prevToppings, topping]
    );
  }

  function calculateTotalCost() {
    const toppingCost = toppings.length * 5;
    const sizeCost = size === 'Normal Pizza' ? 4.9 : size === 'Family Pizza' ? 7.9 : 0;
    return toppingCost + sizeCost;
  }

  function printSelectedPizzaSize() {
    let items = [];

    if (size) {
      items.push(size);
    }
    return items.join(', ');
  }

  function printSelectedToppings(){
    let items = [];
    if (toppings.length > 0) {
      items = [...items, ...toppings];
    }

    return items.join(', ');
  }
  React.useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [size, toppings]);

  return (
    <Router>
    <div>
    <Navbar />
    <div className="container">
    <Sizes totalCost={totalCost} onSizeChange={handleSizeChange} />
    <Toppings onToppingChange={handleToppingChange} />
    {/* Calculate and update total cost */}
    <br />
    <br />
    {/* <p>Total cost: ${props.totalCost}</p> */}
    <p>Total cost: ${totalCost}</p>
    <p>{printSelectedPizzaSize()} 
    <br />
    Toppings : {printSelectedToppings()}</p>
    </div>
    <Footer />
   
    </div>
    </Router>
  )
}



export default App
