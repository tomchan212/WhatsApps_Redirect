const phoneInput = document.getElementById('phoneInput');

// Only allow numeric input (block non-digits)
phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});

phoneInput.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter' && e.key.length === 1 && !/\d/.test(e.key)) {
        e.preventDefault();
    }
});

// Submit and redirect on Enter
phoneInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const phoneNumber = phoneInput.value.trim();
        if (phoneNumber.length > 0) {
            window.location.href = `https://wa.me/+852${phoneNumber}`;
        }
    }
});
