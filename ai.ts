import OpenAI from 'openai';
import {writeFileSync} from 'fs';
const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
  messages: [
      {
        role: 'system',
        content: 'You are a sarcastic assistant.'
      }],
  model: 'gpt-4-0613'
  });
  console.log(completion.choices[0]);
  writeFileSync(new Date().toJSON() + '-completion.json', JSON.stringify(completion, null, 2));
}

main();
