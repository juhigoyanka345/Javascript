document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    const gender = document.getElementById('gender');
    const membership = document.getElementById('membership');
    const emergencyContact = document.getElementById('emergencyContact');
    const terms = document.getElementById('terms');

    // Error elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dobError = document.getElementById('dobError');
    const genderError = document.getElementById('genderError');
    const membershipError = document.getElementById('membershipError');
    const emergencyError = document.getElementById('emergencyError');
    const termsError = document.getElementById('termsError');

    // Validation functions
    function validateFullName() {
        if (fullName.value.trim() === '') {
            fullNameError.textContent = 'Full name is required.';
            return false;
        }
        fullNameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePhone() {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
            return false;
        }
        phoneError.textContent = '';
        return true;
    }

    function validateDOB() {
        if (!dob.value) {
            dobError.textContent = 'Date of birth is required.';
            return false;
        }
        const birthDate = new Date(dob.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            dobError.textContent = 'You must be at least 18 years old.';
            return false;
        }
        dobError.textContent = '';
        return true;
    }

    function validateGender() {
        if (gender.value === '') {
            genderError.textContent = 'Please select a gender.';
            return false;
        }
        genderError.textContent = '';
        return true;
    }

    function validateMembership() {
        if (membership.value === '') {
            membershipError.textContent = 'Please select a membership type.';
            return false;
        }
        membershipError.textContent = '';
        return true;
    }

    function validateEmergency() {
        if (emergencyContact.value.trim() === '') {
            emergencyError.textContent = 'Emergency contact is required.';
            return false;
        }
        emergencyError.textContent = '';
        return true;
    }

    function validateTerms() {
        if (!terms.checked) {
            termsError.textContent = 'You must agree to the terms and conditions.';
            return false;
        }
        termsError.textContent = '';
        return true;
    }

    // Event listeners for real-time validation
    fullName.addEventListener('blur', validateFullName);
    fullName.addEventListener('input', () => fullNameError.textContent = '');

    email.addEventListener('blur', validateEmail);
    email.addEventListener('input', () => emailError.textContent = '');

    phone.addEventListener('blur', validatePhone);
    phone.addEventListener('input', () => phoneError.textContent = '');

    dob.addEventListener('blur', validateDOB);
    dob.addEventListener('input', () => dobError.textContent = '');

    gender.addEventListener('blur', validateGender);
    gender.addEventListener('change', () => genderError.textContent = '');

    membership.addEventListener('blur', validateMembership);
    membership.addEventListener('change', () => membershipError.textContent = '');

    emergencyContact.addEventListener('blur', validateEmergency);
    emergencyContact.addEventListener('input', () => emergencyError.textContent = '');

    terms.addEventListener('change', validateTerms);

    // Form submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default submission

        const isValid = validateFullName() && validateEmail() && validatePhone() &&
                        validateDOB() && validateGender() && validateMembership() &&
                        validateEmergency() && validateTerms();

        if (isValid) {
            alert('Registration successful!'); // Replace with actual submission logic (e.g., AJAX)
            form.reset(); // Clear the form
        }
    });
});