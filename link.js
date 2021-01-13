module.exports= {
    name: 'APP/LINK/SocialProfile',
    description: "Use this commands for sharing ur social media such as Instagram, youtube, twitch, twitte, etc, copy ur social profile link and attach it with https/http",
    execute(message, args) {

        
        let role = message.guild.roles.cache.find(r => r.name === "ROLES");

//put your server ROLES names to allowed that roles to get permission to share your social link, FYI: it can be used by 1 person only
        
        if(message.member.roles.cache.some(r => r.name === "ROLES")){
            message.channel.send('https/http://LINK');
           

        } else {
            message.channel.send('You dont have the permissions to use this commands!!');
               }



    }

    
}
