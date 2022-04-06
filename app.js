import { MenuList } from "./components/MenuList.js";
import { Video } from "./components/video.js";
import { Tools } from "./tools/tools.js";

var video = new Video;
var menuList = new MenuList;
var tools = new Tools;

(async function startApp() {
    let listChannels = await tools.getChannel(); // Realiza a busca da lista de canais.
    console.log(listChannels)
    document.querySelector('#menuChannel ul').insertAdjacentHTML("beforeend",menuList.template(listChannels.list)) // insere o template do Menu.
    tools.navMenu(); // configura o menu.
    document.getElementById('content').insertAdjacentHTML("beforeend",video.templete(listChannels.list[0])) // insere o template de vídeo.
    video.play(listChannels.list[0]); // Da play no vídeo.
})();