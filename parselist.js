<!DOCTYPE html>
<html>
    <div id="content"></div>
    <body>
        <script>
        var array1=["Guvi","I","am","Geek"];
        function transformfirstandlast(array)
        {
            var a= array[0];
            var b=array[array.length-1];
            var newobj={}
            newobj[a]=b
        return newobj;
        }
        document.getElementById("content").innerText=JSON.stringify(transformfirstandlast(array1))
        console.log(transformfirstandlast(array1))
        </script>
    </body>
</html>
