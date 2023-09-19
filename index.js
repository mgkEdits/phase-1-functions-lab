// Code your solution in this file!
let hqBlockAddress = 42;
//let destination;
let dest;

let distanceFromHqInBlocks = function(block){
    return Math.abs(block-hqBlockAddress);
}

let distanceFromHqInFeet = function (block){
  return  distanceFromHqInBlocks(block) * 264;
    
}

let distanceTravelledInFeet = function(start,destination){
    return Math.abs(destination-start) * 264;
}

let calculatesFarePrice = function(start, destination){
    dest = distanceTravelledInFeet(start, destination)

    if (dest<= 400) {
        return 0
    }else if (dest> 400 && dest<=2000) {
        return( dest-400)*0.02
    }else if (dest >2000 && dest<2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}