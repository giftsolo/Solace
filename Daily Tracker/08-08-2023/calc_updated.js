function add(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x + y);
    }, 100);
  });
}

function subtract(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x - y);
    }, 100);
  });
}

function multiply(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * y);
    }, 100);
  });
}

function divide(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (y !== 0) {
        resolve(x / y);
      } else {
        resolve('Cannot divide by zero');
      }
    }, 100);
  });
}

function calculatePercentage(value, percentage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((percentage / 100) * value);
    }, 100);
  });
}

async function calculator() {
  const num1 = 10;
  const num2 = 5;

  try {
    const additionResult = await add(num1, num2);
    console.log('Addition:', additionResult);

    const subtractionResult = await subtract(num1, num2);
    console.log('Subtraction:', subtractionResult);

    const multiplicationResult = await multiply(num1, num2);
    console.log('Multiplication:', multiplicationResult);

    const divisionResult = await divide(num1, num2);
    console.log('Division:', divisionResult);

    const percentageResult = await calculatePercentage(200, 15);
    console.log('Percentage:', percentageResult);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

calculator();
