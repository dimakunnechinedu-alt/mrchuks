import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='sec'>
      
      <div className='footerdiv1'>
        <div className='footerdiv11'>
          <div className='footerdiv2'>
            <div className='footerdiv22'>
              <h4 className='kitchen'>chuk's Kitchen</h4>
            </div>
            <p className='flavour'>Bring the authentic <br />flavour of Nigeria <br /> home cooking to your <br /> table, with passion <br />and care.</p>
            
          </div>
        <div className='footerdiv2'>
          
           <div className='footerdiv22'>
            <h4 className='quick'>Quick Links</h4>
           </div>
           <Link>
            <div className='footerdiv22'>
              <h6 className='links'>Home</h6>
            </div>
            <div className='footerdiv22'>
              <h6 className='links'>Explore</h6>
            </div>
            <div  className='footerdiv22'>
              <h6 className='links'>Order</h6>
            </div>
            <div  className='footerdiv22'>
              <h6 className='links'>Account</h6>
            </div>
            
            </Link>
        </div>
        <div className='footerdiv2'>
          <div className='footerdiv22'>
            <h4 className='quick'>Contact Us</h4>
          </div>
            <div className='footerdiv22'>
              <h5 className='links'>+23409025080101</h5>
            </div>
            <div  className='footerdiv22'>
              <h5 className='links'>hello@chukskitchen.com</h5>
            </div>
            <div  className='footerdiv22'>
              <h5 className='links'>123 Taste Blvd.Lagos,Nigeria</h5>
            </div>
        </div>
        <div className='footerdiv2'>
          <Link>
          <div className='footerdiv22'>
            <h5 className='links'>Facebook</h5>
          </div>
            <div className='footerdiv22'>
              <h5 className='links'>Instagram</h5>
            </div>
            <div  className='footerdiv22'>
              <h5 className='links'>Twitter</h5>
            </div>
            <div  className='footerdiv22'>
              <h5 className='links'>Linkedin</h5>
            </div>
            
            </Link>
        </div>
        </div>
      </div>
    </section>

    
  )
}

export default Footer