
const StudentAPI = {
    players: [
      { number: 1, name: "Kevin Pansawira",  school: "UCSD", GPA: "3.99", year:"2018", pic:"image here"},
      { number: 2, name: "Dave Defender",  school: "MIT", GPA: "3.99", year:"2019"},
      { number: 3, name: "Sam Sweeper", school: "UCB", GPA: "3.99", year:"2019"},
      { number: 4, name: "Matt Midfielder", school: "UCSD", GPA: "3.99", year:"2019"},
      { number: 5, name: "William Winger",  school: "UCSD", GPA: "3.99", year:"2019"},
      { number: 6, name: "Fillipe Forward", school: "UCSD", GPA: "3.99", year:"2019"}
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }
  
  export default StudentAPI  