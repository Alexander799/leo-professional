document.addEventListener("DOMContentLoaded", () => {
   document.addEventListener('click', (e) => {
      let className = "", idMax = 0, idMin = 0;
      if (/testimonials/gm.test(e.path[1].classList[0])) {
         className = "testimonials__item_active";
         idMax = 6;
         idMin = 4;
      }
      if (/carousel/gm.test(e.path[1].classList[0])) {
         className = "carousel__item_active";
         idMax = 3;
         idMin = 1;
      }

      let id = parseInt(document.querySelector(`.${className}`).attributes[1].textContent);
      if (/left|right/gm.test(e.path[1].classList[0])) {
         if (e.path[1].classList[0].indexOf('right') > 0) {
            nextSlide(id);
         } else if (e.path[1].classList[0].indexOf('left') > 0) {
            prevSlide(id);
         }
      }

      function nextSlide(id) {
         document.querySelector(`.${className}`).classList.remove(className);
         id++;
         if (id > idMax) {
            id = idMin;
         }
         document.getElementById(String(id)).classList.add(className);
      }

      function prevSlide(id) {
         document.querySelector(`.${className}`).classList.remove(className);
         id--
         if (id < idMin) {
            id = idMax;
         }
         document.getElementById(String(id)).classList.add(className);
      }
   });
});