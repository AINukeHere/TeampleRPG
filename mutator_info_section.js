var mutatorInfoDiv = document.getElementById("MutatorInfomation").getElementsByTagName('div')[0];

var innerHTML_str = "";

for(var i =0; i < mutatorData.length; ++i){

    innerHTML_str += "\
    <div>";
    if (mutatorData[i].hidden == true){
        innerHTML_str += "\
        <span class='DPTEXT_07'>" + mutatorData[i].hidden_name_hint + "</span>";
        if (mutatorData[i].status === "disabled")
            innerHTML_str += "<span class='DPTEXT_08'>(자동선택으로 선택되지 않음)</span><br>";
        else
            innerHTML_str += "<br>";
        innerHTML_str += "<span class='DPTEXT_04'>[아직 밝혀진 바 없음]</span>\
        </div>\
        ";
    }
    else{
        innerHTML_str += "<span class='DPTEXT_07'>" + mutatorData[i].name + "</span>";
        if (mutatorData[i].status === "disabled")
            innerHTML_str += "<span class='DPTEXT_08'>(자동선택으로 선택되지 않음)</span><br>";
        else{
            innerHTML_str += "<br>";
        }
        innerHTML_str += "<span class='DPTEXT_04'>" + mutatorData[i].explanation + "</span>\
        </div>\
        ";
    }
}


mutatorInfoDiv.innerHTML = innerHTML_str;