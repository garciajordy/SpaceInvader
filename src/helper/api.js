async function postData(player, scoreNum) {
  const data = { user: player, score: scoreNum };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4U2mNVpmH5S0D9W17AIH/scores', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

export default postData;
