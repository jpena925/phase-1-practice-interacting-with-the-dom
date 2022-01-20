//stopwatch counting up
let timer = parseInt(document.getElementById('counter').textContent)
let pauseFlag = false
function counter(){
    if(!pauseFlag){
        timer = timer + 1
        document.getElementById('counter').textContent = timer.toString()
        setTimeout(counter, 1000);
    } else {
        return
    }
}
setTimeout(counter,1000)

//manually increment with plus button
let plusButton = document.getElementById('plus')
plusButton.addEventListener('click', () => {
    timer = timer + 1
    document.getElementById('counter').textContent = timer.toString()
})

//decrement with minus button
let minusButton = document.getElementById('minus')
minusButton.addEventListener('click', () => {
    timer = timer - 1
    document.getElementById('counter').textContent = timer.toString()
})

//listen for heart click
//when clicked, create you liked this heart or whatever and number of times
let heart = document.getElementById('heart')
let likeList = document.querySelector('ul')
heart.addEventListener('click', e => {
    if(!document.getElementById(`${timer}`)){
        let newLike = document.createElement('li')
        newLike.setAttribute('id', `${timer}`)
        newLike.textContent =`${timer} has been liked 1 time`
        likeList.appendChild(newLike)
    } else {
        let liked = document.getElementById(`${timer}`)
        let textArray = liked.textContent.split(' ')
        let numChar = parseInt(textArray[4])
        textArray[4] = (numChar + 1).toString()
        textArray[5] = 'times'
        let newString = textArray.join(' ')
        liked.textContent = newString
    }
})

let pause = document.getElementById('pause')
pause.addEventListener('click', e => {
    if(!pauseFlag){
        pauseFlag = true;
        plusButton.disabled = true
        minusButton.disabled = true
        heart.disabled = true
        pause.textContent = 'resume'
    } else {
        pauseFlag = false;
        plusButton.disabled = false
        minusButton.disabled = false
        heart.disabled = false
        pause.textContent = 'pause'
        counter()
    }
})

let commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', e => {
    e.preventDefault()
    let inputText = e.target['comment-input'].value
    let commentArea = document.querySelector('h3')
    let newCommentEle = document.createElement('li')
    newCommentEle.textContent = inputText
    commentArea.appendChild(newCommentEle)
    commentForm.reset()
})