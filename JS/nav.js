
    (function(){
        const navWrap = document.querySelector('.nav-small');
        const content = document.querySelector('.contentWindow');
        if(!navWrap || !content) return;
        let navOffset = navWrap.offsetTop;
        function onScroll(){
            if(window.scrollY >= navOffset){
                if(!navWrap.classList.contains('fixed')){
                    navWrap.classList.add('fixed');
                    content.style.paddingTop = navWrap.offsetHeight + 'px';
                }
            } else {
                if(navWrap.classList.contains('fixed')){
                    navWrap.classList.remove('fixed');
                    content.style.paddingTop = '';
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', function(){
            // recompute offset and remove fixed if necessary to avoid sticky mismatch
            navWrap.classList.remove('fixed');
            content.style.paddingTop = '';
            navOffset = navWrap.offsetTop;
            onScroll();
        });
    })();
