document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById('dynamic-text');
    const words = ['Kanalproblemen', 'Abflussreinigung', 'Sanitärproblemen'];
    const typingSpeed = 150;
    const pauseBetweenWords = 1000;
    const initialDelay = 500;

    let currentIndex = 0;

    function typeWord(word) {
        dynamicText.textContent = '';
        let index = 0;
        const interval = setInterval(function () {
            dynamicText.textContent += word[index];
            index++;
            if (index === word.length) {
                clearInterval(interval);
                setTimeout(function () {
                    eraseWord(word);
                }, pauseBetweenWords);
            }
        }, typingSpeed);
    }

    function eraseWord(word) {
        let index = word.length - 1;
        const interval = setInterval(function () {
            dynamicText.textContent = dynamicText.textContent.slice(0, index);
            index--;
            if (index === -1) {
                clearInterval(interval);
                currentIndex = (currentIndex + 1) % words.length;
                setTimeout(function () {
                    typeWord(words[currentIndex]);
                }, typingSpeed * 2);
            }
        }, typingSpeed);
    }

    setTimeout(function () {
        typeWord(words[currentIndex]);
    }, initialDelay);
});
