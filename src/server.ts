import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts_controller"

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {


  //querystring
  const[baseUrl, querystring] = req.url?.split("?") ?? ["",""]


  //listar podcast
  if(req.method === "GET && baseUrl ===/api/list"){
    await getListEpisodes(req, res);
  }

  if(req.method === "GET" && baseUrl === "/api/episode"){
    await getFilterEpisodes(req, res)
  }

});

const port = process.env.PORT


server.listen(process.env.PORT, ()=>{
    console.log(`servidor iniciado na porta ${port}`)
})