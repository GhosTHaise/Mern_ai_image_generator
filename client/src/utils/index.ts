import { surpriseMePrompts } from "../constant";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt : string) : string{
    const randomIndex : number = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPromp : string = surpriseMePrompts[randomIndex];

    if(randomPromp === prompt) return getRandomPrompt(prompt)
    return randomPromp
}   

export async function downloadImage(_id : string,photo : string){
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
} 