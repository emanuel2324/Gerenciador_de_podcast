import { promises } from "dns";
import fs from "fs"
import path from "path"
import { Podcast } from "../models/podcast_model.ts";



const pathData = path.join(__dirname, "podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> =>{




    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile;
}