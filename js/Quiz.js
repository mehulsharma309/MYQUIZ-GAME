class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    background("yellow")
    fill ("black")
    textSize(30)
    text("resultofthisQuiz",340,50)
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      debugger
      var display_answers=230
      fill ("blue")
      textSize(20)
      text ("Contestantsingreen",130,230)
      for(var plr in allContestants) {
        debugger
        var correctanswer="2"
        if(correctanswer===allContestants[plr].answer)
        fill ("green")
        else
        fill ("red")
        display_answers+=30
        textSize(20)
        text (allContestants[plr].name+": "+allContestants[plr].answer,250,display_answers)
      }
}

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
