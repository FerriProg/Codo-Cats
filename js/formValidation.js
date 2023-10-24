const submitForm = () => {
  let name = document.getElementById('name');
  if (name.value.trim() === '') {
    swal.fire({
      title: 'Error!',
      text: 'Debe colocar su nombre',
      icon: 'error',
    });
    return;
  }

  let surname = document.getElementById('surname');
  if (surname.value.trim() === '') {
    swal.fire({
      title: 'Error!',
      text: 'Debe colocar su apellido',
      icon: 'error',
    });
    return;
  }

  let email = document.getElementById('email');
  if (email.value === '') {
    swal.fire({
      title: 'Error!',
      text: 'Debe colocar su email',
      icon: 'error',
    });
    return;
  }

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email.value)) {
    swal.fire({
      title: 'Error!',
      text: 'Debe ingresar un email válido',
      icon: 'error',
    });
    return;
  }

  let cellphone = document.getElementById('cellphone');
  const cellphonePattern = /^\d{10}$/;

  if (!cellphonePattern.test(cellphone.value)) {
    swal.fire({
      title: 'Error!',
      text: 'Debe ingresar un número de celular válido (10 dígitos)',
      icon: 'error',
    });
    return;
  }

  let freeText = document.getElementById('freeText');
  if (freeText.value.trim() === '') {
    swal.fire({
      title: 'Error!',
      text: 'Debe decirnos qué raza está buscando',
      icon: 'error',
    });
    return;
  }
};

submitButton.addEventListener('click', () => submitForm());

let form = document.getElementById('form');

const handleSubmit = (e) => {
  e.preventDefault();
};

form.addEventListener('submit', (e) => handleSubmit(e));
