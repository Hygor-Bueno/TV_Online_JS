import {} from '../video-js.min.js'

export class Video{
    player;
    templete(channel){
        return`
        <div id="div_h_tv">
            <h1>${channel.name}</h1>
            <video id=hTv_${channel.id} width="640" height="360" class="video-js vjs-default-skin" controls>
                <source src="${channel.src}" type="application/x-mpegURL">
            </video>
        </div>
        `  
    }
    play(channel){
        this.player=videojs(`hTv_${channel.id}`);
        // this.player.play();
    }
   
}