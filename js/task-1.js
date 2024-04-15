const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);
categories.forEach(item => {
    const categoryTitle = item.querySelector('h2');
    console.log("Category:", categoryTitle.textContent);
    const elementsInCategory = item.querySelectorAll('li');
    console.log("Elements:", elementsInCategory.length);
});
//console.log(result);