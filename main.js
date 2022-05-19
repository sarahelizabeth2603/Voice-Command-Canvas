x = 0;
y = 0;

draw_Circle = " ";
draw_rect = " ";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "system is listening Please speak ";
    recognition.start();

}

recognition.onresult=function (event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = " The Speech has been recognised as : "+ content;
    if(content == "circle"){

        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = " Started drawing Circle.";
        draw_Circle = "set";
    }

    if(content == "rectangle"){
        x =  Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = " Started drawing Rectangle.";
        draw_rect = "set";
    }


}

function setup(){
    canvas = createCanvas(900 , 600) ;
}

function draw(){
    if(draw_Circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_Circle=" ";
    }

    if(draw_rect == "set"){
        rect(x ,y , 75 ,50);
        document.getElementById("status").innerHTML = " Rectangle is drawn";
        draw_rect = " ";
    }
}