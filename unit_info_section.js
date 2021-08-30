var unitDataDiv = document.getElementById("UnitInfomation").getElementsByTagName('div')[0];

function setSCUnitTree(){
  innerHTML_str = "";
  innerHTML_str += "\
  <div class='unitInfoGrid'>\
    <div style='grid-column: 1/3;'>\
    <span style='cursor:pointer; background-color:none;' onclick='setStageUnitTree()'>스테이지분류</span>\
    <span style='cursor:pointer; background-color:rgb(128,255,128);'>스타유닛분류</span>\
    </div>\
    "+getSCUnitTree()+getUnitStatViewer(0)+"\
  </div>";
  unitDataDiv.innerHTML = innerHTML_str;
}
function setStageUnitTree(){
  innerHTML_str = "";
  innerHTML_str += "\
  <div class='unitInfoGrid'>\
  <div style='grid-column: 1/3;'>\
  <span style='cursor:pointer; background-color:rgb(128,255,128);'>스테이지분류</span>\
  <span style='cursor:pointer; background-color:none;' onclick='setSCUnitTree()'>스타유닛분류</span>\
  </div>\
  "+getStageUnitTree()+getUnitStatViewer(0)+"\
  </div>";
  unitDataDiv.innerHTML = innerHTML_str;
}
function getStageUnitTree(){
  var innerHTML_str = "\
  <ul class='tree'>";

  for(i=0; i < 10; ++i){
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
            unitName = removeColorSign(unitData[unitID].unitName);
            unitOriginName = unitData[unitID].unitOriginName;
            htmlID = "StageUnit" + i + "_"+ j;
            innerHTML_str += "\
            <li>\
              <input type='checkbox' id='"+htmlID+"'>\
              <label onclick='updateUnitStat("+unitID+")' for='"+htmlID+"' class='lastTree'>"+unitName+" ("+ unitOriginName+")</label>\
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
            unitName = removeColorSign(unitData[unitID].unitName);
            unitOriginName = unitData[unitID].unitOriginName;
            htmlID = "StageSkillUnit" + i + "_"+ j;
            innerHTML_str += "\
            <li>\
              <input type='checkbox' id='"+htmlID+"'>\
              <label onclick='updateUnitStat("+unitID+")' for='"+htmlID+"' class='lastTree'>"+unitName+" ("+ unitOriginName+")</label>\
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
function getSCUnitTree(){
  var innerHTML_str = "\
  <ul class='tree'>";
  for(var rootKey in SCTreeData){
    htmlrootID = 'SCTREE_'+rootKey;
    //console.log(rootKey, htmlrootID);
    innerHTML_str += "\
    <li>\
      <input type='checkbox' id='"+htmlrootID+"'>\
      <label for='"+htmlrootID+"'>"+rootKey+"</label>\
      <ul>";
        for(var key in SCTreeData[rootKey]){
          keyName = key.replace('_',' ');
          htmlID = htmlrootID +'_'+ key;
          //console.log(key, htmlID);
          innerHTML_str += "\
          <li>\
            <input type='checkbox' id='"+htmlID+"'>\
            <label for='"+htmlID+"'>"+keyName+"</label>\
            <ul>";
            for(i=0; i < SCTreeData[rootKey][key].length; ++i){
              unitID = SCTreeData[rootKey][key][i];
              unitName = removeColorSign(unitData[unitID].unitName);
              unitOriginName = unitData[unitID].unitOriginName;
              htmlsubID = htmlID + i;
              //console.log(unitName, htmlsubID);
              innerHTML_str += "\
              <li>\
                <input type='checkbox' id='"+htmlsubID+"'>\
                <label onclick='updateUnitStat("+unitID+")' for='"+htmlsubID+"' class='lastTree'>"+unitName+" ("+ unitOriginName+")</label>\
              <li>";
            }
            innerHTML_str += "\
            </ul>\
          </li>";
        }
        innerHTML_str += "\
      </ul>\
    </li>";
    }
  innerHTML_str += "\
  </ul>";
  return innerHTML_str;
}
function getUnitStatViewer(unitID){
  var innerHTML_str = "\
  <div class='unitStatViewer'>\
    <div style='grid-column: 1/3;'>\
      <label style='width:135px;' >이름</label>\
      <input style='width:480px;' id='unitStatViewer_UnitName' type='text' readonly value='"+removeColorSign(unitData[unitID].unitName)+"'></input>\
    </div>\
    <div>\
      <label>체력</label>\
      <input id='unitStatViewer_HitPoints' type='text' readonly value='"+unitData[unitID].hitPoints / 256+"'></input>\
    </div>\
    <div>\
      <label>생산시간(프레임)</label>\
      <input id='unitStatViewer_BuildTime' type='text' readonly value='"+unitData[unitID].buildTime+"'></input>\
    </div>\
    <div>\
      <label>쉴드</label>\
      <input id='unitStatViewer_ShieldPoints' type='text' readonly value='"+unitData[unitID].shieldPoints+"'></input>\
    </div>\
    <div>\
      <label>미네랄 가격</label>\
      <input id='unitStatViewer_MineralCost' type='text' readonly value='"+unitData[unitID].oreCost+"'></input>\
    </div>\
    <div>\
      <label>방어력</label>\
      <input id='unitStatViewer_Armor' type='text' readonly value='"+unitData[unitID].armorPoints+"'></input>\
    </div>\
    <div>\
      <label>가스 가격</label>\
      <input id='unitStatViewer_GasCost' type='text' readonly value='"+unitData[unitID].gasCost+"'></input>\
    </div>\
    <div>\
      <label>지상 공격력</label>\
      <input id='unitStatViewer_GroundWeapon_damage' type='text' readonly value='"+(unitData[unitID].groundWeapon == null ? '무기 없음' : unitData[unitID].groundWeapon.damage)+"'></input>\
    </div>\
    <div>\
      <label>지상 추가 공격력</label>\
      <input id='unitStatViewer_GroundWeapon_damageFactor' type='text' readonly value='"+(unitData[unitID].groundWeapon == null ? '무기 없음' : unitData[unitID].groundWeapon.damageFactor)+"'></input>\
    </div>\
    <div>\
      <label>공중 공격력</label>\
      <input id='unitStatViewer_AirWeapon_damage' type='text' readonly value='"+(unitData[unitID].airWeapon == null ? '무기 없음' : unitData[unitID].airWeapon.damage)+"'></input>\
    </div>\
    <div>\
      <label>공중 추가 공격력</label>\
      <input id='unitStatViewer_AirWeapon_damageFactor' type='text' readonly value='"+(unitData[unitID].airWeapon == null ? '무기 없음' : unitData[unitID].airWeapon.damageFactor)+"'></input>\
    </div>\
  </div>";
  return innerHTML_str;
}
function updateUnitStat(unitID){
  document.getElementById('unitStatViewer_UnitName').value = removeColorSign(unitData[unitID].unitName);
  document.getElementById('unitStatViewer_HitPoints').value = unitData[unitID].hitPoints / 256;
  document.getElementById('unitStatViewer_BuildTime').value = unitData[unitID].buildTime;
  document.getElementById('unitStatViewer_ShieldPoints').value = unitData[unitID].shieldPoints;
  document.getElementById('unitStatViewer_MineralCost').value = unitData[unitID].oreCost;
  document.getElementById('unitStatViewer_Armor').value = unitData[unitID].armorPoints;
  document.getElementById('unitStatViewer_GasCost').value = unitData[unitID].gasCost;
  document.getElementById('unitStatViewer_GroundWeapon_damage').value = (unitData[unitID].groundWeapon == null ? '무기 없음' : unitData[unitID].groundWeapon.damage)
  document.getElementById('unitStatViewer_GroundWeapon_damageFactor').value = (unitData[unitID].groundWeapon == null ? '무기 없음' : unitData[unitID].groundWeapon.damageFactor)
  document.getElementById('unitStatViewer_AirWeapon_damage').value = (unitData[unitID].airWeapon == null ? '무기 없음' : unitData[unitID].airWeapon.damage)
  document.getElementById('unitStatViewer_AirWeapon_damageFactor').value = (unitData[unitID].airWeapon == null ? '무기 없음' : unitData[unitID].airWeapon.damageFactor)
}
function removeColorSign(unitName){
  unitName = unitName.replace('\u0000','');
  unitName = unitName.replace('\u0001','');
  unitName = unitName.replace('\u0002','');
  unitName = unitName.replace('\u0003','');
  unitName = unitName.replace('\u0004','');
  unitName = unitName.replace('\u0005','');
  unitName = unitName.replace('\u0006','');
  unitName = unitName.replace('\u0007','');
  unitName = unitName.replace('\u0008','');
  unitName = unitName.replace('\u0009','');
  unitName = unitName.replace('\u000A','');
  unitName = unitName.replace('\u000B','');
  unitName = unitName.replace('\u000C','');
  unitName = unitName.replace('\u000D','');
  unitName = unitName.replace('\u000E','');
  unitName = unitName.replace('\u000F','');
  unitName = unitName.replace('\u0010','');
  unitName = unitName.replace('\u0011','');
  unitName = unitName.replace('\u0012','');
  unitName = unitName.replace('\u0013','');
  unitName = unitName.replace('\u0014','');
  unitName = unitName.replace('\u0015','');
  unitName = unitName.replace('\u0016','');
  unitName = unitName.replace('\u0017','');
  unitName = unitName.replace('\u0018','');
  unitName = unitName.replace('\u0019','');
  unitName = unitName.replace('\u001A','');
  unitName = unitName.replace('\u001B','');
  unitName = unitName.replace('\u001C','');
  unitName = unitName.replace('\u001D','');
  unitName = unitName.replace('\u001E','');
  unitName = unitName.replace('\u001F','');
  return unitName;
}

setStageUnitTree();