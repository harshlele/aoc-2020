let code = "FBFBBFFRLR";

let low = 0,high = 127;

console.log(getColumn(0,127,code.substr(0,7),"B","F"));
//console.log(getCodeNumber(0,7,code.substr(7,3),"R","L"));

function getColumn(low, high, code, up, down){
    let mid = low + (high - low)/2;
    if(high - low > 1){
        if(code[0] == up){
            return getColumn(mid,high,code.substr(1),up,down);
        }
        else if(code[0] == down){
            return getColumn(low, mid, code.substr(1),up,down);
        }
    }
    else{
        if(code[0] == up) return low;
        else if(code[0] == down) return high;
    }
}

/*
function getCodeNumber(low, high, code, upCode, downCode){
    let mid = 0;
    let l = low,h = high;
    code.split("").forEach(c => {
        mid = parseInt((l + h)/2);
        if(c == downCode){
            h = mid;
        }
        else if(c == upCode){
            l = mid;
        }
    });
    if(code[code.length - 1] == upCode) return h;
    if(code[code.length - 1] == downCode) return l;
       
}
*/

