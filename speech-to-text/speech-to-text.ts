import fs from 'fs';
import OpenAI from 'openai';
const openai = new OpenAI();

async function main() {
  // TODO convert video to audio
  const transcription = await openai.audio.transcriptions.create({
    model: 'whisper-1',
    file: fs.createReadStream('audio.mp3'),
    response_format: 'verbose_json'
    });
  console.log(transcription.text);
  fs.writeFileSync(new Date().toJSON() + '-transcription.json', JSON.stringify(transcription, null, 4));
}
main();
