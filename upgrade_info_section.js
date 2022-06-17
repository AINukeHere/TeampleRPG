var upgradeInfoDiv = document.getElementById("UpgradeInfomation").getElementsByTagName('div')[0];

var innerHTML_str = "\
<h3>업그레이드 선택</h3>\
<div class='upgradeInfomationGrid'>\
  <div class='upgradeBuildings'>";
    for (var i = 0; i < upgradeData.length; ++i){
      upgradeBuildingInfo = upgradeData[i];
      innerHTML_str += "\
      <img src='" + upgradeBuildingInfo.upgradeBuildingImgSrc + "' onclick=onClickUpgradeBuilding("+i+")></img>";
      if (i == 1 || i == 4)
        innerHTML_str += "<br>";
    }
    innerHTML_str += "\
  </div>\
  <div id='upgradeCalculator'>\
    <div>\
      <input type='text' min='1' max='255' step='1' value='1' id='nthUpgradeInput'></input>\
      <span>번째 업그레이드 비용</span>\
      <button onclick='calcNthUpgradeCost()'>계산</button><br>\
      \
      <span>미네랄: </span><span id='nthUpgradeMineralCost'></span><br>\
      <span>가스: </span><span id='nthUpgradeGasCost'></span><br>\
      <span>시간: </span><span id='nthUpgradeTimeCost'></span><br>\
    </div>\
    <div>\
      <input type='text' min='1' max='255' step='1' value='1' id='a2bUpgradeInputA'></input>\
      <span>부터 </span>\
      <input type='text' min='1' max='255' step='1' value='10' id='a2bUpgradeInputB'></input>\
      <span>까지 업그레이드 비용</span>\
      <button onclick='calcAtoBUpgradeCost()'>계산</button><br>\
      \
      <span>미네랄: </span><span id='a2bUpgradeMineralCost'></span><br>\
      <span>가스: </span><span id='a2bUpgradeGasCost'></span><br>\
      <span>시간: </span><span id='a2bUpgradeTimeCost'></span><br>\
    </div>\
    <div>\
      <span>미네랄</span><input type='text' min='0' value='1000' id='howManyUpgradesM'></input>\
      <span>가스</span><input type='text' min='0' value='1000' id='howManyUpgradesG'></input>\
      <span>로</span><br>\
      <input type='text' min='1' max='255' value='1' id='howManyUpgradesFrom'></input>\
      <span>업부터 업그레이드</span>\
      <button onclick='calcHowManyUpgrades()'>계산</button><br>\
      <span id='howManyUpgradesResult'></span><span>업까지 가능</span><br>\
      <span>남은 자원: </span><span id='howManyUpgradesRemainResources'></span>\
    </div>\
  </div>\
  <div id='upgradeButtonSelection'>\
    <div>\
      <span>기본 미네랄 비용 </span><input type='number' min='0' step='1' value='100' id='upgradeBaseMineralCost'></input><br>\
      <span>1업당 추가 미네랄 비용 </span><input type='number' min='0' step='1' value='50' id='upgradeMineralCostFactor'></input><br>\
      <span>기본 가스 비용 </span><input type='number' min='0' step='1' value='100' id='upgradeBaseGasCost'></input><br>\
      <span>1업당 추가 가스 비용</span><input type='number' min='0' step='1' value='50' id='upgradeGasCostFactor'></input><br>\
      <span>기본 시간 비용 </span><input type='number' min='0' step='1' value='266' id='upgradeBaseTimeCost'></input><br>\
      <span>1업당 추가 시간 비용</span><input type='number' min='0' step='1' value='32' id='upgradeTimeCostFactor'></input><br>\
    </div>\
    <div></div>\
  </div>\
</div>";

function onClickUpgradeBuilding(idx){
  console.log(idx);
  buttonSelectionDiv = document.getElementById("upgradeButtonSelection").getElementsByTagName("div")[1];
  innerHTML_str = "";
  for (var i = 1; i <= 9; ++i){
    innerHTML_str += "<div id='upgradeButtonSetButton"+i+"'>\
    <img src='data/images/UpgradeInfo/blankButton.png'></img>\
    </div>";
  }
  buttonSelectionDiv.innerHTML = innerHTML_str;

  upgradeBuildingInfo = upgradeData[idx];
  for (var i =0; i < upgradeBuildingInfo.upgradeButtonsInfo.length; ++i){
    upgradeInfo = upgradeBuildingInfo.upgradeButtonsInfo[i];
    upgradeButtonSetButton = document.getElementById("upgradeButtonSetButton"+upgradeInfo.positionInButtonSet);
    innerHTML_str2 = "\
    <img src='" + upgradeInfo.upgradeButtonImgSrc + "' onclick='onClickUpgradeButton("+idx+","+i+")'></img>";
    upgradeButtonSetButton.innerHTML = innerHTML_str2;
  }
}

upgradeInfoDiv.innerHTML = innerHTML_str;

function onClickUpgradeButton(buildingIdx, buttonIdx){
  console.log(buildingIdx, buttonIdx);
  upgradeBaseMineralCost = document.getElementById("upgradeBaseMineralCost");
  upgradeMineralCostFactor = document.getElementById("upgradeMineralCostFactor");
  upgradeBaseGasCost = document.getElementById("upgradeBaseGasCost");
  upgradeGasCostFactor = document.getElementById("upgradeGasCostFactor");
  upgradeBaseTimeCost = document.getElementById("upgradeBaseTimeCost");
  upgradeTimeCostFactor = document.getElementById("upgradeTimeCostFactor");

  upgradeButtonData = upgradeData[buildingIdx].upgradeButtonsInfo[buttonIdx]
  upgradeBaseMineralCost.value = upgradeButtonData.baseMineral;
  upgradeMineralCostFactor.value = upgradeButtonData.mineralFactor;
  upgradeBaseGasCost.value = upgradeButtonData.baseGas;
  upgradeGasCostFactor.value = upgradeButtonData.gasFactor;
  upgradeBaseTimeCost.value = upgradeButtonData.baseTime;
  upgradeTimeCostFactor.value = upgradeButtonData.timeFactor;
  highlightInput(upgradeBaseMineralCost);
  highlightInput(upgradeMineralCostFactor);
  highlightInput(upgradeBaseGasCost);
  highlightInput(upgradeGasCostFactor);
  highlightInput(upgradeBaseTimeCost);
  highlightInput(upgradeTimeCostFactor);
}
function calcNthUpgradeCost(){
  n = parseInt(document.getElementById("nthUpgradeInput").value) - 1;
  console.log("n:",n);

  nthUpgradeMineralCost = document.getElementById("nthUpgradeMineralCost");
  nthUpgradeGasCost = document.getElementById("nthUpgradeGasCost");
  nthUpgradeTimeCost = document.getElementById("nthUpgradeTimeCost");

  //현재 설정된 업그레이드 비용정보
  baseMineral = parseInt(document.getElementById("upgradeBaseMineralCost").value);
  mineralFactor = parseInt(document.getElementById("upgradeMineralCostFactor").value);
  baseGas = parseInt(document.getElementById("upgradeBaseGasCost").value);
  gasFactor = parseInt(document.getElementById("upgradeGasCostFactor").value);
  baseTime = parseInt(document.getElementById("upgradeBaseTimeCost").value);
  timeFactor = parseInt(document.getElementById("upgradeTimeCostFactor").value);

  nthUpgradeMineralCost.innerHTML = baseMineral + n*mineralFactor;
  nthUpgradeGasCost.innerHTML = baseGas + n*gasFactor;
  nthUpgradeTimeCost.innerHTML = baseTime + n*timeFactor;
  
}

function calcAtoBUpgradeCost(){
  a = parseInt(document.getElementById("a2bUpgradeInputA").value);
  b = parseInt(document.getElementById("a2bUpgradeInputB").value);

  a2bUpgradeMineralCost = document.getElementById("a2bUpgradeMineralCost");
  a2bUpgradeGasCost = document.getElementById("a2bUpgradeGasCost");
  a2bUpgradeTimeCost = document.getElementById("a2bUpgradeTimeCost");

  //현재 설정된 업그레이드 비용정보
  baseMineral = parseInt(document.getElementById("upgradeBaseMineralCost").value);
  mineralFactor = parseInt(document.getElementById("upgradeMineralCostFactor").value);
  baseGas = parseInt(document.getElementById("upgradeBaseGasCost").value);
  gasFactor = parseInt(document.getElementById("upgradeGasCostFactor").value);
  baseTime = parseInt(document.getElementById("upgradeBaseTimeCost").value);
  timeFactor = parseInt(document.getElementById("upgradeTimeCostFactor").value);

  costM = costG = costT = 0
  while (a <= b){
    costM += baseMineral + (a-1)*mineralFactor
    costG += baseGas + (a-1)*gasFactor
    costT += baseTime + (a-1)*timeFactor
    a += 1;
  }
  a2bUpgradeMineralCost.innerHTML = costM;
  a2bUpgradeGasCost.innerHTML = costG;
  a2bUpgradeTimeCost.innerHTML = costT;
}

function calcHowManyUpgrades(){
  m = parseInt(document.getElementById("howManyUpgradesM").value);
  g = parseInt(document.getElementById("howManyUpgradesG").value);
  startUpgrade = parseInt(document.getElementById("howManyUpgradesFrom").value);

  //현재 설정된 업그레이드 비용정보
  baseMineral = parseInt(document.getElementById("upgradeBaseMineralCost").value);
  mineralFactor = parseInt(document.getElementById("upgradeMineralCostFactor").value);
  baseGas = parseInt(document.getElementById("upgradeBaseGasCost").value);
  gasFactor = parseInt(document.getElementById("upgradeGasCostFactor").value);
  // baseTime = parseInt(document.getElementById("upgradeBaseTimeCost").value);
  // timeFactor = parseInt(document.getElementById("upgradeTimeCostFactor").value);

  while (startUpgrade <= 255){
    requireM = baseMineral + (startUpgrade-1)*mineralFactor;
    requireG = baseGas + (startUpgrade-1)*gasFactor;
    if (requireM > m || requireG > g)
      break;
    m -= requireM;
    g -= requireG;
    startUpgrade += 1;
  }
  document.getElementById("howManyUpgradesResult").innerHTML = (startUpgrade-1);
  document.getElementById("howManyUpgradesRemainResources").innerHTML = m+"미네랄 "+g+"가스 남음";
}
async function highlightInput(htmlElement){
  r=g=0;
  b=255;
  while (r < 255){
    let promise = new Promise((resolve, reject) => {
      color = 'rgb('+r+','+g+','+b+')';
      r += 1;
      g = r;
      htmlElement.style.backgroundColor = color;
      setTimeout(() => resolve("완료!"), 2000/255)
    })
    let result = await promise;
  }
}