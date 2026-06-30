function fibonacciGenarator(n) {
  var output = [];
  var first = 0;
  var second = 1;
  var next = first + second;
  output.push(first);
  if (n > 1) {
    output.push(second);
  }
  for (; output.length < n; next = first + second) {
    output.push(next);
    first = second;
    second = next;
  }
  return output;
}
console.log(fibonacciGenarator(10));
