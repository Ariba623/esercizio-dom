function addProduct() {
  const input = document.querySelector('input[type="text"]');
  const lista = document.querySelector('ul');
  const testo = input.value.trim();

  // non aggiungere task vuoti
  if (testo === '') {
    return;
  }

  // 1. creo l'elemento della lista
  const li = document.createElement('li');

  // 2. creo il checkbox per il task
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // testo del task
  const task = document.createElement('span');
  task.textContent = testo;

  // inserisco checkbox e testo nel <li>, poi il <li> nella lista
  li.appendChild(checkbox);
  li.appendChild(task);
  lista.appendChild(li);

  // svuoto il campo per il task successivo
  input.value = '';
  input.focus();
}
