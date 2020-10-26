const port = 8080;
const express = require("express");
const fetch = require('node-fetch');
const skillOrder = [
  ["Attack","#9b2007"],
  ["Defence","#6277be"],
  ["Strength","#04955a"],
  ["Hitpoints","#837e7e"],
  ["Ranged","#6d9017"],
  ["Prayer","#9f9323"],
  ["Magic","#3250c1"],
  ["Cooking","#702386"],
  ["Woodcutting","#348c25"],
  ["Fletching","#038d7d"],
  ["Fishing","#6a84a4"],
  ["Firemaking","#bd7819"],
  ["Crafting","#976e4d"],
  ["Smithing","#6c6b52"],
  ["Mining","#5d8fa7"],
  ["Herblore","#078509"],
  ["Agility","#3a3c89"],
  ["Thieving","#6c3457"],
  ["Slayer","#646464"],
  ["Farming","#65983f"],
  ["Runecraft","#a4881b"],
  ["Hunter","#5c5941"],
  ["Construction","#82745f"]
];
const overallLevelThreshold = [500,750,1250,1500,1750,2000,2200,2277]
const overallXpThreshold = [1000000,10000000,50000000,100000000,150000000,200000000]
const skillTypes = {
  combat: ["Attack","Strength","Defence","Magic","Ranged","Prayer","Hitpoints"], 
  gathering: ["Mining","Fishing","Woodcutting","Hunter","Farming"],
  artisan: ["Cooking","Smithing","Fletching","Firemaking","Herblore","Crafting","Runecraft","Construction"],
  support: ["Agility","Thieving","Slayer"]
}

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  next();
});

/*
  types
  -hiscore_oldschool_seasonal
  -hiscore_oldschool
*/

app.get("/:type/:rsn", (req, res) => {
  fetch(`https://secure.runescape.com/m=${req.params.type}/index_lite.ws?player=${req.params.rsn}`)
    .then(res => res.text())
    .then(data => {
      const skillData = [];
      const skills = [];
      data.split("\n",25).map(skill => skillData.push(skill.split(',')));

      for (i = 0; i < 23; i++) {
        skills.push({id: i, name: skillOrder[i][0], level:parseInt(skillData[i+1][1]), xp:parseInt(skillData[i+1][2]), rank:parseInt(skillData[i+1][0]), color: skillOrder[i][1]})
      }
      /*
      let amountMaxed = {all: 0,combat: 0, artisan: 0, support: 0, gathering: 0};
      for(const skill in s){
        for(const type in skillTypes){
          if(skillTypes[type].includes(skill) && s[skill].level === 99) {amountMaxed[type]++; amountMaxed.all++};
        }
        skills.push({level: s[skill].level, name: skill})
      }
      
      for (var i = 20; i < 100; i+=10) {
        if(skills.filter((a) => a.level >= i).length === 24){
          var minSkill = i;
        }
      }

      for (i = 0; i < overallLevelThreshold.length; i++) {
        if(s.overall.level > overallLevelThreshold[i]){
          var minTotallvl = overallLevelThreshold[i]
        }
      }

      for (i = 0; i < overallXpThreshold.length; i++) {
        if(s.overall.xp > overallXpThreshold[i]){
          var minTotalxp = overallXpThreshold[i]
        }
      }*/

      const playerData = ({
        name: req.params.rsn,
        achievments: {minSkill:0, minTotalxp:0, minTotallvl:0, amountMaxed:0},
        overall: {id: 0, name: "Overall", level:parseInt(skillData[0][1]), xp:parseInt(skillData[0][2]), rank:parseInt(skillData[0][0]), color: 'black'},
        leaguepoints: {rank: skillData[24][0], points: skillData[24][1]},
        skills
      });

      res.send(playerData);
    }).catch(err => {
      res.status(404).send({ status: 404, error: err });
    });
});


app.listen(port, () => console.log(`Highscores api listening on port ${port}!`));
