import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons

const Banner = () => {
  const bannerItems = [
    {
      id: 1,
      title: 'Crime Alert: Stay Informed',
      description: 'Get the latest updates on crimes in your area.',
      image: 'https://images.unsplash.com/photo-1674049404913-2005c02245fa?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Safety Tips for Everyone',
      description: 'Learn how to protect yourself and your loved ones.',
      
      image: 'https://images.unsplash.com/photo-1524860769472-246b6afea403?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Crime Statistics',
      description: 'Analyze crime trends with our detailed statistics.',
     
      image: 'https://cdn.pixabay.com/video/2021/11/26/99048-650523565_large.mp4',
    },
  ];

  const carouselRef = useRef(null); // Reference to the OwlCarousel instance

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1400,
    dots: false,
    items: 1,
  };

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Custom Navigation Buttons */}
      <div className="nav-btn nav-left" onClick={handlePrevClick}>
        <FaChevronLeft />
      </div>
      <div className="nav-btn nav-right" onClick={handleNextClick}>
        <FaChevronRight />
      </div>

      {/* Owl Carousel */}
      <OwlCarousel ref={carouselRef} className="owl-theme" {...options}>
        {bannerItems.map((item) => (
          <div className="item" key={item.id}>
            <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
              {item.image.endsWith('.mp4') ? (
                // Render Video
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    // position: 'absolute',
                  }}
                >
                  <source src={item.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // Render Image
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                ></div>
              )}

              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1,
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                  zIndex: 2,
                }}
              >
                <h2 style={{ fontSize: '3rem', margin: '0 0 10px' }}>{item.title}</h2>
                <p style={{ fontSize: '1.4rem' }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
