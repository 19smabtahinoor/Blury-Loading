const loadingText = document.querySelector('.loading-text')
const bgSection = document.querySelector('.home-section')
let loading = 0
let interVal = setInterval(() => {
    loading++
    if(loading > 99){
        clearInterval(interVal)
    }

    loadingText.innerText = `${loading}%`
    loadingText.style.opacity = scale(loading,0,100,1,0)
    bgSection.style.filter = `blur(${scale(loading,0,100,30,0)}px)`

},50)



const scale = (num,in_min,in_max,out_min,out_max) => {
    return ( (num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}