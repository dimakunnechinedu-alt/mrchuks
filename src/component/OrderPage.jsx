import React from 'react'

function OrderPage() {
  return (
   <section className='sec-order'>
    <p className='cart'>Your Cart</p>
    
   
     <div className='div-order'>
      <div className='div-order1'>
        <img className='orederimg' src="/chik-rice.png" alt="" />
      </div>
      <div className='div-order2'>
        <div className='div-order3'>
          <p className='jollof-rice'>Jollof Rice & Fried Chicken</p>
          <p className='extra'>With plantain, extra pepper sauce</p>
        </div>
        <div className='div-order4'>
          <div className='div-order5'>
            <h2 className='addsigns'>+</h2>
            <h4 className='delete3'>1</h4>
            <h2 className='addsigns' >-</h2>
          </div>
          <div className='div-order5'>
            <h5 className='delete2'>3500</h5>
            <h4 className='delete'>X</h4>
          </div>
        </div>
      </div>
     </div>




      
      
      <p className='cart'>Order Summary</p><br />
      <div className='button'>
        <p className='code'>Add a Promo Code</p>
        <input type="text"  placeholder='Enter code here'/>
        <button>Login</button>
      </div>
      <div className='summary'>
        <div className='summary1'>Subtotal</div>
        <div className='summary2'>₦9,200</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Delivery Fee</div>
        <div className='summary2'>₦500</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Service Fee</div>
        <div className='summary2'>₦200</div>
      </div>
      <div className='summary'>
        <div className='summary1'>Tax</div>
        <div className='summary2'>₦0</div>
      </div><br />
      <div className='summary'>
        <div className='summary11'>Total</div>
        <div className='summary21'>₦9,900</div>
      </div>
      <div className='summary22'>
        <div className='summary23'>Delivery</div>
        <div className='summary24'>Pick Up</div>
      </div><br />
      <p className='special-ins'>Special Instructions for Restaurant</p>
      <textarea className='tasty' name="" id="" placeholder='E.g no onion, food is too spicy, food is too hot food is tasty'></textarea><br /><br />
      <div className='summary3'>Proceed to Checkout</div><br />
      
       
      
   </section>
   
  )
}

export default OrderPage





