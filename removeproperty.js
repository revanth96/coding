var myobj = {
    name : "reva",
} 
function removeProperty(myobj,key)
{
    delete myobj[key];
console.log(myobj[key])
}
removeProperty(myobj,"age")
