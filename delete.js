var myobj = {
    name : "reva",
    age : 25
} 

function removeProperty(myobj,key)
{
    delete myobj.age;
console.log(myobj[key])
}

removeProperty(myobj,"age")
