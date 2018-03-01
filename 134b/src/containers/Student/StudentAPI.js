
const StudentAPI = {
    players: [
      { number: 1, name: "Kevin Pansawira",  school: "UCSD", GPA: "3.99", year:"2018", pic:"./kpan.jpg"},
      { number: 2, name: "Dave Defender",  school: "MIT", GPA: "3.99", year:"2019", pic:"./pp1.jpeg"},
      { number: 3, name: "Sam Sweeper", school: "UCB", GPA: "3.99", year:"2019", pic:"./pp1.jpeg"},
      { number: 4, name: "Matt Midfielder", school: "UCSD", GPA: "3.99", year:"2019", pic:"./pp1.jpeg"},
      { number: 5, name: "William Winger",  school: "UCSD", GPA: "3.99", year:"2019", pic:"./pp1.jpeg"},
      { number: 6, name: "Fillipe Forward", school: "UCSD", GPA: "3.99", year:"2019", pic:"./pp1.jpeg"}
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }
  
  export default StudentAPI  