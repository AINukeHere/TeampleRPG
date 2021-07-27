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
    var armorPopupInfo = document.getElementById("armorPopupInfo");
    var offset = 10;
    var leftValue = (event.pageX+offset).toString()+"px";
    var topValue = (event.pageY+offset).toString()+"px";
    skillPopupInfo.style.left = leftValue;
    armorPopupInfo.style.left = leftValue;
    if(event.pageX < 960){
        classPopupInfo.style.left=leftValue;
    }
    else{
        classPopupInfo.style.left=(event.pageX-offset - 450).toString()+"px";
        classPopupInfo.style.right=(event.pageX-offset).toString()+"px";
    }
    skillPopupInfo.style.top = topValue;
    armorPopupInfo.style.top = topValue;
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
    innerHTML_str += "<div id='missionObjBtn' class='missionObjBtn' onclick='onClickMissionObjBtn(this)'>임무 목표(<span>J</span>)<img src=''></img></div>";
    innerHTML_str += "<div id='missionObjViewer' class='missionObjViewer'>\
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
    innerHTML_str += "<div class='missionObjPrevBtn' onclick='onClickMissionObjPrevBtn()'>이전 (<span>Esc</span>)</div>";
    //innerHTML_str += "<div class='missionObjPrevBtn'><img src='data/images/missionObjPrevBtn.png'></img></div>";
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
function showNukeCalcArmorPopup(bShield)
{
    var armorPopupInfo = document.getElementById("armorPopupInfo");
    armorPopupInfo.style.display="inline";
    if(bShield)
        armorPopupInfo.children[0].innerHTML = '보호막 ' + nukeCalculator.shieldArmor;
    else
        armorPopupInfo.children[0].innerHTML = '장갑 ' + nukeCalculator.hpArmor;
}
function hideNukeCalcArmorPopup(bShield)
{
    var armorPopupInfo = document.getElementById("armorPopupInfo");
    armorPopupInfo.style.display="none";
}
function NukeCalc_LaunchNuke(){
    var res = nukeCalculator.Damage();
    var logDiv = document.getElementById("nukeCalcLog");
    logDiv.children[1].innerHTML += res + '<br>';
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_Heal(){
    nukeCalculator.Heal();  
    var logDiv = document.getElementById("nukeCalcLog");
    logDiv.children[1].innerHTML += '체력이 회복되었습니다.<br>';
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_ClearLog(){
    var logDiv = document.getElementById("nukeCalcLog");
    logDiv.children[1].innerHTML = '';
}
function NukeCalc_ChangeHP(inputTag)
{
    nukeCalculator.maxHP = inputTag.value;
    nukeCalculator.Heal();
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_ChangeHPArmor(inputTag)
{
    nukeCalculator.hpArmor = inputTag.value;
    nukeCalculator.Heal();
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_ChangeShield(inputTag)
{
    nukeCalculator.maxShield = inputTag.value;
    nukeCalculator.Heal();
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_ChangeShieldArmor(inputTag)
{
    nukeCalculator.shieldArmor = inputTag.value;
    nukeCalculator.Heal();
    NukeCalc_ViewerUpdateAll();
}
function NukeCalc_ChangeCoeffScaleType(inputTag)
{
    nukeCalculator.coeffScaleType = inputTag.value;
    NukeCalc_ViewerUpdateAll();
    console.log(nukeCalculator.coeffScaleType);
}
function NukeCalc_ShowInfo()
{
    var logDiv = document.getElementById("nukeCalcLog");
    logDiv.children[1].innerHTML += nukeCalculator.GetInfo();
}
function NukeCalc_InputInitFromCalculator(){
    var divs=nukeCalcInput.getElementsByTagName("div");
    divs[0].getElementsByTagName("input")[0].value = nukeCalculator.maxHP;
    divs[1].getElementsByTagName("input")[0].value = nukeCalculator.hpArmor;
    divs[2].getElementsByTagName("input")[0].value = nukeCalculator.maxShield;
    divs[3].getElementsByTagName("input")[0].value = nukeCalculator.shieldArmor;
    divs[4].getElementsByTagName("select")[0].value = nukeCalculator.coeffScaleType;
    divs[5].getElementsByTagName("select")[0].value = nukeCalculator.coeffPosType;
}
function NukeCalc_ViewerUpdateAll()
{
    var nukeCalcInfoViewer = document.getElementById("nukeCalcInfoViewer");
    var nukeCalcArmorContainer = document.getElementById("nukeCalcArmorContainer");
    var nukeCalcShieldArmorContainer = document.getElementById("nukeCalcShieldArmorContainer");

    var targetImgTag = nukeCalcInfoViewer.getElementsByTagName("img")[0];
    var hpArmorImgTag = nukeCalcArmorContainer.getElementsByTagName("img")[0];
    var hpSpanTag = nukeCalcInfoViewer.getElementsByTagName("span")[1];
    var hpArmorSpanTag = nukeCalcArmorContainer.getElementsByTagName("span")[0];
    var shieldSpanTag = nukeCalcInfoViewer.getElementsByTagName("span")[0];
    var shieldArmorSpanTag = nukeCalcShieldArmorContainer.getElementsByTagName("span")[0];
    
    //유닛크기
    var srcName = "data/images/NukeCalculator/";
    switch(nukeCalculator.coeffScaleType){
        case '소형':
            srcName += "small_target";
            hpArmorImgTag.src = 'data/images/NukeCalculator/Armor.png'
            break;
        case '중형':
            srcName += "middle_target";
            hpArmorImgTag.src = 'data/images/NukeCalculator/Armor2.png'
            break;
        case '대형':
            srcName += "large_target";
            hpArmorImgTag.src = 'data/images/NukeCalculator/Armor.png'
            break;
    }
    if(nukeCalculator.curShield > 0)
        srcName += "_with_shield";
    targetImgTag.src = srcName + ".png";

    //체력
    hpSpanTag.innerHTML = nukeCalculator.curHP + '/' + nukeCalculator.maxHP;
    //체력 방어력
    hpArmorSpanTag.innerHTML = nukeCalculator.hpArmor;
    //쉴드
    shieldSpanTag.innerHTML = nukeCalculator.curShield + '/' + nukeCalculator.maxShield;
    //쉴드 방어력
    shieldArmorSpanTag.innerHTML = nukeCalculator.shieldArmor;
}
function NukeCalc_Export(){
    
}
function NukeCalc_Import(){
    
}