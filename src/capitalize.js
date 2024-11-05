function capitalize(input){
    let firstChar=input[0];
    return firstChar.toUpperCase()+input.slice(1);
}

export default capitalize;
