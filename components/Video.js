export class Video{
    templete(channel){
        return`
        <div id="div_h_tv">
            <h1>${channel.name}</h1>
            <video id="hTv" width="640" height="360" class="video-js vjs-default-skin" controls>
                <source src="${channel.src}" type="application/x-mpegURL">
            </video>
        </div>
        `  
    }
    play(){
        var player = videojs('hTv');
        // player.play();
    }
}