/**
 * Created by Administrator on 2017/9/7.
 */

//最下面第三个轮播图  点击按钮改变图片
    function text(a) {
    var weddingImg=document.getElementsByClassName("weddingImg");
    for(var i=0;i<weddingImg.length;i++){
        weddingImg[i].style.visibility="hidden";
        weddingImg[i].style.opacity="0"
    }
    weddingImg[a-1].style.visibility="visible";
    weddingImg[a-1].style.opacity="1"
}

//第2个大轮播图  渐变效果

    var jiantou=document.getElementsByClassName("jiantou")[0];
    var span=jiantou.getElementsByTagName("span");
    var content2=document.getElementsByClassName("content2-imgbox")[0];
    var content2Box=content2.getElementsByTagName("div");
    var e=0,d=5;
    span[0].onclick=selleft;
    span[1].onclick=selright;
    var mytime2=setInterval(selleft,2000);
    content2.onmouseover=function () {
      clearInterval(mytime2);
 };
   content2.onmouseout=function () {
     mytime2=setInterval(selleft,2000);
};
        function selleft() {
            for(var a=0;a<content2Box.length;a++){
                content2Box[a].style.visibility="hidden";
                content2Box[a].style.opacity=0
            }
            e++;
            content2Box[e].style.visibility="visible";
            content2Box[e].style.opacity="1";
            if(e==5){
                e=0;
            }
    }
        function selright() {
            for(var a=0;a<content2Box.length;a++){
                content2Box[a].style.visibility="hidden";
                content2Box[a].style.opacity=0
            }
            d--;
            content2Box[d].style.visibility="visible";
            content2Box[d].style.opacity="1";
            if(d==0){
                d=5;
            }
    };

//    <!--第一个轮播图-->  左右滑动效果

var pre=document.getElementsByClassName("pre")[0];
var next=document.getElementsByClassName("next")[0];
var childImg=document.getElementsByClassName("childImg");
var radius2=document.getElementsByClassName("radius2")[0];
var yuan2=radius2.getElementsByTagName("div");
var paren=childImg[0].parentNode;
var targetImag=document.getElementsByClassName("targetImag")[0];
var imgBOX=childImg[0].getElementsByTagName("img");
var imgBOX2=childImg[1].getElementsByTagName("img");
var targetImag2=document.getElementsByClassName("targetImag2")[0];
var r=0;
targetImag.onclick=function () {
    imgBOX[0].src="image/img333.jpg";
    imgBOX2[0].src="image/img333.jpg"
};
targetImag2.onclick=function () {
    imgBOX[0].src="image/children-running-along-shoreline.jpg";
    imgBOX2[0].src="image/couple-beach-sunset.jpg";
};
pre.onclick=MYleft;
next.onclick=MYright;
yuan2[0].onmouseover=function () {
    clearInterval(mytime);
};
yuan2[1].onmouseover=function () {
    clearInterval(mytime);
};
yuan2[0].onclick=function () {
    MYleft();
};
yuan2[1].onclick=function(){
    MYright();
};
var mytime=setInterval(MYright,2000);
paren.onmouseover=function () {
    clearInterval(mytime);
    pre.style.opacity="1";
    pre.style.left="15px";
    next.style.opacity="1";
    next.style.right="15px";
};
paren.onmouseout=function () {
    pre.style.opacity="0";
    next.style.opacity="0";
    mytime=setInterval(MYright,2000);
};
function MYright() {
    childImg[0].style.marginLeft="-710px";
        setTimeout(function () {
            childImg[0].style.marginLeft="0px";
            paren.appendChild(childImg[0]);
            r++;
            if(r>yuan2.length-1){
                r=0;
            }
            for(var u=0;u<yuan2.length;u++){
                yuan2[u].className="";
            }
            yuan2[r].className="colorR";
        },500)
  }
function MYleft(){
    paren.insertBefore(childImg[1],paren.firstChild);
    childImg[0].style.marginLeft="-710px";
    setTimeout(function () {
        childImg[0].style.marginLeft="0px";
        r--;
        if(r<0){
            r=yuan2.length-1;
        }
        for(var u=0;u<yuan2.length;u++){
            yuan2[u].className="";
        }
        yuan2[r].className="colorR";
    },1000);

}



//    <!--第一个轮播图左边日历-->

var buticon=document.getElementsByClassName("but-icon");
var mydate=document.getElementsByClassName("newdate");
buticon[0].onclick=function () {
    mydate[0].style.visibility="visible";
    mydate[1].style.visibility="hidden";
    document.onmousedown=function () {
        mydate[0].style.visibility="hidden";
    }
};
buticon[1].onclick=function () {
    mydate[1].style.visibility="visible";
    mydate[0].style.visibility="hidden";
    document.onmousedown=function () {
        mydate[1].style.visibility="hidden";
    }
};


/*banner视屏暂停*/
var banner=document.getElementsByClassName("banner")[0];
var rideo=document.getElementsByTagName("video")[0];
banner.onclick=function () {
    if(rideo.paused){
        rideo.play();
    }else {
        rideo.pause()
    }
};


//    导航   鼠标滑动事件

window.onscroll=function () {
    var scro=document.body.scrollTop;
    var navObj=document.getElementsByClassName("menu")[0];
    var rightDiv=document.getElementsByClassName("nav-rightBox")[0];
    var submenu=document.getElementsByClassName("subMenu");
    var newli1=document.getElementsByClassName("newli1")[0];
    var opBook=document.getElementsByClassName("opBook")[0];
    var letter4=document.getElementsByClassName("letter4")[0];
    var content2Imgbox=document.getElementsByClassName("content2-imgbox")[0];

//   导航往右边滑动
    if(scro>=600){
        navObj.style.marginLeft="-1350px";
        navObj.style.position = "fixed";
        navObj.style.top = "0px";
        navObj.style.left = "0px";
        navObj.style.zIndex="1";
        newli1.style.display="none";
        navObj.style.boxShadow="1px 1px 0.5px #DADADA";

//子菜单向下显示
        for(var i=0;i<submenu.length;i++){
            submenu[i].style.position = "absolute";
            submenu[i].style.top = "130px";
            submenu[i].style.zIndex = "99";
            submenu[i].style.webkitTransform = "rotate(180deg)";
            var subli = submenu[i].getElementsByTagName("li");
            for (var j = 0; j < subli.length; j++) {
                subli[j].style.webkitTransform = "rotate(180deg)";
            }
        }

//主菜单内容改变，回到中间
        rightDiv.onclick=function () {
            navObj.style.marginLeft="0";
            opBook.style.display="block";
        }

//菜单回到原来的样子
    } else if(scro<600){
        opBook.style.display="none";
        newli1.style.display="block";
        navObj.style.marginLeft = "0";
        navObj.style.position = "static";
        for(var a=0;a<submenu.length;a++){
            var posTop=["-360px","-120px","-80px","-120px","-80px", "-80px"];
            var posLeft=["-30px","-65px","-65px","-75px","-60px","-70px"];
            submenu[a].style.position = "absolute";
            submenu[a].style.top = posTop[a];
            submenu[a].style.left = posLeft[a];
        }
    }

//  下面文字板块滑动
if(scro>=1930&&scro<=2600){
    letter4.style.position="absolute";
    letter4.style.top=(scro-1930)/4+"px";
}

//中间轮播板块滑动
if(scro>=240&&scro<=400){
    content2Imgbox.style.position="relative";
    content2Imgbox.style.top=(scro-240)/4+"px";
  }
};