const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to Password Validator Tool`);

reader.question(`Enter the password to validate: `, function(input)
{
    //stays true until one of the tests has failed
    let passGood = true;

    //CHECKS IF PASSWORD LENGTH IS >= 10
    if (input.length > 9)
    {
        console.log(`length check:                    pass`);
    }                            
    else
    {
        console.log(`length check:                    fail`);
        passGood = false;
    }



    
    //CHECKS IF SPECIAL CHARACTERS ARE USED

    //list of special characters to check for
    const conditions = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `_`, `+`, `=`, `:`, `;`, `\"`, `\'`, `\``, `~`, `<`, `>`, `,`, `.`, `?`, `/`]

    //if a special character is in password, pass the check. else, fail.
    if (conditions.some(char => input.includes(char)))
    {
        console.log(`special characters check:        pass`);
    }
    else
    {
        console.log(`special characters check:        fail`)
        passGood = false;
    }




    //CHECKS IF A CHARACTER IS USED MORE THAN TWICE

    let usedLetters = [];     //stores letters used in password
    let trackedLetters = [];  //stores letters already counted
    let varied = true;        //stays true if the password is varied

    //loops through each index of string and puts it in array named 'usedLetters'
    for (let i = 0; i < input.length; i++)
    {
        usedLetters.push(input.charAt(i));
    }

    //takes used characters and makes an arry of what letters are used named 'trackedLetters'
    for (i = 0; i < input.length; i++)
    {
        if (charTracked(usedLetters[i], trackedLetters) === false)
        {
            trackedLetters.push(usedLetters[i]);
        }
    }

    //takes array of used letters, checks them against input and determines how many times each letter is used
    for (i = 0; i < trackedLetters.length; i++)
    {
        if ((input.split(trackedLetters[i]).length - 1) > 2)
        {
            varied = false;
        }
    }

    if (varied === true)
    {
        console.log("variety check:                   pass");
    }
    else 
    {
        console.log("variety check:                   fail");
        passGood = false;
    }

    //function that returns true if character has been used and false if character has not been used
    function charTracked (char, trackedLetters)
    {
        //tracks whether the current character has been tracked yet or not
        let tracked = false;
        for (let j = 0; j < input.length; j++)
        {
            if (char === trackedLetters[j])
            {
                tracked = true;
            }
        }

        return tracked;
    }




    //LOG WHETHER OR NOT THE PASSWORD PASSED ALL TESTS
    if (passGood === true)
    {
        console.log(`
            ██████╗  █████╗ ███████╗███████╗██╗██╗██╗
            ██╔══██╗██╔══██╗██╔════╝██╔════╝██║██║██║
            ██████╔╝███████║███████╗███████╗██║██║██║
            ██╔═══╝ ██╔══██║╚════██║╚════██║╚═╝╚═╝╚═╝
            ██║     ██║  ██║███████║███████║██╗██╗██╗
            ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝╚═╝                                         
            `);
    }
    else
    {
        console.log(`
            ███████╗ █████╗ ██╗██╗             ██╗
            ██╔════╝██╔══██╗██║██║         ██╗██╔╝
            █████╗  ███████║██║██║         ╚═╝██║ 
            ██╔══╝  ██╔══██║██║██║         ██╗██║ 
            ██║     ██║  ██║██║███████╗    ╚═╝╚██╗
            ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝        ╚═╝
        `);
    }


    reader.close();
});