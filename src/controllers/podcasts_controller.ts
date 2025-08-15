import {IncomingMessage, request, ServerResponse} from 'http'
import {serviceListEpisodes} from '../services/list_episode_service'
import { serviceFilterEpisodes } from '../services/filter_episodes_service';

export const getListEpisodes = async (_req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    const querystring = req.url?.split("?p=")[1] || ""
    const content = await serviceFilterEpisodes(querystring)

res.writeHead(200, {"Content-Type": "application/json"});
res.end(JSON.stringify(content));
}