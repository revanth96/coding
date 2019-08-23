var array1=[
    [
        ["name","rajnikanth"],["haspet","false"],["Age","19"]
        ],
        [
            ["name","ram"],["haspet","true"],["Age","21"]
            ]
            ];

function printallkey(array)
{
    var a={},b={};
    array[0].forEach(function(item)
     { 
        a[item[0]]=item[1];
    });
    array[1].forEach(function(item)
        {
            b[item[0]]=item[1];
        });
    console.log(a);
    console.log(b);
}

printallkey(array1);
