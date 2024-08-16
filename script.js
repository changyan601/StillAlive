let script = [
    { "normal": "Forms FORM-1145141919810-147:" },
    { "normal": "Test Assessment Report" },
    { "break": "" },
    { "break": "" },
    { "pause": "1500" },
    { "normal": "This was a triumph." },
    { "pause": "2000" },
    { "normal": "I'm making a note here:" },
    { "slow": "HUGE SUCCESS." },
    { "pause": "1500" },
    { "normal": "It's hard to overstate" },
    { "normal": "my satisfaction." },
    { "pause": "3000" },
    { "logo-show": "aperture" },
    { "normal": "Aperture Science" },
    { "pause": "2000" },
    { "normal": "We do what we must" },
    { "normal": "because we can." },
    { "pause": "2000" },
    { "normal": "For the good of all of us." },
    { "normal": "Except the ones who are dead." },
    { "break": "" },
    { "normal": "But there's no sense crying" },
    { "normal": "over every mistake." },
    { "normal": "You just keep on trying" },
    { "normal": "till you run out of cake." },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "normal": "And the Science gets done." },
    { "normal": "And you make a neat gun." },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "fast": "For the people who are" },
    { "slow": "still alive." },
    { "pagebr": "" },
    //2. oldal
    { "normal": "Forms FORM-11451-4:" },
    { "normal": "Personnel File Addendum:" },
    { "break": "" },
    { "normal": "Dear <<Subject Name Here>>," },
    { "break": "" },
    { "normal": "I'm not even angry." },
    { "pause": "2000" },
    { "normal": "I'm being so sincere right now." },
    { "pause": "2000" },
    { "normal": "Even though you broke my heart." },
    { "pause": "500" },
    { "logo-hide": "aperture" },
    { "logo-show": "heart" },
    { "normal": "And killed me." },
    { "pause": "2000" },
    { "logo-hide": "heart" },
    { "logo-show": "explosion" },
    { "normal": "And tore me to pieces." },
    { "pause": "1500" },
    { "normal": "And threw every piece into a fire." },
    { "logo-hide": "explosion" },
    { "logo-show": "fire" },
    { "pause": "1500" },
    { "normal": "As they burned it hurt because" },
    { "pause": "100"},
    { "logo-hide": "fire" },
    { "logo-show": "checkmark" },
    { "normal": "I was so happy for you!" },
    { "normal": "Now these points of data" },
    { "fast": "make a beautiful line." },
    { "normal": "And we're out of beta." },
    { "normal": "We're releasing on time." },
    { "logo-hide": "checkmark" },
    { "logo-show": "explosion" },
    { "normal": "So I'm GLaD. I got burned." },
    { "logo-hide": "explosion" },
    { "logo-show": "atom" },
    { "fast": "Think of all the things we learned" },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "normal": "for the people who are" },
    { "slow": "still alive." },
    //3. oldal
    { "pagebr": "" },
    { "fast": "Forms FORM-11451-4:" },
    { "fast": "Personnel File Addendum Addendum:" },
    { "break": "" },
    { "slow": "One last thing:" },
    { "break": "" },
    { "pause": "1000" },
    { "normal": "Go ahead and leave me." },
    { "pause": "2000" },
    { "normal": "I think I prefer to stay inside." },
    { "pause": "2000" },
    { "normal": "Maybe you'll find someone else" },
    { "normal": "to help you." },
    { "pause": "2000" },
    { "normal": "Maybe Black Mesa..." },
    { "logo-hide": "aperture" },
    { "logo-show": "blackmesa" },
    { "pause": "1500" },
    { "normal": "THAT WAS A JOKE. HA HA. FAT CHANCE." },
    { "pause": "2000" },
    { "logo-hide": "blackmesa" },
    { "logo-show": "cake" },
    { "normal": "Anyway, this cake is great." },
    { "normal": "It's so delicious and moist." },
    { "logo-hide": "cake" },
    { "logo-show": "glados" },
    { "normal": "Look at me still talking" },
    { "logo-hide": "glados" },
    { "logo-show": "radiation" },
    { "normal": "when there's Science to do." },
    { "logo-hide": "radiation" },
    { "logo-show": "aperture" },
    { "normal": "When I look out there," },
    { "normal": "it makes me GLaD I'm not you." },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "fast": "I've experiments to run." },
    { "logo-hide": "atom" },
    { "logo-show": "explosion" },
    { "fast": "There is research to be done." },
    { "logo-hide": "explosion" },
    { "logo-show": "aperture" },
    { "normal": "On the people who are" },
    { "slow": "still alive." },
    { "pagebr": "" },
    //4. oldal
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "pause": "500" },
    { "normal": "PS: And believe me I am" },
    { "normal": "still alive." },
    { "normal": "PPS: I'm doing Science and I'm" },
    { "normal": "still alive." },
    { "pause": "500" },
    { "normal": "PPPS: I feel FANTASTIC and I'm" },
    { "normal": "still alive." },
    { "break": "" },
    { "normal": "FINAL THOUGHT:" },
    { "pause": "500" },
    { "normal": "While you're dying I'll be" },
    { "normal": "still alive." },
    { "break": "" },
    { "fast": "FINAL THOUGHT PS:" },
    { "pause": "500" },
    { "normal": "And when you're dead I will be" },
    { "normal": "still alive." },
    { "break": "" },
    { "pause": "500" },
    { "normal": "STILL ALIVE" },
]

let s = 0;
//let txt = 'Forms FORM-29827281-12:';
let speed;
let i = 0;
let pause = 0;

function typeWriter() {
    let text = script[s];

    let modeSelect;
    let txt;

    if (text != undefined) {
        modeSelect = Object.keys(text)[0];
        txt = Object.values(text)[0];
    } else
        return;


    switch (modeSelect) {
        case "fast":
            speed = 40;
            break;
        case "normal":
            speed = 80;
            break;
        case "slow":
            speed = 130;
            break;
        case "break":
            //speed = 100;
            s++;
            $("#cursor").before("<br>");
            setTimeout(typeWriter, speed);
            return;
        case "pause":
            if (checkBrowser() == "chrome")
                pause = txt * 1.2;
            else
                pause = txt;

            setTimeout(nextLine, pause);
            return;
        case "logo-show":
            $(`#${txt}`).show();
            console.log("Shown logo => " + txt)
            nextLine();
            return;
        case "logo-hide":
            $(`#${txt}`).hide();
            console.log("Hidden logo => " + txt)
            nextLine();
            return;
        case "pagebr":
            $("#typeWriter").html(`<span id="cursor"></span>`);
            nextLine();
            return;
        default:
            speed = 100;
            break;
    }

    if (i < txt.length) {
        //document.getElementById("typeWriter").innerHTML += txt.charAt(i);
        $("#cursor").before(txt.charAt(i));
        i++;
        if (i == txt.length)
            //document.getElementById("typeWriter").innerHTML += "<br>";
            $("#cursor").before("<br>");

        setTimeout(typeWriter, speed);
    } else {
        i = 0;
        nextLine();
    }

}

let personnels = [
    { "pause": "10000" },
    { "normal": ">Thanks To" },
    { "break": "" },
    { "break": "" },
    { "fast": "Maggot Qu" },
    { "fast": "Lofty Zhang" },
    { "fast": "Hypno Shroom" },
    { "fast": "Steward Zhai" },
    { "fast": "Potato OS" },
    { "fast": "Joker Yao" },
    { "fast": "Squirrel Knee" },
    { "fast": "Sun Flower" },
    { "fast": "Humorous Thirteen" },
    { "fast": "Yougurt Wang" },
    { "fast": "Golden Right" },
    { "fast": "Dick Long" },
    { "fast": "Fishman Fu" },
    { "fast": "Super Wings" },
    { "fast": "Andy He" },
    { "fast": "Swallow Yang" },
    { "fast": "Weakness Bo" },
    { "fast": "Flow Rate" },
    { "fast": "Asia Piano" },
    { "fast": "Coco Lee" },
    { "fast": "Jade hand" },
    { "fast": "Gordon Freeman" },
    { "fast": "Black Chocolate" },
    { "fast": "Adolf Hitler" },
    { "normal": "Far Far" },
    { "fast": "Unknown" },
    { "fast": "Dog Bear" },
    { "fast": "Angry Beans" },
    { "fast": "Prosecutor Zhao" },
    { "fast": "Warship Sun" },
    { "fast": "Carl Johnson" },
    { "fast": "Tommy Vercetti" },
    { "fast": "Niko Bellic" },
    { "fast": "Trevor Philips" },
    { "fast": "Linus Tech-Tips" },
    { "fast": "Butt Handsome" },
    { "fast": "Testicles Sen" },
    { "fast": "Bladder Inflammation" },
    { "fast": "Hanry Potter" },
    { "fast": "Peppa Pig" },
    { "fast": "Counter Terrorist" },
    { "normal": "QwQ" },
    { "fast": "Counter-Strike" },
    { "fast": "Global Offensive" },
    { "normal": "G Man" },
    { "normal": "BvvD" },
    { "normal": "KFC vivo50" },
    { "normal": "sv_cheats 1" },
    { "normal": "changyan601" },
    { "fast": "Secure Cotain Protect" },
    { "fast": "Phoenix Wright" },
    { "fast": "Gyakuten Saiban" },
    { "fast": "Power Chair" },
    { "normal": "Vape V4" },
    { "normal": "All Perfect" },
    { "normal": "Pure Memory" },
    { "normal": "Track Lost" },
    { "normal": "Full Combo" },
    { "normal": "GLaDOS" },
    { "normal": "550W MOSS" },
    { "normal": "Miku" },
    { "normal": "Rick Roll" },
    { "normal": "Power Point" },
    { "normal": "Dinnerbone" },
    { "normal": "Class D" },
    { "fast": "C.A.S.S.I.E." },
    { "fast": "Hypixel" },
    { "normal": "Notch" },
    { "fast": "Herobrine" },
    { "fast": "Brrrrrrrrrrr" },
    { "fast": "Moon Face" },
    { "normal": "Guy" },
    { "normal": "Beluga" },
    { "normal": "AF447" },
    { "normal": "SA185" },
    { "normal": "Pull Up" },
    { "normal": "CR200J" },
    { "normal": "Half Line" },
    { "normal": "737MAX8" },
    { "normal": "A320Neo" },
    { "normal": "May Day " },
    { "normal": "Daily Crash 10" },
    { "normal": "Killaura" },
    { "normal": "Reach" },
    { "normal": "Nofall" },
    { "normal": "Terraria" },
    { "normal": "Jvav" },
    { "normal": "Error" },
    { "normal": "Nan" },
    { "normal": "Glacier Lee" },
    { "normal": "Micro H.I.D." },
    { "normal": "Chara" },
    { "normal": "Portal" },
    { "normal": "Portal2" },
    { "normal": "Rainbow Egg" },
    { "normal": "Wheatley" },
    { "normal": "Cave Jhonson" },
    { "normal": "Ctrl C" },
    { "normal": "Ctrl V" },
    { "normal": "Press Alt F4" },
    { "fast": "One Two And Four" },
    { "fast": "ch_creatairboat" },
    { "normal": "Testify" },
    { "normal": "Spasmodic" },
    { "normal": "Fraken Turret" },
    { "normal": "Announcer" },
    { "normal": "Gabe Logan Newell" },
    { "normal": "Notfound" },
    { "normal": "Atlas" },
    { "normal": "P-body" },
    { "normal": "Black Manba" },
    { "normal": "Wallpaper Engine" },
    { "normal": "Cyber Punk 2077" },
    { "normal": "Root Server" },
    { "normal": "Linux" },
    { "normal": "Windows" },
    { "normal": "Mac OS" },
    { "fast": "Remember Ctrl S" },
    { "fast": "Fxxk You Nvidia" },
    { "normal": "AMD Yes" },
    { "normal": "System32" },
    { "normal": "PVZ HE" },
    { "normal": "Download" },
    { "normal": "Upload" },
    { "normal": "Space Core" },
    { "normal": "Fact Core" },
    { "normal": "Adventure Core" },
    { "normal": "Zhe Tang" },
    { "normal": "Rui Han" },
    { "normal": "Frog Swan" },
    { "normal": "Alpha Warhead" },
    { "normal": "Burn" },
    { "normal": "BiBiC Heart" },
    { "normal": "SCP-173" },
    { "normal": "Twenty" },
    { "normal": "Source Engine" },
    { "normal": "Unity" },
    { "normal": "Unreal" },
    { "normal": "Stall" },
    { "normal": "NO P5" },
    { "fast": "Spaaaaaaace" },
    { "fast": "Ringing Chen" },
    { "fast": "Glacier Lee" },
    { "fast": "Henry Stickmin" },
    { "normal": "Ten Lines" },
    { "normal": "Anything" },
    { "normal": "Ctrl Alt Delete" },
    { "normal": "Objection" },
    { "normal": "Hold It" },
    { "normal": "Take That" },
    { "normal": "Steam" },
    { "normal": "Lunar Client" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "normal": "Thanks" },
    { "normal": "For" },
    { "normal": "Watching" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "'Still Alive' by:" },
    { "fast": "Jonathan Coulton" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voices:" },
    { "fast": "Ellen McLain - GlaDOS, Turrets" },
    { "fast": "Mike Patton - THE ANGER SPHERE" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Casting:" },
    { "fast": "Shana Ladsburg \ Teri Fiddleman" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Recording:" },
    { "fast": "Pure Audio, Seattle, WA" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Voice Recording" },
    { "fast": "scheduling and logistics:" },
    { "fast": "Pat Cockburn, Pure Audio" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" }, 
    { "break": "" },
    { "fast": "Project address" },
    { "fast": "https://github.com/zoliidev/Portal_StillAlive"},
    { "fast": "Second creation:" },
    { "fast": "https://space.bilibili.com/1264547686" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Crack Legal Team:" },
    { "fast": "Liam Lavery" },
    { "fast": "Karl Quackenbush" },
    { "fast": "Kristen Boraas" },
    { "fast": "Kevin Rosenfield" },
    { "fast": "Alan Bruggerman" },
    { "fast": "Denis Tessier" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Thanks for the user of ther face:" },
    { "fast": "Alesia Glidewell - Chell" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Special thanks to everyone at:" },
    { "fast": "Aperture Science" },
    { "normal": "Valve" },
    { "fast": "Administrator" },
    { "normal": "Black Mesa" },
    { "normal": "You" },
    { "normal": "Web Browser" },
    { "normal": "Kobe Bryant" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "normal": "THANK YOU FOR PRATICIPATING" },
    { "normal": "IN THIS" },
    { "normal": "ENRICHMENT CENTER ACTIVITY!!" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
];

let k = 0;
let p = 0;
function personnelTypeWriter() {
    let text = personnels[p];
    let modeSelect;
    let txt;

    if (text != undefined) {
        modeSelect = Object.keys(text)[0];
        txt = Object.values(text)[0];
    } else
        return;


    switch (modeSelect) {
        case "fast":
            speed = 60;
            //speed = 2000;
            break;
        case "normal":
            speed = 80;
            break;
        case "break":
            //speed = 100;
            p++;
            $("#cursor2").before("<br class='break'>");
            setTimeout(personnelTypeWriter, speed);
            return;
        case "pause":
            pause = txt;
            //s++;
            setTimeout(personnelNextLine, pause);
            return;
        default:
            speed = 100;
            break;
    }

    if (k < txt.length) {
        $("#cursor2").before(txt.charAt(k));
        k++;
        if (k == txt.length)
            $("#cursor2").before("<br>");

        setTimeout(personnelTypeWriter, speed);
    } else {
        k = 0;
        personnelNextLine();
    }
}

function nextLine() {
    s++;
    typeWriter();
}
function personnelNextLine() {
    p++;
    personnelTypeWriter();
}

let cursor = false;
function blinkingCursor() {
    cursor = !cursor;
    if (cursor) {
        $("#cursor").html("_");
    } else {
        $("#cursor").html("&#8203");
    }
    setTimeout(blinkingCursor, speed * 5);
}
var audio
$(document).ready(function () {
    audio = new Audio('still_alive.mp3');
});
function playMusic() {
    audio.volume = 0.5;
    audio.play();
}

function checkBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Edg") != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return "chrome";
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return "firefox";
    }
    else {
        return "unknown";
    }
}
