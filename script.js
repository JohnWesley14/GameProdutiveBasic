const inputTime = document.querySelectorAll('.list ul li input')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const modalChange = document.querySelector('.modal')



function minutos(valor){
  
   var xp = valor / 2
   h4.innerHTML = `Você estudará por ${valor} minutos e ganhará ${xp} de xp` 
   
}
function contador(){
   let contador = 0;
		
	setInterval(() => {
      function segundos(){
         h5.innerHTML = `Você está estudando por ${contador} segundos`
      }
      
      if(contador < 60){
         segundos()
      } else{
         h5.innerHTML = `Você está estudando por ${contador/60} minutos`
      }
   contador++
   }, 1000);

}
function modal(){
   modalChange.classList.toggle('visible')
   
}