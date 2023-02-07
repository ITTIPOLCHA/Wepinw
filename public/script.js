let x = 0;
const images = ['image/01.jpg', 'image/02.jpg', 'image/03.jpg', 'image/04.jpg', 'image/05.jpg', 'image/06.jpg', 'image/07.jpg', 'image/08.jpg', 'image/09.jpg', 'image/10.jpg', 'image/11.jpg', 'image/12.jpg', 'image/13.jpg', 'image/02.jpg', 'image/13.jpg'];
document.body.style.backgroundImage = `url('image/01.jpg')`;
function changeBackground() {
  x = (x + 1) % images.length;
  document.body.style.backgroundImage = `url(${images[x]})`;
}
// --------------------------------------------------------------------------------------
window.onload = function() {
  head.innerHTML = `<form>Enter your name : <input type="text" id="name" name="name" required> 
  <button id="sm" class="button">submit</button></form>`;
  document.getElementById("sm").addEventListener("click", function() {
    var inputValue = document.getElementById("name").value;
    if (inputValue) {
      name1();
    }
  });
}
function name1() {
  var name1 = document.getElementById("name").value;
  head.innerHTML = "Hello , " + name1;
  button.innerHTML =  `<button type="button" class="button" onclick="plot1()">next</button>`;
}
function plot1() {
  head.innerHTML = "คุณรับบทเป็นเทพฝึกหัด\nที่กำลังค้นหาเทพประจำตัว<br>ที่จะช่วยฝึกฝนความสามารถให้คุณ";
  body1.innerHTML = `<img src="image/w.jpg" alt="" width=“10” height=“10”>`;
  button.innerHTML =  `<button type="button" class="button" onclick=plot2()>next</button>`;
}
function plot2() {
  head.innerHTML = "ภารกิจแรกในการค้นหาตัวตนของคุณคือ<br>การนำดวงวิญญาณไปรับพิพากษา";
  body1.innerHTML = `<img src="image/w.jpg" alt="" width=“10” height=“10”>`;
  button.innerHTML =  `<button type="button" class="button" onclick="plot3(),changeBackground()">next</button>`;
}
function plot3() {
  head.innerHTML = "การเดินทางของคุณจะเริ่มขึ้นต่อจากนี้";
  body1.innerHTML = "";
  button.innerHTML =  `<button type="button" class="button" onclick="plot4(),changeBackground()">next</button>`;
}
function plot4() {
  head.innerHTML = "";
  head1.innerHTML = "คุณเดินทางมาเรื่อยๆและได้หยุดที่หน้าประตู<br>หลังประตูบานนั้นจะเป็นทางที่จะพาคุณไปยังจุดหมาย";
  button.innerHTML =  `<button type="button" class="button" onclick="plot5()">next</button>`;
}
function plot5() {
  head1.innerHTML = " แต่ที่หน้าประตูนั้นมี เซอร์เบอรัส สุนัขสีดำตัวใหญ่ที่มี 3 หัว <br>กำลังขวางประตูทางเข้าไว้ คุณจะทำอย่างไรต่อไป";
  body2.innerHTML = `<input onclick=p1() type=radio id="radio-1" name="options" value="option1" required /> 1 <br />
  <input onclick=p2() type=radio id="radio-2" name="options" value="option2" /> 2 <br />
  <input onclick=p3() type=radio id="radio-3" name="options" value="option3" /> 3 <br />
  <input onclick=p4() type=radio id="radio-4" name="options" value="option4" /> 4 <br />
  <input onclick=p5() type=radio id="radio-5" name="options" value="option5" /> 5 <br />
  <input onclick=p6() type=radio id="radio-6" name="options" value="option6" /> 6`;
  button.innerHTML =  `<button id="submit-button" class="button">next</button>`;
  document.getElementById("submit-button").addEventListener("click", function() {
    var radioGroup = document.getElementsByName("options");
    var selectedOption;
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        selectedOption = radioGroup[i].value;
        break;
      }
    }
    if (selectedOption) {
      plot6();
      changeBackground();
    } else {
    }
  });
}
function plot6() {
  head1.innerHTML = "คำชม";
  body2.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot7(),changeBackground()">next</button>`;
}
function plot7() {
  head1.innerHTML = "เบื้องหลังประตูบานนั้นช่างสวยงามจนไม่อาจละสายตาได้<br>แต่คุณจำเป็นต้องเดินทางต่อ <br>คุณจึงเริ่มก้าวขาและมุ่งหน้าไปต่อเพื่อทำภารกิจ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot8(),changeBackground()">next</button>`;
}
function plot8() {
  head1.innerHTML = " ระหว่างทาง คุณเหลือบไปเห็นเทพระดับสูงกำลังกลั่นแกล้งมนุษย์<br>ที่กำลังดูหมิ่นอำนาจของเทพองค์นั้นอยู่ คุณจะทำอย่างไร";
  body2.innerHTML = `<input onclick=p1() type=radio id="radio-1" name="options" value="option1" required /> 1 <br />
  <input onclick=p2() type=radio id="radio-2" name="options" value="option2" /> 2 <br />
  <input onclick=p3() type=radio id="radio-3" name="options" value="option3" /> 3 <br />
  <input onclick=p4() type=radio id="radio-4" name="options" value="option4" /> 4 <br />
  <input onclick=p5() type=radio id="radio-5" name="options" value="option5" /> 5 <br />
  <input onclick=p6() type=radio id="radio-6" name="options" value="option6" /> 6`;
  button.innerHTML =  `<button id="submit-button" class="button">next</button>`;
  document.getElementById("submit-button").addEventListener("click", function() {
    var radioGroup = document.getElementsByName("options");
    var selectedOption;
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        selectedOption = radioGroup[i].value;
        break;
      }
    }
    if (selectedOption) {
      plot9();
      changeBackground();
    } else {
    }
  });
}
function plot9() {
  head1.innerHTML = "คำชม";
  body2.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot10(),changeBackground()">next</button>`;
}
function plot10() {
  head1.innerHTML = "คุณเดินทางต่ออีกสักพักแต่บรรยากาศรอบตัวก็เริ่มมืดลง <br>คุณเลยตัดสินใจที่จะนอนพักเพื่อเดินทางต่อในตอนเช้า";
  button.innerHTML =  `<button type="button" class="button" onclick="plot11(),changeBackground()">next</button>`;
}
function plot11() {
  head.innerHTML = "เมื่อคุณตื่นมาคุณกลับพบว่าวิญญาณตนนั้นหายไป คุณคิดว่าดวงวิญญาณน่าจะหายเข้าไปในป่าอย่างแน่นอน แต่คุณจะทำอย่างไรเพื่อตามหาดวงวิญญาณตนนั้นล่ะ";
  head1.innerHTML = "";
  body1.innerHTML = `<input onclick=p1() type=radio id="radio-1" name="options" value="option1" required /> 1 <br />
  <input onclick=p2() type=radio id="radio-2" name="options" value="option2" /> 2 <br />
  <input onclick=p3() type=radio id="radio-3" name="options" value="option3" /> 3 <br />
  <input onclick=p4() type=radio id="radio-4" name="options" value="option4" /> 4 <br />
  <input onclick=p5() type=radio id="radio-5" name="options" value="option5" /> 5 <br />
  <input onclick=p6() type=radio id="radio-6" name="options" value="option6" /> 6`;
  button.innerHTML =  `<button id="submit-button" class="button">next</button>`;
  document.getElementById("submit-button").addEventListener("click", function() {
    var radioGroup = document.getElementsByName("options");
    var selectedOption;
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        selectedOption = radioGroup[i].value;
        break;
      }
    }
    if (selectedOption) {
      plot12();
      changeBackground();
    } else {
    }
  });
}
function plot12() {
  head.innerHTML = "คำชม";
  body1.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot13(),changeBackground()">next</button>`;
}
function plot13() {
  head.innerHTML = " ";
  head1.innerHTML = " ในป่านั้นรกและอันตราย คุณเดินมาจนใกล้ถึงใจกลางของป่าในที่สุด";
  button.innerHTML =  `<button type="button" class="button" onclick="plot14(),changeBackground()">next</button>`;
}
function plot14() {
  head1.innerHTML = "นั่นไง! ดวงวิญญาณที่คุณกำลังตามหา";
  button.innerHTML =  `<button type="button" class="button" onclick="plot15(),changeBackground()">next</button>`;
}
function plot15() {
  head.innerHTML = "คุณรีบก้าวเท้าเข้าไปเพื่อที่จะพาดวงวิญญาณเดินทางต่อ แต่ทันใดนั้นเอง";
  head1.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot16()">next</button>`;
}
function plot16() {
  head.innerHTML = "อสูรกายหลายสิบตัวก็เข้ามาล้อมตัวคุณและดวงวิญญาณไว้ <br>คุณจะพาดวงวิญญาณหนีไปอย่างไร";
  body1.innerHTML = `<input onclick=p1() type=radio id="radio-1" name="options" value="option1" required /> 1 <br />
  <input onclick=p2() type=radio id="radio-2" name="options" value="option2" /> 2 <br />
  <input onclick=p3() type=radio id="radio-3" name="options" value="option3" /> 3 <br />
  <input onclick=p4() type=radio id="radio-4" name="options" value="option4" /> 4 <br />
  <input onclick=p5() type=radio id="radio-5" name="options" value="option5" /> 5 <br />
  <input onclick=p6() type=radio id="radio-6" name="options" value="option6" /> 6`;
  button.innerHTML =  `<button id="submit-button" class="button">next</button>`;
  document.getElementById("submit-button").addEventListener("click", function() {
    var radioGroup = document.getElementsByName("options");
    var selectedOption;
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        selectedOption = radioGroup[i].value;
        break;
      }
    }
    if (selectedOption) {
      plot17();
      changeBackground();
    } else {
    }
  });
}
function plot17() {
  head.innerHTML = "คำชม";
  body1.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot18()">next</button>`;
}
function plot18() {
  head.innerHTML = "ในที่สุดคุณก็ออกมาได้อย่างปลอดภัย";
  button.innerHTML =  `<button type="button" class="button" onclick="plot19(),changeBackground()">next</button>`;
}
function plot19() {
  head.innerHTML = "";
  head1.innerHTML = "ในที่สุดคุณก็มาถึงที่หน้าประตูแห่งการพิพากษาแล้ว <br>เมื่อดวงวิญญาณเข้าไปในประตู ภารกิจของคุณก็จะสำเร็จ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot20(),changeBackground()">next</button>`;
}
function plot20() {
  head.innerHTML = " ทันใดนั้นเอง วิญญาณที่ร่วมเดินทางกับคุณก็สว่างขึ้นมา <br>คุณรีบยกแขนขึ้นมาและพยายามที่จะมองเข้าไปในแสงสว่างนั้น";
  head1.innerHTML = "";
  button.innerHTML =  `<button type="button" class="button" onclick="plot21()">next</button>`;
}
function plot21() {
  head.innerHTML = "จากนั้นก็มีเสียงพูดขึ้นมาว่า";
  button.innerHTML =  `<button type="button" class="button" onclick="plot22()">next</button>`;
}
function plot22() {
  head.innerHTML = "ตลอดการเดินทางที่ผ่านมา <br>เจ้าได้พบเจอเหตุการณ์ต่างๆและได้เผชิญหน้ากับปัญหาเหล่านั้น <br>ตัวข้าเองก็คอยสังเกตเจ้ามาตลอดและข้าก็ได้เห็นว่า <br>เจ้ามีคุณสมบัติในการเป็นเทพที่ดีอย่างแน่นอน <br>แล้วตัวเจ้าเองล่ะมองเห็นสิ่งใดในตัวเองตลอดการเดินทางที่ผ่านมา";
  body1.innerHTML = `<input onclick=p1() type=radio id="radio-1" name="options" value="option1" required /> 1 <br />
  <input onclick=p2() type=radio id="radio-2" name="options" value="option2" /> 2 <br />
  <input onclick=p3() type=radio id="radio-3" name="options" value="option3" /> 3 <br />
  <input onclick=p4() type=radio id="radio-4" name="options" value="option4" /> 4 <br />
  <input onclick=p5() type=radio id="radio-5" name="options" value="option5" /> 5 <br />
  <input onclick=p6() type=radio id="radio-6" name="options" value="option6" /> 6`;
  button.innerHTML =  `<button id="submit-button" class="button">next</button>`;
  document.getElementById("submit-button").addEventListener("click", function() {
    var radioGroup = document.getElementsByName("options");
    var selectedOption;
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        selectedOption = radioGroup[i].value;
        break;
      }
    }
    if (selectedOption) {
      plot23();
      changeBackground();
    } else {
    }
  });
}
function plot23() {
  head.innerHTML = "";
  head1.innerHTML = " เมื่อสิ้นเสียงของคำตอบ แสงสว่างก็สว่างขึ้นมากกว่าเดิม <br>และได้กลายเป็นเทพที่คุณกำลังตามหาเพื่อฝึกฝนความสามารถให้กับคุณ";
  body1.innerHTML = " ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot24()">next</button>`;
}
function plot24() {
  head1.innerHTML = "เขาเห็นความพยายามและการตัดสินใจของคุณมาโดยตลอด <br>เขาภูมิใจในตัวคุณเป็นอย่างมากและตัดสินใจ<br>ที่จะเป็นเทพประจำตัวให้คุณและช่วยฝึกฝนความสามารถ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot25()">next</button>`;
}
function plot25() {
  head1.innerHTML = "และเทพเจ้าประจำตัวของคุณ ก็คือ";
  button.innerHTML =  `<button type="button" class="button" onclick="plot26()">next</button>`;
}
function plot26() {
  head1.innerHTML = " ";
  button.innerHTML =  `<a href="index.html">restart</a>`;

}
//,changeBackground()
var point = 0;
function p1(){
  point = point + 5 ;
}
function p2(){
  point = point + 10 ;
}
function p3(){
  point = point + 15 ;
}
function p4(){
  point = point + 20 ;
}
function p5(){
  point = point + 25 ;
}
function p6(){
  point = point + 30 ;
}
function result(){
  if(point == 30 && point <= 59){

  }
  else if(point == 60 && point <= 89){

  }
  else if(point == 90 && point <= 119){

  }
  else if(point == 120 && point <= 149){

  }
  else if(point == 150 && point <= 179){

  }
  else if(point == 180){

  }
}
// --------------------------------------------------------------------------------------
