module.exports= {
    name: 'ban',
    description: 'for checking if u have the ban permission or not', //not a perms to ban someone but to check if u have the permission or not, u can edit this by changing discord flags command to another discord flags command and edit it on main.js aswell
    
    execute(message, args) {

       
        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('You have the permission to ban members');
       
        } else {
            message.channel.send('You DONT have the permission to ban members')
    
        }
    
    }


}
