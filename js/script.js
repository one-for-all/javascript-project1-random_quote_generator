// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create an array of quotes
const quotes = [{
  quote: 'Be yourself; everyone else is already taken.',
  source: 'Oscar Wilde',
}, {
  quote: 'It matters not what someone is born, but what they grow to be.',
  source: 'J.K. Rowling',
  citation: 'Harry Potter and the Goblet of Fire',
  year: '2000',
}, {
  quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
  source: 'Bil Keane',
}, {
  quote: 'If you don\'t stand for something you will fall for anything.',
  source: 'Gordon A. Eadie',
}, {
  quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
  source: 'Lao Tzu',
}];

// get a quote from quotes array randomly
function getRandomQuote() {
  const index = Math.floor(Math.random() * 6);
  return quotes[index];
}

// put the content of a random quote in the quote-box
function printQuote() {
  const quote = getRandomQuote();
  let innerHTML = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source} `;
  if (quote.citation) {
    innerHTML += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    innerHTML += `<span class="year"> ${quote.year} </span>`;
  }
  innerHTML += '</p>';
  document.getElementById('quote-box').innerHTML = innerHTML;
}
