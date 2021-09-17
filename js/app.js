//UI
const search = document.getElementById('search');
const wishes = document.querySelector('.wishes'),
    trust = document.querySelector('.trust'),
    quotes = document.querySelector('.quotes');

search.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        search.classList.add("visible");
        wishes.classList.add("visible");
        trust.classList.add("see");
        quotes.classList.add("see");
    }
});