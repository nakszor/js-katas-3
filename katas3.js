const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let array = []
   for (let index = 1; index <=25; index++) {
    array.push(index)
   } 
   return array
}
console.log(kata1())
function kata2() {
    let array = []
    for (let index = 25; index >= 1; index--) {
     array.push(index)
    } 
    return array
}
console.log(kata2())

function kata3() {
    let array = []
    for (let index = -1; index >= -25; index--) {
     array.push(index)
    } 
    return array
}
console.log(kata3())
function kata4() {
    let array = []
    for (let index = -25; index <= -1; index++) {
     array.push(index)
    } 
    return array
}
console.log(kata4())

function kata5() {
    let array = []
    for (let index = -25; index <= 25; index++) {
        if (index % 2 != 0) {
            array.push(index) 
        }
    } 
    return array
}
console.log(kata5())

function kata6() {
    let array = []
    for (let index = 1; index <= 100; index++) {
        if (index % 3 == 0) {
            array.push(index)
        }
    } 
    return array
}
console.log(kata6())
function kata7() {
    let array = []
    for (let index = 1; index <= 100; index++) {
        if (index % 7 == 0) {
            array.push(index)
        }
    } 
    return array
}
console.log(kata7())

function kata8() {
    let array = []
    for (let index = 100; index >= 1; index--) {
        if (index % 3 == 0 || index % 7 == 0) {
            array.push(index)
        } 
    } 
    return array
}
console.log(kata8())
function kata9() {
    let array = []
    for (let index = 1; index <= 100; index++) {
        if (index % 5 == 0 && index % 2 != 0) {
            array.push(index)
        } 
    } 
    return array
}
console.log(kata9())

function kata10() {
console.log(sampleArray)
}
kata10()
function kata11() {
    let array = []
    for (let index = 0; index < sampleArray.length; index++) {
        if (sampleArray[index] % 2 == 0) {
            array.push(sampleArray[index])
        }
        
    }return array
}
console.log(kata11())
function kata12() {
    let array = []
    for (let index = 0; index < sampleArray.length; index++) {
        if (sampleArray[index] % 2 != 0) {
            array.push(sampleArray[index])
        }
        
    }return array
}
console.log(kata12())
function kata13() {
    let array = []
    for (let index = 0; index < sampleArray.length; index++) {
        if (sampleArray[index] % 8 == 0) {
            array.push(sampleArray[index])
        }
        
    }return array
}
console.log(kata13())
function kata14() {
    let array = []
    for (let index = 0; index < sampleArray.length; index++) {
        array.push(sampleArray[index] * sampleArray[index])
        
    }return array
}
console.log(kata14())

function kata15() {
    let contador = 0
    for (let index = 1; index <= 20; index++) {
      contador = index + contador
    } return contador
}
console.log(kata15())
function kata16() {
    let contador = 0
    for (let index = 0; index < sampleArray.length; index++) {
        contador = sampleArray[index] + contador  
    }return contador
}
console.log(kata16())

function kata17(arr) {
    let array = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < array) {
            array = arr[index]
        }
    } return array
}
console.log(kata17(sampleArray))
function kata18(arr) {
    let array = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > array) {
            array = arr[index]
        }
    } return array
}    
console.log(kata18(sampleArray))
