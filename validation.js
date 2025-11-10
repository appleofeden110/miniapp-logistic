const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const ageInput = document.getElementById('age');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const surnameError = document.getElementById('surnameError');
    const ageError = document.getElementById('ageError');
    const successMessage = document.getElementById('successMessage');

    function validateName() {
        const value = nameInput.value.trim();
        if (value === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            return false;
        }
        if (value.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameError.style.display = 'block';
            return false;
        }
        nameError.style.display = 'none';
        return true;
    }

    function validateSurname() {
        const value = surnameInput.value.trim();
        if (value === '') {
            surnameError.textContent = 'Surname is required';
            surnameError.style.display = 'block';
            return false;
        }
        if (value.length < 2) {
            surnameError.textContent = 'Surname must be at least 2 characters';
            surnameError.style.display = 'block';
            return false;
        }
        surnameError.style.display = 'none';
        return true;
    }

    function validateAge() {
        const value = ageInput.value;
        if (value === '') {
            ageError.textContent = 'Age is required';
            ageError.style.display = 'block';
            return false;
        }
        const age = parseInt(value);
        if (isNaN(age) || age < 1 || age > 120) {
            ageError.textContent = 'Age must be between 1 and 120';
            ageError.style.display = 'block';
            return false;
        }
        ageError.style.display = 'none';
        return true;
    }

    nameInput.addEventListener('blur', validateName);
    surnameInput.addEventListener('blur', validateSurname);
    ageInput.addEventListener('blur', validateAge);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        successMessage.style.display = 'none';

        const isNameValid = validateName();
        const isSurnameValid = validateSurname();
        const isAgeValid = validateAge();

        if (isNameValid && isSurnameValid && isAgeValid) {
            const formData = {
                name: nameInput.value.trim(),
                surname: surnameInput.value.trim(),
                age: parseInt(ageInput.value)
            };

            console.log('Form submitted:', formData);
            successMessage.style.display = 'block';

            // Clear form
            nameInput.value = '';
            surnameInput.value = '';
            ageInput.value = '';
        }
    });