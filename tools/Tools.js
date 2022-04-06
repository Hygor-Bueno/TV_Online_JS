import { Video } from "../components/video.js";

export class Tools {

    async getChannel() {
        return await fetch("./Channels.json")
            .then((response) => {
                return response.json()
            });
    }
    navMenu() {
        let video = new Video;
        document.getElementById('menuChannel').addEventListener('click', event => {
            if (event.target.tagName.toLowerCase() == "li" && event.target.getAttribute("data-function") == 'changeChannel') {
                document.getElementById('div_h_tv') && document.getElementById('div_h_tv').remove();
                document.getElementById('content').insertAdjacentHTML("beforeend", video.templete(JSON.parse(event.target.getAttribute("value")))) // insere o template de vídeo.
                video.play(event.target.getAttribute("value")); // Da play no vídeo.
            }
        })
    }

}