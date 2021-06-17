var textareaElement = document.querySelector(".textarea")
var addBtnElement = document.querySelector(".addBtn")
var townsElement = document.querySelector(".towns")
var showBtnElement = document.querySelector(".showBtn")
var resetBtnElement = document.querySelector(".resetBtn")
var popupElement = document.querySelector(".popup")
var displayElement = document.querySelector(".display")

var registrationInstance = registration()

var inputPatOne = /^((CA|CAM|CY)\s([0-9]){5})$/i;
var inputPatTwo = /^((CA|CAM|CY)\s\d{3})$/i;
var inputPatThree = /^((CA|CAM|CY)-\d{3})$/i;



function myFunction(storeroom) {

    // var storeroom = [];
    // document.getElementById("pops").innerHTML = ''
    // for (var i = 0; i < storeroom.length; i++) {
        var node = document.createElement("Li");
        var textnode = document.createTextNode(storeroom);
        node.appendChild(textnode);
        document.getElementById("pops").appendChild(node);
    // }
    // displayElement.innerHTML = registrationInstance.timer()
    // showAllplace.innerHTML = registrationInstance.timer()
}


function carREg() {
    setTimeout(function () {
        displayElement.innerHTML = registrationInstance.timer()

    }, 3000);
    // // alert(param)
    // if (textareaElement.value)

    //     var outPops = document.getElementById("pops");
    // while (outPops.firstChild) {
    //     outPops.remove(outPops.firstChild);
    // }
    // for (i = 0; i < param; i++) {
    //     var node = document.createElement("li");
    //     var textNode = document.createTextNode("param");
    //     node.appendChild(textNode)
    //     outPops.appendChild(node)
    // }
    if (textareaElement.value === "") {
        displayElement.innerHTML = registrationInstance.errorsNoReg()

    }else if (inputPatThree.test(textareaElement.value)) {
        displayElement.innerHTML = registrationInstance.addedSuccesfully(inputPatOne || inputPatTwo || inputPatThree.test(textareaElement.value))

    } else if (inputPatTwo.test(textareaElement.value)) {
        displayElement.innerHTML = registrationInstance.addedSuccesfully(inputPatOne || inputPatTwo || inputPatThree.test(textareaElement.value))

    } else if (inputPatOne.test(textareaElement.value)) {
        var showAllplace = document.querySelector(".showAll")
        showAllplace.innerHTML = registrationInstance.addedSuccesfully(inputPatOne || inputPatTwo || inputPatThree.test(textareaElement.value))
        showAllplace.classList.add("green-text");
    }
    else {
        displayElement.innerHTML = registrationInstance.errorsFormat()
        
    }

    myFunction(textareaElement.value)

}



function reset() {
    setTimeout(function () {
        displayElement.innerHTML = registrationInstance.timer()

    }, 3000);
    setTimeout(function () {
        localStorage.clear()
        location.reload()
        displayElement.innerHTML = greetInstance.timer()

    }, 4000);

    // if (resetBtnElement) {
    //     displayElement.innerHTML = registrationInstance.storageError()
    // }


}


addBtnElement.addEventListener('click', carREg)

resetBtnElement.addEventListener('click', reset)
