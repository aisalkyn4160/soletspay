const header = document.querySelector(".header");
const headerHeight = document.querySelector('.header').clientHeight
const headerShadow = document.querySelector(".header-shadow");
console.log(headerShadow);
const main = document.querySelector("main");
console.log(headerHeight);
const burger = document.querySelector(".burger");

document.onscroll = () => {
    let scrollY = window.scrollY 
    if (scrollY > headerHeight) {
        headerShadow.classList.add("fixed");
    } else {
        headerShadow.classList.remove("fixed");
    }
}
burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})



// ---------------------------------------tabs--------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-links a');
    const tabs = document.querySelectorAll('.tab');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            tabLinks.forEach(link => link.parentElement.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            this.parentElement.classList.add('active');
            target.classList.add('active');
        });
    });
});



// ----------------------------------accordion--------------------------------------
let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active') && this.classList.contains('aside-nav-item')) {
        this.parentElement.classList.add('active');
    } else{
        this.parentElement.classList.remove('active');
    }

    if(this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        content.style.maxHeight = null;
    }
  });
}
// -------------------------gift-btn------------------------

const giftBtn1 = document.querySelectorAll('.gift-btn1');

giftBtn1.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('switch');
    })
})

// -------------------------show-more------------------------
const showMoreBtn = document.querySelector('.show-more');
const moreText = document.querySelector('.more-text');

showMoreBtn.addEventListener('click', () => {
    moreText.style.maxHeight = moreText.scrollHeight + 'px';
    moreText.style.visibility = 'visible';
    showMoreBtn.style.display = 'none';
})


// --------------------------------price-list ------------------------
const priceList = document.querySelector('.price-list');
const priceListLi = document.querySelectorAll('.price-list li');

priceList.nextElementSibling.style.borderTop = '1px solid rgba(255, 255, 255, 0.05)';
priceList.nextElementSibling.style.paddingTop = '20px';
priceListLi.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('active');
    })
})