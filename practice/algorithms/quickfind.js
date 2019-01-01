const id = [];

function idFill(n){
    for (let i = 0; i < n; i++){
        id[i] = i;
    }
}

function quickFind(p, q){
    return id[p] === id[q];
}

function union(p, q){
    let pId = id[p];
    let qId = id[q];

    for(let i = 0; i < id.length; i++){
        if (id[i] === pId) id[i] = qId;
    }
}