// The JS code may contain spoilers
alert('There are 5 different random popups.\nClicking `no` will replace the popup with another and each popup does something unique when `yes` is clicked.\n\nFor best experience turn off your adblocker');































// Assign a bunch of variables to elements
let btn = document.getElementById('btn'),
popup = document.getElementById('popup'),
title = document.getElementById('title'),
p = document.getElementById('p'),
y = document.getElementById('yes'),
n = document.getElementById('no'),
b = document.getElementById('back'),
noti = document.getElementById('notification'),
cn = document.getElementById('nname'),
m = document.getElementById('nmessage'),
cookie = document.getElementById('cookie'),
ad1 = document.getElementById('ad1'), 
ad2 = document.getElementById('ad2'), 
ad3 = document.getElementById('ad3');

// Data for the popups
let titles = ["Donate To Starving Children In Africa", 
"Subscribe To Our Daily Newsletter", 
"Accept Our Cookie Policy",
"Disable Your AdBlock",
"Optional User Survey"
];
let ps = ["Will you donate to help feed hundreds of poor people in Africa?", 
"Will you please subscribe to our newsletter? Doing so will support our mission to write high quality news and we heavily appreciate it!", 
"This site uses cookies to enchance user experience and for marketing purposes. By agreeing to this you agree to our cookie policy and fully allow us to track you down and find you. (for user experience)",
"Our adblock detection system is bad so sorry if you aren't using adblock, but if you are then we sincerly ask you to disable your adblock so that we can make money from you even though there's literally no ads here.",
"Would you please take just one minute from your time to fill a short user survey?"
];
let da = ["No, I don't care about poor people. Let them starve and die in pain.", 
"Of course not... probably because it absolutely SUCKS, and you suck even more.",
"Only accept necessary cookies because I hate you and i don't want you to get any marketing money.",
"No... I hate the mere sight of ads even though they don't harm my experience. You can stay broke.",
"Absolutely NOT! Give me back the seconds of my life you wasted by showing me this popup!"
];
let ag = ['Sure', 'Absolutely!', 'Ok', 'Yes', 'Why not'];
let i = [];

// Preload audio to avoid delay
let notiSound = new Audio('./resources/iphone-notification.mp3');
notiSound.volume = 0.1;
notiSound.load();


btn.addEventListener('click', () => {
    // Show the popup and choose random content
    y.style.display = 'block';
    n.style.display = 'block';
    popup.style.display = 'block';
    change();
});

// Remove popup
b.addEventListener('click', () => {
    popup.style.display = 'none';
    b.style.display = 'none'; 
});

// User clicks `yes` option then something unique happens for each different popup
y.addEventListener('click', async function() {
    // Remove `yes` and `no` options and wait 10ms to avoid a bug
    let id = i[i.length - 1];
    y.style.display = 'none';
    n.style.display = 'none';
    await new Promise(resolve => setTimeout(resolve, 10));

    if(id == 0) {
        // Starving kids in africa popup
        title.innerHTML = 'Thanks For Your Very Kind Donation!';
        p.innerHTML = 'Thanks for donating to help starving African kids! This money will totally not go to waste.';
        cn.innerHTML = 'my bank';
        m.innerHTML = `Please confirm the transfer of $${Math.floor(Math.random() * 8 + 1)}00,000 to LEGIT-CHARITY.`;

        // Play notification sound
        notiSound.play();

        // Reseting notification animation for reusability
        noti.style.animation = 'none';
        noti.offsetHeight;
        noti.style.animation = null;

        // Play animation while waiting 3.1s so the ok button doesn't show early 
        noti.style.animation = 'notify linear 4s';
        await new Promise(resolve => setTimeout(resolve, 4100));
    } else if(id == 1) {
        // Newsletter popup
        title.innerHTML = 'Thanks For Subscribing!';
        p.innerHTML = `Thank you for subscribing to our amazing newsletter so that we can spam your emai- I mean... send you high quality news! (don't ask how we know your email)`;
    } else if(id == 2) {
        // Accept cookie policy popup
        title.innerHTML = 'Thanks!';
        p.innerHTML = 'We would like to thank you for accepting our cookie policy and letting us commit legal home invasion to enhance user experience! (this is obviously a joke)';
        cookie.style.display = 'inline';
    } else if(id == 3) {
        // Disable adblock popup
        title.innerHTML = 'Thanks For Disabling Your Adblock!'
        p.innerHTML = 'Too bad now that you agreed we can spam you with ads; By the time you left our site we would have already made a fortune >:)';
        ad1.style.display = 'block';
        ad2.style.display = 'block';
        ad3.style.display = 'block';    
    } else if(id == 4) {
        // User survey popup
        title.innerHTML = 'User Survey';
        p.innerHTML = `What would you rate this site out of 10? And why? And what's your full name, address and darkest secret which we can use in an allegation against you? *insert text box here* (i'm too lazy to add an actual functioning and responsive survey lol)`;
    }

    b.style.display = 'block';
});

// User clicks no
n.addEventListener('click', () => setTimeout(change(), 10));

// User clicks on fake ad for free iphones
ad1.addEventListener('click', () => {
    alert('go buy it urself lmao');
    window.open('https://www.apple.com/iphone/', '_blank');
});

// User clicks on fake ad to resolve computer issue
ad2.addEventListener('click', () => {
    alert("you wanted to mess with the scammers but it turns out it was a phising link and you unfortunately didn't have today's sponsor turned on, NordVPN!");
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
});

// User clicks on fake ad for the website itself
ad3.addEventListener('click', () => {
    window.open('https://drontooo.github.io/extreme-confirm-shaming/', '_self');
});

// Choose random content and change popup
function change() {
    // remove some images if they were here before
    cookie.style.display = 'none';
    ad1.style.display = 'none';
    ad2.style.display = 'none';
    ad3.style.display = 'none';

    // Choose random title and its corresponding paragraph and no option
    i.push(rng());
    let temp = i[i.length - 1];
    title.innerHTML = titles[temp];
    p.innerHTML = ps[temp];
    n.innerHTML = da[temp];
    // Independently choose a random yes option
    y.innerHTML = ag[Math.floor( Math.random() * (ag.length - 1) )];
}

// Choose random popup content & create and update list of last popups shown to avoid repetition.
// When all popups' identification numbers are on the list it gets reset but the last element stays. 
function rng() {
    if(titles.length <= i.length) {
        i.splice(0, i.length-1);
    }

    let done = false;
    let br = false;
    let t = NaN;
    while(done != true) { 
        t = Math.floor( Math.random() * titles.length );

        for(let num of i) {
            if(num == t) {
                br = true;
                break;
            }
        }
        
        br == false? done = true : null;
        br = false;
    }

    return t;
}
