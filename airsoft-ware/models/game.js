function Point(ip, name) {
    var self = this;
    self.ip = ip;    
    self.name = name;
}


function Game() {        
    var self = this;
    self.points = [];        
    self.registerPoint = function (ip, name) {
        self.points.push(new Point(ip, name));                       
    };                   
};

module.exports = Game