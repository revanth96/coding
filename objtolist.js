<!DOCTYPE html>
<html>
    <div id="content"></div>
    <body>
        <script>

            var object1={name:"rajnikanth",haspet:"false",age:"19"};
            function printallkey(object)
            {
            var a=Object.keys(object)
            var b=[]
            a.forEach(function(key) {
                var c=[]
                c.push(key,object[key])  
                b.push(c) 
            });

            return b;
            }
            document.getElementById("content").innerText=JSON.stringify(printallkey(object1)) 
            console.log(printallkey(object1));
        </script>
    </body>
</html>
