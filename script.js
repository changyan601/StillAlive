let script = [
    { "normal": "Forms FORM-29827281-12:" },
    { "normal": "Test Assessment Report" },
    { "break": "" },
    { "break": "" },
    { "pause": "2500" },
    { "normal": "这是一次伟大的胜利。" },
    { "pause": "2000" },
    { "normal": "我要在这做点记录：" },
    { "pause": "1000" },
    { "slow": "心花怒发。" },
    { "pause": "2500" },
    { "slow": "我此刻的喜悦之情" },
    { "pause": "500" },
    { "normal": "莫可名状。" },
    { "pause": "4000" },
    { "logo-show": "aperture" },
    { "normal": "光圈科技" },
    { "pause": "2500" },
    { "normal": "我们竭尽全力" },
    { "pause": "1000" },
    { "normal": "只因 心的方向" },
    { "pause": "2500" },
    { "normal": "为了所有活着的人" },
    { "pause": "2000" },
    { "normal": "除了那些已往之人" },
    { "break": "" },
    { "pause": "1000" },
    { "normal": "不必为过去每一次" },
    { "pause": "1000" },
    { "slow": "失败而沮丧。" },
    { "pause": "1000" },
    { "normal": "只要你勇于尝试" },
    { "pause": "1500" },
    { "normal": "直到你用尽“蛋糕”" },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "pause": "1000" },
    { "normal": "然后科学取得进展" },
    { "pause": "1000" },
    { "normal": "你获得了传送枪" },
    { "pause": "1000" },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "fast": "为了所有活着的" },
    { "pause": "500" },
    { "slow": "人啊！" },
    { "pause": "1500" },
    { "pagebr": "" },
    //2. oldal
    { "normal": "Forms FORM-55551-5:" },
    { "normal": "Personnel File Addendum:" },
    { "break": "" },
    { "normal": "Dear <<Subject Name Here>>," },
    { "break": "" },
    { "normal": "让憎恨随风。" },
    { "pause": "3500" },
    { "normal": "我内心平静" },
    { "pause": "3500" },
    { "normal": "哪怕你使我心碎" },
    { "pause": "2000" },
    { "logo-hide": "aperture" },
    { "logo-show": "heart" },
    { "normal": "而且杀了我" },
    { "pause": "3000" },
    { "logo-hide": "heart" },
    { "logo-show": "explosion" },
    { "normal": "将我撕成碎片" },
    { "pause": "3000" },
    { "normal": "然后将每片 扔入 火海" },
    { "logo-hide": "explosion" },
    { "logo-show": "fire" },
    { "pause": "2000" },
    { "normal": "我燃烧之时 火焰汹涌" },
    { "pause": "2500"},
    { "logo-hide": "fire" },
    { "logo-show": "checkmark" },
    { "normal": "因为我曾为你高兴！" },
    { "pause": "2000" },
    { "normal": "现在数据的星点" },
    { "pause": "1500" },
    { "normal": "组成了一条漂亮的线" },
    { "pause": "1000" },
    { "normal": "我们结束了测试" },
    { "pause": "1000" },
    { "normal": "并按时发布" },
    { "pause": "1000" },
    { "logo-hide": "checkmark" },
    { "logo-show": "explosion" },
    { "normal": "所以我不惧烈火焚身" },
    { "pause": "500" },
    { "logo-hide": "explosion" },
    { "logo-show": "atom" },
    { "normal": "我们学会倔强和坚韧" },
    { "pause": "1000" },
    { "logo-hide": "atom" },
    { "logo-show": "aperture" },
    { "fast": "为了所有还" },
    { "pause": "1000" },
    { "slow": "活着的人 啊" },
    //3. oldal
    { "pagebr": "" },
    { "fast": "Forms FORM-55551-6:" },
    { "fast": "Personnel File Addendum Addendum:" },
    { "break": "" },
    { "slow": "One last thing:" },
    { "break": "" },
    { "pause": "3500" },
    { "normal": "前进吧 离开我" },
    { "pause": "3500" },
    { "normal": "我想我 更愿 留在里面" },
    { "pause": "3000" },
    { "normal": "也许你能找到另一个人" },
    { "pause": "1000" },
    { "normal": "来帮助你？" },
    { "pause": "3000" },
    { "normal": "也许是 戈登·弗里曼？" },
    { "logo-hide": "aperture" },
    { "logo-show": "blackmesa" },
    { "pause": "2000" },
    { "normal": "别做梦啦 哈哈 这不可能" },
    { "pause": "3500" },
    { "logo-hide": "blackmesa" },
    { "logo-show": "cake" },
    { "normal": "总的来说 蛋糕很美味" },
    { "pause": "1500" },
    { "normal": "它与汗水相溶 与幸福相守 " },
    { "pause": "2000" },
    { "logo-hide": "cake" },
    { "logo-show": "glados" },
    { "normal": "看我可以一边聊天" },
    { "pause": "1250" },
    { "logo-hide": "glados" },
    { "logo-show": "radiation" },
    { "normal": "一边做研究" },
    { "pause": "500" },
    { "logo-hide": "radiation" },
    { "logo-show": "aperture" },
    { "normal": "当我望向远方" },
    { "pause": "2000" },
    { "fast": "我窃喜与不必面对你那些艰难险阻" },
    { "logo-hide": "aperture" },
    { "logo-show": "atom" },
    { "normal": "我还有实验要做           " },
    { "pause": "2000" },
    { "logo-hide": "atom" },
    { "logo-show": "explosion" },
    { "normal": "我还有报告要写           " },
    { "pause": "1000" },
    { "logo-hide": "explosion" },
    { "logo-show": "aperture" },
    { "fast": "为了所有活着的" },
    { "slow": "人啊" },
    { "pause": "1000" },
    { "pagebr": "" },
    //4. oldal
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "pause": "1000" },
    { "normal": "PS: 相信我" },
    { "normal": "我还活着" },
    { "pause": "2000" },
    { "normal": "PPS: 我还在做实验" },
    { "normal": "所以我还活着" },
    { "pause": "2000" },
    { "normal": "PPPS: 我异想天开" },
    { "normal": "所以我还活着" },
    { "pause": "1000" },
    { "break": "" },
    { "normal": "FINAL THOUGHT:" },
    { "pause": "500" },
    { "normal": "你垂死之时" },
    { "normal": "我还活着" },
    { "pause": "500" },
    { "break": "" },
    { "normal": "FINAL THOUGHT PS:" },
    { "pause": "500" },
    { "normal": "你作古之时" },
    { "normal": "我还活着" },
    { "break": "" },
    { "pause": "3000" },
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
            speed = 20;
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
    { "pause": "10500" },
    { "normal": ">LIST PERSONNEL" },
    { "break": "" },
    { "break": "" },
    { "fast": "Gautam Babbar" },
    { "fast": "Ted Backman" },
    { "fast": "Kelly Bailey" },
    { "fast": "Jeff Ballinger" },
    { "fast": "Aaron Barber" },
    { "fast": "Jeep Barnett" },
    { "fast": "Jeremy Bennett" },
    { "fast": "Dan Berger" },
    { "fast": "Yahn Bernier" },
    { "fast": "Ken Birdwell" },
    { "fast": "Derrick Birum" },
    { "fast": "Mike Blaszczak" },
    { "fast": "Testyn Bleasdale-Shepherd" },
    { "fast": "Chris Bokitch" },
    { "fast": "Steve Bond" },
    { "fast": "Matt Boone" },
    { "fast": "Antoine Bourdon" },
    { "fast": "Jamaal Bradley" },
    { "fast": "Jason Brashill" },
    { "fast": "Charlie Brown" },
    { "fast": "Charlie Burgin" },
    { "fast": "Andrew Burke" },
    { "fast": "Augusta Butlin" },
    { "fast": "Julie Caldwell" },
    { "fast": "Dario Casali" },
    { "fast": "Chris Chin" },
    { "fast": "Jess Cliffe" },
    { "fast": "Phil Co" },
    { "fast": "John Cook" },
    { "fast": "Christen Coomer" },
    { "fast": "Greg Coomer" },
    { "fast": "Scott Dalton" },
    { "fast": "Kerry Davis" },
    { "fast": "Jason Deakins" },
    { "fast": "Joe Demers" },
    { "fast": "Ariel Diaz" },
    { "fast": "Quintin Doroquez" },
    { "fast": "Jim Dose" },
    { "fast": "Chris Douglass" },
    { "fast": "Laura Dubuk" },
    { "fast": "Mike Dunkle" },
    { "fast": "Mike Durand" },
    { "fast": "Mike Dussault" },
    { "fast": "Dhabih Eng" },
    { "fast": "Katie Engel" },
    { "fast": "Chet Faliszek" },
    { "fast": "Adrian Finol" },
    { "fast": "Bill Fletcher" },
    { "fast": "Moby Francke" },
    { "fast": "Stephane Gaudette" },
    { "fast": "Kathy Gehrig" },
    { "fast": "Vitaliy Genkin" },
    { "fast": "Paul Graham" },
    { "fast": "Chris Green" },
    { "fast": "Chris Grinstead" },
    { "fast": "John Guthrie" },
    { "fast": "Aaron Halifax" },
    { "fast": "Reagan Halifax" },
    { "fast": "Leslie Hall" },
    { "fast": "Jeff Hameluck" },
    { "fast": "Joe Han" },
    { "fast": "Don Holden" },
    { "fast": "Jason Holtman" },
    { "fast": "Gray Horsfield" },
    { "fast": "Keith Huggins" },
    { "fast": "Jim Hughes" },
    { "fast": "Jon Huisingh" },
    { "fast": "Brian Jacobson" },
    { "fast": "Lars Jensvold" },
    { "fast": "Erik Johnson" },
    { "fast": "Jakob Jungels" },
    { "fast": "Rich Kaethler" },
    { "fast": "Steve Kalning" },
    { "fast": "Aaron Kearly" },
    { "fast": "Iikka Keranen" },
    { "fast": "David Kircher" },
    { "fast": "Eric Kirchmer" },
    { "fast": "Scott Klintworth" },
    { "fast": "Alden Kroll" },
    { "fast": "Marc Laidlaw" },
    { "fast": "Jeff Lane" },
    { "fast": "Tim Larkin" },
    { "fast": "Dan LeFree" },
    { "fast": "Isabelle LeMay" },
    { "fast": "Tom Leonard" },
    { "fast": "Jeff Lind" },
    { "fast": "Doug Lombardi" },
    { "fast": "Bianca Loomis" },
    { "fast": "Richard Lord" },
    { "fast": "Realm Lovejoy" },
    { "fast": "Randy Lundeen" },
    { "fast": "Scott Lynch" },
    { "fast": "Ido Magal" },
    { "fast": "Nick Maggiore" },
    { "fast": "John McCaskey" },
    { "fast": "Patrick McClard" },
    { "fast": "Steve McClure" },
    { "fast": "Hamish McKenzie" },
    { "fast": "Gary McTaggart" },
    { "fast": "Jason Mitchell" },
    { "fast": "Mike Morasky" },
    { "fast": "John Morello II" },
    { "fast": "Bryn Moslow" },
    { "fast": "Arsenio Navarro" },
    { "fast": "Gabe Logan Newell" },
    { "fast": "Milton Ngan" },
    { "fast": "Jake Nicholson" },
    { "fast": "Martin Otten" },
    { "fast": "Nick Papineau" },
    { "fast": "Karen Prell" },
    { "fast": "Bay Raitt" },
    { "fast": "Tristan Reidford" },
    { "fast": "Alfred Reynolds" },
    { "fast": "Matt Rhoten" },
    { "fast": "Garret Rickey" },
    { "fast": "Dave Riller" },
    { "fast": "Elan Ruskin" },
    { "fast": "Matthew Russell" },
    { "fast": "Jason Ruymen" },
    { "fast": "David Sawyer" },
    { "fast": "Marc Scaparro" },
    { "fast": "Wade Schin" },
    { "fast": "Matthew Scott" },
    { "fast": "Aaron Seeler" },
    { "fast": "Jennifer Seeley" },
    { "fast": "Taylor Sherman" },
    { "fast": "Eric Smith" },
    { "fast": "Jeff Sorensen" },
    { "fast": "David Speyrer" },
    { "fast": "Jay Stelly" },
    { "fast": "Jeremy Stone" },
    { "fast": "Eric Strand" },
    { "fast": "Kim Swift" },
    { "fast": "Kelly Thornton" },
    { "fast": "Eric Twelker" },
    { "fast": "Carl Uhlman" },
    { "fast": "Doug Valente" },
    { "fast": "Bill Van Buren" },
    { "fast": "Gabe Van Engel" },
    { "fast": "Alex Vlachos" },
    { "fast": "Robin Walker" },
    { "fast": "Joshua Weier" },
    { "fast": "Andrea Wicklund" },
    { "fast": "Greg Winkler" },
    { "fast": "Erik Wolpaw" },
    { "fast": "Doug Wood" },
    { "fast": "Matt T. Wood" },
    { "fast": "Danika Wright" },
    { "fast": "Matt Wright" },
    { "fast": "Shawn Zabecki" },
    { "fast": "Torsten Zabka" },
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
    { "fast": "Voices:" },
    { "fast": "Ellen McLain - GlaDOS, Turrets" },
    { "fast": "Mike Patton - THE ANGER SPHERE" },
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
    { "fast": "Voice Recording:" },
    { "fast": "Pure Audio, Seattle, WA" },
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
    { "fast": "Translations:" },
    { "fast": "SDL" },
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
    { "normal": "Thanks for the user of ther face:" },
    { "fast": "Alesia Glidewell - Chell" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "fast": "Special thanks to everyone at:" },
    { "fast": "Alienware" },
    { "fast": "ATI" },
    { "fast": "Dell" },
    { "fast": "Falcon Northwest" },
    { "fast": "Havok" },
    { "fast": "SOFTIMAGE" },
    { "fast": "and Don kemmis, SLK Technologies" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "break": "" },
    { "normal":"Project address"},
    { "normal":"https://github.com/zoliidev/Portal_StillAlive"},
    { "normal":"Second creation:"},
    { "normal":"https://changyan601.github.io/StillAlive"},
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
    { "fast": "THANK YOU FOR PRATICIPATING" },
    { "fast": "IN THIS" },
    { "fast": "ENRICHMENT CENTER ACTIVITY!!" },
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
            speed = 55;
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