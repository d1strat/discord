module.exports= {
    name: 'insta',
    description: "instagram",
    execute(message, args) {

        
        let role = message.guild.roles.cache.find(r => r.name === "Mod");


        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('https://www.instagram.com/d1.997_/');
           



        } else {
            message.channel.send('You dont have the permissions to use this commands!!');
            message.member.roles.add(role).catch(console.error);    
        }



    }

    
}