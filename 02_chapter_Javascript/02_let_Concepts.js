let a=10;
console.log(a);

for (let a=0; a<1000; a++)
{
    console.log(a);
    badCodeFn();
}

function badCondeFn()
{
    console.log("Hello");
}