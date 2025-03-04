// const target = document.getElementsByClassName("title");
// console.log(target);


// const target2 = document.getElementById("title2");
// console.log(target2);


// // target2.style.color = "red";

// const allBOx = document.getElementsByClassName("box");
// console.log(allBOx);

// for (let i = 0; i < allBOx.length; i++) {
//     const element = allBOx[i];
//     // console.log(element);
//     element.style.backgroundColor = 'green';
//     if (element.innerText == "Box-5") {
//         element.style.backgroundColor = 'red';
//     }
// }

// document.getElementById("handleAdd").addEventListener('click', (event) => { console.log("Hello Boxx"); })

const handleSearch = (event) => {
    // onsole.log("Hello Boxx");
    const inputValue = document.getElementById("search-box").value;
    // console.log(inputValue);

    const comment = document.getElementById('comment-container');
    const p = document.createElement("p");
    p.classList.add("child");
    p.innerText = inputValue;

    // console.log(p);
    comment.appendChild(p);
    document.getElementById("search-box").value = "";

    const allComment = document.getElementsByClassName("child");

    // for (let i = 0; i < allComment.length; i++) {
    //     const element = allComment[i];
    // }

    for (const element of allComment) {
        element.addEventListener("click", (e) => {
            // console.log(e.target.parentNode);

            e.target.parentNode.removeChild(element)
        });
    }
}


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayData(data);
    })
    .catch((err => {
        console.log(err);
    }))


const displayData = (userdata) => {
    const container = document.getElementById("userdata-container");

    userdata.forEach(user => {
        // console.log(user);
        div = document.createElement("div");
        div.classList.add("user")
        div.innerHTML = `
        <h4>title</h4>
        <p>Description</p>
        <button>Details</button>
        `

        container.appendChild(div);
    });
}