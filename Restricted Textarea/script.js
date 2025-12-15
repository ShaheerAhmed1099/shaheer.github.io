let textArea = document.getElementById('input');
let charCount = document.getElementById('char-count');
const maxChars = 250;

textArea.addEventListener('input', function() {
    const currentLength = textArea.value.length;

    charCount.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength >= maxChars) {
        textArea.classList.add('limit-reached');
    } else {
        textArea.classList.remove('limit-reached');
        charCount.classList.remove('limit-reached');
    }
});