// window.addEventListener('load', () => {
//     let count = document.getElementById('count');
//     count.innerHTML = data.length;
// });

window.addEventListener('load', () => {
    let count = document.getElementById('count'); 
    count.innerHTML = data.length;
});

function quote() {
    let rand = Math.floor(Math.random() * data.length);

    let quoteText = document.getElementById('text');
    quoteText.innerText = data[rand].quote;

    let bookTitle = document.getElementById('book');
    bookTitle.innerText = data[rand].title;

    let writerAuthor = document.getElementById('writer');
    writerAuthor.innerText = data[rand].author;

    let catTag = document.getElementById('cat');
    catTag.innerText = data[rand].tag;
}