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
    let pId = id[p];  //these too parts are necessary to make sure that if we run this function again that the changed
    let qId = id[q]; // id's are used, not the index. IF we changed the index of id[p] it won't change the id of p.

    for(let i = 0; i < id.length; i++){
        if (id[i] === pId) id[i] = qId;
    }
}