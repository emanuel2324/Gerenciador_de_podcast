import { repositoryPodcast } from "../repositories/podcast_repository"

export const serviceFilterEpisodes = async (podcastName: string) =>{
    const data = await repositoryPodcast(podcastName);

    return data;
}