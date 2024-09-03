// Menu
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))



// new Swiper('.swiper', {
//   navigation: {
//       nextEl: '.portfolio__arrow_right',
//       prevEl: '.portfolio__arrow_left',
//       disabledClass: 'portfolio__arrow_disable',
//     },
//     // Responsive breakpoints
//   breakpoints: {
//   // when window width is >= 480px
//   480: {
//     grid: {
//       fill: 'row',
//       rows: 1
//     }
//   },
//   // when window width is >= 768px
//   768: {
//       slidesPerView: 2,
//       grid: {
//           fill: 'row',
//           rows: 2
//         }        
//       },
//   // when window width is >= 1440px
//   1440: {
//       slidesPerView: 2,
//       grid: {
//           fill: 'row',
//           rows: 2
//         }        
//       }
// }
// });