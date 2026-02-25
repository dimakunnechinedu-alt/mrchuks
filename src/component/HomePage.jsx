import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section id='sec-con'>
      <div id='sec1-div1'>
       
        <p className='heart'>The Heart Of Nigeria Home <br /> Cooking</p><br />

      <p className='passion'>Handcrafted with passion,deliver with care</p><br />
      <div className='secbox-container'>
        <h4 className='discover'>Discover What's new</h4>
      </div>
      <div className='search'>
        <div className='search1'>
          <img className='searchicon' src="/Icon.png" alt="" />
          <p className='crave'>What are you craving for today?</p>
        </div>
        <div className='overlay1'></div>
      </div>
      </div>
      <div className='divclass11' >
        <div className='divclass'>
        <div className='divclass1'>
          <h2>popular Categories</h2>
        </div>
      </div>
      </div>


    <div id='hero_sec2'>
      <div className='food-category'>
      
     <div className='food-category1'>
        <img className='food-categoryimg' src="/egusi-komobeef.png" alt="" />
        <h5 className='foot_cat_name'>Jollof Delight</h5>
      </div>
      <div className='food-category1'>
        <img className='food-categoryimg' src="/egusi-komobeef.png" alt="" />
        <h5 className='foot_cat_name'>Jollof Delight</h5>
      </div>
      <div className='food-category1'>
        <img className='food-categoryimg' src="/suya.png" alt="" />
        <h5 className='foot_cat_name'>Grills &BBQ</h5>
      </div>
      <div className='food-category1'>
        <img className='food-categoryimg' src="/chin-chin.png" alt="" />
        <h5 className='foot_cat_name'>Sweet Treat</h5>
      </div>
      <div className='food-category1'>
        <img className='food-categoryimg' src="/egusi-komobeef.png" alt="" />
        <h5 className='foot_cat_name'>Jollof Delight</h5>
      </div>
      <div className='food-category1'>
        <img className='food-categoryimg' src="/suya.png" alt="" />
        <h5 className='foot_cat_name'>Jollof Delight</h5>
      </div>
    </div>
    </div>
     <div className='divclass13'>
      <div className='divclass'>
          <div className='divclass1'>
          <h2>Chef's Special</h2>
        </div>
        </div>
      
    </div>
      <div className='chef-special'>
        <div className='chef-special1'>
          <div className='chef-special2'>
            <img className='chef-cart' src="/fish porridge.png" alt="" id='fishporr' /><br />
            <h4 className='soup1' id='soup'>Spicy Tilapia Pepper Soup</h4>
            <p className='spicy' id='spice1'>A comforting and spicy soup with tender tilapia fish,a true Nigeria delicacy.</p><br />
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
            </div>
          </div>
          <div className='chef-special2'>
            <img className='chef-cart' src="/chik-rice.png" alt="" id='rice' /><br />
            <h4 className='soup1'>Jollof Rice & Fried Chicken</h4>
            <p className='spicy'>Our signature Jollof rice, cooked to  perfection, served with succulent fried chicken.</p><br />
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
            </div>
          </div>
          <div className='chef-special2'>
            <img className='chef-cart' src="/chik-rice.png" alt="" /><br />
            <h4 className='soup1'>Jollof Rice & Fried Chicken</h4>
            <p className='spicy'>Our signature Jollof rice, cooked to perfection, served with succulent fried  chicken.</p><br />
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
          </div>
          </div>
          <div className='chef-special2'>
            <img className='chef-cart' src="/chik-rice.png" alt="" /><br />
            <h4 className='smoked'>Jollof Rice & Smoked Chicken</h4>
            <p className='spicy'>Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.</p><br />
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
          </div>
          </div>
          <div className='chef-special2'>
             <img className='chef-cart' src="/chicken-rice.png" alt="" /><br />
            <h4 className='soup1'>Jollof Rice & Fried Chicken</h4>
            <p className='spicy'>Our signature Jollof rice, cooked to  perfection, served with succulent fried chicken.</p><br />
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
          </div>
          </div>
          <div className='chef-special2'>
             <img className='chef-cart' src="/komo-egusi.png" alt="" id='fishporr' /><br />
            <h4 className='soup1'>Egusi Soup & Pounded Yam</h4>
            <p className='spicy' id='spice'>Rich and savory Egusi soup with assorted  meats, paired with freshly pounded yam.</p>
            <div className='chef-special22'>
              <div className='chef-special21'>
                <h5>₦3,500</h5>
              </div>
              <Link className='chef-special21' id='chef-addcart'><h6>Add to cart</h6></Link>
          </div>
          </div>
        </div>
        
      </div>
      <div className='footerdiv'>
        <p className='addition'>Introducing Our New  Menu Addition! <br /></p><br />

      <p className='fresh'>Explore exciting new dishes,crafted with the freshest ingredients <br /> and authentic Nigeria flavour.Limited time offer!</p>
      <div className='secbox-container1'>
        <h4 className='discover'>Discover What's new</h4>
      </div>

      </div>
   
    

        
        
   
    </section>

    
    
   
  )
}

export default HomePage