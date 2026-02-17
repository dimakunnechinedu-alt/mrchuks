import React from 'react'

function OrderPage() {
  return (
   <section className='sec-order'>
    <p className='cart'>Your Cart</p>
    <div className='div-order'>
      
      <div className='div-order1'>
        <img className='chin-img' src="cart1.png" alt="" />
        <h3 className='rice'>Jollof Rice & Fried Chicken <br /><p className='pepper'>With plantain, extra pepper sauce</p></h3>
        
      </div>
      <div  className='div-order2'>
        <div className='btn'>+</div>
        <div className='btn1'><h3>1</h3></div>
        <div className='btn2'>-</div>
      </div>
      <div  className='div-order3'>
        <div className='btn3'>N3,200</div>
        <div className='btn4'>2</div>
      </div>
      
      </div><br />
      <div className='div-order'>
      
      <div className='div-order1'>
        <img className='chin-img' src="/assorted.png" alt="" />
        <h3 className='rice'>Jollof Rice & Fried Chicken <br /><p className='pepper'>With plantain, extra pepper sauce</p></h3>
        
      </div>
      <div  className='div-order2'>
        <div className='btn'>+</div>
        <div className='btn1'><h3>1</h3></div>
        <div className='btn2'>-</div>
      </div>
      <div  className='div-order3'>
        <div className='btn3'>N3,200</div>
        <div className='btn4'>2</div>
      </div>
      
      </div><br />
      <div className='div-order'>
      
      <div className='div-order1'>
        <img className='chin-img' src="/snail.png" alt="" />
        <h3 className='rice'>Jollof Rice & Fried Chicken <br /><p className='pepper'>With plantain, extra pepper sauce</p></h3>
        
      </div>
      <div  className='div-order2'>
        <div className='btn'>+</div>
        <div className='btn1'><h3>1</h3></div>
        <div className='btn2'>-</div>
      </div>
      <div  className='div-order3'>
        <div className='btn3'>N3,200</div>
        <div className='btn4'>2</div>
      </div>
      
      </div><br />
      <div className='div-order'>
      
      <div className='div-order1'>
        <img className='chin-img' src="/cart1.png" alt="" />
        <h3 className='rice'>Jollof Rice & Fried Chicken <br /><p className='pepper'>With plantain, extra pepper sauce</p></h3>
        
      </div>
      <div  className='div-order2'>
        <div className='btn'>+</div>
        <div className='btn1'><h3>1</h3></div>
        <div className='btn2'>-</div>
      </div>
      <div  className='div-order3'>
        <div className='btn3'>N3,200</div>
        <div className='btn4'>2</div>
      </div>
      
      </div><br />
      <p className='cart'>Order Summary</p><br />
      <div className='button'>
        <p className='code'>Add a Promo Code</p>
        <input type="text"  placeholder='Enter code here'/>
        <button>Login</button>
      </div>
      <div className='summary'>
        <div className='summary1'>Subtotal</div>
        <div className='summary2'>N9,200</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Delivery Fee</div>
        <div className='summary2'>N500</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Service Fee</div>
        <div className='summary2'>N200</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Tax</div>
        <div className='summary2'>N0</div>
      </div><br />
      <div className='summary'>
        <div className='summary11'>Total</div>
        <div className='summary21'>N9,900</div>
      </div>
      <div className='summary22'>
        <div className='summary23'>Delivery</div>
        <div className='summary24'>Pick Up</div>
      </div><br />
      <p className='special-ins'>Special Instructions for Restaurant</p>
      <textarea className='tasty' name="" id="" placeholder='E.g no onion, food is too spicy, food is too hot food is tasty'></textarea><br /><br />
      <div className='summary3'>Proceed to Checkout</div>
      
      
   </section>
  )
}

export default OrderPage





