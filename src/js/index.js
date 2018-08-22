import '../scss/main.scss';
const portfolioCards = document.getElementsByClassName('portfolio__card');
const portfolioCardsArr = Array.from(portfolioCards);
const portfolioCardsArrLength = portfolioCardsArr.length;
const portfolioNavList = document.getElementById('portfolio__navigation-list');
const sideNavIcon = document.getElementById('header__sidenav-icon');
const sideNavCheck = document.getElementById('header__sidenav-checkbox');
const container = document.getElementById('container');
let portfolioNavListItems;
//console.log(portfolioCardsArrLength);

sideNavIcon.addEventListener('click', function () {
  sideNavCheck.checked = true;
})

container.addEventListener('click', function () {
  sideNavCheck.checked = false;
})

function renderPortfolioSliderNav() {
  let arr = [];
  let navItemIdCount = 1;
  if (window.matchMedia('(max-width: 1024px)').matches) {
    return portfolioCardsArr.forEach(card => {
      const portListItem = document.createElement('li')
      portListItem.classList.add('portfolio__navigation-listitem');
      portListItem.id = `portfolio__navigation-listitem-${navItemIdCount++}`;
      //console.log(navItemIdCount, portListItem)
      if (navItemIdCount === 2) {
        portListItem.style.background = '#c7ecee'
        console.log('hello')
      }
      portfolioNavList.appendChild(portListItem);
    })
  }

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
      //console.log(portListItem)
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

renderPortfolioSliderNav();
navigatePortfolioItems();

function navigatePortfolioItems() {
  portfolioNavListItems = document.getElementsByClassName('portfolio__navigation-listitem');
  const portfolioNavListItemsArr = Array.from(portfolioNavListItems);
  const noOfCards = [1, 2, 3, 4, 5, 6, 7];
  if (window.matchMedia('(max-width: 1024px)').matches) {
    return Array.from(portfolioNavListItems, item => {
      item.addEventListener('click', function () {
        portfolioNavListItemsArr.forEach(item => {
          if (item.id !== this.id) {
            item.style.background = 'transparent';
          } else {
            item.style.background = '#c7ecee';
          }
        });

        noOfCards.forEach(num => {
          if (this.id === `portfolio__navigation-listitem-${num}`) {
            let val = (num * 100);

          }
        })
      })
    })

  }

  Array.from(portfolioNavListItems, item => {
    item.addEventListener('click', function () {
      portfolioNavListItemsArr.forEach(item => {
        if (item.id !== this.id) {
          item.style.background = 'transparent';
        } else {
          item.style.background = '#c7ecee';
        }
      });
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
}