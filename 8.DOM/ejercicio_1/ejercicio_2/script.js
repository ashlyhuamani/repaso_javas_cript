let titulo=document.querySelector
("h1")
let primerTitulo=titulo.textContent
titulo.textContent="otro titulo"
let contenido=document.
querySelector("#contenido")
contenido.innerHTML=`
<p>${primerTitulo}</p>
<ul>
  <li>uno</li>
  <li>dos</li>
</ul>
`