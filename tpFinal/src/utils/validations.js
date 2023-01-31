export function validateEmail(email) {
    const validRegex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
    if (email.match(validRegex)) {
        return email
    } else {
        return null
     }
}

export function validateId(id) {
    const validRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
    if (id.match(validRegex)) {
        return id
    } else {
        return null
     }
}

export function validatePassword(password) {
const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

    if (password.match(regex)) {
        return password
    } else {
        return null
    }
}

export function validateName(name) {
    const regex = /^(?=.{2,}$)[\p{L}\s]+$/u
    if (name.match(regex)) {
        return name.toLowerCase()
    } else {
        return null
    }
}
    
export function validateImage(img) {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    if (img.match(regex)) {
        return img
    } else {
        return null
    }
}

export function validateDescription(desc){
    if(!typeof desc == 'string') return null
    if(desc.length > 400) return null
    return desc.toLowerCase()
}

export function validatePrice(price){
    if(!typeof price == 'number') return null
    if (price < 0 || price > 999999999) return null
    return price
}