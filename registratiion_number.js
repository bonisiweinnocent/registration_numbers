function registration(storage) {

    var regNumStore = []
    var regHolder = ""
    var inputs = storage;
    function setRegistrationNumber(regStarts) {



    }
    function displayReg() {
        return setRegistrationNumber()
    }

    function store(regs) {
        var regTake = regs.charAt(0).toUpperCase()
        if (!inputs.includes(regTake)) {
            inputs.push(regTake)
            return true
            regHolder = "Car reg added succesfully"
        }
        else {
            return false
            regHolder = "This has already been added"
        }
    }
    function carRegist(registStart) {
        for (i = 0; i < regNumStore; i++) {
            if (regNumStore[i].startsWith(registStart)) {
                regNumStore.push(registStart[i])
            }
        }

    }

    function getregNumStore() {
        return regNumStore
    }

    function errorsNoReg(noReg) {
        if (!noReg) {
            return "Please type registration No. below."

        }
    }
    function errorsFormat(noFormat) {
        if (!noFormat) {
            return "Please type in the correct format"

        }
    }
    function addedSuccesfully(regNo) {
        if (regNo) {
            return "You have succesfully added  a registration No."
        }
    }
    function storageError(){
        return "You have cleared your local storage"
    }
function filterByTown(townsSelected){
    if(townsSelected.startsWith('CA || CAM || CY')){
        inputs.push(townsSelected)
    }

}
function getReg(){
    return inputs
}


    function timer() {
        return " ";
    }

    return {
        setRegistrationNumber,
        displayReg,
        store,
        carRegist,
        getregNumStore,
        timer,
        errorsNoReg,
        errorsFormat,
        addedSuccesfully,
        storageError,
        filterByTown,
        getReg
    }


}
