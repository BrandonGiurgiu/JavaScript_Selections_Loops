console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let number = 100; number >= 1; number--)
{
    if(number % 2 == 0)
    {
        continue;
    }
    else
    {
        console.log(number);
    }
}
    

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let number = 1; number <= 100; number++)
{
    if(number % 5 == 0 && number % 3)
    {
        console.log(`${number} is assigned FIZZBUZZ`);
    }
    else
    {
        if(number % 3 == 0)
        {
            console.log(`${number} is assigned FIZZ`);
        }
        if(number % 5 == 0)
        {
            console.log(`${number} is assigned BUZZ`);
        }
        else
        {
            console.log(`${number} has no fun word`);
        }
    }
}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
//EXERCISE 2 in DO/WHILE:
// do
// {
//     let x = 1;

//     if(x % 5 == 0 && x % 3)
//     {
//         console.log(`${x} is assigned FIZZBUZZ`);
//     }
//     else
//     {
//         if(x % 3 == 0)
//         {
//             console.log(`${x} is assigned FIZZ`);
//         }
//         if(x % 5 == 0)
//         {
//             console.log(`${x} is assigned BUZZ`);
//         }
//         else
//         {
//             console.log(`${x} has no fun word`);
//         }
//     } 
    
// x++;

// } while (x <= 100);


//Exercise 1 in WHILE:
// let number = 100
// while(number >= 1)
// {
    
//     if(number % 2 ==0)
//     {
//         continue;
//     }
//     else
//     {
//         console.log(number);
//     }
    
// }

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));

let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; 1 <= n; i++)
{
    if(i == value)
    {
        console.log(`Found ${value}!`);
        break;
    }
    if(i == n)
    {
        console.log(`Did not find ${value} within 1-${n}`);
    }
}


//Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);

let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++)
{
    let output = "";

    if(i % fizzDivisor == 0)
    {
        output += "FIZZ";
    }

    if(i % buzzDivisor == 0)
    {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);  
}

console.log(fizzDivisor, buzzDivisor);