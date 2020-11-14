console.log("Количество категорий:", document.querySelectorAll("li.item").length);

document.querySelectorAll("li.item").forEach(value => console.log(
    "Категория: " + value.firstElementChild.textContent + "\n" + 
    "Количество елементов: " + value.querySelectorAll("li").length));