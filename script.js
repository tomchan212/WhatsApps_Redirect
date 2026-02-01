const phoneInput = document.getElementById('phoneInput');
const confirmBtn = document.getElementById('confirmBtn');

function doConfirm() {
    const phoneNumber = phoneInput.value.trim();
    if (phoneNumber.length > 0) {
        window.location.href = `https://wa.me/+852${phoneNumber}`;
    }
}

confirmBtn.addEventListener('click', doConfirm);

// Only allow numeric input (block non-digits)
phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Allow paste: strip non-digits from pasted text and insert at cursor
phoneInput.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    const digits = pasted.replace(/\D/g, '');
    const start = phoneInput.selectionStart;
    const end = phoneInput.selectionEnd;
    const current = phoneInput.value;
    phoneInput.value = current.slice(0, start) + digits + current.slice(end);
    const newPos = start + digits.length;
    phoneInput.setSelectionRange(newPos, newPos);
});

phoneInput.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter' && e.key.length === 1 && !/\d/.test(e.key)) {
        e.preventDefault();
    }
});

// Submit and redirect on Enter (keyboard / number pad confirm)
phoneInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        doConfirm();
    }
});
