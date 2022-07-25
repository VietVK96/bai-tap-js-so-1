const $ = document.querySelector.bind(document);
const  $$ = document.querySelectorAll.bind(document);

let listTab = $$('.tab-item');
let listPane = $$('.tab-pane');


const setLine = ()=>{
    let tabActive = $('.tab-item.active');
    let line = $('.line');
    
    line.style.left = tabActive.offsetLeft+'px';
    line.style.width = tabActive.offsetWidth +'px';
    }
setLine();

listTab.forEach( (tab,index)=>{
    tab.onclick = function (){
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        listPane.item(index).classList.add('active');

        setLine();
    }
})
