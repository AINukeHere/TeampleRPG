var _DEBUG = true;
var classData = classDataJson[0];
if(!_DEBUG)
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/AINukeHere/TeampleRPG/main/data/images/class_info.json", false);
    request.send(null)
    classData = JSON.parse(request.responseText);
}

function setPopupInfoPosition(event)
{
    var classPopupInfo = document.getElementById("classPopupInfo");
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    var offset = 10;
    var leftValue = (event.pageX+offset).toString()+"px";
    var topValue = (event.pageY+offset).toString()+"px";
    skillPopupInfo.style.left = leftValue;
    if(event.pageX < 960){
        classPopupInfo.style.left=leftValue;
    }
    else{
        classPopupInfo.style.left=(event.pageX-offset - 450).toString()+"px";
        classPopupInfo.style.right=(event.pageX-offset).toString()+"px";
    }
    skillPopupInfo.style.top = topValue;
    classPopupInfo.style.top = topValue;
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

    var classInfo = classData.classes[classIdx];
    var spec_str1=getSpecString(classInfo.spec1);
    var spec_str2=getSpecString(classInfo.spec2);
    var spec_str3=getSpecString(classInfo.spec3);
    
    var innerHTML_str = "\
    <div>\
        <div><span class='specName'>파괴력</span><span class='specStars'>"+spec_str1+"</span></div>\
        <div><span class='specName'>내구력</span><span class='specStars'>"+spec_str2+"</span></div>\
        <div><span class='specName'>기동성</span><span class='specStars'>"+spec_str3+"</span></div>\
        <span class='explanation'>"+classInfo.explanation+"</span>\
    </div>\
    <img src='data/images/"+classInfo.image+"'>\
    ";
    if(classInfo.unitSpec != null){
        innerHTML_str += getUnitSpecInnerHTML(classIdx);
    }
    classPopupInfo.innerHTML = innerHTML_str;
}
function hideClassPopupInfo(obj)
{
    var classPopupInfo = document.getElementById("classPopupInfo");
    classPopupInfo.style.display="none";
}
function showSkillPopupInfo(skillCommand, isBuilding)
{
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.display="inline";
    switch(skillCommand)
    {
        case 'o':
        case 's':
        case 'v':
            skillPopupInfo.getElementsByTagName("img")[0].src = "data/images/small_"+skillCommand+"_skill_Cost.png";
            break;
        default:
            if(isBuilding)
                skillPopupInfo.getElementsByTagName("img")[0].src = "data/images/"+skillCommand+"_building_Cost.png";
            else
                skillPopupInfo.getElementsByTagName("img")[0].src = "data/images/"+skillCommand+"_Skill_Cost.png";
            break;
    }
}
function hideSkillPopupInfo()
{
    var skillPopupInfo = document.getElementById("skillPopupInfo");
    skillPopupInfo.style.display="none";
}

function onClickClass(isURL, classIdx)
{
    console.log("onClickClass("+isURL+","+classIdx + ")");
    var classInfo = classData.classes[classIdx];
    var classView = document.getElementById("classView");
    var jobView = document.getElementById("jobView");
    jobView.style.display="none";
    classView.style.display="block";

    var spec_str1=getSpecString(classInfo.spec1);
    var spec_str2=getSpecString(classInfo.spec2);
    var spec_str3=getSpecString(classInfo.spec3);
    

    var innerHTML_str = "\
    <img class='classProfileImage' src=data/images/"+classData.classes[classIdx].image+"><br>\
    <span class='specName'>파괴력</span><span class='specStars'>"+spec_str1+"</span><br>\
    <span class='specName'>내구력</span><span class='specStars'>"+spec_str2+"</span><br>\
    <span class='specName'>기동성</span><span class='specStars'>"+spec_str3+"</span><br>\
    <span class='explanation'>"+classData.classes[classIdx].explanation+"</span>\
    <br>";
    if(classIdx > 13){
        innerHTML_str += "<br>";
        innerHTML_str += "<div style='background-color:black;'>";
        innerHTML_str += "<div id='missionObjBtn' class='missionObjBtn' onclick='onClickMissionObjBtn(this)'>임무 목표(<span>J</span>)<img src=''></img></div>";
        innerHTML_str += "<div id='missionObjViewer' class='missionObjViewer'>\
        " + getMissionObjInnerHTML(classIdx, -1) + "\
        </div></div>";
    }
    innerHTML_str += "\
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
            <img style='align-self:center;justify-self: center; width:144px; height:144px;' src='data/images/jobSelect1.png'>\
            <img style='align-self:center;justify-self: center; width:144px; height:144px;' src='data/images/jobSelect2.png'>\
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
    var innerHTML_str = "<div style='background-color:black;'>";
    innerHTML_str += "<div id='missionObjBtn' class='missionObjBtn' onclick='onClickMissionObjBtn(this)'>임무 목표(<span>J</span>)<img src=''></img></div>";
    innerHTML_str += "<div id='missionObjViewer' class='missionObjViewer'>\
    " + getMissionObjInnerHTML(classIdx, jobIdx) + "\
    </div></div>";
    innerHTML_str += "<div class='skillViewer'>\
    <div class='skillViewerTitle'><span>스킬</span></div>\
    "+getSkillInnerHTML(classData.classes[classIdx].jobs[jobIdx].skills)+"\
    </div>";

    if(classData.classes[classIdx].jobs[jobIdx].buildings != null){
        innerHTML_str+="<div class='availableBuildingViewer'>\
        <div class='availableBuildingViewerTitle'><span>사용가능한 건물</span></div>\
        "+getAvailableBuildingViewer(classData.classes[classIdx].jobs[jobIdx].buildings)+"\
        </div>";
    }
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
    console.log("getMissionObjInnerHTML("+classIdx+", "+jobIdx+");");
    var innerHTML_str = "";
    switch(classIdx){
        case 14:
        case 15:
            var jobInfo = classData.classes[classIdx];
            break;
        default:
            var jobInfo = classData.classes[classIdx].jobs[jobIdx];
            break;
    }
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
    innerHTML_str += "<div class='missionObjPrevBtn' onclick='onClickMissionObjPrevBtn()'>이전 (<span>Esc</span>)</div>";
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
                    case "o":
                        innerHTML_str += "\
                        <img class='skillIcon'\
                        onmousemove='showSkillPopupInfo(\""+skillInfo.command[cmdIdx]+"\")' \
                        onmouseout='hideSkillPopupInfo()' \
                        src='data/images/small_o_Skill.png'>";
                        break;
                    default:
                        innerHTML_str += "<span style='color:white'>"+skillInfo.command[cmdIdx]+"</span>";
                        break;
                }
            }
            innerHTML_str+="\
            </td>\
            <td>";
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
            innerHTML_str+= skillInfo.type+"</span></td>\
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
function getAvailableBuildingViewer(buildings){
    var innerHTML_str="";
    for (var i =0; i < buildings.length; ++i){
        var buildingInfo = buildings[i];
        innerHTML_str += "\
        <table class='skillContent'>\
        <tr>\
            <td>";
            var bRemoveFirstLetter = [];
            for(var cmdIdx = 0; cmdIdx < buildingInfo.command.length; ++cmdIdx)
            {
                switch(buildingInfo.command[cmdIdx]){
                    case "Z":
                    case "T":
                    case "P":
                        var buildingName = buildingInfo.command.substring(cmdIdx,cmdIdx+3);

                        innerHTML_str += "\
                        <img class='skillIcon'\
                        onmousemove='showSkillPopupInfo(\""+buildingName+"\",true)' \
                        onmouseout='hideSkillPopupInfo()' \
                        src='data/images/"+buildingName+"_building.png'>";
                        bRemoveFirstLetter.push(cmdIdx);
                        cmdIdx+=2;
                        break;
                    case "v":
                        innerHTML_str += "\
                        <img class='skillIcon'\
                        onmousemove='showSkillPopupInfo(\""+buildingInfo.command[cmdIdx]+"\",true)' \
                        onmouseout='hideSkillPopupInfo()' \
                        src='data/images/small_v_Skill.png'>";
                        break;
                    case "s":
                        innerHTML_str += "\
                        <img class='skillIcon'\
                        onmousemove='showSkillPopupInfo(\""+buildingInfo.command[cmdIdx]+"\",true)' \
                        onmouseout='hideSkillPopupInfo()' \
                        src='data/images/small_s_Skill.png'>";
                        break;
                    default:
                        innerHTML_str += "<span style='color:white'>"+buildingInfo.command[cmdIdx]+"</span>";
                        break;
                }
            }
            var outterCommand = "";
            var prevIdx = 0;
            console.log(bRemoveFirstLetter);
            for(var j = 0; j < bRemoveFirstLetter.length; ++j){
                if(bRemoveFirstLetter[j] > 0){
                    let t1 = buildingInfo.command.substring(prevIdx,bRemoveFirstLetter[j]);
                    outterCommand += t1;
                }
                prevIdx = bRemoveFirstLetter[j]+1;
            }
            outterCommand += buildingInfo.command.substring(prevIdx);
            innerHTML_str+="</td>";
            if(buildingInfo.type != null){
                innerHTML_str+="\
                <td>";
                switch(buildingInfo.type){
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
                        console.log("unknown skill type:"+buildingInfo.type);
                        break;
                }
                innerHTML_str+= buildingInfo.type+"</span>\
                </td>";
            }
            innerHTML_str+="\
        </tr>\
        <tr>\
            <td>\
                <span class='skillCommand'>"+outterCommand+" - </span>\
                <span class='skillName'>"+buildingInfo.name+"</span>\
            </td>\
        </tr>";
        if(buildingInfo.explanation != null){
            innerHTML_str +="\
            <tr>\
                <td>\
                    <span class='explanation'>"+buildingInfo.explanation+"</span>\
                </td>\
            </tr>";
        }
        if(buildingInfo.usage != null){
            innerHTML_str += "<tr>\
            <td>\
            <span class='skillUsage'>"+buildingInfo.usage+"</span>\
            </td>\
            </tr>\
            </table>";
        }
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

function onClickMissionObjBtn(missionObjBtn)
{
    missionObjBtn.style.display='none';
    var missionObjViewer = document.getElementById("missionObjViewer");
    missionObjViewer.style.display="block";
}
function onClickMissionObjPrevBtn()
{
    var missionObjBtn = document.getElementById("missionObjBtn");
    missionObjBtn.style.display='block';
    var missionObjViewer = document.getElementById("missionObjViewer");
    missionObjViewer.style.display="none";
}

function getUnitSpecInnerHTML(classIdx)
{
    var unitSpec = classData.classes[classIdx].unitSpec;
    var innerHTML_str = "\
    <div class='unitSpec'>\
        <span>체력: "+unitSpec.hp+"</span>\
        <span>기본방어력: "+unitSpec.armor+"</span>";
        if(unitSpec.shield > 0)
            innerHTML_str += "<span>쉴드: "+unitSpec.shield+"</span>";
        innerHTML_str+="\
        <span>공격력: "+unitSpec.damage+"</span>\
        <span>업당 공격력: "+unitSpec.damage_factor+"</span>\
    </div>";
    return innerHTML_str;
}
