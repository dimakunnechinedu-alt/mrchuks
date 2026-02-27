import React from 'react'



function AccountPage() {
  return (
    <>
    
    <section className='sec-account'>
      <div className='payment1'>
          <p className='payment'> Payment </p>
        
      </div><br />
      
     <div className='pay1'>
       < p className='pay'>Pay With:</p>
     </div>
      <div className='div-account' >
          <div className='div-account1'>
          <img className='cardimg' src="/card.png" alt="" />
          <h5 className='card'>Card</h5>
        </div>
        <div className='div-account1'>
          <img src="/bank.png" alt="" />
           <h5 className='card'>Bank</h5>
        </div>
        <div className='div-account1'>
          <img src="/bank.png" alt="" />
           <h5 className='card'>Transfer</h5>
        </div>
      </div><br />
      <div className='cardpay1'><p className='cardpay'>Card Number</p></div>
    <div className='inputcard1'>
            <input className='input-card' type="number" placeholder='1234 5678 90111 121' />
    </div>
    <div className='expiredate0'>
      <div className='expiredate1'>
        <p className='expire-date2'>Expiration Date</p></div>
      <div className='expiredate1'><p>CVV</p></div>
      
      </div>
      <div className='expire2'>
        <div className='expire22'>
          <input className='time' type="date" placeholder='date & time' />
        </div>
        <div className='expire23'>
          <input className='time' type="number" placeholder='989' />
          
        </div>
      </div><br />
      <div className='divsave'>
        <div className='div-save'>
        <img className='frame' src="/Frame 21.png" alt="" />
        <p className='save'>Save card details</p>
      </div>
      </div><br />
      <div className='div-payment1'>N9,900</div><br />
      <div className='data'>
        <p className='data'>Your personal data will be used to process your order, support your experience  throughout this website, and for other purposes described in our privacy policy.</p>
      </div>
    </section>
    
    </>
    
  )
}

export default AccountPage