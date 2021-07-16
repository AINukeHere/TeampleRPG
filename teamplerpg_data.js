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
    classPopupInfo.style.left=(event.pageX+5).toString()+"px";
    classPopupInfo.style.top=(event.pageY+5).toString()+"px";

    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.left=(event.pageX+5).toString()+"px";
    skillPopupInfo.style.top=(event.pageY+5).toString()+"px";
    
    //console.log(event.clientX, event.clientY);
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
    classPopupInfo.children[0].innerHTML = jsonObject.classes[classIdx].explanation;
    classPopupInfo.children[1].src = 'data/'+jsonObject.classes[classIdx].image;
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
    toggleclassTable();
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
        <div class='job1View'><span>" + classInfo.jobs1.name+ "</span><br>\
        <span class='specName'>파괴력</span><span class='specStars'>"+job1_spec1_str+"</span><br>\
        <span class='specName'>내구력</span><span class='specStars'>"+job1_spec2_str+"</span><br>\
        <span class='specName'>기동성</span><span class='specStars'>"+job1_spec3_str+"</span><br>\
        " + classInfo.jobs1.explanation + "</div>\
        <div class='job2View'><span>" + classInfo.jobs2.name+ "</span><br>\
        <span class='specName'>파괴력</span><span class='specStars'>"+job2_spec1_str+"</span><br>\
        <span class='specName'>내구력</span><span class='specStars'>"+job2_spec2_str+"</span><br>\
        <span class='specName'>기동성</span><span class='specStars'>"+job2_spec3_str+"</span><br>\
        " + classInfo.jobs2.explanation + "</div>\
        </div>";
        // <tr><td>" + classInfo.jobs1.name + "</td><td>" + classInfo.jobs2.name + "</td></tr>\
        // <tr><td class='job1Explanation'>" + classInfo.jobs1.explanation + "</td><td class='job2Explanation'>" + classInfo.jobs2.explanation + "</td></tr>";
        // var explanationLines = classInfo.jobs1.explanation.length > classInfo.jobs2.explanation.length ? classInfo.jobs1.explanation.length : classInfo.jobs2.explanation.length;
        // for(var i =0; i< explanationLines; ++i)
        // {
        //     if (i < classInfo.jobs1.explanation.length){
        //         innerHTML_str += "\
        //         <tr><td>" + classInfo.jobs1.explanation[i] + "</td>";
        //     }
        //     if (i < classInfo.jobs1.explanation.length){
        //         innerHTML_str += "\
        //         <td>" + classInfo.jobs2.explanation[i] + "</td></tr>";
        //     }
        // }
        innerHTML_str += "\
        </div>\
        ";
    }

    //html DOM 수정
    classView.innerHTML= innerHTML_str;
}
function getSpecString(starNum)
{
    var spec_str = "";
    for(var i = 5, spec = starNum; i > 0; --i,--spec){
        spec_str += (spec > 0) ? "★" : "☆";
    }
    return spec_str;
}