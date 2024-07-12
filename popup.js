document.getElementById('generate').addEventListener('click', () => {
    const max = parseInt(document.getElementById('max').value);
    const ignored = parseInt(document.getElementById('ignored').value);

    if (!isNaN(max) && !isNaN(ignored) && max > 0 && ignored > 0 && ignored <= max) {
        const result = generateRandomNumbers(max, ignored);
        document.getElementById('result').innerText = result.join(', ');
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
});

function generateRandomNumbers(max, ignored) {
    
    //value 1 has a 50% probability, value 2 has a 40% probability, and value 3 has a 10% probability.
    const sizeOptions = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3];
    const length = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    //same probability
    //const length = Math.floor(Math.random() * 3) + 1;
    const result = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * max) + 1;
        if (randomNumber === ignored) {
            randomNumber = 0;
        }
        result.push(randomNumber);
    }

    return result;
}
