import '../scss/main.scss';
const portfolioCards = document.getElementsByClassName('portfolio__card');
const portfolioCardsArr = Array.from(portfolioCards);
const portfolioCardsArrLength = portfolioCardsArr.length;
const portfolioNavList = document.getElementById('portfolio__navigation-list');

console.log(portfolioCardsArrLength);

function portfolioSlider() {
  let arr = [];
  if (portfolioCardsArrLength < 4) {
    return null;
  }
  if (portfolioCardsArrLength > 3 && portfolioCardsArrLength < 7) {
    arr = [1, 2];
    return arr.forEach(i => {
      const portListItem = document.createElement('li')
      portListItem.classList.add('portfolio__navigation-listitem');
      portListItem.id = `portfolio__navigation-listitem-${i}`
      console.log(portListItem)
      portfolioNavList.appendChild(portListItem);
    })
  }
  if (portfolioCardsArrLength > 6 && portfolioCardsArrLength < 10) {
    arr = [1, 2, 3]
    return arr.forEach(i => {
      const portListItem = document.createElement('li')
      portListItem.classList.add('portfolio__navigation-listitem');
      portListItem.id = `portfolio__navigation-listitem-${i}`
      console.log(portListItem)
      portfolioNavList.appendChild(portListItem);
    })
  }
}

portfolioSlider();
let counter = 0;
const portfolioNavListItems = document.getElementsByClassName('portfolio__navigation-listitem');
Array.from(portfolioNavListItems, item => {
  item.addEventListener('click', function () {
    if (this.id === 'portfolio__navigation-listitem-1') {
      portfolioCardsArr.forEach(card => {
        return card.style.transform = 'translateX(0)';
      })
    }
    if (this.id === 'portfolio__navigation-listitem-2') {
      portfolioCardsArr.forEach(card => {
        return card.style.transform = 'translateX(-315%)';
      })
    }
    if (this.id === 'portfolio__navigation-listitem-3') {
      portfolioCardsArr.forEach(card => {
        return card.style.transform = 'translateX(-635%)';
      })
    }
  })
});