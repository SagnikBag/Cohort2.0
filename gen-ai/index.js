
import readline  from 'readline';
import { ChatMistralAI } from "@langchain/mistralai";
import "dotenv/config"
 

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const model = new ChatMistralAI({
  model:"mistral-small-latest",
})

while(true){
  const userInput = await rl.question("You: ");

  const response = await model.invoke(userInput )
  console.log(response.text);
}



rl.close()
