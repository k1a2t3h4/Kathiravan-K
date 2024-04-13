document.addEventListener("DOMContentLoaded", function() {
    // Image sliding functionality for container 1
    const prevBtn0 = document.querySelector('.container11-1 .prev-btn');
    const nextBtn0 = document.querySelector('.container11-1 .next-btn');
    const images0 = document.querySelectorAll('.container11-1 .product-images img');
    let currentIndex0 = 0;

    // Set the initial index for container 1
    
    showImage(currentIndex0, images0);

    prevBtn0.addEventListener('click', () => {
        currentIndex0 = (currentIndex0 - 1 + images0.length) % images0.length;
        showImage(currentIndex0, images0);
    });

    nextBtn0.addEventListener('click', () => {
        currentIndex0 = (currentIndex0 + 1) % images0.length;
        showImage(currentIndex0, images0);
    });

    // Image sliding functionality for container 2
    const prevBtn1 = document.querySelector('.container11-2 .prev-btn1');
    const nextBtn1 = document.querySelector('.container11-2 .next-btn1');
    const images1 = document.querySelectorAll('.container11-2 .product-images1 img');
    let currentIndex1 = 0;

   
    showImage(currentIndex1, images1);

    prevBtn1.addEventListener('click', () => {
        currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
        showImage(currentIndex1, images1);
    });

    nextBtn1.addEventListener('click', () => {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        showImage(currentIndex1, images1);
    });

    // Image sliding functionality for container 3
    const prevBtn2 = document.querySelector('.container11-3 .prev-btn2');
    const nextBtn2 = document.querySelector('.container11-3 .next-btn2');
    const images2 = document.querySelectorAll('.container11-3 .product-images2 img');
    let currentIndex2 = 0;

   
    showImage(currentIndex2, images2);

    prevBtn2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
        showImage(currentIndex2, images2);
    });

    nextBtn2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        showImage(currentIndex2, images2);
    });
const prevBtn3 = document.querySelector('.container11-4 .prev-btn3');
const nextBtn3 = document.querySelector('.container11-4 .next-btn3');
const images3 = document.querySelectorAll('.container11-4 .product-images3 img');
let currentIndex3 = 0;

showImage(currentIndex3, images3);

prevBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
    showImage(currentIndex3, images3);
});

nextBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    showImage(currentIndex3, images3);
});
const prevBtn4 = document.querySelector('.container11-5 .prev-btn4');
const nextBtn4 = document.querySelector('.container11-5 .next-btn4');
const images4 = document.querySelectorAll('.container11-5 .product-images4 img');
let currentIndex4 = 0;

showImage(currentIndex4, images4);

prevBtn4.addEventListener('click', () => {
    currentIndex4 = (currentIndex4 - 1 + images4.length) % images4.length;
    showImage(currentIndex4, images4);
});

nextBtn4.addEventListener('click', () => {
    currentIndex4 = (currentIndex4 + 1) % images4.length;
    showImage(currentIndex4, images4);
});
const prevBtn5 = document.querySelector('.container11-6 .prev-btn5');
const nextBtn5 = document.querySelector('.container11-6 .next-btn5');
const images5 = document.querySelectorAll('.container11-6 .product-images5 img');
let currentIndex5 = 0;

showImage(currentIndex5, images5);

prevBtn5.addEventListener('click', () => {
    currentIndex5 = (currentIndex5 - 1 + images5.length) % images5.length;
    showImage(currentIndex5, images5);
});

nextBtn5.addEventListener('click', () => {
    currentIndex5 = (currentIndex5 + 1) % images5.length;
    showImage(currentIndex5, images5);
});
const prevBtn6 = document.querySelector('.container11-7 .prev-btn6');
const nextBtn6 = document.querySelector('.container11-7 .next-btn6');
const images6 = document.querySelectorAll('.container11-7 .product-images6 img');
let currentIndex6 = 0;

showImage(currentIndex6, images6);

prevBtn6.addEventListener('click', () => {
    currentIndex6 = (currentIndex6 - 1 + images6.length) % images6.length;
    showImage(currentIndex6, images6);
});

nextBtn6.addEventListener('click', () => {
    currentIndex6 = (currentIndex6 + 1) % images6.length;
    showImage(currentIndex6, images6);
});
const prevBtn7 = document.querySelector('.container11-8 .prev-btn7');
const nextBtn7 = document.querySelector('.container11-8 .next-btn7');
const images7 = document.querySelectorAll('.container11-8 .product-images7 img');
let currentIndex7 = 0;

showImage(currentIndex7, images7);

prevBtn7.addEventListener('click', () => {
    currentIndex7 = (currentIndex7 - 1 + images7.length) % images7.length;
    showImage(currentIndex7, images7);
});

nextBtn7.addEventListener('click', () => {
    currentIndex7 = (currentIndex7 + 1) % images7.length;
    showImage(currentIndex7, images7);
});
const prevBtn8 = document.querySelector('.container11-9 .prev-btn8');
const nextBtn8 = document.querySelector('.container11-9 .next-btn8');
const images8 = document.querySelectorAll('.container11-9 .product-images8 img');
let currentIndex8 = 0;

showImage(currentIndex8, images8);

prevBtn8.addEventListener('click', () => {
    currentIndex8 = (currentIndex8 - 1 + images8.length) % images8.length;
    showImage(currentIndex8, images8);
});

nextBtn8.addEventListener('click', () => {
    currentIndex8 = (currentIndex8 + 1) % images8.length;
    showImage(currentIndex8, images8);
});
const prevBtn9 = document.querySelector('.container11-10 .prev-btn9');
const nextBtn9 = document.querySelector('.container11-10 .next-btn9');
const images9 = document.querySelectorAll('.container11-10 .product-images9 img');
let currentIndex9 = 0;

showImage(currentIndex9, images9);

prevBtn9.addEventListener('click', () => {
    currentIndex9 = (currentIndex9 - 1 + images9.length) % images9.length;
    showImage(currentIndex9, images9);
});

nextBtn9.addEventListener('click', () => {
    currentIndex9 = (currentIndex9 + 1) % images9.length;
    showImage(currentIndex9, images9);
});

    // Function to show/hide images
    function showImage(index, images) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const productItems = document.querySelectorAll('.product-list > .product-item');
  const productContainers = document.querySelectorAll('.product-showcase > .container11');

  // Set the initial index
  let currentIndex = 0;

  // Hide all containers except the one corresponding to the initial index
  hideAllContainers();
  showContainer(currentIndex);

  // Function to hide all containers
  function hideAllContainers() {
    productContainers.forEach((container) => {
      container.style.display = 'none';
    });
  }

  // Function to show a specific container
  function showContainer(index) {
    hideAllContainers();
    productContainers[index].style.display = 'block';
    productItems[index].classList.add('active');
  }

  productItems.forEach((item, index) => {
      item.addEventListener('click', function() {
          // Clear active class from all items
          productItems.forEach((item) => {
              item.classList.remove('active');
          });

          // Add active class to the clicked item
          item.classList.add('active');

          // Show the corresponding container
          showContainer(index);
      });
  });
});
const productList = document.querySelector('.product-list');

  let isDown = false;
  let startX;
  let scrollLeft;

  productList.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - productList.offsetLeft;
    scrollLeft = productList.scrollLeft;
  });

  productList.addEventListener('mouseleave', () => {
    isDown = false;
  });

  productList.addEventListener('mouseup', () => {
    isDown = false;
  });

  productList.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productList.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the sensitivity here
    productList.scrollLeft = scrollLeft - walk;
  });

  // Slide left when clicking left arrow
  document.querySelector('.left-arrow').addEventListener('click', () => {
    productList.scrollLeft -= 100; // Adjust the scroll amount here
  });

  // Slide right when clicking right arrow
  document.querySelector('.right-arrow').addEventListener('click', () => {
    productList.scrollLeft += 100; // Adjust the scroll amount here
  });

