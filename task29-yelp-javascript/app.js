const star = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
let orderSelector = [3, 2, 1];

function loadData(e) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            data.forEach(element => {
                document.getElementById(element.id).innerHTML = `<div>${element.review}</div>`;
                document.getElementById(`w-${element.id}`).innerHTML = `<span>${element.weeks}</span>`;

                let starCount = star.indexOf(element.stars);
                let position = `${425 - starCount * 36.5}px`;
                const img = document.getElementById(`img-${element.id}`);
                img.style.height = position;
            });
        }
    }
    xhr.send();
}

loadData();

const itemPosition = () => {
    orderSelector.push(orderSelector.shift());  
    console.log(orderSelector) ;
    let childCount = document.querySelector(".business-section").childElementCount;
    for (let i = 1; i < childCount + 1; i++) {
        document.querySelector(`.c-${i}`).style.order = orderSelector[i-1];
    }
}

document.getElementById("section-b").addEventListener("click", itemPosition);

