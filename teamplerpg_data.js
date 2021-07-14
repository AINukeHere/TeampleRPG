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
    if(skillCommand == "P")
        skillPopupInfo.getElementsByTagName("img")[0].s
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
    
    var spec_str1="";
    var spec_str2="";
    var spec_str3="";
    for(var i = 5, spec1 = classInfo.spec1,spec2 = classInfo.spec2, spec3 = classInfo.spec3; i > 0; --i,--spec1, --spec2, --spec3){
        spec_str1 += (spec1 > 0) ? "★" : "☆";
        spec_str2 += (spec2 > 0) ? "★" : "☆";
        spec_str3 += (spec3 > 0) ? "★" : "☆";
    }

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
                console.log(jsonObject.classes[classIdx].skills[i].command[cmdIdx]);
            }
            innerHTML_str += "\
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
    classView.innerHTML= innerHTML_str;
}