module.exports = function toReadable(number) {
    let length = String(number).length;
    
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    switch (length) {
        case 1:
            return digits[number];
        case 2:
            if (number % 10 === 0) {
                return dozens[Math.floor(number / 10)]
            } else if (Math.floor(number / 10) === 1) {
                return secondDigits[number % 10]
            } else {
                return `${dozens[Math.floor(number / 10)]} ${digits[number % 10]}`;
            }
    
        case 3:
            if (number % 100 === 0) {
                return `${digits[Math.floor(number / 100)]} hundred`
            } else if (Math.floor(number % 100 / 10) === 0) {
                return `${digits[Math.floor(number / 100)]} hundred ${digits[number % 10]}`
            } else if (number % 10 === 0) {
                return `${digits[Math.floor(number / 100)]} hundred ${dozens[Math.floor((number % 100) / 10)]}`
            } else if (Math.floor((number % 100) / 10) === 1) {
                return `${digits[Math.floor(number / 100)]} hundred ${secondDigits[number % 10]}`
            } else {
                return `${digits[Math.floor(number / 100)]} hundred ${dozens[Math.floor((number % 100) / 10)]} ${digits[number % 10]}` 
            }
           
    }
}      
      