var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/AINukeHere/TeampleRPG/main/data/class_info.json", false);
request.send(null)
var jsonObject = JSON.parse(request.responseText);
function setInfoPosition(event)
{
    var classInfo = document.getElementById("classInfo");
    classInfo.style.left=(event.pageX+5).toString()+"px";
    classInfo.style.top=(event.pageY+5).toString()+"px";
    //console.log(event.clientX, event.clientY);
}
function showClassInfo(classIdx)
{
    var classInfo = document.getElementById("classInfo");
    classInfo.style.display="inline";
    classInfo.children[0].innerHTML = jsonObject.classes[classIdx].explanation;
    classInfo.children[1].src = 'data/'+jsonObject.classes[classIdx].image;
}
function onClickClass(classIdx)
{
    toggleclassTable();
    var classView = document.getElementById("classView");
    var innerHTML_str = "\
    <img class='classProfileImage' src=data/"+jsonObject.classes[classIdx].image+"'>\
    <span>"+jsonObject.classes[classIdx].explanation+"</span>\
    <br>\
    <table border='1' style='border:2px double red'>\
    ";
    var classInfo = jsonObject.classes[classIdx];
    for(var i = 0; i < classInfo.skills.length; ++i)
    {
        var skillInfo = classInfo.skills[i];
        innerHTML_str += "\
        <tr>\
            <td align='center' colspan='2'>";
            for(var cmdIdx = 0; skillInfo.command.length; ++cmdIdx)
            {
                innerHTML_str += "\
                <img src='data/"+skillInfo.command[cmdIdx]+"_Skill.png'>";
                console.log(jsonObject.classes[classIdx].skills[i].command[cmdIdx]);
            }
            innerHTML_str += "\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span>"+skillInfo.name+"</span>\
            </td>\
            <td>\
                <span>"+skillInfo.explanation+"</span>\
            </td>\
        </tr>\
        ";
    }
    innerHTML_str+="\
    </table>\
    ";
    classView.innerHTML= innerHTML_str;

    // var classProfileImage = classView.getElementsByClassName("classProfileImage");
    // classProfileImage[0].src = 'data/' + jsonObject.classes[classIdx].image;
    // var Skill1_explanation = document.getElementById("Skill1_explanation");
    // Skill1_explanation.innerHTML=jsonObject.classes[classIdx].Skill1_explanation;
    // var Skill1_name = document.getElementById("Skill1_name");
    // Skill1_name.innerHTML=jsonObject.classes[classIdx].Skill1_name;
}
function toggleclassTable()
{
    var classTable = document.getElementById("classTable");
    if (classTable.style.display == "none")
        classTable.style.display = "grid";
    else
        classTable.style.display = "none";
}
function hideClassInfo(obj)
{
    var classInfo = document.getElementById("classInfo");
    classInfo.style.display="none";
}