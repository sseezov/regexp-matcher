const regexpForm = document.querySelector('.regexpForm')
const regexpInput = document.querySelector('#regexpInput')
const textInput = document.querySelector('#textInput')
const result = document.querySelector('.result')

regexpForm.addEventListener('input', (e) => {
  const regexp = new RegExp(regexpInput.value, 'g');

  let input = textInput.textContent
  let newInput = ''

  const matches = input.match(regexp);
  matches.forEach((match) => {
    console.log(999, match);
    let newChunk = input.slice(0, input.indexOf(regexp)+1)
    newChunk = newChunk.concat(`<span class="match">${match}</span>`)
    newInput = newInput.concat(newChunk);
    input = input.slice(0, input.indexOf(match) + match.length)
  })
  console.log('input', input);
  console.log('newInput', newInput);
  
  textInput.innerHTML = newInput;
})
