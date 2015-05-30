/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function(){
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
})();

var o1 = document.getElementById("operator1");

var o2 = document.getElementById("operator2");

var calculate = function(a,b,method3){
  calculatorModule.load(a);
  method3(b);
  //return calculatorModule.getTotal;
  return calculatorModule.getTotal();
}
var method2;
console.log(document.getElementById('operation').value);

//var operator =


// document.getElementById("calculate").onClick = function(){
//   var result = calculate(o1.value,o2.value,method);
//   document.getElementById("result").innerHTML = result;
//   console.log('ienien')
// };

document.getElementById("calculate").addEventListener('click',function(){
  switch(document.getElementById('operation').value){
  case 'add': method2 = calculatorModule.add;
    break;
  case 'subtract': method2 = calculatorModule.subtract;
    break;
  case 'multiply': method2 = calculatorModule.multiply;
    break;
  case 'divide' : method2 = calculatorModule.divide;
    break;
};
  var result = calculate(Number(o1.value),Number(o2.value),method2);
  document.getElementById("result").innerHTML = result;
  console.log('ienien')
});



