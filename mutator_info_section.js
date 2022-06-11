var mutatorInfoDiv = document.getElementById("MutatorInfomation").getElementsByTagName('div')[0];

var innerHTML_str = "";

for(var i =0; i < mutatorData.length; ++i)
    innerHTML_str += "\
    <div>\
    <span class='DPTEXT_07'>" + mutatorData[i].name + "</span><br>\
    <span class='DPTEXT_04'>" + mutatorData[i].explanation + "</span>\
    </div>\
    ";

mutatorInfoDiv.innerHTML = innerHTML_str;