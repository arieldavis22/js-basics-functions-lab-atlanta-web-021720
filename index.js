// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs((num1 - num2) * 264);
}

function calculatesFarePrice(num1, num2) {
    if (distanceTravelledInFeet(num1, num2) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) < 2000) {
        return ((distanceTravelledInFeet(num1, num2) - 400) * 0.02)
    } else if (distanceTravelledInFeet(num1, num2) > 2000 && distanceTravelledInFeet(num1, num2) < 2500) {
        return 25
    }else {
        return 'cannot travel that far'
    }
}