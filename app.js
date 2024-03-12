document.getElementById('add-item').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('input-field').value;
  const body = document.querySelector('textarea').value;

  if (!title || !body) {
    alert('Please fill in all fields');
    return;
  }

  const card = document.createElement('div');
  card.className = 'card mt-4';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  const cardTitle = document.createElement('h2');
  cardTitle.id = 'editableHeading';
  cardTitle.textContent = title;
  cardHeader.appendChild(cardTitle);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const cardBodyText = document.createElement('p');
  cardBodyText.id = 'editableBody';
  cardBodyText.textContent = body;
  cardBody.appendChild(cardBodyText);

  const editForm = document.createElement('form');
  editForm.id = 'editForm';
  editForm.style.display = 'none';
  const newText = document.createElement('input');
  newText.type = 'text';
  newText.id = 'newText';
  newText.className = 'form-control';
  editForm.appendChild(newText);
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-primary';
  editForm.appendChild(submitButton);
  cardBody.appendChild(editForm);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger float-end delete';
  deleteButton.textContent = 'Delete';
  cardBody.appendChild(deleteButton);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  document.getElementById('cardPost').appendChild(card);

  document.getElementById('input-field').value = '';
  document.querySelector('textarea').value = '';
});

document.addEventListener('click', function(e) {
  if (e.target && e.target.matches('.delete')) {
    const card = e.target.parentElement.parentElement;
    card.parentElement.removeChild(card);
  }
});

document.addEventListener('click', function(e) {
  if (e.target && e.target.matches('#editableHeading, #editableBody')) {
    const editForm = e.target.nextElementSibling;
    const newText = editForm.querySelector('#newText');
    newText.value = e.target.textContent;
    editForm.style.display = 'block';
    e.target.style.display = 'none';
  }
});

document.addEventListener('submit', function(e) {
  e.preventDefault();
  const newText = e.target.querySelector('#newText');
  const editableElement = e.target.previousElementSibling;
  editableElement.textContent = newText.value;
  editableElement.style.display = 'block';
  e.target.style.display = 'none';
});