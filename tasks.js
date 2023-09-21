
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const arg = text.split(' ')[0].trim();
  const commandsList = ['hello', 'exit', 'quit', 'help', 'list'];
  const tasks = [];
  const taskAdded = text.trim().substring(4); // Remove "add" from the text

  if (text === 'exit\n' || text === 'quit\n') {
    quit();
  }
  else if(arg === 'hello'){
    hello(text.replace('\n', ''));
  }
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n') {
    list(commandsList);
  }
  else if (arg === 'add'){
    // Check if there are additional arguments (task description)
    if (taskAdded) {
      add(tasks, taskAdded);
    } else {
      console.log('Error');
    }
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text + '!')
}

/**
 * Provide the user with the possible commands
 *
 * @returns {void}
 */ 
function help(){
  console.log('Possible Commands:\n -hello\n -quit\n -exit\n -help')
}


/**
 * 
 *
 * @returns {void}
 */ 
function list(commandsList){
  console.log(commandsList)
}


/**
 * 
 *
 * @returns {void}
 */ 
function add(tasks, taskAdded) {
  tasks.push(taskAdded);
  console.log(`Task "${taskAdded}" added.`);
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Hassan Mourtada")
