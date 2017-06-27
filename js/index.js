/**
 * Created by c_luodan-001 on 2017/6/13.
 */
    //   var tWidth=document.querySelector("#top").body.clientWidth

var tWidth=window.screen.width;
var tHeight=window.screen.height;
var deviceHeight=document.body.clientHeight;
/* rgb(202,56,69)*/
var arryColor=["rgb(255, 0, 0)","rgb(255,192,0)","rgb(255,255,0)","rgb(0,112,192)","rgb(0,112,192)"];
/*document.querySelector("#top").style.width=Math.floor(tWidth*devicePixelRatio)+'px';
document.querySelector("#top").style.height=Math.floor(tWidth*devicePixelRatio/4)+'px';*/
function line_height(){
    //console.log(devicePixelRatio)

    var tdNode= document.getElementsByClassName("item-name");
    for(var i=0;i<tdNode.length;i++){
        tdNode[i].style.width=tWidth*0.5+'px';
        //console.log('1')
       // console.log(tdNode[i].style.width)

    };

  //  tableDiv.style.height=document.body.clientHeight- headHeight.style.height*2-circleHeight.style.height-txtHeight1.style.height-txtHeight2.style.height-cirHeight.style.height;


if(document.body.clientHeight==660){
    document.getElementsByClassName("list")[0].style.height = document.body.clientHeight * 0.27 + 'px';

    }

    var listCircle=document.getElementsByClassName("list-circle");

    for(var i=0;i<listCircle.length;i++){

        listCircle[i].style.backgroundColor=arryColor[i];
        //console.log(listCircle[i]+arryColor[i])

    };



   for(var i=0;i< document.querySelector("#top").getElementsByTagName("li").length;i++){
       /* document.querySelector("#top").getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.lineHeight=Math.floor(tWidth*devicePixelRatio/4)*0.6+'px';*/
        document.querySelector("#top").getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.backgroundColor=arryColor[i];


    };







};
line_height();



