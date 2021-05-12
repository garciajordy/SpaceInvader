import axios from 'axios';

async function postData(player, score) {
    // Default options are marked with *
    data = {name: player, score: score}
    const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4U2mNVpmH5S0D9W17AIH/scores", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const getData = () => {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4U2mNVpmH5S0D9W17AIH/scores`).then((res) => res.json())
    .then(function (data) {
      let array = data.result.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 5)

      setTimeout(() => {

        localStorage.setItem("array", JSON.stringify(array))
      }, 100)
     });
};

export default getData