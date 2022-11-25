Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById('camera');

Webcam.attach('#camera');

function snap_shot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q_46uID7N/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded :)");

}

function identify(){
    image=document.getElementById("captured_img");
    classifier.classify(image,getResults);
}
function getResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
   

}