counterTime = 0
likes = 0
paused = 0
speed = setInterval(countSeconds, 1000)

likeMessage = document.querySelector('.likes')


counter = document.getElementById('counter')
plus = document.getElementById('plus')
minus = document.getElementById('minus')
pause = document.getElementById('pause')
heart = document.getElementById('heart')
comment = document.getElementById('comment-form')
newComment = document.getElementById('comment-input')
restart = document.getElementById('restart')
commentList = document.getElementById("list")

function isEven(value) {
    if (value%2 == 0) {
        return true
    } else {
        return false
    }
}


function countSeconds() {
    if (isEven(paused)) {
        counterTime +=1
        counter.innerText = counterTime
    } else {
        counterTime = counterTime
    }
}

plus.addEventListener('click', function(){
    if (isEven(paused)) {
        counterTime += 1
        counter.innerText = counterTime
    }
})

minus.addEventListener('click', function(){
    if (isEven(paused)) {
        counterTime -= 1
        counter.innerText = counterTime
    }
})

pause.addEventListener('click', function(){
    paused += 1
    if (isEven(paused) == false){
        pause.innerText = "▶️"
    } else {
        pause.innerText = "⏸️"
    }
}) 

restart.addEventListener('click', function(){
    counterTime = 0
    likes = 0
    likeMessage.innerText = ""
    commentList.innerText = ""
})

heart.addEventListener('click',function(){
    if (isEven(paused)) {
        likes += 1        
        newList = document.createElement('li')
        newLikeMessage = `${counterTime} was liked ${likes} times!`
        textNode = document.createTextNode(newLikeMessage)
        newList.appendChild(textNode)
        likeMessage.appendChild(newList)
    }
})

comment.addEventListener("submit", function(event){
    event.preventDefault();
    newList = document.createElement('li')
    textNode = document.createTextNode(newComment.value)
    newList.appendChild(textNode)
    commentList.appendChild(newList)
    document.getElementById("comment-input").value = [""]
})