


 let num = 25;

 let factor = 0;

   for (let i = 1 ; i <= num; i++) {

     
       if (num % i == 0) {

           factor++;

       }


   } if (factor == 2) {

    console.log (num, "This is a prime number");

   } else {

     console.log (num, "This is nit a prime number");

   }


