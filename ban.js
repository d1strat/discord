module.exports= {
    name: 'ban',
    description: 'for checking if u have the ban permission or not',
    
    execute(message, args) {

       
        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('You have the permission to ban members');
       
        } else {
            message.channel.send('You DONT have the permission to ban members')
    
        }
    
    }


}