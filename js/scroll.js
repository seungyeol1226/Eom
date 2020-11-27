window.addEventListener('DOMContentLoaded', function () {
    var conEle = document.querySelector('article');
    var pageEle = document.querySelectorAll('article .page');
    var conPos = [];
    var idx = 0;
    
    pageEle.forEach(function(el){
        conPos.push(el.offsetTop);
    });    
 
    //css에서 scroll-behavior: smooth; 삭제시
    setTimeout(function(){
        window.scrollTo(0,0);
    },10);
    
    var bln = false; window.addEventListener('mousewheel',function(e){
        if(bln) return;
        
        if(e.wheelDelta < 0){
            //down
            if(idx < pageEle.length-1){idx++;}
        }else{
            //up
            if(idx > 0){idx--;}
        }
        
        conEle.style.transform = "translateY(-"+ conPos[idx]+"px)";
        update();
        
        bln=true;
        setTimeout(function(){bln=false;},1000);
    });
        var menuEl = document.querySelectorAll('.h-menu a');
        var pageEl = document.querySelectorAll('.page');
        var pageArr = [];

        pageEl.forEach(function(sl,idx){
            pageArr.push(sl.offsetTop);
        });
        var asideEl = document.querySelector('aside');
            var asideTop = asideEl.offsetTop;

        menuEl.forEach(function(sl,i){
            sl.addEventListener('click',function(e){
                idx = i;
                e.preventDefault();
                // window.scrollTo(0,pageArr[idx]);
                conEle.style.transform = "translateY(-"+ pageArr[idx]+"px)";
                update();
            });
            asideEl.addEventListener('click',function(){
                conEle.style.transform =  "translateY(-"+ pageArr[0]+"px)";
                pageArr.push('0')
            })
        });

        var winH = window.innerHeight / 2;
        function update(){
            menuEl.forEach(function(a){
                a.classList.remove('active');
            });
            menuEl[idx].classList.add('active')

            
        }
        
        
            
        
            

});
