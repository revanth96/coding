<!DOCTYPE html>
<html>
    <div id="content"></div>
    <body>
        <script>

            var object1={name:"Rajnikanth",age:19,hasPets:False};
            function printallkey(object)
            {
            var a=Object.keys(object)
            var b=[]
            a.forEach(function(key) {
                b.push(object[key])   
            });

            return b;
            }
            document.getElementById("content").innerText=printallkey(object1)
            console.log(printallkey(object1));
        </script>
    </body>
</html>
