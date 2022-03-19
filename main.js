//Get and define needed variables / elements
let randomQuoteBtn = document.querySelector(".dice__container");
let quoteMeta = document.querySelector(".card__meta");
let quoteElement = document.querySelector(".card__quote");
let dividerImg = document.querySelector(".divider-img");
let randomQuote;
let quoteID;

// API Call to get Advice Object
function quoteAPICall() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://api.adviceslip.com/advice");
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      randomQuote = JSON.parse(request.response);
      quoteID = randomQuote.slip.id;
      quoteMeta.innerHTML = `ADVICE #${quoteID}`;
      quoteElement.innerHTML = `"${randomQuote.slip.advice}"`;
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  };
}

//Event listener on QuoteBtn
randomQuoteBtn.addEventListener("click", function () {
  quoteAPICall();
});

//Onresize function to change divider Img on mobile screen size
window.onresize = function () {
  if (window.innerWidth < 375) {
    dividerImg.src = "/assets/pattern-divider-mobile.svg";
  } else {
    dividerImg.src = "/assets/pattern-divider-desktop.svg";
  }
};
