function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5. soundClassifier('https://teachablemachine.withgoogle.com/models/IwxYvtgYm/mosel.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}function gotResults(error, results) {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        random_number_r= Math.floor(Math.random()* 255)+ 1;
        random_number_g= Math.floor(Math.random()* 255)+ 1;
        random_number_b= Math.floor(Math.random()* 255)+ 1;

        document.getElementById("result_label").innerHTML= 'I can hear- '+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy- '+ (results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img= document.getElementById('https://media.istockphoto.com/vectors/barking-dog-isolated-vector-illustration-vector-id1022678930?k=20&m=1022678930&s=612x612&w=0&h=aKfRTqzf2GI_lM1gYH93L3qyvu8Swh_4etRE3HgCeSo=');
        img1= document.getElementById('https://thumbs.dreamstime.com/b/black-cat-meow-lettering-text-cute-cartoon-funny-character-kawaii-kitten-baby-animal-love-greeting-card-flat-design-style-white-170575885.jpg');
        img2= document.getElementById('https://ts.idictionary.co.kr/files/pd/word_sub_img/420x420/1524217957_1.jpg')
        img3= document.getElementById('https://us.123rf.com/450wm/topvectors/topvectors1903/topvectors190301737/119481195-sheep-bleating-cute-cartoon-farm-animal-making-baa-sound-vector-illustration.jpg?ver=6')

        if(results[0].label== "Clap"){
        img.src= 'https://cdn.dribbble.com/users/1155826/screenshots/4134590/dog_dance_dribbble.gif';
        img1.src= 'https://thumbs.dreamstime.com/b/black-cat-meow-lettering-text-cute-cartoon-funny-character-kawaii-kitten-baby-animal-love-greeting-card-flat-design-style-white-170575885.jpg';
        img2.src= 'https://ts.idictionary.co.kr/files/pd/word_sub_img/420x420/1524217957_1.jpg';
        img3.src= 'https://us.123rf.com/450wm/topvectors/topvectors1903/topvectors190301737/119481195-sheep-bleating-cute-cartoon-farm-animal-making-baa-sound-vector-illustration.jpg?ver=6';
        } else if(results[0].label== "Bell"){
         img.src= 'https://media.istockphoto.com/vectors/barking-dog-isolated-vector-illustration-vector-id1022678930?k=20&m=1022678930&s=612x612&w=0&h=aKfRTqzf2GI_lM1gYH93L3qyvu8Swh_4etRE3HgCeSo=';
        img1.src= 'https://c.tenor.com/2P40C7wvid4AAAAC/cat-mochi-mochi-peach-cat.gif';
        img2.src= 'https://ts.idictionary.co.kr/files/pd/word_sub_img/420x420/1524217957_1.jpg';
        img3.src= 'https://us.123rf.com/450wm/topvectors/topvectors1903/topvectors190301737/119481195-sheep-bleating-cute-cartoon-farm-animal-making-baa-sound-vector-illustration.jpg?ver=6';
        }if(results[0].label== "Snapping"){
        img.src= 'https://media.istockphoto.com/vectors/barking-dog-isolated-vector-illustration-vector-id1022678930?k=20&m=1022678930&s=612x612&w=0&h=aKfRTqzf2GI_lM1gYH93L3qyvu8Swh_4etRE3HgCeSo=';
        img1.src= 'https://thumbs.dreamstime.com/b/black-cat-meow-lettering-text-cute-cartoon-funny-character-kawaii-kitten-baby-animal-love-greeting-card-flat-design-style-white-170575885.jpg';
        img2.src= 'https://i.pinimg.com/originals/62/a5/c0/62a5c02f49d37484697e0458d0836836.gif';
        img3.src= 'https://us.123rf.com/450wm/topvectors/topvectors1903/topvectors190301737/119481195-sheep-bleating-cute-cartoon-farm-animal-making-baa-sound-vector-illustration.jpg?ver=6';
        }else {
        img.src= 'https://media.istockphoto.com/vectors/barking-dog-isolated-vector-illustration-vector-id1022678930?k=20&m=1022678930&s=612x612&w=0&h=aKfRTqzf2GI_lM1gYH93L3qyvu8Swh_4etRE3HgCeSo=';
        img1.src= 'https://thumbs.dreamstime.com/b/black-cat-meow-lettering-text-cute-cartoon-funny-character-kawaii-kitten-baby-animal-love-greeting-card-flat-design-style-white-170575885.jpg';
        img2.src= 'https://ts.idictionary.co.kr/files/pd/word_sub_img/420x420/1524217957_1.jpg';
        img3.src= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5912eec8-4fc6-4c1b-b5ad-f5f5ca47ee64/da5m1li-7a9532bb-954f-442b-b3a3-0aa2a366980e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MTJlZWM4LTRmYzYtNGMxYi1iNWFkLWY1ZjVjYTQ3ZWU2NFwvZGE1bTFsaS03YTk1MzJiYi05NTRmLTQ0MmItYjNhMy0wYWEyYTM2Njk4MGUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FgtOiziFGMX5qCenBLGQzg4-l4lPeabNiWzVWlo5eCo';
        }
    }
}