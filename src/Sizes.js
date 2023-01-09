/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Sizes = (props) => {
function handleChange(event) {
  // const { totalCost } = props;
    props.onSizeChange(event.target.value)
    }

  return (
    <div className='div'>
    <form className='add-form parent right' >
   
    <h3 className='size'> Size: </h3>
    <div class="parent" >
    <div class="image-container">
    <img  src={require('./normal.PNG')} alt="My Photo" className='imgN ' />
    <div className='inputAndText'>
      <input className='inputN'
        type="radio"
        name="size"
        value="Normal Pizza"
        defaultChecked={null}
        onChange={handleChange}
      />
      <p className='n'>Normal (4.9$)</p>
      </div>
    </div>

    <div class="image-container left">

    <img  src={require('./family.PNG')} alt="My Photo" className='imgF' />
    <div className='inputAndText'>
      <input className='form-control inputF'
        type="radio"
        name="size"
        value="Family Pizza"
        defaultChecked={null}
        onChange={handleChange}
      />
      <p className='f'>  Family (7.9$)</p>
     </div>
    </div>
    </div>
    {/* <p>Total cost: ${totalCost}</p> */}
    </form>
  </div>
  )
}

export default Sizes