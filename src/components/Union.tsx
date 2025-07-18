const Union = () => {

    // let name: number | string;
    // let result = name = 'chandan gautam';
    // console.log(result)

    function combine(num1: number | string, num2: number | string){
        let result;

        if(typeof num1 === 'number' && typeof num2 === 'number'){
            result = num1 + num2
        }else{
            result = num1.toString() + num2.toString();
        };
        return result;
    } 
    const sum = combine(20,30);
    const combineResult = combine('Chandan Gautam ', 'Fullstack Developer');
    console.log(sum, combineResult)

  return (
    <div>
      
    </div>
  )
}

export default Union
