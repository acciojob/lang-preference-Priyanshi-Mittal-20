//your JS code here. If required.
let btn= document.getElementById("submit")
btn.addEventListener("click",()=>langStore(e))
function langStore(e)
{
	e.preventDefault()
	let lang=document.getElementById("language").value
	sessionStorage.setItem("language",lang)
}