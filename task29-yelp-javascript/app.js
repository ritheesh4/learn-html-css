const star = [0,1,1.5,2,2.5,3,3.5,4,4.5,5];
// const position = ["425px","388px","350px","315px","278px","243px","206px","133px","170px","133px","97px"];
// let a = star.indexOf(3.5);
// console.log(position[a])

function loadData(e) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            // user.forEach(element => console.log(element.id));
            data.forEach(element => {
                document.getElementById(element.id).innerHTML = `<div>${element.review}</div>`;
                document.getElementById(`w-${element.id}`).innerHTML = `<span>${element.weeks}</span>`;

                let starCount = star.indexOf(element.stars);
                let position = `${425-starCount*36.5}px`;
                console.log(position)
                const img = document.getElementById(`img-${element.id}`);

                img.style.height = position;

                // if (element.stars === 5) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "97px";
                // }
                // else if (element.stars === 4.5) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "133px";
                // } else if (element.stars === 4) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "170px";
                // }
                // else if (element.stars === 3.5) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "206px";
                // }
                // else if (element.stars === 3) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "243px";
                // }
                // else if (element.stars === 2.5) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "278px";
                // }
                // else if (element.stars === 2) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "315px";
                // }
                // else if (element.stars === 1.5) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "350px";
                // }
                // else if (element.stars === 1) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "388px";
                // }
                // else if (element.stars < 1) {
                //     const img = document.getElementById(`img-${element.id}`);

                //     img.style.height = "425px";
                // }

            });
        }
    }
    xhr.send();

}

loadData();


// document.getElementById('1').innerHTML = "9";
// document.querySelector('.details').innerHTML += `<div>Ritheesh</div>`