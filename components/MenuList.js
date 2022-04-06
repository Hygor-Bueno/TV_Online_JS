export class MenuList{
    template(listChannels){
        let response = listChannels.map(channel=>(
             `<li data-function="changeChannel">${channel.name}</li>`
            )
        ).join('');
        console.log(response)
        return response;
    }
}