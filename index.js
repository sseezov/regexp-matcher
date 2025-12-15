const regexpForm = document.querySelector('.regexpForm')
const regexpInput = document.querySelector('#regexpInput')
const textInput = document.querySelector('#textInput')
const result = document.querySelector('.result')

regexpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const regexp = new RegExp(regexpInput.value, 'g');
  const input = textInput.textContent
  console.log(input);
  const match = input.match(regexp);
  const newInputElements = input.split('').map((symbol) => {
    if (match.includes(symbol)){
      return `<p class="match">${symbol}</p>`;
    }
    return `<p>${symbol}</p>`;
  }).join('')

  textInput.innerHTML = newInputElements;
})

textInput.addEventListener('focus', ()=>{
  textInput.textContent = ''
})