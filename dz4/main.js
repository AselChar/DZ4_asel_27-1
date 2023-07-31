const wrapper = document.getElementById('people__container');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const ppl = new XMLHttpRequest();
    ppl.open("GET", "people.json")
    ppl.responseType = 'json'
    ppl.send()
    ppl.onload = function () {
        if (ppl.status === 200) {
            const data = ppl.response;
            // console.log(data)
            data.forEach(person => {
                console.log(person)
                const card = document.createElement('div');
                // card.classList.add('card');
                card.setAttribute("class","card")
                const name = document.createElement('h2');
                name.textContent = person.name;
                card.appendChild(name);
                const personAge = document.createElement('p');
                // personAge.textContent = `Age: ${person.age}`
                personAge.textContent = "Age:" + person.age
                card.appendChild(personAge);
                wrapper.appendChild(card);
            });
        } else {
            console.error ('Error loading data/Ошибка загрузки данных');
        }
    };
});