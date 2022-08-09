var gameTipInfoDiv = document.getElementById("GameTipInfomation").getElementsByTagName('div')[0];

var innerHTML_str = "";
for(var i =0; i < game_tips.length; ++i)
{
    innerHTML_str += "\
    <span class='DPTEXT_07'>[TIP] </span><span class='DPTEXT_1F'>"+game_tips[i].caption+"</span><br>\
    <span class='DPTEXT_04'>"+game_tips[i].explanation+"</span><br><br>";
}


gameTipInfoDiv.innerHTML = innerHTML_str;