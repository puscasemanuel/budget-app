
// BUDGET CONTROLLER
var budgetController = (function() {

})();


// UI CONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,//Will be either inc or exp
                desciption: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMstrings: function(){
            return DOMStrings;
        }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtlr){

    var setupEventListeners = function(){

        var DOM = UICtlr.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 ||  event.which === 13){
                ctrlAddItem();
            }    
        });  
    };

    

    var ctrlAddItem = function(){

         // 1. Get input data.
         var input = UICtlr.getInput();
         console.log(input);

        // 2.  add item to the budget controller


        // 3. add item to the UI


        // 4. calculate budget

        // 5. display the budget
    };

    return {
        init: function(){
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
