function createResultString(res) {
    var sum = 0;
    let posString ="";
    posString += "Receipts\n" + "------------------------------------------------------------\n";
    for (let i = 0; i < res.length; i++) {
        if (res[i].name.length + 6 > 8) {
            var spaceNum = (24 - res[i].name.length + 6);
        }
        posString += res[i].name;
        for (let j = 0; j < spaceNum; j++) {
            posString += " ";
        }
        posString += "  " + res[i].price + "          " + res[i].count + "\n";
        sum += res[i].price * res[i].count;
    }
    posString += "------------------------------------------------------------\n" + "Price: " + sum;
    return posString;
}

function getObject(a,b){
    if(a === b.id){
        //posString += collectionB[j].name;
        var ob={
            name:b.name,
            price:b.price,
            count:1
        }
        return ob
    }else{
        return null;
    }
}

function findExistObject(ob,collectionA) {
    for(let k = 0;k<collectionA.length;k++){
        if(ob.name === collectionA[k].name) {
            return k;
        }
    }
    return -1;
}

function getPosMassage(collectionA,collectionB) {

    let res =[];
    var k = 0;
    var posString = "";

    for(let i = 0;i<collectionA.length;i++){
        for(let j = 0;j<collectionB.length;j++){

            ob = getObject(collectionA[i],collectionB[j]);
            if(ob != null) {
                if (k === 0) {
                    res[k++] = ob;
                } else {
                    let sign = 0;
                    if (findExistObject(ob, res) != -1) {
                        res[findExistObject(ob, res)].count++;
                    } else {
                        res[k++] = ob;
                    }
                }
                break;
            }
        }
    }
    posString = createResultString(res);
    return posString;
}

module.exports ={
    getPosMassage,
};