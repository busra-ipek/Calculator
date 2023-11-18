var sonuc_gosterge = document.getElementById("sonuc_gosterge"); //alttaki buyuk gosterge
var buttons = document.querySelectorAll("button"); //butun butonlar secilmis olacak
var islem_gosterge = document.getElementById("islem_gosterge"); //islemi gosteren gosterge
var deger = "0"; 
var son_value_faktoriyel=1;
var i=1; //sayac
var deger_son="";
var sayac2=0; // () butonu için
var temp2; //girilen degeri tutar
var oncekiButtonType = null;
function goster()
{
    sonuc_gosterge.value= eval(deger);  //icindeki string degerin islemini yapip dondurur
    deger=sonuc_gosterge.value;
}
function sayi_mi()
{
    if(!isNaN( deger_son)||deger_son==")")
        {
            return 1;
        }
        else return 0;
}

for (item of buttons) {  //secilmis butonlar üzerinde dönmek icin. butona basilinca tetiklenir
   //item her dongude  secilen butonu temsil eder, e=event objesi
    item.addEventListener("click", (e) => { // olay(click) dinleyici ekler. tıklama olaylarını dinler ve ona gore islemi yapar
    
        buttonText = e.target.innerText; //clicklenen butonun metni
     //var deger_ilk=deger.charAt(0); //deger'in ilk karakterini surekli icine atsın 
     deger_son=deger.charAt(deger.length-1); //deger'in son karakterini surekli icine atsın 
     if (
        oncekiButtonType === "fonksiyon" &&
        (buttonText == "|x|" || buttonText == "√" || buttonText == "x²" || buttonText == "1/x" ||
            buttonText == "n!" || buttonText == "cot" || buttonText == "tan" ||
            buttonText == "cos" || buttonText == "sin" || buttonText == "log" || buttonText == "x³")
    ) {
        return;
    }
 
     if (buttonText == "x") {
   
       
         if(sayi_mi()||deger_son=="") //son karakter number ise yapsin ustuste islemlere basamasin
          {                          //if sartlarini && ile yapinca calismadi
            
            buttonText = "*";
            deger += buttonText;
            islem_gosterge.value = deger;
            

          }
     
    }
    else if (buttonText == "C") {
            
        deger = "0";
        sonuc_gosterge.value = deger;
        islem_gosterge.value = deger;
       
        
    }
      
        else if (buttonText == ".") {
            if(sayi_mi())
            {
            deger += "."; 
            islem_gosterge.value = deger;
            }
        }
        else if (buttonText == "-") {
            
            if(sayi_mi())
            {
            
            buttonText = "-";
            deger += buttonText;
            
            islem_gosterge.value = deger;
            
        }
            
        }
        else if (buttonText == "/") {
            if(sayi_mi())
            {
            buttonText = "/";
            deger += buttonText;
            
            islem_gosterge.value = deger;}
            
        }
        else if (buttonText == "+" ) {
            
            if(sayi_mi())
            {buttonText = "+";
            deger += buttonText;
            
            islem_gosterge.value = deger;}
        }
        else if ( buttonText == "=") { //esittire bastiktan sonra
            islem_gosterge.value = deger+"=";
            
            if(deger.includes("!"))  //faktoriyel icin
            { 
                deger=son_value_faktoriyel;
               goster();
            }
         
            else if(deger.includes("sqr")&&!deger.includes("t"))  //kare alma icin. sqrt algilamasin diye && ekledim
            {
                deger=Math.pow(deger.match(/\d+/),2);
               goster();
            }

            else if(deger.includes("sqrt"))  //kok icin
            {
                deger=Math.sqrt(deger.match(/\d+/));
                goster();
            }

            else if(deger.includes("abs"))  //mutlak
            {
                deger=Math.abs(deger.match(/\d+/));
               goster();
            }

            else if(deger.includes("log")) 
            {
                deger=Math.log(deger.match(/\d+/));
                goster();
            }
            else if(deger.includes("sin")) 
            {
                deger=Math.sin(deger.match(/\d+/));
               goster();
            }

            else if(deger.includes("cos")) 
            {
                deger=Math.cos(deger.match(/\d+/));
               
               goster();
            }

            else if(deger.includes("cot")) 
            {
                deger=Math.cos(deger.match(/\d+/)) / Math.sin(deger.match(/\d+/));
                goster();
            }

            else if(deger.includes("tan")) 
            {
                deger=Math.tan(deger.match(/\d+/));
                goster();
                
            }
            
            else if(deger.includes("^ 3")) 
            {
                deger=Math.pow(deger.match(/\d+/),3);
                goster();
            }

           

            else if(buttonText == "1/x")  //uzeri -1 alma
            {
                deger=1/temp;
                sonuc_gosterge.value=deger;
            } 
          
            else
            {  
                goster();
            }
            
           
        }

        else if(buttonText=="←")  //en son girileni siler
        {
            deger=deger.slice(0,-1);

            sonuc_gosterge.value=deger;
            islem_gosterge.value=deger; 
        }

        else if(buttonText == "√") //kok alma
        {  if(sayi_mi())
            {
            deger="sqrt("+deger+")"; //deger="Math.sqrt("+deger+")";
            sonuc_gosterge.value = deger;
            }     
        }

        else if(buttonText == "|x|") //mutlak 
        { if(sayi_mi())
        {
            deger= "abs("+deger+")";
            sonuc_gosterge.value = deger;}
        }
      
        else if(buttonText == "x²")
        {  if(sayi_mi())
            {
                
            deger="sqr("+deger+")";
            sonuc_gosterge.value = deger;
            }  
        }

        else if(buttonText == "1/x")
        {     if(sayi_mi())
            {
            temp=deger; //kullanicinin girdigi degeri tut
            deger="1/("+deger+")";
        
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "n!") {
            if(sayi_mi())
            {
            buttonText = "!";
            deger += buttonText;
            var num=deger.match(/\d+/); // degerin number kismini aldi
            for(i;i<=num;i++)
              {son_value_faktoriyel=son_value_faktoriyel*i;} 
            
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "cot") {
            if(sayi_mi())
            {
            deger = "cot("+deger+")";
            sonuc_gosterge.value = deger;
          
            }
        }

        else if ( buttonText == "tan") {
            if(sayi_mi())
            {
            deger = "tan("+deger+")";
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "cos") {
            if(sayi_mi())
            {
            deger = "cos("+deger+")";
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "sin") {
            if(sayi_mi())
            {
                deger = "sin("+deger+")";
                sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "log") {
            if(sayi_mi())
            {
            deger = "log("+deger+")";
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "x³") {
            if(sayi_mi())
            {
            deger = " "+deger+" ^ 3";
            sonuc_gosterge.value = deger;
            }
        }

        else if ( buttonText == "( )")
        { 
                sayac2++; 
                if(sayac2%2==0 &&deger_son!="(") //cift sayıysa  ) gostersin
                {
                    buttonText = ")";
                deger += buttonText;
                sonuc_gosterge.value = deger;
                }
            
                else if(sayac2%2!=0)
                {  if(deger_son!=")")
                  {  if (deger == "0") // en basta ( basinca 0( gozukmesin
                 {
                    deger = "";
                 }
                    buttonText = "(";
                deger += buttonText;
               sonuc_gosterge.value = deger;
                }}
        }
       
        else {
            if (deger === "0") {
                deger = buttonText;
            } else if (deger === "-0") {
                deger = "-" + buttonText;
            } else {
                deger += buttonText;
            }
            sonuc_gosterge.value = deger;
        }
        if (
            buttonText == "|x|" || buttonText == "√" || buttonText == "x²" || buttonText == "1/x" ||
            buttonText == "n!" || buttonText == "cot" || buttonText == "tan" ||
            buttonText == "cos" || buttonText == "sin" || buttonText == "log" || buttonText == "x³"
        ) {
            oncekiButtonType = "fonksiyon";
        } else {
            oncekiButtonType = "normal";
        }
        }

    )
}



