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
    //classView.innerHTML="";
    console.log(classView);
    var Skill1_explanation = document.getElementById("Skill1_explanation");
    Skill1_explanation.innerHTML=jsonObject.classes[classIdx].Skill1_explanation;
    var Skill1_name = document.getElementById("Skill1_name");
    Skill1_name.innerHTML=jsonObject.classes[classIdx].Skill1_name;
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
    classInfo.style.left="0px";
    classInfo.style.top="0px";
}