


let arrELe = [...document.querySelectorAll('.list-item')];

function isElementInViewport(element) {

    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

window.addEventListener('scroll', () => {
    arrELe.map((ele, i) => {
        if (isElementInViewport(ele)) {
            if ((i % 2) != 0) {
                ele.style.visibility = "visible";
                ele.classList.add('fadeInLeft');
                ele.style.borderBottom = "2px solid orange"
            } else {
                if (isElementInViewport(ele)) {
                    ele.style.visibility = "visible";
                    ele.classList.add('fadeInRight');
                    ele.style.borderBottom = "2px solid orange"
                }
            }
        }
    })
})

window.addEventListener('load', () => {
    arrELe.map((ele, i) => {
        if (isElementInViewport(ele)) {
            if ((i % 2) != 0) {
                ele.style.visibility = "visible";
                ele.classList.add('fadeInLeft');
                ele.style.borderBottom = "2px solid orange"
            } else {
                if (isElementInViewport(ele)) {
                    ele.style.visibility = "visible";
                    ele.classList.add('fadeInRight');
                    ele.style.borderBottom = "2px solid orange"
                }
            }
        }
    })
})

// For Cards

let cards = [...document.querySelectorAll('.card')];
function isCardInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        (rect.bottom + 180) <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
window.addEventListener('scroll', () => {
    cards.map((ele) => {
        if (isCardInViewport(ele)) {
            ele.style.visibility = "visible";
            ele.style.animationDuration = "1.3s";

            ele.classList.add('fadeIn');
        }
    })
})
