        let shifumi = ['pierre', 'papier', 'ciseau']
        let playerWeapon
        let AIWeapon
        let whoWin

        function getRandomInt(max) {
            return shifumi[Math.floor(Math.random() * max)];
        }

        $('.weapons').click(function () {
            $('.result').empty()

            playerWeapon = $(this).data('name');
            console.log('player : ' + $(this).data('name'));

            AIWeapon = getRandomInt(shifumi.length);
            console.log('IA : ' + AIWeapon);
        })

        $('.fight').click(function () {

            if (playerWeapon == AIWeapon) {
                whoWin = 'CONNECTION REFUSED, TRY AGAIN'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'pierre' && AIWeapon == 'papier') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'pierre' && AIWeapon == 'ciseau') {
                whoWin = `EVIL CORP HACKED ╭∩╮(-_-)╭∩╮`
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'papier' && AIWeapon == 'ciseau') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'papier' && AIWeapon == 'pierre') {
                whoWin = 'EVIL CORP HACKED ╭∩╮(-_-)╭∩╮'
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'ciseau' && AIWeapon == 'pierre') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'ciseau' && AIWeapon == 'papier') {
                whoWin = 'EVIL CORP HACKED ╭∩╮(-_-)╭∩╮'
                console.log(whoWin)
                $('.result').prepend(whoWin)
                whoWin = "";
            }
        })

        //         $(document).ready(function() {
        //             $(document).mousemove(function(e) {
        //             pointer = $('<img>').attr({'src':'pointer.png'});
        //             $(document.body).append(pointer);
        //             pointer.css({
        //                         'position':'absolute',
        //                         top: e.pageY +2 ,    //offsets
        //                         left: e.pageX +2   //offsets
        //                     }).fadeOut(1000);   
        //     });
        // })

        $("#weapon1").click(function () {
            $("#weapon1").css("background-color", "red").css("color", "black");
            $("#weapon2").css("background-color", "black").css("color", "red");
            $("#weapon3").css("background-color", "black").css("color", "red");
        })
        $("#weapon2").click(function () {
            $("#weapon1").css("background-color", "black").css("color", "red");
            $("#weapon2").css("background-color", "red").css("color", "black");
            $("#weapon3").css("background-color", "black").css("color", "red");
        })
        $("#weapon3").click(function () {
            $("#weapon1").css("background-color", "black").css("color", "red");
            $("#weapon2").css("background-color", "black").css("color", "red");
            $("#weapon3").css("background-color", "red").css("color", "black");
        })