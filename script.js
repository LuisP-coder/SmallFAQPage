// const questions = document.querySelectorAll(".questions");

// questions.forEach(function (question){
//     const btn = document.querySelector(".question-button");

//     btn.addEventListener('click', function() {
//         questions.forEach(function (item) {
//             if(item !== question){
//                 item.classList.remove(".show-text")
//             }
//         });
//         question.classList.toggle("show-text");
//     });
// });

const buttons = document.querySelectorAll(".question-button");

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.
        parentElement;
        question.classList.toggle("show-text");
    });
});