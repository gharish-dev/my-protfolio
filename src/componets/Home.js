import React , { useEffect, useRef } from 'react'
//import pdf from '../pdf/harish.pdf'
import pdf from '../pdf/Harish.pdf'
import hero from '../data/hero.json'
import Typed from 'typed.js'



function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Harish",
        "I'm MERNSTACK DEVELOPER"
        
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
     <div className="container home" id="home">
     <div className="left"
      data-aos="fade-left"
      data-aos-duration="1000" >
      <h1 ref={typedRef}></h1>

      <a 
      href={pdf} download="Harish.pdf" 
      className='btn btn-outline-warning'>Download resume</a>
     </div>


     <div className="right"
      data-aos="fade-right"
      data-aos-duration="1000" >
          <div className="img">
        

        <img  src={`/assest/${hero.imgSrc}`} alt=""/>
        </div>

     </div>
     
     
     
     </div>
    
    
    </>
  )
}

export default Home