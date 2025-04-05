let teams = [
    ["1", "Team Alpha", "A", "98"],
    ["2", "Team Beta", "B", "92"],
    ["3", "Team Gamma", "A", "89"],
    ["4", "Team Delta", "C", "85"],
    ["5", "Team Epsilon", "B", "80"]
];

let content = "";

for (let i = 0; i < teams.length; i++) {
    content += "<tr>";
    content += "<td>" + teams[i][0] + "</td>";
    content += "<td>" + teams[i][1] + "</td>";
    content += "<td>" + teams[i][2] + "</td>";
    content += "<td>" + teams[i][3] + "</td>";
    content += "</tr>";
}

document.getElementById("leaderboard").innerHTML = content;
