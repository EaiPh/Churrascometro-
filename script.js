/* homem= carne: 400g, +6h 650g         |   mulher= carne: 300g, +6h 487          |   criança= carne: 200g, +6h 325g
          cerveja: 1200ml, +6h 2000ml   |           cerveja: 1080ml, +6h 1800ml   |            cerveja: 0ml, +6h 0ml
          refrigerante: 1000ml          |           refrigerante: 800ml           |            refrigerante: 500ml
*/
const howManyMans= document.querySelector('#man')
const howManyWomen= document.querySelector('#women')
const howManyKids= document.querySelector('#kid')
const duration= document.querySelector('#duration')
const calculate= document.querySelector('#button')

const howManyFood= { man: { meat: "", beer: "", soda: "",},
                     women: { meat: "", beer: "", soda: "",},
                     kid: { meat: "", beer: "", soda: "",},
}

calculate.addEventListener('click', () => {
   if (Number(duration.value) == "") {
      alert('Por favor, digite a duração do churrasco para prosseguir!')
   } else if (Number(duration.value) > 6) {
      durationGreaterThan6(howManyFood)
   } else {
      durationLessthan6(howManyFood)
   }
})

function durationGreaterThan6(hmf) {
   //man
   hmf["man"].meat= howManyMans.value * 650
   hmf["man"].beer= howManyMans.value * 2000
   hmf["man"].soda= howManyMans.value * 1000
   //women
   hmf["women"].meat= howManyWomen.value * 487
   hmf["women"].beer= howManyWomen.value * 1800
   hmf["women"].soda= howManyWomen.value * 800
   //kid
   hmf["kid"].meat= howManyKids.value * 200
   hmf["kid"].beer= howManyKids.value * 0
   hmf["kid"].soda= howManyKids.value * 500
    
   addValues(howManyFood)
}

function durationLessthan6(hmf) {
   //man
   hmf["man"].meat= howManyMans.value * 400
   hmf["man"].beer= howManyMans.value * 1200
   hmf["man"].soda= howManyMans.value * 1000
   //women
   hmf["women"].meat= howManyWomen.value * 300
   hmf["women"].beer= howManyWomen.value * 1080
   hmf["women"].soda= howManyWomen.value * 800
   //kid
   hmf["kid"].meat= howManyKids.value * 325
   hmf["kid"].beer= howManyKids.value * 0
   hmf["kid"].soda= howManyKids.value * 500
   
   addValues(howManyFood)
}

function addValues(hmf) {
   //man
   document.querySelector('#mMeat').innerText= hmf["man"].meat < 1000 ? `0.${hmf["man"].meat}` : `${hmf["man"].meat / 1000}`
   document.querySelector('#mBeer').innerText= hmf["man"].beer < 1000 ? `0.${hmf["man"].beer}` : `${(hmf["man"].beer / 350).toFixed()}`
   document.querySelector('#mSoda').innerText= hmf["man"].soda < 1000 ? `0.${hmf["man"].soda}` : `${hmf["man"].soda / 1000}`
   //women
   document.querySelector('#wMeat').innerText= hmf["women"].meat < 1000 ? `0.${hmf["women"].meat}` : `${(hmf["women"].meat / 1000).toFixed(1)}`
   document.querySelector('#wBeer').innerText= hmf["women"].beer < 1000 ? `0.${hmf["women"].beer}` : `${(hmf["women"].beer / 350).toFixed()}`
   document.querySelector('#wSoda').innerText= hmf["women"].soda < 1000 ? `0.${hmf["women"].soda}` : `${hmf["women"].soda / 1000}`
   // kid
   document.querySelector('#kMeat').innerText= hmf["kid"].meat < 1000 ? `0.${hmf["kid"].meat}` : `${(hmf["kid"].meat / 1000).toFixed(1)}`
   document.querySelector('#kBeer').innerText= 0
   document.querySelector('#kSoda').innerText= hmf["kid"].soda < 1000 ? `0.${hmf["kid"].soda}` : `${hmf["kid"].soda / 1000}`
   // total
   document.querySelector('#tMeat').innerText= (hmf["kid"].meat + hmf["women"].meat + hmf["man"].meat) / 1000
   document.querySelector('#tBeer').innerText= ((hmf["kid"].beer + hmf["women"].beer + hmf["man"].beer) / 350).toFixed()
   document.querySelector('#tSoda').innerText= (hmf["kid"].soda + hmf["women"].soda + hmf["man"].soda) / 1000
}