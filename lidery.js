let leaderboardData = JSON.parse(localStorage.getItem('leaderboardData')) || [];

function showLeaderboard() {
  const name = document.getElementById('username').value.trim();
  if (!name) {
    alert('Введіть імя!');
    return;
  }

  const playerPoints = Math.floor(Math.random() * 100) + 50;
  const playerData = { name: name, group: 'A', score: playerPoints };

  leaderboardData.unshift(playerData);

  leaderboardData.sort((a, b) => b.score - a.score);
  
  localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));

  const tbody = document.getElementById('leaderboard-body');
  tbody.innerHTML = '';

  leaderboardData.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.group}</td>
      <td>${player.score}</td>
    `;
    tbody.appendChild(row);
  });


  document.querySelector('.game-end').classList.add('hidden');
  document.getElementById('leaderboard').classList.remove('hidden');
}