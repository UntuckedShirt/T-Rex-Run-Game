document.addEventListener('DOMContentLoad', () => {
    const dino = document.querySelector('.dino')
    let isJumping = false
    let gravity = 0.9

    function control(e) {
        if (e.keyCode === 32) {
            if (!isJumping) {
                isJumping = true
                jump()
            }
        }
    }
    document.addEventListener('keyup', control)

    function jump() {
        let position = 0
        let timerId = setInterval(function () {
            //move down
            if (position === 150) {
                console.log('down')
                let downTimerId = setInterval(function () {
                    if (position === 0) {
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    position -= 30
                    dino.style.bottom = position + 'px'
                })
                
            }


            //move up
            console.log('up')
            position += 30
            dino.style.bottom = position + 'px'
        },20)
    }

})