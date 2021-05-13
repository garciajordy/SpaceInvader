const getData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4U2mNVpmH5S0D9W17AIH/scores').then((res) => res.json())
    .then((data) => {
      const array = data.result.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 5);

      setTimeout(() => {
        localStorage.setItem('array', JSON.stringify(array));
      }, 100);
    });
};

export default getData;