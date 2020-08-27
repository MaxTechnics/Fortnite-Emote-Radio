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
    introSong('dropthebass', 7300);
});

document.getElementById('drummajor').addEventListener('click', function(){
    setSource('drummajor', true);
});

document.getElementById('dynamicshuffle').addEventListener('click', function(){
    setSource('dynamicshuffle', true);
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