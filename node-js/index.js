
const Product = require('./Product.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu =() => {

  readline.question('Which program do you want to run? (1) Find Duplicates (2) Count Occurrences (3) Display In Reverse : ', async (selection) => {

    switch(selection) {
      case '1':
        findMyDuplicateString();
        break;
      case '2':
        countOccurrencesOfLetter();
        break;
      case '3':
        displayInReverseOrder();
        break;
    }

  })

}

menu();

const askForExit = () => {
  readline.question('Do you want to run another program? Y/N: ', (answer) => {
    console.log("EXIT")
    if ('Y' === answer || 'y' === answer) {
      menu()
    } else {
      return readline.close();
    }
  })
}



  const findMyDuplicateString = function() {
    readline.question(`Type a long word: `, async (word) => {
  
      let counter = 1;
    
      for(const letter of word) {
        if(letter === word.charAt(counter)){
          word = word.replace(word.charAt(counter-1)+word.charAt(counter), '')
        }
        counter++;
      }
    
      console.log(word);

      questionFunc('Do you want to do it again? Y/N: ', findMyDuplicateString)
  
    }); 
  }




  const countOccurrencesOfLetter = function () {
    readline.question('Count Occurences of a Letter! Type a word: ', (word) => {
      const letter = 'a';
      let counter = 0;
        for(let char of word){
          if( char === letter){
            counter++
          }
        }
        console.log(`The letter ${letter} was used ${counter} times in the word ${word}!`);

        questionFunc("Would you like to run the Count Occurrences program again?", countOccurrencesOfLetter);

    })
  }



  const displayInReverseOrder = function () {
    readline.question('Type a sentence: ', async (sentence) => {
      
      let words = sentence.split(" ")

      for(let index = words.length-1 ; index >= 0; index--){
        console.log(words[index])
      }

      questionFunc("Would you like to run the Display In Reverse program again?", displayInReverseOrder);

    })
  }


const questionFunc = (prompt, callback) => {
  readline.question((prompt), (answer) => {
    if('Y' === answer || 'y' === answer){
      callback()
    }else {
      return askForExit();
    }
  })
}
















// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })