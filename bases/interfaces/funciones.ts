(()=>{

    interface addTwoNumbers{
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => a + b;

    // console.log(addNumbersFunction(1,2));

})()