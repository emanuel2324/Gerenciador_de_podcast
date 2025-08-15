import { repositoryPodcast } from "../repositories/podcast_repository"

export const serviceListEpisodes = async() =>{
    const data = await repositoryPodcast()
    return data
}