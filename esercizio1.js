<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Esercizio Navigazione DOM</title>
</head>
<body>
  <ul>
    <li>Primo elemento</li>
    <li>Secondo elemento</li>
    <li>Terzo elemento</li>
  </ul>

  <script>
    // Seleziona l'elemento <ul> dal DOM
    const ulElement = document.querySelector('ul');

    // 1. Elemento padre di <ul>
    console.log(ulElement.parentNode);

    // 2. Secondo elemento figlio di <ul>
    console.log(ulElement.children[1]);

    // 3. Elemento fratello successivo del secondo <li>
    console.log(ulElement.children[1].nextElementSibling);

    // 4. Elemento fratello precedente del secondo <li>
    console.log(ulElement.children[1].previousElementSibling);
  </script>
</body>
</html>
