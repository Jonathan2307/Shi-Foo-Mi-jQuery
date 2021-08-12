        const shifumi = ['pierre', 'papier', 'ciseau']
        let playerWeapon
        let AIWeapon
        let whoWin

        //fonction permettant de generer un nombre aleatoir en fonction de la variable shifumi
        function getRandomInt(max) {
            return shifumi[Math.floor(Math.random() * max)];
        }

        //au clic sur le boutton qui a la classe 'weapons'
        $('.weapons').click(function () {
            
            // on vide la case du resultat 
            $('.result').empty()

            //on determine l'arme du player
            playerWeapon = $(this).data('name');

            // et on l'affiche dans la console
            console.log('player : ' + $(this).data('name'));

            //on determine l'arme de l'AI            
            AIWeapon = getRandomInt(shifumi.length);

            // et on l'affiche dans la console
            console.log('IA : ' + AIWeapon);
        })

        //au clic sur le bouton qui a la classe 'fight'
        $('.fight').click(function () {

            //si les armes sont les mêmes
            if (playerWeapon == AIWeapon) {
                //petit message de loose et on incremente la variable whoWin
                whoWin = 'CONNECTION REFUSED, TRY AGAIN'
                //on l'affiche a la console pour controler
                console.log(whoWin)
                //on l'insere dans l'HTML
                $('.result').html(whoWin)
                //et on vide la variable
                whoWin = "";

            //la suite des conditions verifient tous les cas possibles
            } else if (playerWeapon == 'pierre' && AIWeapon == 'papier') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'pierre' && AIWeapon == 'ciseau') {
                whoWin = `EVIL CORP HACKED ╭∩╮(-_-)╭∩╮`
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'papier' && AIWeapon == 'ciseau') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'papier' && AIWeapon == 'pierre') {
                whoWin = 'EVIL CORP HACKED ╭∩╮(-_-)╭∩╮'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'ciseau' && AIWeapon == 'pierre') {
                whoWin = 'EVIL CORP ABORT THE HACK (ಥ﹏ಥ)'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";

            } else if (playerWeapon == 'ciseau' && AIWeapon == 'papier') {
                whoWin = 'EVIL CORP HACKED ╭∩╮(-_-)╭∩╮'
                console.log(whoWin)
                $('.result').html(whoWin)
                whoWin = "";
            }
        })

        //ces fonctions changent les couleurs des boutons des armes au clic 
        $("#weapon1").click(function () {
            $("#weapon1").css("background-color", "#E0292B").css("color", "black");
            $("#weapon2").css("background-color", "black").css("color", "#E0292B");
            $("#weapon3").css("background-color", "black").css("color", "#E0292B");
        })
        $("#weapon2").click(function () {
            $("#weapon1").css("background-color", "black").css("color", "#E0292B");
            $("#weapon2").css("background-color", "#E0292B").css("color", "black");
            $("#weapon3").css("background-color", "black").css("color", "#E0292B");
        })
        $("#weapon3").click(function () {
            $("#weapon1").css("background-color", "black").css("color", "#E0292B");
            $("#weapon2").css("background-color", "black").css("color", "#E0292B");
            $("#weapon3").css("background-color", "#E0292B").css("color", "black");
        })