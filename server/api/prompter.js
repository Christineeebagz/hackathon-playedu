import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.API_KEY,
});

export default async function getRawPrompt(fullPrompt){
    console.log("Running the model...");
    
    const input = {
        top_k: 50,
        top_p: 0.9,
        prompt: fullPrompt,
        temperature: 0.6,
        system_prompt: "You are an experienced game maker. Your goal is to provide an outline of a game with instructions to help educators teach their provided topic with a creative title.",
        length_penalty: 1,
        max_new_tokens: 800,
        prompt_template: "<s>[INST] {prompt} [/INST] ",
        presence_penalty: 0
    };

    var out = "";

    out = await replicate.run("mistralai/mixtral-8x7b-instruct-v0.1", { input });

    return out.join("");
}