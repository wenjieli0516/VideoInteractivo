// 2. This code loads the IFrame Player API code asynchronously.
var tag1 = document.createElement('script');
tag1.src = "https://www.youtube.com/iframe_api";
var tag2 = document.createElement('script');
tag2.src = "https://code.jquery.com/jquery-3.3.1.js";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag1, firstScriptTag);
firstScriptTag.parentNode.insertBefore(tag2, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '1080',
        videoId: 'r9unhc0A7us',
        //  wmode: transparent makes HTML goes on top of Flash
        //  fs: disable full screen
        playerVars: {'autoplay': 0, 'wmode': 'transparent', 'fs': 0, 'controls':1, 'rel':0, 'modestbranding':1, 'showinfo':0},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done1 = false;
var done2 = false;
var done3 = false;
var finish1 = false;
var finish2 = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done1) {
        setTimeout(stopVideo1, 14800);
        done1 = true;
    }
    if (event.data == YT.PlayerState.PLAYING && !done2 && finish1) {
        setTimeout(stopVideo2, 36000);
        done2 = true;
    }
    // if (event.data == YT.PlayerState.PLAYING && !done3 && finish2) {
    //     setTimeout(stopVideo3, 5000);
    //     done3 = true;
    // }
}

function stopVideo1() {
    $( "#invent1" ).css("display", "block");
    player.pauseVideo();
}

function stopVideo2() {
    $( "#invent2" ).css("display", "block");
    player.pauseVideo();
}

function stopVideo3() {
    $( "#invent3" ).css("display", "block");
    player.pauseVideo();
}

// function handleQ1() {
//     $("#btnq1").html("<button onclick=\"continueVideo(1)\" class=\"button\">Continue</button>");
//     var A = $("input[id=A1]:checked").val();
//     var B = $("input[id=B1]:checked").val();
//     var C = $("input[id=C1]:checked").val();
//     var D = $("input[id=D1]:checked").val();
//     var str = ""
//     if (A && C && !B && !D) {
//         str = "<p>Great job! You got it right!</p>";
//     } else if (!B && !D && (A || C)) {
//         str = "<p>You are almost there, missing only one correct answer. The correct answer is A and C.</p>";
//     } else if (A || C) {
//         str = "<p>Your answers are partially correct. Nice try! The correct answer is A and C.</p>";
//     } else {
//         str = "<p>Oops, you didn’t catch the correct answers. Seems like you will learn a lot today! The correct answer is A and C.</p>";
//     }
//     $("#answer1").html(str);
// }
//
// function handleQ2() {
//     $("#btnq2").html("<button onclick=\"continueVideo(2)\" class=\"button\">Continue</button>");
//     var A = $("input[id=A2]:checked").val();
//     var B = $("input[id=B2]:checked").val();
//     var C = $("input[id=C2]:checked").val();
//     var str = "";
//     if (!A && !B && C) {
//         str = "<p>Nice job! Your answer is correct. Let’s move on to see the explanation.</p>";
//     } else {
//         str = "<p>Oops, you didn’t catch the correct answer C. Let’s continue to see why we should choose C.</p>";
//     }
//     $("#answer2").html(str);
// }

function continueVideo(id_num) {
    if (id_num == 1) {
        finish1 = true;
    } else if (id_num == 2) {
        finish2 = true;
    }
    var id = "#invent"+id_num;
    $(id).css("display", "none");
    player.playVideo();
}


// //Show slides above video
// new YT.Player('player', {
//     height: '720',
//     width: '1080',
//     videoId: 'M7lc1UVf-VE',
// //  wmode: transparent  makes HTML goes on top of Flash
// //  fs: disable full screen
//     playerVars: {'autoplay': 0, 'wmode': 'transparent', 'fs': 0, 'controls':1, 'rel':0, 'modestbranding':1, 'showinfo':0},
//     events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange,
//         'onError': onPlayerError,
//     }
// });
// document.getElementById('player').style['z-index']=-10;
// document.getElementById('player').style['-webkit-transform']='translateZ(0)';


