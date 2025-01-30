const summarySectionLists = document.querySelector(".summary__section-lists");
const scoreElement = document.querySelector(".real-value");

fetch("data.json")
  .then((response) => response.json())
  .then((response) => {
    const data = response;

    let summary = "";
    let scoreList = [];
    data.forEach((d) => {
      summary += summaryLists(d);
      scoreList.push(d.score);
    });

    summarySectionLists.innerHTML = summary;
    let score = scoreList.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    let average = Math.floor(score / scoreList.length);
    scoreElement.textContent = average;
  });

const summaryLists = function (d) {
  return `<div class="summary__section-lists-item ${d.category.toLowerCase()}">
              <div class="summary__section-lists-item-title">
                <img src=${d.icon} alt=${d.category} />
                <h3>${d.category}</h3>
              </div>
              <div class="summary__section-lists-item-value">
                <p>
                  <span class="your-score">${d.score}</span> /
                  <span class="max-score">100</span>
                </p>
              </div>
            </div>`;
};
