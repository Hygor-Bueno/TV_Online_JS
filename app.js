import { MenuList } from "./components/MenuList.js";
import { Video } from "./components/video.js";

var video = new Video;
var menuList = new MenuList;

(async function startApp() {
    let listChannels = await getChannel();
    document.getElementById('content').insertAdjacentHTML("beforeend",video.templete(listChannels.list[0]))
    document.querySelector('#menuChannel ul').insertAdjacentHTML("beforeend",menuList.template(listChannels.list))
    video.play();
})();

async function getChannel() {
    return await fetch("./Channels.json")
        .then((response) => {
            return response.json()
        });
}