var init = function () {
	'use strict';

    if (navigator.appVersion.indexOf('Win')!=-1) {
            document.getElementById('container').classList.add('windows');
		}
    
        if (navigator.userAgent.indexOf('Trident')!=-1){
            /*document.getElementById('container').classList.add('ie');   */
        }
    
        if (window.navigator.userAgent.indexOf("Mac")!=-1){
			/*if (window.navigator.userAgent.indexOf("Firefox")!=-1){
				console.log("Mac + Firefox");
				document.getElementById('container').className += "macFir";
				//piLinkA.className += " piLinkMoxAlign";
			}*/
		}
};

$(window).load(function(){

var tl = new TimelineMax({repeat:0,repeatDelay:5});
section2 = document.getElementById('section-2'),
	
	
tl.to("#mds-logo" ,1, {  opacity:0 , ease:Power1.easeInOut },1.0); 
tl.to("#mds-img3" ,1, {  opacity:0 , ease:Power1.easeInOut },1.0); 

	
tl.to("#mds-img2" ,1, {  opacity:1 , ease:Power1.easeInOut },2);
tl.to("#mds-img2" ,1, 	{  opacity:1, scale:1.18, y:-5, x:-70, ease:Power1.easeInOut },2); 
	
	
//frame2	
	tl.to("#mds-img4" ,1, {  opacity:1, ease:Power1.easeInOut },2); 	
	tl.to("#mds-img4" ,1, {  opacity:0, ease:Power1.easeInOut },4); 
//	
tl.to("#mds-img6" ,1, {  opacity:1, ease:Power1.easeInOut },5); 
tl.to("#mds-img2" ,1, {  opacity:1, scale:1.2, y:-105, x:5 ,ease:Power1.easeInOut },5); 
tl.to("#mds-img6" ,1, {  opacity:0, ease:Power1.easeInOut },8); 
tl.to("#mds-img5" ,0.5, {  opacity:0 , ease:Power1.easeInOut },8);	
//	
tl.to("#mds-img7" ,1, {  opacity:1, ease:Power1.easeInOut },9); 
tl.to("#mds-img2" ,1, {  opacity:1, scale:1.18, y:0, x:-70, ease:Power1.easeInOut },9); 
tl.to("#mds-img7" ,1, {  opacity:0, ease:Power1.easeInOut },11); 
//
tl.to("#mds-img2" ,1, {  opacity:1, scale:0.9, y:-105, x:-130 ,ease:Power1.easeInOut },12); 
tl.to("#mds-img8" ,1, {  opacity:1, ease:Power1.easeInOut },13); 




		setTimeout(function(){
        section2.classList.add('moveTop');
		section2.classList.remove('fadeOut');
    }, 14000); 
	
// EVENT LISTENER
	function createScrollBar() {
		var isDevice = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			isDevice = true;
		}
		cScrollbar = new IScroll(scrollableContent, {
			scrollbars: "custom",
			mouseWheel: !0,
			click: isDevice,
			interactiveScrollbars: !0,
			shrinkScrollbars: "scale"
		}), setTimeout(function () {
			cScrollbar.refresh()
		}, 500)
	}

	createScrollBar();
			
});

window.onload = function () {
	init();
}