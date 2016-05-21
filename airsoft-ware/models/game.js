function Point(ip, name) {
    var self = this;
    self.ip = ip;    
    self.name = name;
}

function Team(name) {
    var self = this;
    self.name = name;    
}


function Game() {        
    var self = this;
    
    self.teams = [];
    self.addTeam = function (teamName) {
        self.teams.push(new Team(teamName));        
    }
    
    self.points = [];        
    self.registerPoint = function (ip, name) {
        self.points.push(new Point(ip, name));                       
    };                   
};

module.exports = Game