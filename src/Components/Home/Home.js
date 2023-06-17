import React, { useState, useCallback, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleParams from './Particles';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';
import search_book from '../../Assets/Icons/search-book.png';

function Home() {
  const [loaded, setLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await setLoaded(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Calculate and set the height of the container on window resize
      const container = document.getElementById('particle-container');
      const windowHeight = window.innerHeight;
      container.style.height = `${windowHeight}px`;
    };

    handleResize(); // Set initial height on component mount

    window.addEventListener('resize', handleResize); // Add event listener for window resize
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <div id="particle-container" className="h-screen">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleParams} />
      {loaded === true ? (
        <div className="p-6 max-w-xl rounded-lg shadow-md absolute border border-2px left-[50%] translate-x-[-50%] mt-40 max-sm:w-4/5 max-sm:mt-20 max-sm:p-3">
          

          <p className="mb-3 text-[18px] font-normal text-black">
            

          </p>

          <span className="float-right mt-2">
            <Link to="books">
              <Button text="Find your book based on various fields like author..." icon={search_book} />
            </Link>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Home;



