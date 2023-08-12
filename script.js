//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

// Function to remove articles from the beginning of band names
function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    for (let article of articles) {
        if (name.toLowerCase().startsWith(article + ' ')) {
            return name.slice(article.length + 1); // +1 to remove the space after the article
        }
    }
    return name;
}

// Sorting the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Creating a list of sorted band names inside ul tag
const ul = document.createElement('ul');
ul.id = 'band';

for (let band of bandNames) {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
}

// Adding the ul element to the body of the HTML
document.body.appendChild(ul);

