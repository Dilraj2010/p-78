var images=["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://media.istockphoto.com/vectors/kid-walking-with-smart-phone-vector-id646331020?k=6&m=646331020&s=612x612&w=0&h=p_vDy6vNfr04L5dYi7_Sl4rWzyKbPVGHrVx6zyb631c=",
"http://pm1.narvii.com/6530/d621267e2f9c5f5d93bb1de334cbcdd640dc7f94_00.jpg",
"https://i.postimg.cc/wjMnFtMX/father.jpg"
"https://i.postimg.cc/bw5W5zSK/mother.jpg"]
"https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg";
var names=["Family Book",
"Dilraj Singh Kahlon",
"Simarjyot Singh Kahlon",
"Bhupinder Singh Kahlon",
"Kulbir Kaur Kahlon",
"Satpal Kaur Kahlon"];
var i=0;
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

