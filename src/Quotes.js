//src/Quotes.js
import React from 'react';

import quotes from "./quotes"; //component = Array 'quotes' of objects 'quote' with parameters: quote, character, image
import Quote from "./Quote"; // component screen dynamism with "props"

const Quotes = () => ( //Quotes is a function/component to
  <div>
    {quotes.map((quote,index)=> ( // quotes est une table d'objet
      <Quote key={index} quote={quote.quote} image={quote.image} character={quote.character} />
      //Quote comes from Quote.js WHAT IT'S DOING:
      // <Quote>
      //   <figure>
      //     <img src={props.image} alt={props.character} />
      //     <figcaption>
      //         <blockquote>{props.quote}</blockquote>
      //         <cite>{props.character}</cite>
      //     </figcaption>
      //   </figure>
      // </Quote>
    ))}
  </div>
);


export default Quotes;
