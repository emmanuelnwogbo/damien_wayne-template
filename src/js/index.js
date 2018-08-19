import '../scss/main.scss';
const portfolioCards = document.getElementsByClassName('portfolio__card');
const portfolioCardsArr = Array.from(portfolioCards);
const portfolioCardsArrLength = portfolioCardsArr.length;
const portfolioNavList = document.getElementById('portfolio__navigation-list');
let portfolioNavListItems;

//console.log(portfolioCardsArrLength);

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
      if (i === 1) {
        portListItem.style.background = '#c7ecee'
      }
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
      if (i === 1) {
        portListItem.style.background = '#c7ecee'
      }
      portfolioNavList.appendChild(portListItem);
    })
  }
}

portfolioSlider();
portfolioNavListItems = document.getElementsByClassName('portfolio__navigation-listitem');
const portfolioNavListItemsArr = Array.from(portfolioNavListItems);

Array.from(portfolioNavListItems, item => {
  item.addEventListener('click', function () {
    portfolioNavListItemsArr.forEach(item => {
      if (item.id !== this.id) {
        item.style.background = 'transparent';
      } else {
        item.style.background = '#c7ecee';
      }
    })
    if (this.id === 'portfolio__navigation-listitem-1') {
      portfolioCardsArr.forEach(card => {
        card.style.transform = 'translateX(0)';
      })
    }
    if (this.id === 'portfolio__navigation-listitem-2') {
      portfolioCardsArr.forEach(card => {
        card.style.transform = 'translateX(-315%)';
      })
    }
    if (this.id === 'portfolio__navigation-listitem-3') {
      portfolioCardsArr.forEach(card => {
        card.style.transform = 'translateX(-635%)';
      })
    }
  })
});