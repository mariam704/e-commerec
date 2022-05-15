// const btn=document.querySelector(".nav-toggle");
// const exp=document.querySelector(".exp");
// const navbar =document.querySelector(".navbar");
// btn.addEventListener("click", function() {
// 	// exp.classList.toggle(".show-links");
// 	exp.classList.toggle("show-exp");
// });

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".exp");
const links = document.querySelector(".navbar");
navToggle.addEventListener("click",function () {
	linksContainer.classList.toggle("show-exp");
	// body...
});
//--------------------------------------------api exampel----------------------------
// async function get() {
// const response = await fetch("https://www.breakingbadapi.com/api/characters/")
// const data = await response.json()
// console.log(data)
// document.querySelector("#content h4").innerHTML=data[0].name
// document.querySelector("#content img").src=data[0].img

// document.querySelector("#actor").innerHTML=
// `
// <select onchange ="getch(this.value)">
// ${data.map(actor =>`<option> ${actor.name} </option>`)}
// </select>

// `
// function getch(e) {
// 	// body...
// 	console.log(e);
// }

// shopping cart---------------------------------------------------------------------
(function (){
	const cartShopping= document.getElementById('shopping-cart');
	const cart = document.getElementById("cart");
	cartShopping.addEventListener("click" , function() {
		cart.classList.toggle('show-cart');

	});
} ) ();