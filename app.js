function getFootballTeams(){
    let teams = [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs",
        plays:"Kansas City, MO"},
        ];
return teams;        
}
function getTeam(code){

    const footballTeams=getFootballTeams();
    for(let team of footballTeams){
        if(team.code==code){
            return team;
        }
    }
}
function populateFootbalTeams(){
    const footballTeamsList=document.getElementById("footballTeams");
    const teams=getFootballTeams();
    for(let team of teams){
        const options=new Option(team.name,team.code);
        footballTeamsList.appendChild(options)
    }
   
}
function buttonClicked(event){
    event.preventDefault();

    const footbalTeamCode=document.getElementById("footballTeams").value;
    console.log(footbalTeamCode);
    const team=getTeam(footbalTeamCode);
    document.getElementById("teamCode").innerText=team.code;

    document.getElementById("teamName").innerText=team.name;
    document.getElementById("plays").innerText=team.plays;
   

}
function init(){
const selectButton=document.getElementById("selectButton");
selectButton.onclick=buttonClicked;
populateFootbalTeams();
}
window.onload=init;