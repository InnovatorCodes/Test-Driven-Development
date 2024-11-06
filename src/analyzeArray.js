export default function analyzeArray(input){
    let avg=input.reduce((initial,value)=>initial+value,0);
    avg/=input.length;
    return {
        "average": avg,
        "min": Math.min(...input),
        "max": Math.max(...input),
        "length": input.length
    }
}