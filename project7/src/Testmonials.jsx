import React from 'react'
import { useState } from 'react'
import './style.css'
const Testmonials = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const testimonials = [
  {
    quote: "This is the best product I've ever used!",
    author: "Jane Doe",
  },
  {
    quote: "I highly recommend this product to everyone!",
    author: "John Smith",
  },
  {
    quote: "This product has completely changed my life!",
    author: "Bob Johnson",
  },
  {
    quote: "Absolutely amazing! I couldn't be happier with my purchase.",
    author: "Emily Davis",
  },
  {
    quote: "The quality is outstanding and exceeded my expectations.",
    author: "Michael Brown",
  },
  {
    quote: "I was impressed by how easy and convenient this product is.",
    author: "Sarah Wilson",
  },
  {
    quote: "One of the best purchases I've made in a long time.",
    author: "David Miller",
  },
  {
    quote: "The product works perfectly and looks great too!",
    author: "Jessica Taylor",
  },
  {
    quote: "I would definitely recommend this to my friends and family.",
    author: "Daniel Anderson",
  },
  {
    quote: "Fantastic product with excellent quality and performance.",
    author: "Olivia Thomas",
  },
  {
    quote: "It solved exactly the problem I was looking to fix.",
    author: "James Moore",
  },
  {
    quote: "I'm extremely satisfied with the results. Totally worth it!",
    author: "Sophia Martin",
  },
  {
    quote: "Simple, reliable, and exactly what I needed.",
    author: "William Jackson",
  },
  {
    quote: "Great experience from start to finish. Highly recommended!",
    author: "Ava White",
  },
  {
    quote: "I didn't expect such great quality at this price.",
    author: "Christopher Harris",
  },
  {
    quote: "This product is now something I use every single day.",
    author: "Mia Clark",
  },
  {
    quote: "Excellent customer experience and an even better product.",
    author: "Matthew Lewis",
  },
  {
    quote: "I would happily buy this product again.",
    author: "Isabella Walker",
  },
];
const prevClick=()=>{
setCurrentIndex((currentIndex+testimonials.length-1)% testimonials.length)
}
const nextClick =()=>{
setCurrentIndex((currentIndex+testimonials.length+1)% testimonials.length)
}
// console.log((currentIndex+testimonials.length+1)% testimonials.length)
  return (
    <div className='testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
        </div>

        <div className="testimonials-author">
               - {testimonials[currentIndex].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={prevClick}>Prev</button>
            <button onClick={nextClick}>Next</button>
        </div>
    </div>
    
  )
}

export default Testmonials