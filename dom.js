function pilihanBot() {

    var bot = Math.random()

    if (bot < 0.34) {
        return 'batu'
    } else if (bot >= 0.34 && bot < 0.67) {
        return 'gunting'
    } else {
        return 'kertas'
    }

}

function aturanMain(bot, human) {

    if (human == bot) {
        return 'SERI!!!'
    } else if (human == 'batu') {
        if (bot == 'gunting') {
            return 'MENANG'
        } else {
            return 'KALAH'
        }
    } else if (human == 'gunting') {
        if (bot == 'batu') {
            return 'KALAH'
        } else {
            return 'MENANG'
        }
    } else if (human == 'kertas') {
        if (bot == 'gunting') {
            return 'KALAH'
        } else {
            return 'MENANG'
        }
    }

}


var pilih = document.querySelectorAll('li img')
pilih.forEach(function (pil) {
    pil.addEventListener('click', function () {

        var botPick = pilihanBot()
        var humanPick = pil.className
        var hasil = aturanMain(botPick, humanPick)
        
        var imgBot = document.querySelector('.img-komputer')
        imgBot.setAttribute('src', botPick + '.png')

        var info = document.querySelector('.info')
        if (hasil == 'MENANG') {
            info.classList.add('green')
            info.classList.remove('red')
            info.classList.remove('yellow')
        } else if (hasil == 'KALAH') {
            info.classList.add('red')
            info.classList.remove('green')
            info.classList.remove('yellow')
        } else {
            info.classList.add('yellow')
            info.classList.remove('red')
            info.classList.remove('green')
        }
        info.innerHTML = hasil
    })

})