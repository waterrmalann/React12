export function generatePassword(length, uppercase, lowercase, digits) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';

    let allChars = '';
    if (uppercase) allChars += uppercaseChars;
    if (lowercase) allChars += lowercaseChars;
    if (digits) allChars += digitChars;

    if (allChars === '') {
        throw new Error('At least one character set (uppercase, lowercase, or digits) must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}