var aElement = [];

function getData()
{
    checkButton();
    sumTotal();
}
function checkButton() {
    if (aElement.length > 7) {
        document.getElementById('btnPairs').disabled = false;
        document.getElementById('btnG10').disabled = false;
        document.getElementById('btnSequence').disabled = false;
    }
    else {
        document.getElementById('btnPairs').disabled = true;
        document.getElementById('btnG10').disabled = true;
        document.getElementById('btnSequence').disabled = true;
    }
}
checkButton();

function addElement() {
    var nArrayElement = document.getElementById('txtInput').value;
    if (nArrayElement == "") {
        alert('Please enter a number');
    }
    else {
        aElement.push(parseInt(nArrayElement));
        document.getElementById('lblArrayElement').innerHTML = aElement.join(' ');
        document.getElementById('txtInput').value = "";
    }
    getData()
}

function deleteElement() {
    var nDeleteElement = parseInt(document.getElementById('txtInput').value);
    var isNumber = false;
    for (var i = 0; i < aElement.length; i++) {
        if (nDeleteElement == aElement[i]) {
            delete aElement[i];
            isNumber = true;
        }
    }
    if (isNumber) {
        document.getElementById('lblArrayElement').innerHTML = aElement.join(' ');
    }

    else {
        alert("Please enter a correct number");
    }
    document.getElementById('txtInput').value = "";
    getData();
}

function pair() {
    var count = 0;
    var sumArray =  [].concat(aElement);
    var pairTotal = 0;
    sumArray.sort();
    for (var i = 0; i < sumArray.length; i++) {
        if (sumArray[i] === sumArray[i + 1]) {
            pairTotal += sumArray[i] + sumArray[i + 1];
            count++;
            i++;
        }

    }
    document.getElementById('lblPairs').innerHTML = count;
    return pairTotal;
}

function greater() {
    var isNumber = false;
    var count = 0;
    for (var i = 0; i < aElement.length; i++) {
        if (aElement[i] > 10) {
            count++;
            isNumber = true;
        }
    }

    if (isNumber == false) {
        alert("Number not a greater than 10");
    }
    document.getElementById('lblGreater').innerHTML = count;
}

function sequence() {
    let count = 0;
    let flag = 1;
    let seqTotal = 0;
    for (let i = 0; i < aElement.length; i++) {
        if (parseInt(aElement[i]) + 1 == parseInt(aElement[i + 1])) {
            flag++;
        } else {
            flag = 1
        }
        if (flag == 5) {
            for(let j=i+1; j > i-4; j--)
            {
                seqTotal  = seqTotal +  aElement[j];
            }
            count++;
            i++;
            flag = 1;
        }
    }
    document.getElementById('lblSequence').innerHTML = count
    return seqTotal;
}
function sumTotal() {
    let sum = 0;
    for (let i = 0; i < aElement.length; i++) {
      sum += aElement[i];
    }

     document.getElementById("lblSum").innerHTML = sum - sequence() - pair();
}