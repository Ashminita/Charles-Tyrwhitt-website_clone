import React from 'react';
import './Below.css';

const Below = () => {
  return (
    <>
        <div className='summer'>
            <img src='/Images/hp3-summer-wedding-desktop.jpg' alt='Summer Wedding'/>
            <div className='overlay-text'>
                <p>
                    New shirt of the Season<br />
                    The Kensington weave
                </p>
                <button>EXPLORE MORE</button>
            </div>
        </div>
        
        <div className='photo'>
      <div>
        <img src='/Images/golf.jpg' alt='Golf Collection'/>
        <div className='card-body'>
          <p>Golf Collection</p>
          <p>Give your swing some extra power in our slick golf attire.
             Our range of versatile separates has been designed to
             effortlessly take you from the course to the clubhouse.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div>
        <img src='/Images/what makes.jpg' alt='What Makes Tyrwhitt'/>
        <div className='card-body'>
          <p>What Makes Tyrwhitt</p>
          <p>Find out about our founder, where we've come from and 
             where our business is going.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div>
        <img src='/Images/reda.jpg' alt='Fall Weddings'/>
        <div className='card-body'>
          <p>Fall Weddings</p>
          <p>Whether you're the groom or a plus-one along for the ride,
             make an impact in our fine tailoring and contemporary
             designs.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div>
        <img src='/Images/why we love.jpg' alt='Why we love Linen'/>
        <div className='card-body'>
          <p>Why we love Linen</p>
          <p>Linen is the dream warm weather fabric thanks to its  
             lightweight, breathable, and moisture-wicking properties.
             This summer, keep it breezy.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>

        
        <div className="image-container">
      <img src="/Images/lets make.jpg" alt="Let's Make" className="background-image" />
      <div className="content-overlay">
        <div className="header">
          <h1>LET'S MAKE IT PERSONAL</h1>
          <h2>With our Custom Shirt Range</h2>
        </div>
        <div className="steps">
          <div className="step">
            <h3>1. PICK YOUR FABRIC</h3>
          </div>
          <div className="step">
            <h3>2. PICK YOUR FIT</h3>
          </div>
          <div className="step">
            <h3>3. PICK YOUR STYLE</h3>
          </div>
        </div>
        <p>Choose from over 50 different fabric weaves and designs, down to the smallest button.</p>
        <h3 className="price">From just $129, Buy 2, Save 10%</h3>
        <div className="buttons">
          <button className="design-button">START DESIGNING</button>
          <button className="more-button">FIND OUT MORE</button>
        </div>
      </div>
    </div>


        <div className='image'>
            <img src='/Images/image.png' alt='Image'/>
            <img src='/Images/donate.jpg' alt='Donate'/>
        </div>

        <div className='image1'>
            <img src='/Images/image1.png' alt='Image 1'/>
        </div>

        <div className='last'>
            <img src='/Images/last.jpg' alt='Last'/>
            <div>
              <p>Explore our stores with an experience catered to you</p>
              <button>PERSONAL APPOINTMENTS</button>
            </div>
        </div>
    </>
  );
};

export default Below;