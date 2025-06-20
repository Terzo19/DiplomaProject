const recentResults = [
  {
    "date": "May 25, 2012",
    "team1": "bulls",
    "team1Name": "Chicago Bulls",
    "team2": "heat",
    "team2Name": "Miami Heat",
    "score": "94-89"
  },
  {
    "date": "May 24, 2012",
    "team1": "celtics",
    "team1Name": "Boston Celtics",
    "team2": "sixers",
    "team2Name": "Philadelphia 76ers",
    "score": "85-75"
  },
  {
    "date": "May 23, 2012",
    "team1": "lakers",
    "team1Name": "Los Angeles Lakers",
    "team2": "thunder",
    "team2Name": "Oklahoma City Thunder",
    "score": "103-100"
  },
  {
    "date": "May 22, 2012",
    "team1": "spurs",
    "team1Name": "San Antonio Spurs",
    "team2": "clippers",
    "team2Name": "Los Angeles Clippers",
    "score": "98-91"
  },
  {
    "date": "May 21, 2012",
    "team1": "pacers",
    "team1Name": "Indiana Pacers",
    "team2": "magic",
    "team2Name": "Orlando Magic",
    "score": "101-96"
  },
  {
    "date": "May 20, 2012",
    "team1": "nuggets",
    "team1Name": "Denver Nuggets",
    "team2": "warriors",
    "team2Name": "Golden State Warriors",
    "score": "104-98"
  }
];
const upcomingFixtures = [
  {
    "date": "June 9, 2012",
    "team1": "knicks",
    "team1Name": "New York Knicks",
    "team2": "nets",
    "team2Name": "Brooklyn Nets",
    "time": "7:00 PM ET"
  },
  {
    "date": "June 10, 2012",
    "team1": "suns",
    "team1Name": "Phoenix Suns",
    "team2": "mavericks",
    "team2Name": "Dallas Mavericks",
    "time": "9:30 PM ET"
  },
  {
    "date": "June 11, 2012",
    "team1": "rockets",
    "team1Name": "Houston Rockets",
    "team2": "grizzlies",
    "team2Name": "Memphis Grizzlies",
    "time": "8:00 PM ET"
  },
  {
    "date": "June 12, 2012",
    "team1": "raptors",
    "team1Name": "Toronto Raptors",
    "team2": "bucks",
    "team2Name": "Milwaukee Bucks",
    "time": "7:30 PM ET"
  },
  {
    "date": "June 13, 2012",
    "team1": "hornets",
    "team1Name": "Charlotte Hornets",
    "team2": "pistons",
    "team2Name": "Detroit Pistons",
    "time": "6:00 PM ET"
  },
  {
    "date": "June 14, 2012",
    "team1": "jazz",
    "team1Name": "Utah Jazz",
    "team2": "blazers",
    "team2Name": "Portland Trail Blazers",
    "time": "10:00 PM ET"
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const upcomingContainer = document.getElementById('upcoming-fixtures');
  const resultsContainer = document.getElementById('recent-results');

  // Create fixture cards
  upcomingFixtures.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('fixture-card');
    card.innerHTML = `
      <p class="fixture-date">${game.date}</p>
      <div class="fixture-teams">
        <div class="team">
          <img src="./resources/img/logos/${game.team1}.png" alt="${game.team1Name} Logo" class="team-logo" />
          <span>${game.team1Name}</span>
        </div>
        <span class="vs">vs</span>
        <div class="team">
          <img src="./resources/img/logos/${game.team2}.png" alt="${game.team2Name} Logo" class="team-logo" />
          <span>${game.team2Name}</span>
        </div>
      </div>
      <p class="fixture-time">${game.time}</p>
    `;
    upcomingContainer.appendChild(card);
  });

  // Create result cards
  recentResults.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('result-card');
    card.innerHTML = `
      <p class="result-date">${game.date}</p>
      <div class="result-teams">
        <div class="team">
          <img src="./resources/img/logos/${game.team1}.png" alt="${game.team1Name} Logo" class="team-logo" />
          <span>${game.team1Name}</span>
        </div>
        <span class="vs">vs</span>
        <div class="team">
          <img src="./resources/img/logos/${game.team2}.png" alt="${game.team2Name} Logo" class="team-logo" />
          <span>${game.team2Name}</span>
        </div>
      </div>
      <p class="result-score">${game.score}</p>
    `;
    resultsContainer.appendChild(card);
  });
});