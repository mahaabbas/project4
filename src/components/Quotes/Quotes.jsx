import React from 'react';
import {useState, useEffect} from 'react';
import './Quotes.css'

function Quotes() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    // http://api.quotable.io/random
  
    useEffect(() => {
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    },[]);
  
    let fetchNewQuote = () => {
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    }
    return (
      <div className="quotes-container">
           <div className="quote">
               <span className='textheading'>Here's a little motivation on us for when that art block sarts to set in!</span>
              <h2 className='body-text'>{quote}</h2>
              <small>-{author}-</small>
           </div><br />
           <button className="btn" onClick={fetchNewQuote}>New Quote</button>
      </div>
    );
  }
  

export default Quotes;