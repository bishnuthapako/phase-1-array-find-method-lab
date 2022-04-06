// code your solution here

function superbowlWin(record){
    let superBow = record.find(val => val.result === "W")
    if(superBow){
        return superBow.year;
    } else{
        return undefined
    }
}
superbowlWin()