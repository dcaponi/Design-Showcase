
var chgPic = document.getElementById("morepix");
var picState = 0;

var picArray = new Array();

picArray[0] = new Image();
picArray[0].src = 'Design-Showcase/Images/mosaic/mosdown.jpg';
picArray[0].picID = "imgA";
picArray[0].tgt = "#infoModalA";

picArray[1] = new Image();
picArray[1].src = 'Design-Showcase/Images/mosaic/moshelmet3.jpg';
picArray[1].picID = "imgB";
picArray[1].tgt = "#infoModalB";

picArray[2] = new Image();
picArray[2].src = 'Design-Showcase/Images/mosaic/mospadogaforest.jpg';
picArray[2].picID = "imgC";
picArray[2].tgt = "#infoModalC";

picArray[3] = new Image();
picArray[3].src = 'Design-Showcase/Images/mosaic/mosfalls.jpg';
picArray[3].picID = "imgD";
picArray[3].tgt = "#infoModalD";

picArray[4] = new Image();
picArray[4].src = 'Design-Showcase/Images/mosaic/mosguizhou-zhijin-cave.jpg'; 
picArray[4].picID = "imgE";
picArray[4].tgt = "#infoModalE";

picArray[5] = new Image();
picArray[5].src = 'Design-Showcase/Images/mosaic/mosentryin.jpg';
picArray[5].picID = "imgF";
picArray[5].tgt = "#infoModalF";

picArray[6] = new Image();
picArray[6].src = 'Design-Showcase/Images/mosaic/moscity.jpg';
picArray[6].picID = "imgG";
picArray[6].tgt = "#infoModalG";

picArray[7] = new Image();
picArray[7].src = 'Design-Showcase/Images/mosaic/mosbluebg.jpg';
picArray[7].picID = "imgH";
picArray[7].tgt = "#infoModalH";

swapHeadline();
setPriceandHours();
window.onmousemove = function() {checkPic();};

chgPic.onclick = function() {swapPics()};

function swapHeadline() {

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Design-Showcase/Images/bg.jpg';
imgArray[0].Pre = "bg";
imgArray[0].text = "China's Hidden Treasure";

imgArray[1] = new Image();
imgArray[1].src = 'Design-Showcase/Images/city-min.jpg';
imgArray[1].Pre = "city-min";
imgArray[1].text = "Discover hidden wonders";

imgArray[2] = new Image();
imgArray[2].src = 'Design-Showcase/Images/bluebg-min.jpg';
imgArray[2].Pre = "bluebg-min";
imgArray[2].text = "Explore new worlds";

imgArray[3] = new Image();
imgArray[3].src = 'Design-Showcase/Images/padogaForest-min.jpg';
imgArray[3].Pre = "padogaForest-min";
imgArray[3].text = "Adventure Awaits";

imgArray[4] = new Image();
imgArray[4].src = 'Design-Showcase/Images/blue.jpg';
imgArray[4].Pre = "blue";
imgArray[4].text = "Surround yourself in natural beauty";

imgArray[5] = new Image();
imgArray[5].src = 'Design-ShowcaseImages/guizhou-zhijin-cave.jpg';
imgArray[5].Pre = "guizhou-zhijin-cave";
imgArray[5].text = "Lose yourself";
var i = Math.floor(Math.random() * imgArray.length);
var imagePrefix = imgArray[i].src;
var imageText = imgArray[i].text;
var urlString = 'url(' + imagePrefix + '.jpg)';

document.getElementById("slideshow").style.backgroundImage = urlString;
document.getElementById("imgTxt").innerHTML = imageText;
}

function setPriceandHours() {
var startPeak = 2;
var endPeak = 10;
var date = new Date();
var month = date.getMonth();
if (month >= startPeak && month <= endPeak) {
    document.getElementById("hours").innerHTML = "08:30 - 17:30";
    document.getElementById("priceC").innerHTML = "120.00 CNY";
    document.getElementById("priceU").innerHTML = "18.50 USD";
} else {
    document.getElementById("hours").innerHTML = "08:00 - 17:00";
    document.getElementById("priceC").innerHTML = "100.00 CNY";
    document.getElementById("priceU").innerHTML = "15.50 USD";
}
};

function swapPics() {
    
    for (i = 0; i < (picArray.length/2); i++) {
        if (document.getElementById(picArray[i].picID).src.match(picArray[i].src)) {
            document.getElementById(picArray[i].picID).src = picArray[i+(picArray.length/2)].src;
            document.getElementById(picArray[i].picID).setAttribute("data-target", picArray[i+(picArray.length/2)].tgt);
            picState = 1;
        } else {
            document.getElementById(picArray[i].picID).src = picArray[i].src;
            document.getElementById(picArray[i].picID).setAttribute("data-target", picArray[i].tgt);
            picState = 0;
        }           
    }
};

function checkPic() {
    if ( picState === 1 && window.outerWidth > 785) {
        picState = 0;
        for (i = 0; i < (picArray.length/2); i++) {
                document.getElementById(picArray[i].picID).src = picArray[i].src;
                document.getElementById(picArray[i].picID).setAttribute("data-target", picArray[i].tgt);       
        }
    }
};

$(function(){
    
    $('#morepix').click(function(event){
        event.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#mosTop').offset().top)
		},1000);
    });
    
    $('#disc').click(function(event){
        event.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#inf').offset().top)
		},1000);
    });

});
