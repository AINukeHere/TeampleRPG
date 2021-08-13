var unitDataDiv = document.getElementById("UnitData").getElementsByTagName('div')[0];
console.log(unitData)
console.log(stageData)
innerHTML_str = "";
innerHTML_str += "\
<div class='unitInfoGrid'>\
"+getStageUnitTree()+getUnitStatViewer(0)+"\
</div>";
function getStageUnitTree(){
  var innerHTML_str = "\
  <ul class='tree'>";

  for(i=0; i < stageData.length; ++i){
    stageLabel = ''+(i+1)+ ' Stage';
    innerHTML_str += "\
    <li>\
      <input type='checkbox' id='"+stageLabel+"'>\
      <label for='"+stageLabel+"'>"+stageLabel+"</label>\
      <ul>\
        <li>\
          <input type='checkbox' id='"+stageLabel+"_units"+"'>\
          <label for='"+stageLabel+"_units"+"'>배치된 유닛</label>\
          <ul>";
          for(j=0; j < stageData[i].units.length; ++j){
            unitID = stageData[i].units[j];
            unitName = unitData[unitID].unitName;
            htmlID = "StageUnit" + i + "_"+ j;
            innerHTML_str += "\
            <li>\
              <input type='checkbox' id='"+htmlID+"'>\
              <label onclick='updateUnitStat("+unitID+")' for='"+htmlID+"' class='lastTree'>"+unitName+"</label>\
            <li>";
          }
          innerHTML_str += "\
          </ul>\
        </li>\
        <li>\
          <input type='checkbox' id='"+stageLabel+"_skillUnits"+"'>\
          <label for='"+stageLabel+"_skillUnits"+"'>보스 관련 유닛</label>\
          <ul>";
          for(j=0; j < stageData[i].skillUnits.length; ++j){
            unitID = stageData[i].skillUnits[j];
            unitName = unitData[unitID].unitName;
            htmlID = "StageSkillUnit" + i + "_"+ j;
            innerHTML_str += "\
            <li>\
              <input type='checkbox' id='"+htmlID+"'>\
              <label onclick='updateUnitStat("+unitID+")' for='"+htmlID+"' class='lastTree'>"+unitName+"</label>\
            <li>";
          }
          innerHTML_str += "\
          </ul>\
        </li>\
      </ul>\
    </li>";
  }
  innerHTML_str += "\
  </ul>";
  return innerHTML_str;
}
function getUnitStatViewer(unitID){
  var innerHTML_str = "\
  <div style='display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto;height:150px;'>\
    <div style='grid-column: 1/3;'>\
      <label>Unit Name</label>\
      <input id='unitStatViewer_UnitName' type='text' readonly value='"+unitData[unitID].unitName+"'></input>\
    </div>\
    <div>\
      <label>Hit Points</label>\
      <input id='unitStatViewer_HitPoints' type='text' readonly value='"+unitData[unitID].hitPoints / 256+"'></input>\
    </div>\
    <div>\
      <label>Build Time</label>\
      <input id='unitStatViewer_BuildTime' type='text' readonly value='"+unitData[unitID].buildTime+"'></input>\
    </div>\
    <div>\
      <label>Shield Points</label>\
      <input id='unitStatViewer_ShieldPoints' type='text' readonly value='"+unitData[unitID].shieldPoints+"'></input>\
    </div>\
    <div>\
      <label>Mineral Cost</label>\
      <input id='unitStatViewer_MineralCost' type='text' readonly value='"+unitData[unitID].oreCost+"'></input>\
    </div>\
    <div>\
      <label>Armor</label>\
      <input id='unitStatViewer_Armor' type='text' readonly value='"+unitData[unitID].armorPoints+"'></input>\
    </div>\
    <div>\
      <label>Gas Cost</label>\
      <input id='unitStatViewer_GasCost' type='text' readonly value='"+unitData[unitID].gasCost+"'></input>\
    </div>\
  </div>";
  return innerHTML_str;
}
function updateUnitStat(unitID){
  document.getElementById('unitStatViewer_UnitName').value = unitData[unitID].unitName;
  document.getElementById('unitStatViewer_HitPoints').value = unitData[unitID].hitPoints / 256;
  document.getElementById('unitStatViewer_BuildTime').value = unitData[unitID].buildTime;
  document.getElementById('unitStatViewer_ShieldPoints').value = unitData[unitID].shieldPoints;
  document.getElementById('unitStatViewer_MineralCost').value = unitData[unitID].oreCost;
  document.getElementById('unitStatViewer_Armor').value = unitData[unitID].armorPoints;
  document.getElementById('unitStatViewer_GasCost').value = unitData[unitID].gasCost;
}
unitDataDiv.innerHTML = innerHTML_str;