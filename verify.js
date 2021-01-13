module.exports= {
    name: 'verify',
    description: "verification",
    execute(message, args) {

        //you can use this for verificate someone who about to join ur server, by asking them to type .verify and it will automaticaly give them MEMBER roles, note: u should makes MEMBBER/Member/member roles first so this command can work
        
        
        let role = message.guild.roles.cache.find(r => r.name === "Member");
      
        if(message.member.roles.cache.some(r => r.name === "Member")){
            message.channel.send('Welcome!');
            message.member.roles.add(role).catch(console.error); 

        }



    }

    
}
