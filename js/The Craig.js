// Introducing to you, the Craig.
// aka the emote radio backend

// ==================================
// = Event listeners for the emotes =
// ==================================

document.getElementById('advancedmath').addEventListener('click', function(){
    setSource('advancedmath', true);
}); 

document.getElementById('airshredder').addEventListener('click', function(){
    setSource('airshredder', true);
});

document.getElementById('aroundtheclock').addEventListener('click', function(){
    setSource('aroundtheclock', false);
}); 

document.getElementById('backstroke').addEventListener('click', function(){
    setSource('backstroke', true);
}); 

document.getElementById('baller').addEventListener('click', function(){
    setSource('baller', true);
}); 

document.getElementById('balletic').addEventListener('click', function(){
    setSource('balletic', true);
}); 

document.getElementById('ballsy').addEventListener('click', function(){
    setSource('ballsy', true);
}); 

document.getElementById('behold').addEventListener('click', function(){
    setSource('behold', false);
}); 

document.getElementById('bestmates').addEventListener('click', function(){
    setSource('bestmates', true);
}); 

document.getElementById('bhangraboogie').addEventListener('click', function(){
    setSource('bhangraboogie', true);
}); 

document.getElementById('billybounce').addEventListener('click', function(){
    setSource('billybounce', true);
}); 

document.getElementById('bobbin').addEventListener('click', function(){
    setSource('bobbin', true);
}); 

document.getElementById('boldstance').addEventListener('click', function(){
    setSource('boldstance', true);
}); 

document.getElementById('bombastic').addEventListener('click', function(){
    setSource('bombastic', true);
}); 

document.getElementById('boneless').addEventListener('click', function(){
    setSource('boneless', true);
}); 

document.getElementById('boobytrapped').addEventListener('click', function(){
    setSource('boobytrapped', false);
}); 

document.getElementById('boogiedown').addEventListener('click', function(){
    introSong('boogiedown', 530);
}); 

document.getElementById('bouncer').addEventListener('click', function(){
    setSource('bouncer', true);
}); 

document.getElementById('breakdown').addEventListener('click', function(){
    setSource('breakdown', true);
});

document.getElementById('breakin').addEventListener('click', function(){
    setSource('breakin', false);
}); 

document.getElementById('breakneck').addEventListener('click', function(){
    setSource('breakneck', true);
});

document.getElementById('brutaldab').addEventListener('click', function(){
    introSong('brutaldab', 4000);
});

document.getElementById('buckleup').addEventListener('click', function(){
    setSource('buckleup', true);
});

document.getElementById('bunnyhop').addEventListener('click', function(){
    setSource('bunnyhop', true);
});

document.getElementById('businesships').addEventListener('click', function(){
    setSource('businesships', true);
});

document.getElementById('capoeira').addEventListener('click', function(){
    introSong('capoeira', 1600);
});

document.getElementById('cheerup').addEventListener('click', function(){
    setSource('cheerup', true);
});

document.getElementById('cleangroove').addEventListener('click', function(){
    setSource('cleangroove', true);
});

document.getElementById('cluckstrut').addEventListener('click', function(){
    setSource('cluckstrut', true);
});

document.getElementById('conga').addEventListener('click', function(){
    setSource('conga', true);
});

document.getElementById('crabby').addEventListener('click', function(){
    setSource('crabby', true);
});

document.getElementById('crackdown').addEventListener('click', function(){
    setSource('crackdown', true);
});

document.getElementById('crazyboy').addEventListener('click', function(){
    setSource('crazyboy', true);
});

document.getElementById('crazyfeet').addEventListener('click', function(){
    setSource('crazyfeet', true);
});

document.getElementById('crisscross').addEventListener('click', function(){
    setSource('crisscross', true);
});

document.getElementById('dancemoves').addEventListener('click', function(){
    let myDance = ['default0', 'default1'];
    let defaultDance = myDance[Math.floor(Math.random() * myDance.length)];
    setSource(defaultDance, false);
});

document.getElementById('danceoff').addEventListener('click', function(){
    setSource('danceoff', true);
});

document.getElementById('dancetherapy').addEventListener('click', function(){
    introSong('dancetherapy', 3900);
});

document.getElementById('daydream').addEventListener('click', function(){
    setSource('daydream', true);
});

document.getElementById('deepend').addEventListener('click', function(){
    setSource('deepend', true);
});

document.getElementById('discofever').addEventListener('click', function(){
    setSource('discofever', true);
});

document.getElementById('discspinner').addEventListener('click', function(){
    setSource('discspinner', true);
});

var doubleupowned = false;
document.getElementById('doubleup').addEventListener('click', function(){
    if (doubleupowned == false) {
        setSource('doubleup', true);
        doubleupowned = true;
    }
    else if (doubleupowned == true) {
        setSource('doubleupowned', true);
        doubleupowned = false;
    }

});

document.getElementById('dreamfeet').addEventListener('click', function(){
    setSource('dreamfeet', true);
});

document.getElementById('droop').addEventListener('click', function(){
    introSong('droop', 370);
});

document.getElementById('dropthebass').addEventListener('click', function(){
    introSong('dropthebass', 7400);
});

document.getElementById('drummajor').addEventListener('click', function(){
    setSource('drummajor', true);
});

document.getElementById('dynamicshuffle').addEventListener('click', function(){
    setSource('dynamicshuffle', true);
});

document.getElementById('eagle').addEventListener('click', function(){
    setSource('eagle', true);
});

document.getElementById('electroshuffle').addEventListener('click', function(){
    setSource('electroshuffle', true);
});

document.getElementById('electroswing').addEventListener('click', function(){
    setSource('electroswing', true);
});

document.getElementById('extraterrestrial').addEventListener('click', function(){
    setSource('extraterrestrial', true);
});

document.getElementById('fanciful').addEventListener('click', function(){
    setSource('fanciful', true);
});

document.getElementById('fancyfeet').addEventListener('click', function(){
    setSource('fancyfeet', true);
});

document.getElementById('fandangle').addEventListener('click', function(){
    setSource('fandangle', true);
});

//WalkieWalk
document.getElementById('feelinjaunty').addEventListener('click', function(){
    setSource('feelinjaunty', true);
});

document.getElementById('fierce').addEventListener('click', function(){
    setSource('fierce', false);
});

//Fire_Dancing
document.getElementById('firespinner').addEventListener('click', function(){
    setSource('firespinner', true);
});

//JellyFrog
document.getElementById('fishin').addEventListener('click', function(){
    setSource('fishin', true);
});

//Flamenco_2018_Emote_01_Loop
document.getElementById('flamenco').addEventListener('click', function(){
    introSong('flamenco', 945);
});

//athena_emote_flapper_music
document.getElementById('flapper').addEventListener('click', function(){
    setSource('flapper', true);
});

//athena_emote_floss_music
document.getElementById('floss').addEventListener('click', function(){
    setSource('floss', true);
});

//Emote_Wave_Dance_MX
document.getElementById('flux').addEventListener('click', function(){
    setSource('flux', true);
});

//Emote_Music_HipHopS7_Loop
document.getElementById('freeflow').addEventListener('click', function(){
    introSong('freeflow', 1930);
});

//MonteCarlo
document.getElementById('freemix').addEventListener('click', function(){
    setSource('freemix', true);
});

//Hip_Hop_GS-VII_Trap_Mix_01_Loop
document.getElementById('freestylin').addEventListener('click', function(){
    setSource('freestylin', true);
});

//Triple_Scoop
document.getElementById('freewheelin').addEventListener('click', function(){
    introSong('freewheelin', 740);
});

//athena_emote_fresh_music
document.getElementById('fresh').addEventListener('click', function(){
    setSource('fresh', true);
});

//Skeleton_Dance
document.getElementById('frightfunk').addEventListener('click', function(){
    introSong('frightfunk', 405);
});

//Emote_Funktime
document.getElementById('getfunky').addEventListener('click', function(){
    setSource('getfunky', true);
});

//DaBounce
document.getElementById('getloose').addEventListener('click', function(){
    setSource('getloose', true);
});

//Kpop04
document.getElementById('glitter').addEventListener('click', function(){
    setSource('glitter', true);
});

//Glowstick
document.getElementById('glowsticks').addEventListener('click', function(){
    setSource('glowsticks', true);
});

//Egyptian_Dance
document.getElementById('glyphic').addEventListener('click', function(){
    setSource('glyphic', true);
});

//ProfessorPup
document.getElementById('gocatgo').addEventListener('click', function(){
    introSong('gocatgo', 2650);
});

//emote_groove_jam_A
document.getElementById('groovejam').addEventListener('click', function(){
    setSource('groovejam', true);
});

//Guitar_Walk
document.getElementById('guitarwalk').addEventListener('click', function(){
    introSong('guitarwalk', 334);
});

//Shaka
document.getElementById('hangloose').addEventListener('click', function(){
    setSource('hangloose', false);
});

//Divine_Pose
document.getElementById('harmony').addEventListener('click', function(){
    introSong('harmony', 4000);
});

//Headbanger_Emote_Music_01_Loop
document.getElementById('headbanger').addEventListener('click', function(){
    introSong('headbanger', 490);
});

//Cyclone/Cyclone_Headbang_Loop
document.getElementById('headbanger2').addEventListener('click', function(){
    setSource('headbanger2', true);
});

//Athena_Emote_Hitchhiker_Music
document.getElementById('hitchhiker').addEventListener('click', function(){
    setSource('hitchhiker', true);
});

//Hula_Hoop
document.getElementById('hoopmaster').addEventListener('click', function(){
    setSource('hoopmaster', true);
});

//Emote_Music_Tap_Shuffle_05
document.getElementById('hootenanny').addEventListener('click', function(){
    setSource('hootenanny', true);
});

//Bunny_Flop
document.getElementById('hoppity').addEventListener('click', function(){
    setSource('hoppity', true);
});

//Emote_WIR_Music_Loop
document.getElementById('hotmarat').addEventListener('click', function(){
    introSong('hotmarat', 700);
});

//emote_hula_01
document.getElementById('hula').addEventListener('click', function(){
    setSource('hula', true);
});

//Hula_Hoop_Challenge
var hulahoopchallengesuccess = false;
document.getElementById('hulahoopin').addEventListener('click', function(){
    if (hulahoopchallengesuccess == false) {
        setSource('hulahoopinfail', false);
        hulahoopchallengesuccess = true;
    }
    else if (hulahoopchallengesuccess == true) {
        setSource('hulahoopinsuccess', true);
        hulahoopchallengesuccess = false;
    }

});

//Athena_Emotes_Music_Shoot_v7
document.getElementById('hype').addEventListener('click', function(){
    setSource('hype', true);
});

















function setSource(src, loop) {
    const audioel = document.getElementById('audioplayer');
    var oga = './geir/ogg/' + src + '.ogg';
 //   var wavs = './geir/wav/' + src + '.wav';
    console.log(oga);
   // console.log(wavs);
    if (loop == true) {
        audioel.loop = true;
    }
    else {
        audioel.loop = false;
    }
document.getElementById('oggsrc').setAttribute('src', oga);
//document.getElementById('wavssrc').setAttribute('src', wavs);
audioel.load();
audioel.play();
}
var startbit
function introSong(src, duration) {
    var intro = './geir/ogg/' + src + '_intro.ogg';
    var startbit = new Audio(intro);
    startbit.load();
    const audioel = document.getElementById('audioplayer');
    var oga = './geir/ogg/' + src + '.ogg';
    //   var wavs = './geir/wav/' + src + '.wav';
    console.log(oga);
    // console.log(wavs);
    document.getElementById('oggsrc').setAttribute('src', oga);
    //document.getElementById('wavssrc').setAttribute('src', wavs);
    audioel.loop = true;
    audioel.load();
    setTimeout(() => {
        startbit.play();
        setTimeout(() => {
            audioel.play();
        }, duration);        
    }, 200);
}