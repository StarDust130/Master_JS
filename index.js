function example() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 40; // Re-declares and updates 'x' in the same function scope
    let y = 50; // 'y' is block-scoped, so this 'y' is separate from the outer 'y'
    const z = 60; // 'z' is block-scoped, so this 'z' is separate from the outer 'z'
    console.log(x); // 40
    console.log(y); // 50
    console.log(z); // 60
  }

  console.log(x); // 40 (because 'var' is function-scoped and was re-declared in the if block)
  console.log(y); // 20 (the outer 'y' is unchanged)
  console.log(z); // 30 (the outer 'z' is unchanged)
}

example();
