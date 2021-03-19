document.getElementById("madlibs").addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = [];
  for (let i = 1; i < 13; i++) {
    answer.push(event.target[`ans${i}`].value);
  }
  for (let i = 1; i < 13; i++) {
    document.querySelector(`#ml${i}`).innerHTML = answer[i - 1];
  }
});
