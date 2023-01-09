import React from 'react'

const Toppings = (props ) => {
    const toppings = ['Cheese', 'Pepperoni', 'salami' , 'Bacon' , 'chicken'];

  function handleChange(event) {
    props.onToppingChange(event.target.value);
  }

  return (
     <div className='div Toppingscontainer'>
         <h3 className='toppings'> Toppings: </h3>
         <div className='parentToppings'>
         <img  src={require('./1.jpg')} alt="My Photo" className='childToppingsimg'/>
         <img  src={require('./2.PNG')} alt="My Photo" className='childToppingsimg' />

         <img  src={require('./3.PNG')} alt="My Photo" className='childToppingsimg' />

         <img  src={require('./4.PNG')} alt="My Photo" className='childToppingsimg' />

         <img  src={require('./5.PNG')} alt="My Photo" className='childToppingsimg' />
         </div>
         <div className='parentToppings'>
      {toppings.map(topping => (
        <div key={topping} >
          <input className='form-control  childToppings'
            type="checkbox"
            name="topping"
            value={topping}
            onChange={handleChange}
          />
          {topping}
        </div>
      ))}
      </div>
    </div>
  )
}

export default Toppings