// Потрібно створити картки продуктів
// const instruments = [{
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
//     name: 'Молоток',
//     price: 150
// }, {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
//     name: 'Перфоратор',
//     price: 3000
// }, {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
//     name: 'Рівень',
//     price: 2000
// }]


// const productList = document.querySelector(".js-prodlist")



// function createMarkup(arr) {
//     const markup = arr.map(({ id, img, name, price }) => {
//         return `<li data-id="${id}">
//                     <img src="${img}" alt="${name}">
//                     <h2>${name}</h2>
//                     <h3>${price}</h3>
//                 </li>`
//     })
//     return (productList.innerHTML = markup.join(""));

// }
// createMarkup(instruments);
// // Задание 2
// const formRef = document.querySelector(".js-form");

// formRef.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//     const inputValue = e.currentTarget.elements.product.value;
    
//     const items = instruments.filter(({ name }) => {
//         return name.toLowerCase().includes(inputValue.trim().toLowerCase())
        
//     });
//     console.log(items);
//     createMarkup(items);
//     e.currentTarget.reset();
// }
// Розроби функціонал для вивчення нових англійський слів. У тебе є масив об'єктів translations, де кожен об'єкт це слово (оригінал та переклад).

const translations = [
  {
    original: "hello",
    translation: "привіт",
  },
  {
    original: "flower",
    translation: "квітка",
  },
  {
    original: "apple",
    translation: "яблуко",
  },
];

function getTranslation(word) { }


const list = document.querySelector(".list")
const engBtn = document.querySelector(".js-english");
const ukrBtn = document.querySelector(".js-ukrainian");
console.dir(list)

function getEnglishVersion() {
    [...list.children].forEach((element, idx) => {
        element.textContent = translations[idx].original
        // не делать так
        element.classList.remove("active")
    });
    console.dir(engBtn)
    engBtn.disabled = true
    ukrBtn.disabled = false
}
getEnglishVersion()



function getUkrVersion() {
    [...list.children].forEach((element,idx) => {
        element.textContent = translations[idx].translation
        // не делать так
        element.classList.add("active")
    });
    ukrBtn.disabled = true
    engBtn.disabled = false
}
engBtn.addEventListener("click", getEnglishVersion);
ukrBtn.addEventListener("click", getUkrVersion);
