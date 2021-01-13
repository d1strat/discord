module.exports= {
    name: 'verify',
    description: "verificat",
    execute(message, args) {

        
        let role = message.guild.roles.cache.find(r => r.name === "Member");
        if(message.member.roles.cache.some(r => r.name === "Member")){
            message.channel.send('Welcome!');
           



        } else {
            message.channel.send('You not verified yet!');
            message.member.roles.add(role).catch(console.error);    
        }



    }

    
}