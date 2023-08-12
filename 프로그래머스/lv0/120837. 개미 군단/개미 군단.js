const solution = hp => {
    
    var bigAnt = Math.floor(hp / 5);
    var mediumAnt = Math.floor((hp - bigAnt * 5) / 3);
    var smallAnt = Math.floor(hp - bigAnt * 5 - mediumAnt * 3);
    
    return bigAnt + mediumAnt + smallAnt
}