
// const URL = "https://dog.ceo/api/breeds/image/random/3";

// const getData = async () => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     data.message.forEach(url => {
//         console.log(url);
//     });
// }
// getData();


const URL = "https://meowfacts.herokuapp.com/?count=3";

// By using async and await
// const getFacts = async () => {
//     let result = await fetch(URL);
//     let data1 = await result.json();
//     console.log(data1); 
//     const demo = document.querySelector('.demo');
//     demo.innerHTML = "";

//     data1.data.forEach(fact => {
//         demo.innerHTML += `<p>${fact}</p>`;
//     });
//      document.getElementById('facts').addEventListener("click", getFacts);
// };

// getFacts();

// By using promise chain
function getFact() {z
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            let demo = document.querySelector('.demo');
            demo.innerHTML = "";

            data.data.forEach(fact => {
                demo.innerHTML += `<p>${fact}</p>`;
            });
        });
}

document.getElementById('facts').addEventListener("click", getFact);

getFact();