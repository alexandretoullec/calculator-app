const btnsSwitch = document.querySelectorAll('.switch-container input');
const body = document.body;
const checkMark = document.querySelectorAll('.custom-radio-button .checkmark');

const titleSwitch = document.querySelectorAll('h2')
const numSwitch = document.querySelectorAll('.switch-container span')
const inputCont = document.querySelector('.input-cont')
const inputContLab = document.querySelectorAll('.input-cont label')

const touchBack = document.querySelector('.touch')

const tabValue=document.querySelector('.calculator .value')
console.log(tabValue);

const btnsTouch = document.querySelectorAll('.calculator span')
const btnClear = document.querySelector('.calculator .clear')
const btnDel = document.querySelector('.calculator .del')
const btnEqual = document.querySelector('.calculator .equal')



btnsSwitch.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.id === "first"){

            checkMark.forEach((btn)=>{
                btn.style.background="hsl(6, 63%, 50%)"
            })

            body.style.background="var(--very-dark-desaturated-blue)";
            
            inputCont.style.background="var(--very-dark-desaturated-blue2)"

            inputContLab.forEach((lab)=>{
                lab.style.background="var(--very-dark-desaturated-blue2)"
            })
                        
            titleSwitch.forEach((title)=>{
                title.style.color="white";
            })

            numSwitch.forEach((num)=>{
                num.style.color="white";
            })
                        
            tabValue.style.background="var(--very-dark-desaturated-blue3)";
            tabValue.style.color="white";
                        
            btnsTouch.forEach((btnTouch)=>{
                btnTouch.style.background="var(--light-grayish-yellow)";
                btnTouch.style.color="var(--very-dark-grayish-blue)";
                
            })
            btnClear.style.background="var(--desaturated-dark-blue)"
            btnClear.style.color="white"
            btnDel.style.background="var(--desaturated-dark-blue)"
            btnDel.style.color="white"
            btnEqual.style.background="var(--red)"
            btnEqual.style.color="white"
            touchBack.style.background="var(--very-dark-desaturated-blue2)"
            
        }

        if(btn.id === "second"){
            
            checkMark.forEach((btn)=>{
                btn.style.background="hsl(6, 63%, 50%)"
            })

            body.style.background="var(--light-gray)";
            
            inputCont.style.background="var(--grayish-red)"

            inputContLab.forEach((lab)=>{
                lab.style.background="var(--grayish-red)"
            })
                        
            titleSwitch.forEach((title)=>{
                title.style.color="var(--very-dark-grayish-yellow)";
            })

            numSwitch.forEach((num)=>{
                num.style.color="var(--very-dark-grayish-yellow)";
            })
                        
            tabValue.style.background="var(--very-light-gray)";
            tabValue.style.color="var(--very-dark-grayish-yellow)";
                        
            btnsTouch.forEach((btnTouch)=>{
                btnTouch.style.background="var(--light-grayish-yellow)";
                btnTouch.style.color="var(--very-dark-grayish-yellow)";
                
            })
            btnClear.style.background="var(--dark-moderate-cyan)"
            btnDel.style.background="var(--dark-moderate-cyan)"
            btnEqual.style.background="var(--orange)"
            touchBack.style.background="var(--grayish-red)"
                      
        }

        if(btn.id === "third"){

            checkMark.forEach((btn)=>{
                btn.style.background="var(--pure-cyan)"
            })


            body.style.background="var(--very-dark-violet1)";
            
            inputCont.style.background="var(--very-dark-violet2)"

            inputContLab.forEach((lab)=>{
                lab.style.background="var(--very-dark-violet2)"
            })
                        
            titleSwitch.forEach((title)=>{
                title.style.color="var(--light-yellow)";
            })

            numSwitch.forEach((num)=>{
                num.style.color="var(--light-yellow)";
            })
                        
            tabValue.style.background="var(--very-dark-violet2)";
            tabValue.style.color="var(--light-yellow)";
                        
            btnsTouch.forEach((btnTouch)=>{
                btnTouch.style.background="var(--very-dark-violet)";
                btnTouch.style.color="var(--light-yellow)";
                
            })
            btnClear.style.background="var(--dark-magenta)"
            btnClear.style.color="var(--light-yellow)"
            btnDel.style.background="var(--dark-magenta)"
            btnDel.style.color="var(--light-yellow)"
            btnEqual.style.background="var(--pure-cyan)"
            btnEqual.style.color="var(--light-yellow)"
            touchBack.style.background="var(--very-dark-violet2)"
        }
    })
}

)