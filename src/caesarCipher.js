export default function caesarCipher(input,offset){
    let charArray=input.split('');
    let alphanum=/[a-zA-Z]/
    let result='';
    for(let i=0;i<charArray.length;i++){
        if(!alphanum.test(charArray[i])) {
            result+=charArray[i];
            continue;
        }
        let charcode=charArray[i].charCodeAt(0);
        if(charcode<=90){
            charcode+=offset;
            if(charcode>90) 
                while(charcode>90) charcode-=26
        }
        else{
            charcode+=offset;
            if(charcode>122) 
                while(charcode>122) charcode-=26;
        }
        result+=String.fromCharCode(charcode);
    }
    return result;
}