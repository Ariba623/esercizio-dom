<script>
    const ul = document.querySelector('ul');
    const secondoLi = ul.children[1]; // l'indice parte da 0, quindi [1] è il secondo

    console.log(ul.parentElement);                 // <body>…</body>
    console.log(ul.children[1]);                   // <li>2</li>
    console.log(secondoLi.nextElementSibling);     // <li>3</li>
    console.log(secondoLi.previousElementSibling); // <li>1</li>
</script>
