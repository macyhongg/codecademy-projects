var $quote = document.getElementById('quote');
var $author = document.getElementById('author');
var $message = document.getElementById('message');

async function newMessage() {
  const response = await fetch('https://dummyjson.com/quotes/random')
  const jsonData = await response.json();
  console.log(jsonData);

  $quote.textContent = `"${jsonData.quote}"`;
  $author.textContent = `- ${jsonData.author}`;
}
