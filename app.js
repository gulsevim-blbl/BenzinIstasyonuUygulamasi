// benzin istasyonu

/*
    1-dizel: 24.53
    2-benzin: 22.25
    3-lpg: 11.1

    gelen müşteriden alacağımız bilgiler:
        1-yakıt tipi
        2-yüklenecek yakıt litresi
*/

let dizel= 24.53 , benzin = 22.25 , lpg= 11.1 ;

const yenisatir = "\r\n";

const yakitMetni = "1-Dizel"+ yenisatir
+"2-Benzin"+ yenisatir
 + "3-lpg" + yenisatir
 +"Yakıt türünüzü Seçiniz" ;
 
let yakitTipi = prompt(yakitMetni);
if(yakitTipi =="1" || yakitTipi =="2" || yakitTipi !="3"){
    let yakitLitresi =Number( prompt("Yakit Litresiniz giriniz"));
    let Bakiye = Number(prompt("Bakiyenizi Giriniz"));

     if(yakitTipi==1){
        //Dizel
         let odenecekTutar= dizel*yakitLitresi;
         if(odenecekTutar<Bakiye){
            //bakiyeniz yetertli
            Bakiye = Bakiye-odenecekTutar;
            alert("Yakit Alma İşleminiz Başırlı "+ yenisatir
            +"Kalan Bakiye:" + Bakiye );
    
         }else{
            //bakiye yetersiz
            alert("Bakiyeniz yeterli Değildir" + yenisatir
            + "Ödenecek Tutar :" + odenecekTutar + yenisatir
            + "Bakiye" + Bakiye +yenisatir
            + "Eksik Tutar:"+ (odenecekTutar-Bakiye));
         }
    }else if(yakitTipi== 2){
        //Benzin
        let odenecekTutar= benzin*yakitLitresi;
         if(odenecekTutar<Bakiye){
            //bakiyeniz yetertli
            Bakiye = Bakiye-odenecekTutar;
            alert("Yakit Alma İşleminiz Başırlı "+ yenisatir
            +"Kalan Bakiye:" + Bakiye );
    
         }else{
            //bakiye yetersiz
            alert("Bakiyeniz yeterli Değildir" + yenisatir
            + "Ödenecek Tutar :" + odenecekTutar + yenisatir
            + "Bakiye" + Bakiye +yenisatir
            + "Eksik Tutar:"+ (odenecekTutar-Bakiye));
         }
    }else if(yakitTipi ==3){
        //LPG
        let odenecekTutar= lpg*yakitLitresi;
         if(odenecekTutar<Bakiye){
            //bakiyeniz yetertli
            Bakiye = Bakiye-odenecekTutar;
            alert("Yakit Alma İşleminiz Başırlı "+ yenisatir
            +"Kalan Bakiye:" + Bakiye );
    
         }else{
            //bakiye yetersiz
            alert("Bakiyeniz yeterli Değildir" + yenisatir
            + "Ödenecek Tutar :" + odenecekTutar + yenisatir
            + "Bakiye" + Bakiye +yenisatir
            + "Eksik Tutar:"+ (odenecekTutar-Bakiye));
        }
    }

}
else{
    alert("Lütfen Geçerli Bir Yakıt Tipi Seçiniz!");
}