import React from 'react'
import { useEffect, useState } from 'react'

function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            setBackToTopButton(true);
        }
        else{
            setBackToTopButton(false);
        }
    })
  }, []);

  const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <div>
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right:  "1px",
                height: "50px",
                width: "70px",
                fontSize: "40px"
            }}
            onClick={scrollUp}
            >^</button>

        )}
    </div>
  )
}

export default BackToTop