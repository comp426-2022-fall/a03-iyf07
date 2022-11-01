export default function roll(s,d,r){
    let res = [];
    for(let i=0;i<r;i++){
        res.push(Math.floor(Math.random()*(s*d)+1));
    }
    return res
};