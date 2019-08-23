<!DOCTYPE html>
<html>
    <div id="content"></div>
    <body>
        <script>
            var array1=[["name","rajnikanth"],["haspet","false"],["Age","19"]];
            function printallkey(array)
            {
                var a={}
                array.forEach(function(key)
                 { 
                    a[key[0]]=key[1]
                });
                return a;
            }
            document.getElementById("content").innerText=JSON.stringify(printallkey(array1))
            console.log(array1)
        </script>
    </body>
</html>
