var images = ["https://wallpapercave.com/wp/wp6424362.png",
"https://i.postimg.cc/5ymDKL83/bro.jpg", 
"https://i.postimg.cc/bw5W5zSK/mother.jpg" , 
"https://i.postimg.cc/wjMnFtMX/father.jpg",
  "https://t3.ftcdn.net/jpg/02/74/86/30/360_F_274863032_xgwvNFF0u9vZAGPmtvCRHdGxIeeDLAb9.jpg"];
var names = ["Family Book",
"Dilraj  Kahlon Singh",
 "Simarjyot Singh Kahlon", 
 "Kulbir kaur kahlon",
  "Bhupinder Singh Kahlon", 
  "Satpal Kaur Kahlon"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
