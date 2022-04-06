export class MenuList{
    template(listChannels){
        let response = listChannels.map(channel=>(
             `<li data-function="changeChannel" value='${JSON.stringify(channel)}'>${channel.name}</li>`
            )
        ).join('');
        console.log(response)
        return response;
    }
}