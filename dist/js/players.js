const player = document.querySelectorAll('.player') // get all elements with .player class
const playerIcon = document.querySelectorAll('.playerIcon') // get all elementis with .playerIcon class


for (let i = 0; i < playerIcon.length; i++) { // separates all elements with .playerIcon based on number of items
    playerIcon[i].addEventListener('click', function () {
        for (let i = 0; i < player.length; i++) {
            player[i].className = "player";
        }

        document.getElementById(this.dataset.id).className = 'player active' // on click in a playerIcon item, add classes from id equals data id

        for (let i = 0; i < playerIcon.length; i++) {
            playerIcon[i].className = 'playerIcon';
        }
        this.className = 'playerIcon active'

        const playerChar = document.querySelectorAll('.player.active .playerChar') // get all elements with .player.active .playerChar after click in a playerIcon item

        for (let i = 0; i < playerChar.length; i++) {
            playerChar[i].addEventListener('mouseover', function () {
                for (let i = 0; i < playerChar.length; i++) {
                    playerChar[i].className = 'playerChar'
                }
                this.className = 'playerChar active'
            })
        }
    })
}

const playerChar = document.querySelectorAll('.player.active .playerChar') // get all elements with .player.active .playerChar before click in a playerIcon item

for (let i = 0; i < playerChar.length; i++) {
    playerChar[i].addEventListener('mouseover', function () {
        for (let i = 0; i < playerChar.length; i++) {
            playerChar[i].className = 'playerChar'
        }
        this.className = 'playerChar active'
    })
}
