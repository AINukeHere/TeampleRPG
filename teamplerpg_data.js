var _DEBUG = true;
var jsonObject = jsonObject[0];
if(!_DEBUG)
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/AINukeHere/TeampleRPG/main/data/images/class_info.json", false);
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
    classPopupInfo.getElementsByTagName("img")[0].src = 'data/images/'+classInfo.image;
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
    skillPopupInfo.getElementsByTagName("img")[0].src = "data/images/"+skillCommand+"_Skill_Cost.png";
}
function hideSkillPopupInfo()
{
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.display="none";
}

function onClickClass(isURL, classIdx)
{
    console.log("onClickClass("+isURL+","+classIdx + ")");
    var classInfo = jsonObject.classes[classIdx];
    var classView = document.getElementById("classView");
    var jobView = document.getElementById("jobView");
    jobView.style.display="none";
    classView.style.display="block";

    var spec_str1=getSpecString(classInfo.spec1);
    var spec_str2=getSpecString(classInfo.spec2);
    var spec_str3=getSpecString(classInfo.spec3);
    

    var innerHTML_str = "\
    <img class='classProfileImage' src=data/images/"+jsonObject.classes[classIdx].image+"><br>\
    <span class='specName'>파괴력</span><span class='specStars'>"+spec_str1+"</span><br>\
    <span class='specName'>내구력</span><span class='specStars'>"+spec_str2+"</span><br>\
    <span class='specName'>기동성</span><span class='specStars'>"+spec_str3+"</span><br>\
    <span class='explanation'>"+jsonObject.classes[classIdx].explanation+"</span>\
    <br>\
    <div class='skillViewer'>\
    "+getSkillInnerHTML(classInfo.skills)+"\
    </div>\
    ";
    if(classInfo.jobs != null){
        var job1_spec1_str = getSpecString(classInfo.jobs[0].spec1);
        var job1_spec2_str = getSpecString(classInfo.jobs[0].spec2);
        var job1_spec3_str = getSpecString(classInfo.jobs[0].spec3);
        var job2_spec1_str = getSpecString(classInfo.jobs[1].spec1);
        var job2_spec2_str = getSpecString(classInfo.jobs[1].spec2);
        var job2_spec3_str = getSpecString(classInfo.jobs[1].spec3);
        innerHTML_str += "\
        <div class='jobSelect'>\
            <div class='jobSelectMessage'>두 직업 중 하나를 선택하세요</div><br>\
            <div class='jobExplanation'>\
                <div class='job1View'>\
                    <span>" + classInfo.jobs[0].name+ "("+classInfo.jobs[0].nickname+")</span><br>\
                    <span class='specName'>파괴력</span><span class='specStars'>"+job1_spec1_str+"</span><br>\
                    <span class='specName'>내구력</span><span class='specStars'>"+job1_spec2_str+"</span><br>\
                    <span class='specName'>기동성</span><span class='specStars'>"+job1_spec3_str+"</span><br>\
                    " + classInfo.jobs[0].explanation + "\
                </div>\
                <div class='job2View'>\
                    <span>" + classInfo.jobs[1].name+ "("+classInfo.jobs[1].nickname+")</span><br>\
                    <span class='specName'>파괴력</span><span class='specStars'>"+job2_spec1_str+"</span><br>\
                    <span class='specName'>내구력</span><span class='specStars'>"+job2_spec2_str+"</span><br>\
                    <span class='specName'>기동성</span><span class='specStars'>"+job2_spec3_str+"</span><br>\
                    " + classInfo.jobs[1].explanation + "\
                </div>\
            </div>\
            <div class ='jobSelection'>\
            <img style='align-self:center;justify-self: center;' src='data/images/jobSelect1.png'>\
            <img style='align-self:center;justify-self: center;' src='data/images/jobSelect2.png'>\
            <button class='job1SelectButton' onclick='onSelectJob(false,"+classIdx+", 0)'>선택1</button>\
            <button class='job2SelectButton' onclick='onSelectJob(false,"+classIdx+", 1)'>선택2</button>\
            </div>\
        </div>\
        ";
    }

    //html DOM 수정
    classView.innerHTML= innerHTML_str;
    location.href ="#classView";
    location.href += "&?classIdx="+classIdx;
}
function onSelectJob(isURL, classIdx, jobIdx)
{
    console.log("onSelectJob("+isURL+","+classIdx + ", " + jobIdx + ")");
    var jobView = document.getElementById("jobView");
    var innerHTML_str = "";
    innerHTML_str += "<div class='missionObjViewer'>\
    " + getMissionObjInnerHTML(classIdx, jobIdx) + "\
    </div>";
    innerHTML_str += "<div class='skillViewer'>\
    "+getSkillInnerHTML(jsonObject.classes[classIdx].jobs[jobIdx].skills)+"\
    </div>";
    jobView.innerHTML = innerHTML_str;
    jobView.style.display = "block";
    location.href ="#jobView";
    location.href += "?classIdx="+classIdx+"&jobIdx="+jobIdx;
}
function getSpecString(starNum)
{
    var spec_str = "";
    for(var i = 5, spec = starNum; i > 0 || spec > 0; --i,--spec){
        spec_str += (spec > 0) ? "★" : "☆";
    }
    return spec_str;
}
function getMissionObjInnerHTML(classIdx, jobIdx){
    var innerHTML_str = "";
    var jobInfo = jsonObject.classes[classIdx].jobs[jobIdx];
    innerHTML_str += "<div><span class='defaultFont'>임무 목표</span></div>";
    innerHTML_str += "<div class='missionObjContent'><span class='hyphenColor'>"+jobInfo.name+"</span>\
    <span class='missionObjSupportColor'>스킬명 색상구분 (</span>\
    <span class='attackTypeColor'>공격형</span>\
    <span class='summonTypeColor'>소환형</span>\
    <span class='utilTypeColor'>유틸기</span>\
    <span class='recoveryTypeColor'>회복형</span>\
    <span class='missionObjSupportColor'>)</span>\
    </div>";
    for(var i = 0; i < jobInfo.skills.length; ++i)
    {
        var skillInfo = jobInfo.skills[i];
        innerHTML_str += "\
        <div class='missionObjContent'>";
        
        switch(skillInfo.type){
            case "공격형":
                innerHTML_str += "<span class='attackTypeColor'>" + skillInfo.name +"</span>\
                <span class='hyphenColor'> - </span>";
                break;
            case "소환형":
                innerHTML_str += "<span class='summonTypeColor'>" + skillInfo.name +"</span>\
                <span class='hyphenColor'> - </span>";
                break;
            case "유틸기":
                innerHTML_str += "<span class='utilTypeColor'>" + skillInfo.name +"</span>\
                <span class='hyphenColor'> - </span>";
                break;
            case "회복형":
                innerHTML_str += "<span class='recoveryTypeColor'>" + skillInfo.name +"</span>\
                <span class='hyphenColor'> - </span>";
                break;
            default:
                console.log("unknown skill type:"+skillInfo.type);
                break;
        }
        innerHTML_str += "<span class='skillCommand'>"+skillInfo.command + "</span></div>";
    }
    innerHTML_str += "<div class='missionObjBtn'><img src='data/images/missionObjBtn.png'></img></div>";
    return innerHTML_str;
}
function getSkillInnerHTML(skills){
    var innerHTML_str = "";
    for(var i = 0; i < skills.length; ++i)
    {
        var skillInfo = skills[i];
        innerHTML_str += "\
        <table class='skillContent'>\
        <tr>\
            <td>";
            for(var cmdIdx = 0; cmdIdx < skillInfo.command.length; ++cmdIdx)
            {
                switch(skillInfo.command[cmdIdx]){
                    case "S":
                    case "C":
                    case "A":
                    case "O":
                    case "P":
                    case "Z":
                    case "D":
                    case "T":
                    case "K":
                        innerHTML_str += "\
                        <img class='skillIcon'\
                        onmousemove='showSkillPopupInfo(\""+skillInfo.command[cmdIdx]+"\")' \
                        onmouseout='hideSkillPopupInfo()' \
                        src='data/images/"+skillInfo.command[cmdIdx]+"_Skill.png'>";
                        break;
                    default:
                        innerHTML_str += "<span style='color:white'>"+skillInfo.command[cmdIdx]+"</span>";
                        //innerHTML_str += skillInfo.command[cmdIdx];
                }
            }
            switch(skillInfo.type){
                case "공격형":
                    innerHTML_str += "<span class='attackTypeColor'>";
                    break;
                case "소환형":
                    innerHTML_str += "<span class='summonTypeColor'>";
                    break;
                case "유틸기":
                    innerHTML_str += "<span class='utilTypeColor'>";
                    break;
                case "회복형":
                    innerHTML_str += "<span class='recoveryTypeColor'>";
                    break;
                default:
                    console.log("unknown skill type:"+skillInfo.type);
                    break;
            }
            innerHTML_str += skillInfo.type+"</span>\
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
    return innerHTML_str;
}
function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}