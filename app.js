
function doSomething(funcArg)
{
  funcArg();
}

//Passing an anonymous function as an argument
doSomething(
  function()
  {
    console.log("Hello World From Inner Function");
  }
);
