import React from 'react'

function OrderPage() {
  return (
   <section className='sec-order'>
    <p className='cart1'>Your Cart</p>
    
   
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
            <h2 className='addsigns' id='adds'>+</h2>
            <h4 className='delete3'>1</h4>
            <h2 className='addsigns' >-</h2>
          </div>
          <div className='div-order5'>
            <h5 className='delete2'>3500</h5>
            <h4 className='delete'>X</h4>
          </div>
        </div>
      </div>
     </div><br />
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
            <h2 className='addsigns' id='adds'>+</h2>
            <h4 className='delete3'>1</h4>
            <h2 className='addsigns' >-</h2>
          </div>
          <div className='div-order5'>
            <h5 className='delete2'>3500</h5>
            <h4 className='delete'>X</h4>
          </div>
        </div>
      </div>
     </div><br />
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
            <h2 className='addsigns' id='adds'>+</h2>
            <h4 className='delete3'>1</h4>
            <h2 className='addsigns' >-</h2>
          </div>
          <div className='div-order5'>
            <h5 className='delete2'>3500</h5>
            <h4 className='delete'>X</h4>
          </div>
        </div>
      </div>
     </div><br />
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
            <h2 className='addsigns' id='adds'>+</h2>
            <h4 className='delete3'>1</h4>
            <h2 className='addsigns' >-</h2>
          </div>
          <div className='div-order5'>
            <h5 className='delete2'>3500</h5>
            <h4 className='delete'>X</h4>
          </div>
        </div>
      </div>
     </div><br />
      
      <div className='cart1'>
        <p className='cart'>Order Summary</p><br /></div>
     
        <div className='code11'>
          <p className='code'>Add a Promo Code</p>
        </div>
        <div className='promo'>
           <div className='button'>
          <input type="text"  placeholder='Enter code here' id='code'/>
        <button>Login</button>
        </div>
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
        <div className='summary-delivery'>
          <div className='summary23'>Delivery</div>
        <div className='summary24'>Pick Up</div>
        </div>
      </div><br />
      <div className='special-ins1'>
        <p className='special-ins'>Special Instructions for Restaurant</p>
      </div>
      <div className='textareadiv'>
        <div className='textareadiv1'>
          <textarea className='tasty' name="" id="" placeholder='E.g no onion, food is too spicy, food is too hot food is tasty'></textarea><br /><br />
        </div>
      </div>
      <div className='checkout'>
        <div className='checkout1'>
          <div className='summary3'>Proceed to Checkout</div><br />
        </div>
      </div>
      
       
      
   </section>
   
  )
}

export default OrderPage





