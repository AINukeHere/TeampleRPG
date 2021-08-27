function toogleSection(spanTag)
{
    var sectionDiv = spanTag.parentElement.getElementsByTagName('div')[0];
    if (sectionDiv.style.display != 'none'){
        sectionDiv.style.display = 'none';
        spanTag.getElementsByTagName("span")[0].innerHTML = '▼ ';
    }
    else{
        sectionDiv.style.display = 'block';
        spanTag.getElementsByTagName("span")[0].innerHTML = '▶ ';
    }
}