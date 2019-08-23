<!DOCTYPE html>
<html>
    <div id="content"></div>
    <body>
        <script>
            var object1={name:"rajnikanth",age:"19",hasPets:true};
            function printallkey(object)
            {
            var a=[];
            var b=[];
            a=Object.keys(object)

            a.forEach(function(y){

                b.push(y);
            })
            return b;
            }

            document.getElementById("content").innerText=printallkey(object1)
            console.log(printallkey(object1));
        </script>
    </body>
</html>
