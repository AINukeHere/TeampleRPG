var _DEBUG = true;
var jsonObject = jsonObject[0];
if(!_DEBUG)
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/AINukeHere/TeampleRPG/main/data/class_info.json", false);
    request.send(null)
    jsonObject = JSON.parse(request.responseText);
}
function setPopupInfoPosition(event)
{
    var classPopupInfo = document.getElementById("classPopupInfo");
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    var offset = 10;
    skillPopupInfo.style.left=(event.pageX+offset).toString()+"px";
    if(event.pageX < 960){
        classPopupInfo.style.left=(event.pageX+offset).toString()+"px";
    }
    else{
        classPopupInfo.style.left=(event.pageX-offset - 450).toString()+"px";
        classPopupInfo.style.right=(event.pageX-offset).toString()+"px";
    }
    skillPopupInfo.style.top=(event.pageY+offset).toString()+"px";
    classPopupInfo.style.top=(event.pageY+offset).toString()+"px";
}
function toggleclassTable()
{
    var classTable = document.getElementById("classTable");
    if (classTable.style.display == "none")
        classTable.style.display = "grid";
    else
        classTable.style.display = "none";
}
function showClassPopupInfo(classIdx)
{
    var classPopupInfo = document.getElementById("classPopupInfo");
    classPopupInfo.style.display="inline";

    var classInfo = jsonObject.classes[classIdx];
    var spec_str1=getSpecString(classInfo.spec1);
    var spec_str2=getSpecString(classInfo.spec2);
    var spec_str3=getSpecString(classInfo.spec3);
    
    classPopupInfo.children[0].innerHTML = "\
    <div><span class='specName'>파괴력</span><span class='specStars'>"+spec_str1+"</span></div>\
    <div><span class='specName'>내구력</span><span class='specStars'>"+spec_str2+"</span></div>\
    <div><span class='specName'>기동성</span><span class='specStars'>"+spec_str3+"</span></div>\
    <span class='explanation'>"+classInfo.explanation+"</span>\
    <span></span>\
    ";
    classPopupInfo.getElementsByTagName("img")[0].src = 'data/'+classInfo.image;
}
function hideClassPopupInfo(obj)
{
    var classPopupInfo = document.getElementById("classPopupInfo");
    classPopupInfo.style.display="none";
}
function showSkillPopupInfo(skillCommand)
{
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.display="inline";
    skillPopupInfo.getElementsByTagName("img")[0].src = "data/"+skillCommand+"_Skill_Cost.png";
}
function hideSkillPopupInfo()
{
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.display="none";
}

function onClickClass(classIdx)
{
    //toggleclassTable();
    var classInfo = jsonObject.classes[classIdx];
    var classView = document.getElementById("classView");
    
    var spec_str1=getSpecString(classInfo.spec1);
    var spec_str2=getSpecString(classInfo.spec2);
    var spec_str3=getSpecString(classInfo.spec3);
    

    var innerHTML_str = "\
    <img class='classProfileImage' src=data/"+jsonObject.classes[classIdx].image+"><br>\
    <span class='specName'>파괴력</span><span class='specStars'>"+spec_str1+"</span><br>\
    <span class='specName'>내구력</span><span class='specStars'>"+spec_str2+"</span><br>\
    <span class='specName'>기동성</span><span class='specStars'>"+spec_str3+"</span><br>\
    <span class='explanation'>"+jsonObject.classes[classIdx].explanation+"</span>\
    <br>\
    <div class='skillViewer'>\
    ";
    for(var i = 0; i < classInfo.skills.length; ++i)
    {
        var skillInfo = classInfo.skills[i];
        innerHTML_str += "\
        <table class='skillContent'>\
        <tr>\
            <td>";
            for(var cmdIdx = 0; cmdIdx < skillInfo.command.length; ++cmdIdx)
            {
                innerHTML_str += "\
                <img class='skillIcon'\
                onmousemove='showSkillPopupInfo(\""+skillInfo.command[cmdIdx]+"\")' \
                onmouseout='hideSkillPopupInfo()' \
                src='data/"+skillInfo.command[cmdIdx]+"_Skill.png'>";
            }
            innerHTML_str += "\
            <span style='color:white'>" +skillInfo.type+"</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span class='skillCommand'>"+skillInfo.command+" Skill - </span>\
                <span class='skillName'>"+skillInfo.name+"</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span class='explanation'>"+skillInfo.explanation+"</span>\
            </td>\
        </tr>\
        </table>\
        ";
    }
    innerHTML_str+="\
    </div>\
    ";
    if(classInfo.jobs1 != null){
        var job1_spec1_str = getSpecString(classInfo.jobs1.spec1);
        var job1_spec2_str = getSpecString(classInfo.jobs1.spec2);
        var job1_spec3_str = getSpecString(classInfo.jobs1.spec3);
        var job2_spec1_str = getSpecString(classInfo.jobs2.spec1);
        var job2_spec2_str = getSpecString(classInfo.jobs2.spec2);
        var job2_spec3_str = getSpecString(classInfo.jobs2.spec3);
        innerHTML_str += "\
        <div class='jobSelect'>\
            <div class='jobSelectMessage'>두 직업 중 하나를 선택하세요</div><br>\
            <div class='jobExplanation'>\
                <div class='job1View'>\
                    <span>" + classInfo.jobs1.name+ "("+classInfo.jobs1.nickname+")</span><br>\
                    <span class='specName'>파괴력</span><span class='specStars'>"+job1_spec1_str+"</span><br>\
                    <span class='specName'>내구력</span><span class='specStars'>"+job1_spec2_str+"</span><br>\
                    <span class='specName'>기동성</span><span class='specStars'>"+job1_spec3_str+"</span><br>\
                    " + classInfo.jobs1.explanation + "\
                </div>\
                <div class='job2View'>\
                    <span>" + classInfo.jobs2.name+ "("+classInfo.jobs1.nickname+")</span><br>\
                    <span class='specName'>파괴력</span><span class='specStars'>"+job2_spec1_str+"</span><br>\
                    <span class='specName'>내구력</span><span class='specStars'>"+job2_spec2_str+"</span><br>\
                    <span class='specName'>기동성</span><span class='specStars'>"+job2_spec3_str+"</span><br>\
                    " + classInfo.jobs2.explanation + "\
                </div>\
            </div>\
            <div class ='jobSelection'>\
            <img style='align-self:center;justify-self: center;' src='data/jobSelect1.png'>\
            <img style='align-self:center;justify-self: center;' src='data/jobSelect2.png'>\
            <button class='job1SelectButton' onclick='onSelectJob("+classIdx+", 0)'>선택1</button>\
            <button class='job2SelectButton' onclick='onSelectJob("+classIdx+", 1)'>선택2</button>\
            </div>\
        </div>\
        ";
    }

    //html DOM 수정
    classView.innerHTML= innerHTML_str;
}
function onSelectJob(classIdx, jobIdx)
{
    console.log("onSelectJob("+classIdx + ", " + jobIdx + ")");
}
function getSpecString(starNum)
{
    var spec_str = "";
    for(var i = 5, spec = starNum; i > 0 || spec > 0; --i,--spec){
        spec_str += (spec > 0) ? "★" : "☆";
    }
    return spec_str;
}