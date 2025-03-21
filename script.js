 let num =prompt("Enter a number");
 let arr=[];
 for(let i=1;i<=num;i++){  
  arr[i-1]=i;
  }
 
   let newarr = arr.reduce((sum,val)=>{
    return sum*val;
  })
  console.log(newarr);


 