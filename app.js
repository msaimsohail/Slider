let slidder = document.querySelector(".slide")
var imge = ['im1.jpg','im2.jpg','im3.jpg']
var i = 0

function previous() {
    if (i <= 0) i = imge.length;
    i--;
    return getImg();
    }
function next(){
    if (i >= imge.length -1) i = -1;
    i++;
    return getImg();
}
function getImg() {
    console.log(slidder)
    slidder.setAttribute('src','images/' + imge[i])
}
