# nome do aplicativo
Podcast Manager

### Descrição
um app ao estilo netflix, onde eu possa centralizar diferentes epsicsodios podcasts separados por categoria

### Domínio
Podecasts feitos em videos 

### Features
- Listar os podcasts em sessocçoes de categorias 
 -[Saúde, fitness, mentalidade, humor]
 -filtrar episodios por nome de podcast

 ## Como
 ### Feature
 - Listar os episodios em sessões de categorias
### Como vou implementar:
vou retornar em uma API rest(json) podcast, nome do episódio, imagem de capa, link category

GET: Vai retornar lista de episódios

 ```js
 [
 {
    podcastName: "flow";
    episode: CBUM - FLOW#345;
    cover: "https://i.ytimg.com/vi/bo71Ws2EfAE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDhynuXLhuUv_Yr6PTv5hnNX3S3zw"
    link: "https://youtu.be/bo71Ws2EfAE?si=4Bxa2xigMQNOJ0xs"
    category: ["saúde","fisicultulrismo"]

 }
 {
    podcastName: "flow";
    episode: Futuro do flow;
    cover: "https://i.ytimg.com/vi/D3WmBoSXBeM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCRxIRIlCSD3ZksoDLSl4toUa7ALA"
    link: "https://youtu.be/D3WmBoSXBeM?si=a2BZWOwIE4FqE0W7s"
    category: ["fofoca","entrerimento"]

 }
 ]
 ```
GET: retornar lista de episódios baseado em parametros enviado pelo cliente do nome do podcast