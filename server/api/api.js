import getRawPrompt from "./prompter.js";

export async function genNewEntry(topic, ...param) {
    let finalPrompt = 
    `Give me rules and instructions for a game to teach ${topic} to a class.
    They should have the following aspects and/or materials: ${param.join(", ")}

    Do not use emojis. Do not include the age. The first line should only contain the title. 
    Then provide Description (on how the game is played), Materials, and Instructions. 
    Do not use unordered lists.`
    console.log(finalPrompt);
    // let rawOut = await getRawPrompt(finalPrompt);
    
    let entry = {
        title: "",
        description: "",
        info: "",
        topic: topic,
        keywords: param,
        upvotes: 0,
        downvotes: 0
    }

    // Clean raw output
    // rawOut = rawOut.replace(/\*/g, "");

    // // Parse entry
    // try {
    //     entry.title = rawOut.match(/Title: .+\n/)[0].replace(/(Title: )|\n/g, "");
    //     entry.description = rawOut.match(/Description: .+\n/)[0].replace(/(Description: )|\n/g, "");
    //     entry.info = rawOut.match(/Materials: *(.|\n)*/)[0];
    // } catch (error) {
    //     throw("Unable to parse prompt: " + error);
    // }

    return entry;
}