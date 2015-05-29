/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(){
  var memory = 0;
  var total = 0;
  var ifNumber = function(n){
    if(typeof n === 'number'){
      return n;
      }
      else return 'please enter a number';
  }

  var calculator = {
    add: function(number){
      if(typeof number === 'number'){
        total += number;
      }
      else return 'please enter a number';
    },
    subtract: function(number){
      if(typeof number === 'number'){
        total -= number;
      }
      else return 'please enter a number';
    },
    multiply: function(number){
      if(typeof number === 'number'){
        total *= number;
      }
      else return 'please enter a number';
    },
    divide: function(number){
      if(typeof number === 'number'){
        total /= number;
      }
      else return 'please enter a number';
    },
    load: function(number){
      if(typeof number === 'number'){
      total = number;
      return number;
      }
      else return 'please enter a number';
    },
    getTotal: function(){
      return total;
    },
    recallMemory: function(){
      return memory;
    },
    saveMemory: function(){
      total = memory;
    },
    clearMemory: function(){
      memory = 0;
    },
    validation: function(){

    },
    saveMemory: function(){
      memory = total;
    }
  };
  return calculator;
};

var myCalculator =  calculatorModule();





  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

