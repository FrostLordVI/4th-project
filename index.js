
const board = document.querySelector('#board')

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const num6 = document.querySelector('#num6')
const num7 = document.querySelector('#num7')
const num8 = document.querySelector('#num8')
const num9 = document.querySelector('#num9')
const num0 = document.querySelector('#num0')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const dot = document.querySelector('#dot')

const act = document.querySelector('#act')


const reset = document.querySelector('#reset')
const del = document.querySelector('#del')
let operation=''

let final=''

function pushBoard(){
let numID = this.id
if(final===1){
    
    board.innerHTML='' 
    operation=''
 
    final=0

}


    switch (numID) {
        case 'num1':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'1'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0') {
            operation= operation+'1'
            board.innerHTML=operation
            }
                break;
        case 'num2':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'2'
                        board.innerHTML=operation
                    }
            }
        }

            else if(operation[operation.length-1]!=='0'){
            operation= operation+'2'
            board.innerHTML=operation
            }
                break;  
        case 'num3':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'3'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'3'
            board.innerHTML=operation
            }
                break;
        case 'num4':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'4'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'4'
            board.innerHTML=operation
            }
                break; 
        case 'num5':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'5'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'5'
            board.innerHTML=operation
            }
                break;
        case 'num6':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'6'
                        board.innerHTML=operation
                    }
            }
        }
            if(operation[operation.length-1]!=='0'){
            operation= operation+'6'
            board.innerHTML=operation
            }
                break;  
        case 'num7':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'7'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'7'
            board.innerHTML=operation
            }
                break;
        case 'num8':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'8'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'8'
            board.innerHTML=operation
            }
                break;  
        case 'num9':
            if(operation[operation.length-1]=='0'){
                for(i=0;i<lastNum[lastNum.length-1].length;i++){
                    if(lastNum[lastNum.length-1][i]===','){ 
                        operation= operation+'9'
                        board.innerHTML=operation
                    }
            }
        }
            else if(operation[operation.length-1]!=='0'){
            operation= operation+'9'
            board.innerHTML=operation
            }
              break;
        case 'num0':
            if(operation.length!==1){
            operation= operation+'0'
            board.innerHTML=operation
            }
                break; 
        case 'divide':
           if(operation.length!==0 && 
            operation.split('')[operation.split('').length-1]!=='/' && 
            operation.split('')[operation.split('').length-1]!=='x' &&
            operation.split('')[operation.split('').length-1]!=='+' &&
            operation.split('')[operation.split('').length-1]!=='-' &&
            operation.split('')[operation.split('').length-1]!==',' ){
           
            operation= operation+'/'
            board.innerHTML=operation
        }
              break;
        case 'multiply':
            if(operation.length!==0 && 
            operation.split('')[operation.split('').length-1]!=='/' && 
            operation.split('')[operation.split('').length-1]!=='x' &&
            operation.split('')[operation.split('').length-1]!=='+' &&
            operation.split('')[operation.split('').length-1]!=='-' &&
            operation.split('')[operation.split('').length-1]!==',' ){
            operation= operation+'x'
            board.innerHTML=operation
            }
                break;  
        case 'plus':
            if(operation.length!==0 && 
            operation.split('')[operation.split('').length-1]!=='/' && 
            operation.split('')[operation.split('').length-1]!=='x' &&
            operation.split('')[operation.split('').length-1]!=='+' &&
            operation.split('')[operation.split('').length-1]!=='-' &&
            operation.split('')[operation.split('').length-1]!==',' ){
            operation= operation+'+'
            board.innerHTML=operation
            }
                break;
        case 'minus':
            if(operation.length!==0 && 
            operation.split('')[operation.split('').length-1]!=='/' && 
            operation.split('')[operation.split('').length-1]!=='x' &&
            operation.split('')[operation.split('').length-1]!=='+' &&
            operation.split('')[operation.split('').length-1]!=='-' &&
            operation.split('')[operation.split('').length-1]!==',' ){
            operation= operation+' - '
            board.innerHTML=operation
            }
                break; 
        case 'dot':
             if(operation.length!==0 &&
            operation.split('')[operation.split('').length-1]!=='/' && 
            operation.split('')[operation.split('').length-1]!=='x' &&
            operation.split('')[operation.split('').length-1]!=='+' &&
            operation.split('')[operation.split('').length-1]!=='-' &&
            operation.split('')[operation.split('').length-1]!==',' &&
            operation.split('+')[operation.split('+').length-1].split('').includes(',')!==true ||
            operation.split('-')[operation.split('-').length-1].split('').includes(',')!==true ||
            operation.split('/')[operation.split('/').length-1].split('').includes(',')!==true ||
            operation.split('x')[operation.split('x').length-1].split('').includes(',')!==true){
           
           
                operation= operation+','
            board.innerHTML=operation
            }         
    }

}
function calculate(){
    if(operation.length>1){  
    array=[]
    
    let math = operation.split('').forEach(el=>{
        if(el==='x'){array.push('*')}
    else if(el===','){array.push('.')}
    else{el=array.push(el)}
    })
    let result = eval(array.join(''))

    board.innerHTML=`${result}`
    final=1
} 
}

function clear(){
    board.innerHTML=''
    operation=''
}

const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')

const body = document.querySelector('body')

const circle = document.querySelector('#circle')
const circle2 = document.querySelector('#circle2')
const circle3 = document.querySelector('#circle3')

const calculatorMath = document.querySelector('#calculatorMath')
const header = document.querySelector('#header')
const mathBoard = document.querySelector('#mathBoard')
const color = document.querySelector('#color')
const mainReset = document.querySelector('#mainReset')
const mainDel = document.querySelector('#mainDel')
const mainAct = document.querySelector('#mainAct')

const cell = document.querySelector('cell')
const mainCell = document.querySelectorAll('mainCell')
const h1 = document.querySelectorAll('h1')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')


const color2ar =
    [
     calculatorMath,header,
     color,mathBoard,
     board,
     reset,del,
     mainReset,mainDel,
     act,
     mainAct,
     num1,num2,num3,num4,num5,num6,num7,num8,num9,num0,divide,multiply,dot,plus,minus,
    mainCellNum1,mainCellNum2,mainCellNum3,mainCellNum4,mainCellNum5,mainCellNum6,mainCellNum7,mainCellNum8,mainCellNum9,mainCellNum0,mainCellPlus,mainCellMinus,mainCellDivide,mainCellMultiply,mainCellDot,
    ]
 
function colors(){
    let id=this.id

  if(id==='color2'){
    color2ar.forEach(el=>{
        console.log('1')
        el.classList.add('color2No')
        el.classList.remove('color3No')
        el.classList.remove('color1No')

    })

  h1.forEach(el=>{
    el.setAttribute('style','color: hsl(60, 10%, 19%)')
  })
  h2.forEach(el=>{
    el.setAttribute('style','color: hsl(60, 10%, 19%)')
  })
  h3.forEach(el=>{
    el.setAttribute('style','color: hsl(60, 10%, 19%)')
  })

body.setAttribute('style','background-color:hsl(0, 0%, 90%);')
circle.setAttribute('style',' display:none')
circle2.setAttribute('style','display:block')
circle3.setAttribute('style','display:none')
    }


if(id==='color3'){

    color2ar.forEach(el=>{
        console.log('1')
        el.classList.add('color3No')
        el.classList.remove('color2No')
        el.classList.remove('color1No')
    
      })
            
        

  h1.forEach(el=>{
    el.setAttribute('style','color: hsl(52, 100%, 62%)')
  })
  h2.forEach(el=>{
    el.setAttribute('style','color: hsl(52, 100%, 62%)')
  })
  h3.forEach(el=>{
    el.setAttribute('style','color: hsl(52, 100%, 62%)')
  })
body.setAttribute('style','background-color: hsl(268, 75%, 9%);')
circle.setAttribute('style',' display:none')
circle2.setAttribute('style','display:none')
circle3.setAttribute('style','display:block')
    
    }   
  
if(id==='color1'){
    color2ar.forEach(el=>{
        console.log('1')
        el.classList.add('color1No')
        el.classList.remove('color2No')
        el.classList.remove('color3No')
    
      })
            
        

  h1.forEach(el=>{
    el.setAttribute('style','color: hsl(0, 0%, 100%)')
  })
  h2.forEach(el=>{
    el.setAttribute('style','color: hsl(0, 0%, 100%)')
  })
  h3.forEach(el=>{
    el.setAttribute('style','color: hsl(0, 0%, 100%)')
  })
body.setAttribute('style','background-color: hsl(222, 26%, 31%);')
circle.setAttribute('style',' display:block')
circle2.setAttribute('style','display:none')
circle3.setAttribute('style','display:none')
    }
 }

  

  
   


color1.addEventListener('click',colors)
color2.addEventListener('click',colors)
color3.addEventListener('click',colors)

reset.addEventListener('click',clear)
del.addEventListener('click',clear)

act.addEventListener('click',calculate)

num1.addEventListener('click',pushBoard)
num2.addEventListener('click',pushBoard)
num3.addEventListener('click',pushBoard)
num4.addEventListener('click',pushBoard)
num5.addEventListener('click',pushBoard)
num6.addEventListener('click',pushBoard)
num7.addEventListener('click',pushBoard)
num8.addEventListener('click',pushBoard)
num9.addEventListener('click',pushBoard)
num0.addEventListener('click',pushBoard)
divide.addEventListener('click',pushBoard)
multiply.addEventListener('click',pushBoard)
plus.addEventListener('click',pushBoard)
minus.addEventListener('click',pushBoard)
dot.addEventListener('click',pushBoard)