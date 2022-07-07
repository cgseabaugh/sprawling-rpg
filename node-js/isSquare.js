
function arrayDiff(a, b){
    for(let i = 0; i < a.length; i++){
        for(let x = 0; x < b.length; x++){
            if(a[i] === b[x]){
                a.filter(b[x]);
            }
        }
    }
    console.log(a);
}

arrayDiff([1, 2, 2], [2]);