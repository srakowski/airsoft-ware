function Point(ip, name) {
    var self = this;
    self.ip = ip;    
    self.name = name;    
    self.team = null;    
    
    self.getOwnerName = function () {
        if (self.team == null) {
            return "NOT CAPTURED!";
        }
        
        return self.team.name;
    }
    
    self.getOwnerColor = function () {
        if (self.team == null) {
            return "#FFF";
        }
        
        return self.team.color;
    }
    
    self.capture = function (team) {
        self.team = team;
    }
    
    self.update = function () {
        if (self.team === null) {
            return;
        }                  
        self.team.awardPoints();      
    }
}

function Team(name, color) {
    var self = this;
    self.name = name;    
    self.score = 0;
    self.color = color;
    self.awardPoints = function () {
        self.score++;
    }
}

function Game() {        
    var self = this;
    self.isActive = false;
    self.duration = 0;
    self.updateInterval = null;
    
    self.setDuration = function (duration) {
        self.duration = duration;
    }
    
    self.teams = {};
    self.addTeam = function (teamName, color) {
        self.teams[teamName] = new Team(teamName, color);        
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
    
    self.startGame = function () {
        console.log("game is starting, duration=" + self.duration);
        self.isActive = true;
        self.updateInterval = setInterval(function () {
            for (var key in self.points) {
              self.points[key].update();  
            };         
        }, 1000);
        setTimeout(function () {                        
            self.endGame();
        }, self.duration);        
    };   
    
    self.endGame = function () {
        clearInterval(self.updateInterval);
        self.updateInterval = null;        
        self.isActive = false;
    };
};

module.exports = Game