import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prompt : string) : string{
    const randomIndex : number = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPromp : string = surpriseMePrompts[randomIndex];

    if(randomPromp === prompt) return getRandomPrompt(prompt)
    return randomPromp
}   