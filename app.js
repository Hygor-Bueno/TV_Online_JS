// import {seiNao} from './Channels.json' assert {type:'JSON'};

(async function startApp() {
    console.log(await getChannel())
    document.getElementById('currentChannel').innerText = "Ta certo viado."
})();

async function getChannel() {
    return await fetch("./Channels.json")
        .then((response) => {
           
            return response.json()
        });
}