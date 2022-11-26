const start = document.querySelector('#start')
const again = document.querySelector('#again')

const activity = document.querySelector('.activity')

const more = document.querySelector('#more')
const enough = document.querySelector('#enough')

const points_1 = document.querySelector('#points-1')
const points_2 = document.querySelector('#points-2')

const winner = document.querySelector('#winner')

zeroSignalCount = 0
count_1 = 0
count_2 = 0

start.addEventListener('click', startGame)
again.addEventListener('click', () => {
    points_1.innerHTML = ''
    points_2.innerHTML = ''
    points_2.style.display = 'none'
    winner.innerHTML = ''
    count_1 = 0
    count_2 = 0
    startGame()
})

function startGame() {
    activity.style.display = 'flex'
    start.style.display = 'none'
    again.style.display = 'none'
    addPoints(1)
    addPoints(1)
    addPoints(2)
    addPoints(2)
    if(count_1 == 21) endGame(1)
    if(count_2 == 21) endGame(2)

    if(count_1 > 21) endGame(2)
    if(count_2 > 21) endGame(1) 
}

more.addEventListener('click', () => {

    addPoints(1)

    if(count_2 < 15) {addPoints(2)} else if(count_2 > 15 && count_2 < 17){
        signal = getRandomInt(0,1)
        if(signal == 1) {addPoints(2)} else {
           
            zeroSignalCount++
            if(zeroSignalCount == 3) {
                count_1 > count_2 ? endGame(1) : endGame(2)
            }

        }
    } else {
        zeroSignalCount++
            if(zeroSignalCount == 3) {
                count_1 > count_2 ? endGame(1) : endGame(2)
            }
    }
        
    if(count_1 == 21) endGame(1)
    if(count_2 == 21) endGame(2)

    if(count_1 > 21) endGame(2)
    if(count_2 > 21) endGame(1)

})

enough.addEventListener('click', () => {

    if(count_2 < 15) {addPoints(2)} else if(count_2 > 15 && count_2 < 17){
        signal = getRandomInt(0,1)
        if(signal == 1) {addPoints(2)} else {
           
            zeroSignalCount++
            if(zeroSignalCount == 3) {
                count_1 > count_2 ? endGame(1) : endGame(2)
            }

        }
    } else {
        zeroSignalCount++
            if(zeroSignalCount == 3) {
                count_1 > count_2 ? endGame(1) : endGame(2)
            }
    }
    if(count_1 == 21) endGame(1)
    if(count_2 == 21) endGame(2)

    if(count_1 > 21) endGame(2)
    if(count_2 > 21) endGame(1)

})

function addPoints(player) {
    
    if (player == 1) {
        
        let span = document.createElement('span')
        span.classList.add(`card-${player}`)
        digit = getRandomInt(1,11)        
        span.innerHTML = `| ${digit} |`
        points_1.append(span)
        count_1 += digit
        // console.log(count_1)

    } else {

        let span = document.createElement('span')
        span.classList.add(`card-${player}`)
        digit = getRandomInt(1,11)
        span.innerHTML = `| ${digit} |`
        points_2.append(span)
        count_2 += digit
        // console.log(count_2)
    }    

}

function endGame(win) {

        // console.log('Player 1 - win')
        let h4_winner = document.createElement('h4')
        h4_winner.classList.add(`winner-${win}`)
        h4_winner.innerHTML = `Player ${win} - win`
        let h4_point = document.createElement('h4')
        let span_1 = document.createElement('span')
        let span_2 = document.createElement('span')
        span_1.classList.add('points-first')
        span_2.classList.add('points-second')
        span_1.innerHTML = count_1
        span_2.innerHTML = count_2
        h4_point.append(span_1)
        h4_point.append(' | ')
        h4_point.append(span_2)
        // console.log(h4_point)
        // winner.innerHTML = `${h4_point, h4_winner}`
        winner.append(h4_point)
        winner.append(h4_winner)
        points_2.style.display = 'block'
        activity.style.display = 'none'
        again.style.display = 'inline-block'
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}