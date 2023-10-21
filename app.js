let container =document.getElementById('container')
let colrcode =document.getElementById('code')
function randomcolor(){
    let  chars='0123456789ABCDEF'
    let colorcodelength=6;
    let colorcode='';
    for(let i=0;i<colorcodelength;i++){
        let randomNum=Math.floor(Math.random()*chars.length);
        colorcode +=chars.substring(randomNum+1,randomNum);
        console.log(colorcode)
    }
    return colorcode;
}
randomcolor();
    function generetecolors(){
        for(let i=0; i<container.length;i++){
            let colorContainer=container[i];
            let newcode=randomcolor();
        
            colorContainer.style.backgroundColor='#'+newcode;
            colrcode.textContent='#'+newcode;
        }
    }
generetecolors();