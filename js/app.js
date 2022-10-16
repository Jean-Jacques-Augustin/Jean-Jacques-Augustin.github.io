// const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entrie) => {
//             if (entrie.isIntersecting) {
//                   entrie.target.classList.add(".show");
//             } else {
//                   entrie.target.classList.remove(".show");
//             }
//       });
// });
//
// const hidden = document.querySelectorAll(".hidden");

//window.addEventListener('scroll', observer);

// function reveal() {
//       const reveals = document.querySelectorAll(".hidden");
//       for (let i = 0; i < reveals.length; i++) {
//             const windowHeight = window.innerHeight;
//             const elementTop = reveals[i].getBoundingClientRect().top;
//             const elementVisible = 150;
//
//             if (elementTop < windowHeight - elementVisible) {
//                   reveals[i].classList.add("show");
//             } else {
//                   reveals[i].classList.remove("show");
//             }
//       }
// }
//
// window.addEventListener("scroll", reveal);
