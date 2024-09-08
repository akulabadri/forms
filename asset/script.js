function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let valid = true;

    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      valid = false;
    } else {
      document.getElementById('nameError').innerText = '';
    }

    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      valid = false;
    } else {
      document.getElementById('emailError').innerText = '';
    }

    if (age === '' || isNaN(age) || age < 18) {
      document.getElementById('ageError').innerText = 'Age must be a number and at least 18';
      valid = false;
    } else {
      document.getElementById('ageError').innerText = '';
    }

    return valid;
}