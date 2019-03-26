//src/Quotes.js
import React from 'react';

import quotes from "./quotes";

const Quotes = () => ( //Quotes est une fonction
  <div>
    {quotes.map(quote => ( // quotes est une table d'objet
      <img src={quote.image} alt={quote.character}/> //quote est un element de quotes
    ))}
  </div>
);


export default Quotes;
