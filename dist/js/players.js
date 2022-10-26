const player = document.querySelectorAll('.player')
const playerIcon = document.querySelectorAll('.playerIcon')


for (let i = 0; i < playerIcon.length; i++) {
    playerIcon[i].addEventListener('click', function () {
        for (let i = 0; i < player.length; i++) {
            player[i].className = "player";
        }

        document.getElementById(this.dataset.id).className = 'player active'

        for (let i = 0; i < playerIcon.length; i++) {
            playerIcon[i].className = 'playerIcon';
        }
        this.className = 'playerIcon active'

        const playerChar = document.querySelectorAll('.player.active .playerChar')

        for (let i = 0; i < playerChar.length; i++) {
            playerChar[i].addEventListener('mouseover', function () {
                // console.log('batatinha')
                for (let i = 0; i < playerChar.length; i++) {
                    playerChar[i].className = 'playerChar'
                }
                this.className = 'playerChar active'
            })
        }
    })
}

const playerChar = document.querySelectorAll('.player.active .playerChar')

for (let i = 0; i < playerChar.length; i++) {
    playerChar[i].addEventListener('mouseover', function () {
        // console.log('batatinha')
        for (let i = 0; i < playerChar.length; i++) {
            playerChar[i].className = 'playerChar'
        }
        this.className = 'playerChar active'
    })
}
