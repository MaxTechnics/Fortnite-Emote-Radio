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

var defaultSong = 'dance0'
document.getElementById('dancemoves').addEventListener('click', function(){
/*    let myDance = ['default0', 'default1'];
    let defaultDance = myDance[Math.floor(Math.random() * myDance.length)];*/ //This is a randomised version. I don't like it

    if (defaultSong == 'dance0') {
        setSource('default0', false);
        defaultSong = 'dance1';
    }
    else if (defaultSong == 'dance1') {
        setSource('default1', false);
        defaultSong = 'dance0';
    }
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

//Goth_Dance
document.getElementById('infectious').addEventListener('click', function(){
    setSource('infectious', true);
});

//Athena_Emote_Infinidab
document.getElementById('infinitedab').addEventListener('click', function(){
    introSong('infinitedab', 450);
});

//athena_emote_Intensity_music and Athena_Emotes_Intensity_Intro
document.getElementById('intensity').addEventListener('click', function(){
    introSong('intensity', 7000);
});

//Player_Eleven
document.getElementById('introducing').addEventListener('click', function(){
    setSource('introducing', true);
});

//Ukulele_Time
document.getElementById('islandvibes').addEventListener('click', function(){
    setSource('islandvibes', true);
});

//Rich_Fam
document.getElementById('itscomplicated').addEventListener('click', function(){
    setSource('itscomplicated', true);
});

//Athena_Emote_NeedToGo_Loop_Update
document.getElementById('itsgotime').addEventListener('click', function(){
    setSource('itsgotime', true);
});

//Quick_Sweeper
document.getElementById('jamboree').addEventListener('click', function(){
    setSource('jamboree', true);
});

//Jaywalking
document.getElementById('jaywalking').addEventListener('click', function(){
    setSource('jaywalking', true);
});

//JazzHands
document.getElementById('jazzhands').addEventListener('click', function(){
    setSource('jazzhands', false);
});

//SwingDance
document.getElementById('jitterbug').addEventListener('click', function(){
    setSource('jitterbug', true);
});

//Emote_Juggler_Music_Loop
document.getElementById('jugglin').addEventListener('click', function(){
    setSource('jugglin', true);
});

//Monte_Keyboard
document.getElementById('keyedup').addEventListener('click', function(){
    setSource('keyedup', true);
});

//Soccer_Emote_Music_01_Loop
document.getElementById('kickups').addEventListener('click', function(){
    setSource('kickups', true);
});

//TrophyCelebration
document.getElementById('kissthecup').addEventListener('click', function(){
    introSong('kissthecup', 5860);
});

//emote_cowboy
document.getElementById('kneeslapper').addEventListener('click', function(){
    setSource('kneeslapper', true);
});

//Gabby_Hip_Hop
document.getElementById('laidbackshuffle').addEventListener('click', function(){
    setSource('laidbackshuffle', true);
});

//Emote_Laugh_01
document.getElementById('laughitup').addEventListener('click', function(){
    setSource('laughitup', true);
});

//IndiaDance
document.getElementById('lavish').addEventListener('click', function(){
    setSource('lavish', true);
});

//LasagnaDance
document.getElementById('lazerblast').addEventListener('click', function(){
    setSource('lazerblast', true);
});

//Emote_Lazy_Shuffle_Faster_11_Loop
document.getElementById('lazyshuffle').addEventListener('click', function(){
    setSource('lazyshuffle', true);
});

//Silly_Jumps
document.getElementById('leapin').addEventListener('click', function(){
    setSource('leapin', true);
});

//TreeLight
document.getElementById('lightup').addEventListener('click', function(){
    introSong('lightup', 10000);
});

//emote_LivingLarge_A
document.getElementById('livinglarge').addEventListener('click', function(){
    setSource('livinglarge', true);
});

//Athena_Emotes_Music_Cowbell_Loop
document.getElementById('llamabell').addEventListener('click', function(){
    introSong('llamabell', 3690);
});

//Emote_Wizard_Music
document.getElementById('llamacadabra').addEventListener('click', function(){
    setSource('llamacadabra', false);
});

//Llama_March
document.getElementById('llamaconga').addEventListener('click', function(){
    setSource('llamaconga', true);
});

//Athena_Emote_Make_It_Plantain_Loop
document.getElementById('makeitplantain').addEventListener('click', function(){
    setSource('makeitplantain', true);
});

//athena_emote_makeitrain_music
document.getElementById('makeitrain').addEventListener('click', function(){
    setSource('makeitrain', false);
});

//SquishyDance
document.getElementById('marshwalk').addEventListener('click', function(){
    setSource('marshwalk', true);
});

//Emote_Mime_Accordion_06
document.getElementById('mimetime').addEventListener('click', function(){
    setSource('mimetime', false);
});

//Banana
document.getElementById('nananana').addEventListener('click', function(){
    setSource('nananana', true);
});

//NeverGonna
document.getElementById('nevergonna').addEventListener('click', function(){
    setSource('nevergonna', true);
});

//Tour_Bus
document.getElementById('ninjastyle').addEventListener('click', function(){
    setSource('ninjastyle', true);
});

//OneArmFloss
document.getElementById('nosweat').addEventListener('click', function(){
    setSource('nosweat', true);
});

//OGRunningMan
document.getElementById('oldschool').addEventListener('click', function(){
    setSource('oldschool', true);
});

//Hip_Hop_Good_Vibes_Mix_01_Loop
document.getElementById('orangejustice').addEventListener('click', function(){
    setSource('orangejustice', true);
});

//July_Books
document.getElementById('outwest').addEventListener('click', function(){
    setSource('outwest', true);
});

//CoolRobot
document.getElementById('overdrive').addEventListener('click', function(){
    setSource('overdrive', true);
});

//StringDance
document.getElementById('partyhips').addEventListener('click', function(){
    setSource('partyhips', true);
});

//Paws
document.getElementById('pawsclaws').addEventListener('click', function(){
    setSource('pawsclaws', true);
});

//StrawberryPilot
document.getElementById('peaceout').addEventListener('click', function(){
    setSource('peaceout', false);
});

//emote_saxophone and emote_saxophone_cymbal
document.getElementById('phoneitin').addEventListener('click', function(){
    introSong('phoneitin', 420);
});

//RunningManV3
document.getElementById('pickitup').addEventListener('click', function(){
    setSource('pickitup', true);
});

//BalletSpin
document.getElementById('pirouette').addEventListener('click', function(){
    setSource('pirouette', true);
});

//Pizza_Time
document.getElementById('pizzaparty').addEventListener('click', function(){
    setSource('pizzaparty', false);
});

//HandsUp
document.getElementById('planetaryvibe').addEventListener('click', function(){
    setSource('planetaryvibe', true);
});

//Indigo_Apple
document.getElementById('poki').addEventListener('click', function(){
    setSource('poki', true);
});

//RideThePony2
document.getElementById('ponyup').addEventListener('click', function(){
    introSong('ponyup', 400);
});

//Athena_Emote_PopLock
document.getElementById('poplock').addEventListener('click', function(){
    setSource('poplock', true);
});

//Emote_PraiseTheTomato
document.getElementById('praisethetomato').addEventListener('click', function(){
    setSource('praisethetomato', false);
});

//Breakfast_Coffee
document.getElementById('primomoves').addEventListener('click', function(){
    setSource('primomoves', true);
});

//Athena_Emotes_Music_PumpDance
document.getElementById('pumpernickel').addEventListener('click', function(){
    setSource('pumpernickel', true);
});

//Pumpkin_Dance
document.getElementById('pumpitup').addEventListener('click', function(){
    introSong('pumpitup', 3600);
});

//Cyclone/Cyclone_Mic_Raise_Loop
document.getElementById('rage').addEventListener('click', function(){
    setSource('rage', true);
});

//RageQuit
document.getElementById('ragequit').addEventListener('click', function(){
    setSource('ragequit', false);
});

//Make_It_Rain_v2
document.getElementById('rainingdoubloons').addEventListener('click', function(){
    setSource('rainingdoubloons', true);
});

//Lets_Play
document.getElementById('raisethecup').addEventListener('click', function(){
    setSource('raisethecup', true);
});

//Raise_The_Roof
document.getElementById('raisetheroof').addEventListener('click', function(){
    setSource('raisetheroof', true);
});

//emote_zippy_A
document.getElementById('rambunctious').addEventListener('click', function(){
    setSource('rambunctious', true);
});

//athena_emote_founders_music
document.getElementById('reanimated').addEventListener('click', function(){
    setSource('reanimated', true);
});

//DoubleSnap
document.getElementById('revel').addEventListener('click', function(){
    setSource('revel', true);
});

//Ribbon_Dance
document.getElementById('ribbondancer').addEventListener('click', function(){
    setSource('ribbondancer', true);
});

//Sleigh_It
document.getElementById('ridealong').addEventListener('click', function(){
    setSource('ridealong', true);
});

//athena_emote_ridethepony_music_01 and athena_emote_ridethepony_music_02
var ridetheponysong = 'song0'
document.getElementById('ridethepony').addEventListener('click', function(){
    if (ridetheponysong == 'song0') {
        setSource('ridethepony0', true);
        ridetheponysong = 'song1';
    }
    else if (ridetheponysong == 'song1') {
        setSource('ridethepony1', true);
        ridetheponysong = 'song0';
    }
});

//BellRinger
document.getElementById('ringiton').addEventListener('click', function(){
    setSource('ringiton', true);
});

//BR_Emote_Shred_Guitar_Mix_03_Loop
document.getElementById('rockout').addEventListener('click', function(){
    setSource('rockout', true);
});

//Athena_Emote_Music_RunningMan
document.getElementById('runningman').addEventListener('click', function(){
    setSource('runningman', true);
});

//SadTrombone
document.getElementById('sadtrombone').addEventListener('click', function(){
    setSource('sadtrombone', false);
});

//TakeTheW
document.getElementById('savorthew').addEventListener('click', function(){
    setSource('savorthew', true);
});

//KPopDance03
document.getElementById('scenario').addEventListener('click', function(){
    setSource('scenario', true);
});

//Donut_One
document.getElementById('scootin').addEventListener('click', function(){
    setSource('scootin', true);
});

//emote_samba_new_B
document.getElementById('shakeitup').addEventListener('click', function(){
    setSource('shakeitup', true);
});

//Emote_WristFlick_Music
document.getElementById('shimmer').addEventListener('click', function(){
    setSource('shimmer', true);
});

//Emote_Showstopper
document.getElementById('showstopper').addEventListener('click', function(){
    setSource('showstopper', true);
});

//StepBreakdance
document.getElementById('sidehustle').addEventListener('click', function(){
    setSource('sidehustle', true);
});

//ElectroShuffleV2
document.getElementById('signatureshuffle').addEventListener('click', function(){
    setSource('signatureshuffle', true);
});

//Sign_Spinner
document.getElementById('signspinner').addEventListener('click', function(){
    setSource('signspinner', true);
});

//Burger_Flipper
document.getElementById('sizzlin').addEventListener('click', function(){
    setSource('sizzlin', true);
});

//Thigh_Slapper
var slaphappysuccess = false;
document.getElementById('slaphappy').addEventListener('click', function(){
    if (slaphappysuccess == false) {
        introSong('slaphappyfail',2490);
        slaphappysuccess = true;
    }
    else if (slaphappysuccess == true) {
        
        slaphappysuccess = false;
    }

});

//Athena_Emote_JazzDance_Music
document.getElementById('slick').addEventListener('click', function(){
    setSource('slick', true);
});

//Octopus_Ultra_Banger_06_Loop
document.getElementById('slitherin').addEventListener('click', function(){
    setSource('slitherin', true);
});

//emote_kmale_A
document.getElementById('smoothmoves').addEventListener('click', function(){
    setSource('smoothmoves', true);
});

//Touchdown_SpikeIt_Emote_Music_01_Loop
document.getElementById('spikeit').addEventListener('click', function(){
    introSong('spikeit',34560);
});

//Jumpstyle
document.getElementById('springy').addEventListener('click', function(){
    setSource('springy', true);
});

//Sprinkler_Emote_Music_01_Loop
document.getElementById('sprinkler').addEventListener('click', function(){
    setSource('sprinkler', true);
});

//eastern_bloc_musc_setup_D
document.getElementById('squatkick').addEventListener('click', function(){
    introSong('squatkick',370);
});

//Emote_PopRock_01
document.getElementById('starpower').addEventListener('click', function(){
    setSource('starpower', true);
});

//StatuePose
document.getElementById('statuesque').addEventListener('click', function(){
    introSong('statuesque',2000);
});

//Emote_Irish_Jig_Foley_Music_Loop
document.getElementById('stepitup').addEventListener('click', function(){
    setSource('stepitup', true);
});


//Treadmill
document.getElementById('stride').addEventListener('click', function(){
    setSource('stride', true);
});

//DoggyStrut
document.getElementById('strut').addEventListener('click', function(){
    setSource('strut', true);
});


//CandyDance
document.getElementById('sugarrush').addEventListener('click', function(){
    setSource('sugarrush', true);
});

//Athena_Emotes_Music_SwipeIt
document.getElementById('swipeit').addEventListener('click', function(){
    setSource('swipeit', true);
});

//Breakboy
document.getElementById('switchstep').addEventListener('click', function(){
    setSource('switchstep', true);
});

//buffcat
document.getElementById('swolecat').addEventListener('click', function(){
    introSong('swolecat',1950);
});

//Taco_Time
document.getElementById('tacotime').addEventListener('click', function(){
    setSource('tacotime', true);
});

//Emote_TaiChi_Loop_01
document.getElementById('taichi').addEventListener('click', function(){
    introSong('taichi',300);
});

//Emote_TakeTheElf_SFX_Start_01
document.getElementById('taketheelf').addEventListener('click', function(){
    setSource('taketheelf', false);
});

//Athena_Music_Emotes_TakeTheL
document.getElementById('takethel').addEventListener('click', function(){
    setSource('takethel', true);
});

//Just_Home
document.getElementById('therenegade').addEventListener('click', function(){
    setSource('therenegade', true);
});

//athena_emote_robot_music
document.getElementById('therobot').addEventListener('click', function(){
    setSource('therobot', true);
});

//athena_emote_worm_music
document.getElementById('theworm').addEventListener('click', function(){
    setSource('theworm', true);
});

//athena_emote_hot_music
document.getElementById('tidy').addEventListener('click', function(){
    setSource('tidy', true);
});

//PartyJazzTwinkleToes
document.getElementById('tippytap').addEventListener('click', function(){
    setSource('tippytap', true);
});

//Art_Giant
document.getElementById('tootsieslide').addEventListener('click', function(){
    setSource('tootsieslide', true);
});

//HappySkipping
document.getElementById('tralala').addEventListener('click', function(){
    setSource('tralala', true);
});

//emote_kpop_01
document.getElementById('trueheart').addEventListener('click', function(){
    setSource('trueheart', true);
});

//Athena_Emotes_Music_Twist
document.getElementById('twist').addEventListener('click', function(){
    setSource('twist', true);
});

//Dark_Fire_Legends
document.getElementById('unification').addEventListener('click', function(){
    setSource('unification', false);
});

//MagicMan
document.getElementById('verve').addEventListener('click', function(){
    setSource('verve', true);
});

//SneakyTraversal
document.getElementById('verysneaky').addEventListener('click', function(){
    setSource('verysneaky', true);
});

//Grooving
document.getElementById('vibin').addEventListener('click', function(){
    setSource('vibin', true);
});

//Athena_Emote_DancingGirl_Loop
document.getElementById('vivacious').addEventListener('click', function(){
    setSource('vivacious', true);
});

//ArmWave
document.getElementById('wavyt').addEventListener('click', function(){
    setSource('wavyt', true);
});

//PartyJazzWigglyDance
document.getElementById('wellrounded').addEventListener('click', function(){
    setSource('wellrounded', true);
});

//Wheres_Matt
document.getElementById('whereismatt').addEventListener('click', function(){
    setSource('whereismatt', true);
});

//Emote_Whirlwind_Music
document.getElementById('whirlwind').addEventListener('click', function(){
    introSong('whirlwind', 380)
});

//Wiggle_Music_Loop
document.getElementById('wiggle').addEventListener('click', function(){
    setSource('wiggle', true);
});

//WindmillFloss
document.getElementById('windmillfloss').addEventListener('click', function(){
    setSource('windmillfloss', true);
});

//SecurityGuard
document.getElementById('workit').addEventListener('click', function(){
    setSource('workit', true);
});

//Emote_Aerobics_01
document.getElementById('workitout').addEventListener('click', function(){
    setSource('workitout', true);
});

//PeelyBones
document.getElementById('xylobone').addEventListener('click', function(){
    setSource('xylobone', false);
});

//Youre_Awesome_Emote_Music
document.getElementById('youreawesome').addEventListener('click', function(){
    setSource('youreawesome', false);
});

//Athena_Music_Emotes_Bendy
document.getElementById('zany').addEventListener('click', function(){
    setSource('zany', true);
});

//ZombieWalk
document.getElementById('zombified').addEventListener('click', function(){
    setSource('zombified', true);
});


const audioel = document.getElementById('audioplayer');
const startbit = document.getElementById('startbit');
function setSource(src, loop) {
    startbit.pause();
    audioel.pause();
    var oga = './geir/ogg/' + src + '.ogg';
    var wavs = './geir/wav/' + src + '.wav';
    var mpgs = './geir/mp3/' + src + '.mp3';
    console.log(oga);
    console.log(wavs);
    console.log(mpgs);
    if (loop == true) {
        audioel.loop = true;
    }
    else {
        audioel.loop = false;
    }
    document.getElementById('oggsrc').setAttribute('src', oga);
    document.getElementById('wavsrc').setAttribute('src', wavs);
    document.getElementById('mpgsrc').setAttribute('src', mpgs);

    audioel.load();
    audioel.play();
}
function introSong(src, duration) {
    startbit.pause();
    audioel.pause();
    var oggintro = './geir/ogg/' + src + '_intro.ogg';
    var wavintro = './geir/wav/' + src + '_intro.wav';
    var mpgintro = './geir/mp3/' + src + '_intro.mp3';
    console.log(oggintro);
    console.log(wavintro);
    console.log(mpgintro);
    document.getElementById('oggintro').setAttribute('src', oggintro);
    document.getElementById('wavintro').setAttribute('src', wavintro);
    document.getElementById('mpgintro').setAttribute('src', mpgintro);
    startbit.load();
    var oga = './geir/ogg/' + src + '.ogg';
    var wavs = './geir/wav/' + src + '.wav';
    var mpgs = './geir/mp3/' + src + '.mp3';

    console.log(oga);
    console.log(wavs);
    console.log(mpgs);
    document.getElementById('oggsrc').setAttribute('src', oga);
    document.getElementById('wavsrc').setAttribute('src', wavs);
    document.getElementById('mpgsrc').setAttribute('src', mpgs);
    audioel.loop = true;
    audioel.load();
    setTimeout(() => {
        startbit.play();
        setTimeout(() => {
            audioel.play();
        }, duration);        
    }, 200);
}