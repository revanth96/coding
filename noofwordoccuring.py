mystring =input()
result={}
value=mystring.split(" ")
for i in value:
    if i in result:
        result[i]+=1
    else:
        result[i]=1
print(result)
