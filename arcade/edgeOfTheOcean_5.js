function shapeArea(n) {
    if (n === 1) {
        return 1;
    }    
    //now for all other cases...
    else {
        var middlerow = n+(n-1);
        var runningtotal = 0;
        for (var i =1; i <= middlerow-2; i +=2 ) { 
            runningtotal += i;
        }
        runningtotal *=2; 
        runningtotal += middlerow;
    return runningtotal; 

        //i looked at this from scratch last night and had no idea how to code it.
        //in the middle of the night it came to me to try to read it from left to right
        //and once i found that "line equals last-line plus 2", i knew i 
        //could get my head around it.
    }
}
