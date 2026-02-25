import React from 'react'



function AccountPage() {
  return (
    <>
    <p className='payment'> Payment </p><br />
    <section className='sec-account'>
      < p className='pay'>Pay With:</p>
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
      <p className='cardpay'>Card Number</p>
      <input className='input-card' type="number" placeholder='1234 5678 90111 121' />
      <div className='div-card'>
        <div className='div-card1'>
          <p className='expire-date'>Expiration Date</p>
          <input className='expire' type="date" placeholder='date & time' />
          
        </div>
        <div className='div-card2'>
          <p className='cvv'>CVV</p>
          <input className='expire' type="text" placeholder='cvv' />
        </div>
      </div>
      <div className='div-save'>
        <img className='frame' src="/Frame 21.png" alt="" />
        <p className='save'>Save card details</p>
      </div>
      <div className='div-payment1'>N9,900</div><br />
      <p className='data'>Your personal data will be used to process your order, support your experience  throughout this website, and for other purposes described in our privacy policy.</p>
    </section>
    
    </>
    
  )
}

export default AccountPage