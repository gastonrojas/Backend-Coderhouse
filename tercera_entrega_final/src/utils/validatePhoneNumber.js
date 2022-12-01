export default function(phone) {
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (regex.test(phone)) {
        return phone
    } else {
        return null
    }
}