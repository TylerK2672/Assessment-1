/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a program that allows you to make \'save files\' of your code, allowing you to go back at any point and choose a earlier save to load in. This backs up your code so it is more secure and allows for testing of different possibilities"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "GitHub can be seen as an extension of Git. Git saves your files locally to your computer, so if your computer is destroyed, so are your files. GitHub saves your Git saves to the cloud, so even if your files are destroyed on your computer, they are safe in the cloud. It also allows for easier cooperation between programmers by allowing users to get and send code online through GitHub"

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {code: "git init", description: "Creates a new git repository (a place to store your save files for a specific project)"}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {code: "git clone [url]", description: "Takes an existing git repository, copies it and saves it at a new location"}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {code: "git status", description: "gives you the current status of your repo"}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {code: "git add [what to add]", description: "adds files to be tracked (usually preparing your files to be saved)"}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {code: "git commit", description: "creates a \'snapshot\' or \'save\' of the files currently being tracked"}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {code: "git push", description: "uploads everything in your local repository to a remote repository. You can think of it like \'pushing\' your files to the cloud (usually GitHub)"}