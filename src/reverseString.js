export default function reverseString(input){
    let charArray=input.split('');
    let output="";
    for(let i=charArray.length-1;i>=0;i--) output+=charArray[i];
    return output;
}