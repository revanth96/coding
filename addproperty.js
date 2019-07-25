var myobj = {
    name : "reva",
    age : 25
} 

function addProperty(myobj,key)
{
    myobj.myproperty="true"
console.log(myobj[key])
}

addProperty(myobj,"myproperty")
