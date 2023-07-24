console.log("1.program to check whether a number is prime or not.");
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numToCheck = 13;
  if (isPrime(numToCheck)) {
    console.log(`${numToCheck} is a prime number.`);
  } else {
    console.log(`${numToCheck} is not a prime number.`);
  }
  console.log("\n")

  
 
 
  console.log("2.program to find sum of fibonaci series upto n.");
  function fibonacciSum(n) {
    if (n <= 0) {
      return 0;
    }
  
    let sum = 0;
    let prev = 0;
    let curr = 1;
  
    for (let i = 1; i <= n; i++) {
      sum += curr;
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
  
    return sum;
  }
  
  const n = 10;
  const sum = fibonacciSum(n);
  console.log(`Sum of the Fibonacci series up to ${n} is: ${sum}`);
  console.log("\n");



  
  
  console.log("3.program to find count of even, odd and zero");
  function countEvenOddZero(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 0) {
        zeroCount++;
      } else if (numbers[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { evenCount, oddCount, zeroCount };
  }
  
  const numbersArray = [2, 5, 0, 8, 3, 0, 1];
  const counts = countEvenOddZero(numbersArray);
  console.log(`Even count: ${counts.evenCount}`);
  console.log(`Odd count: ${counts.oddCount}`);
  console.log(`Zero count: ${counts.zeroCount}`);
  
  