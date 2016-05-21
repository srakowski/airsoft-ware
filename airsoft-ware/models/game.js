function Point(ip, name) {
    var self = this;
    self.ip = ip;    
    self.name = name;    
    self.team = null;
    self.capture = function (team) {
        self.team = team;
    }
}

function Team(name) {
    var self = this;
    self.name = name;    
}

function Game() {        
    var self = this;
    
    self.teams = {};
    self.addTeam = function (teamName) {
        self.teams[teamName] = new Team(teamName);        
    }
    
    self.getTeam = function (teamName) {
        return self.teams[teamName];
    };
    
    self.points = {};            
    self.registerPoint = function (ip, name) {
        self.points[ip] = new Point(ip, name);                       
    };                              
        
    self.getPoint = function (ip) {
        if (self.points[ip] === undefined) {
            return null;
        }        
        
        return self.points[ip];
    };
    
};

module.exports = Game