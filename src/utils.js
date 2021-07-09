export const ValidateEmail = (inputText) =>{
    const mailformat =/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if(inputText.match(mailformat)){
        return true;
    } else {
    return false;
    }
}
