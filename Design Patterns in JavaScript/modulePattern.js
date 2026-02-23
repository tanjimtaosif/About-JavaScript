//  Module Pattern
// IIFE - Immediently Invoked Function Expression

let Bank = (function () {
  let bankbalance = 12000;

  function checkBalance() {
    console.log(bankbalance);
  }

  function setBalance(val) {
    bankbalance = val;
  }

  function withdraw(val) {
    if (val <= bankbalance) {
      bankbalance -= val;
      console.log(bankbalance);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();
