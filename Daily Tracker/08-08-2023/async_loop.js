function asynchronousLoop(i) {
  if (i <= 5) {
    console.log('Async Loop:', i);
    setTimeout(() => asynchronousLoop(i + 1), 1000);
  }
}

asynchronousLoop(1);
