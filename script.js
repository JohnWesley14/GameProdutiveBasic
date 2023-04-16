const inputTime = document.querySelectorAll('.list ul li input')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const modalChange = document.querySelector('.modal')
console.log(inputTime);
var contadorActive = false

function teste(){
   var data = new Date
   var minuto = data.getMinutes()
   var hora = data.getHours()
   var valor = inputTime.value
   console.log(`O valor é ${valor}`)
   console.log(`O minuto e ${minuto}`)
   console.log(`A hora é ${hora}`);
   var valorArray = []
   valorArray = valor.split('')

   valorArray.shift()
   valorArray.shift()
   valorArray.shift()

   var arrayNumerico = valorArray.join('')
   console.log(arrayNumerico);
   var minutosDeEstudo = arrayNumerico - minuto
   
   h4.innerHTML = `Você estudará por ${minutosDeEstudo} minutos e ganhará ${xp} de xp!` 
   function mudarTimer(){
      segundosTimer = 0
      

   }
   setInterval(() => {
      var segundosTimer = 0;
      segundosTimer +=1
      h5.innerHTML = `Estudando por ${segundosTimer}`
   }, 1000);

   
}
function minutos(valor){
   setTimeout(contador, 1000);
   var xp = valor / 2
   h4.innerHTML = `Você estudará por ${valor} minutos e ganhará ${xp} de xp` 
   contadorActive = true
   
}
function contador(){
   var data = new Date
   var segundos = JSON.stringify(data.getSeconds())
   console.log(typeof segundos);
   console.log(segundos);
   h5.innerHTML = `Estudando por ${segundos}`

}
function modal(){
   modalChange.classList.toggle('visible')
   
}