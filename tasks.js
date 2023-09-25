
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
  // console.log(onDataReceived)
  let clean = text.replace('\n', ' ').trim();
  let command = clean.split(' ')[0];
  let argument = clean.replace(command, '');
  let tasks = ['Task1', 'Task2', 'Task3', 'task4'];
  let addCommand = clean.split(' ')[0];
  let addArgument = clean.replace(addCommand, '');
  let removeCommand = clean.split(' ')[0];
  let removeArgument = clean.replace(removeCommand, '');
  let editCommand = clean.split(' ')[0];
  let editArgument = clean.replace(editCommand, '');

  if (text === 'exit\n' || text === 'quit\n') {
    quit();
  }
  else if(command === 'hello'){
    hello(argument);
  }
  else if(text === 'help\n'){
    help();
  }
  else if (text === 'list\n') {
    for (let i = 0; i < tasks.length; i++) {
      let order = `${i+1}-${tasks[i]}`;
      list(order)
    }
  }
  else if (addCommand === 'add') {
    if (addArgument !== '') {
      tasks.push(addArgument);
      console.log(tasks);
    } else {
      add(addArgument)
    }
  }

  else if (text === 'remove\n') {
    tasks.pop()
    console.log(tasks)
  } else if (text === 'remove 1\n'){
    tasks.shift()
    console.log(tasks)
  } else if (text === 'remove 2\n') {
    tasks.splice(1, 1)
    console.log(tasks)
  } else if (removeCommand === 'remove') {
    if (isNaN(removeArgument)) {
      console.log('Enter a valid number please')
    } else if (removeArgument !== 1 || removeArgument !== 2) {
      console.log('This number does not exist');
    }
  }

  else if (clean === 'edit') {
    edit(clean)
  } else if (clean === 'edit new text') {
    tasks[tasks.length - 1] = editArgument;
    console.log(tasks)
  } else if (clean === 'edit 1 new text') {
    tasks[0] = editArgument;
    console.log(tasks);
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
function hello(argument){
  console.log(`hello${argument}!`)
}

/**
 * Help
 *
 * @returns {void}
 */
function help(){
  console.log('Pssible Commands:\n -hello\n -help\n -quit\n -exit\n -add\n -list\n -remove\n -remove 1\n -remove 2')
}

function list(order){
  console.log(order)
}

function add(addArgument){
  console.error('error')
}

function edit(clean) {
  console.error('error')
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