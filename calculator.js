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

  var _validate = function(method){
    return function(arg){
      if(typeof arg === 'number'){
        return method(arg);
      }
      else return 'please enter a number';
    };
  };
  function _add(number){
    total += number;
  }
  function _subtract(number){
    total -= number;
  }
  function _multiply(number){
    total *= number;
  }
  function _divide(number){
    total /= number;
  }
  function _load(number){
    total = number;
    return number;
  }


  var calculator = {
    add: _validate(_add),
    subtract: _validate(_subtract),
    multiply: _validate(_multiply),
    divide: _validate(_divide),
    load: _validate(_load),
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
  }
  return calculator;
};

var myCalculator =  calculatorModule();

var hello;





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

