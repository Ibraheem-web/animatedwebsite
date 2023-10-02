const liItem = document.querySelectorAll('ul li');
const divItem = document.querySelectorAll('.product div');

liItem.forEach(li => {
    li.onclick = function () {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        //Filter
        const value = li.textContent;
        divItem.forEach(div => {
            div.style.display = 'none';
            if (div.getAttribute('data-filter') == value.toLowerCase() || value == "All Menu") {
                div.style.display = 'block';
            }
        })
    }
});