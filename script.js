let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');


window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    circle1.style.clipPath = `circle(${250 + scrollValue * 0.75}px at 0 0)`;
    circle2.style.clipPath = `circle(${250 + scrollValue * 0.75}px at 100% 100%)`;
})


function scrollToTop() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }

function toggleScrollToTopButton() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const button = document.querySelector('#to-top');

      // Show the button when near the bottom of the page (within 100px)
      if (scrollHeight - scrollPosition <= 100) {
          button.style.display = 'block';
      } else {
          button.style.display = 'none';
      }
}

// Add event listener for scrolling
window.addEventListener('scroll', toggleScrollToTopButton);

// Add event listener for button click
document.querySelector('#to-top').addEventListener('click', scrollToTop);

