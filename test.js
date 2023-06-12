const greet = {
  'Hello' : 'John',
  'Hola': 'Antonio',
  'Ciao': 'Luigi'
}

for (const name in greet) {
  console.log(`${name}, ${greet[name]}!`)
}
