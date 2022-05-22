const quotes = [
    {
      quotes : "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
      author : "George Santayana",
    },
    {
      quotes : "Always forgive your enemies; nothing annoys them so much.",
      author : "Oscar Wilde",
    },
    {
      quotes : "One can survive everything, nowadays, except death, and live down everything except a good reputation.",
      author : "Oscar Wilde",
    },
    {
      quotes : "The wisest men follow their own direction.",
      author: "Euripides",
    },
    {
      quotes : "Nothing in the universe is contingent, but all things are conditioned to exist and operate in a particular manner by the necessity of the divine nature.",
      author: "Baruch Spinoza",
    },
    {
      quotes : "The direction in which education starts a man will determine his future life.",
      author : "Plato",
    },
    {
      quotes : "There are, in every age, new errors to be rectified and new prejudices to be opposed.",
      author : "Samuel Johnson",
    },
    {
      quotes : "Success is never final.",
      author : "Sir Winston Churchill",
    },
    {
      quotes : "In Hollywood a marriage is a success if it outlasts milk.",
      author : "Rita Rudner",
    },
    {
      quotes : "Patience is the best remedy for every trouble.",
      author : "Titus Maccius Plautus",
    },
  ]

  const quotePart = document.querySelector(".quoteDiv span:first-child");
  const authorPart = document.querySelector(".quoteDiv span:last-child");
  const randomQuote = Math.floor(Math.random()*quotes.length);
  quotePart.innerText = quotes[randomQuote].quotes;
  authorPart.innerText = `-${quotes[randomQuote].author}-`;