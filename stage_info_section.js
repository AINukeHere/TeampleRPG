var stageInfoDiv = document.getElementById("StageInfomation").getElementsByTagName('div')[0];

var innerHTML_str = "";

function getStageViewerHTML(stageNum){
    var innerHTML_str = "\
    <div class='StageView'>\
        <div>\
            <span class='DPTEXT_08'>S </span>\
            <span class='DPTEXT_11'>T </span>\
            <span class='DPTEXT_03'>A </span>\
            <span class='DPTEXT_07'>G </span>\
            <span class='DPTEXT_0E'>E </span>\
            <span class='DPTEXT_10'>&nbsp;&nbsp;"+stageNum+"</span>\
            <span class='DPTEXT_04'> - "+stageData[stageNum-1].name+" </span>\
        </div>\
        <div>\
            "+getDifficultyStr(stageNum)+"\
        </div>\
        <div style='text-align:center;'>";
        if(stageNum < 10)
            innerHTML_str += "\
            <span class='DPTEXT_07'>던전 "+stageNum+" - "+stageData[stageNum-1].name+" </span><span class='DPTEXT_03'>Clear ! +"+stageData[stageNum-1].reward+"</span>";
        else
            innerHTML_str += "\
            <span class='DPTEXT_07'>FINAL 던전  - "+stageData[stageNum-1].name+" </span><span class='DPTEXT_03'>Clear ! </span>";
        innerHTML_str+="\
        </div>\
        <div>\
            <img class='stageImage' src='data/images/StageImages/Stage"+stageNum+".png'>\
        </div>\
    </div>";

    return innerHTML_str;
}

function getDifficultyStr(stageNum){
    str = "<span class='DPTEXT_04'>난이도 ";
    
    var i = 0;
    var diff = stageData[stageNum - 1].difficulty;
    for (i = 0; i < 5; ++i)
    {
        str += (i < diff ? "★" : "☆");
    }
    str += "</span>";
    if(i < diff){
        str += "<span class='DPTEXT_08'>";
        for(;i<diff;++i)
        {
            str += "★";
        }
        str += "</span>";
    }
    return str;
}

for(i = 1; i <= 10; ++i)
{
    innerHTML_str += getStageViewerHTML(i);
}
stageInfoDiv.innerHTML = innerHTML_str;