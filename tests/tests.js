describe('The Registration number  factory function', function () {
    it('should be able to dispaly registration number entered', function () {
        var regCheck = reg();
        var word = "registration"
        

        regCheck.setRegistrationNumber(word)
       
        assert.equal("", regCheck.displayReg());


    });
    it('should be able to greet Abongile correctly in Swahili', function () {
        var theApp = greet();
        var word = "Abongile"
        var contain = "Swahili"

        theApp.greetings(contain, word)
       
        assert.equal("Jambo, Abongile", theApp.getMsg());

    });
    it('should be able to greet Marry correctly in French', function () {
        var theApp = greet();
        var word = "Marry"
        var contain = "French"

        theApp.greetings(contain, word)
       
        assert.equal("Bonjour, Marry", theApp.getMsg());
    });

describe('Error messages', function () {
    it('should return "Please type in your name below" message when the language has been chosen but the text input field is still empty and the greetMe button has is clicked ', function () {
        var theApp2 = greet();
        var word = ""
        // var contain = "French"
        // theApp2.greetings(contain)
    
        assert.equal("Please type in your name below.", theApp2.errorsNoName(word));


    });
    it('should return "Please select a language" message when the name has been typed but the language has not been selected and the greetMe button is clicked', function () {
        var theApp3 = greet();
        var languageSelect = ""
      
       
        assert.equal("Please select a language.", theApp3.languageErrors(languageSelect));
    
});
it('should return "Please type in your name and select a language" message when the greet button is clicked without selecting a language and inputing a name', function () {
    var theApp4 = greet();
   var word =""
   var addLanguage=""
    assert.equal("Please type in your name and select a language.", theApp4. bothError(word,addLanguage));
});
it('should return "Please type only letters" message when there are special charectors typed on the text input field and the greetMe button is clicked', function () {
    var theApp5 = greet();
    var empty =/^[A-Za-z]+$/;
   
    assert.equal("Please type only letters.", theApp5.errorSpecial(empty));
});
it('should return "You have successfuly cleared your local stoarage" message when the reset button is clicked', function () {
    var theApp5 = greet();
    var cleared = 0;
   
    assert.equal("You have successfully cleared your local storage", theApp5.storageError(cleared));
});
});
});
