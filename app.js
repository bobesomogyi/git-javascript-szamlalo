//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása 
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


// Ciklussal végiglépkedek az eltárolt gombokon amin rajta van a .btn class
btns.forEach((btn)=>{

    //Az összes gomb közzül amelyeket bejárok ciklussal azt kattintottam meg amelyik az aktuális ciklusfutáskor jön a sorba
    btn.addEventListener("click", (e)=>{


        //Az éppen aktuálisan megkattintott gombon milyen classok vannak
        const style = e.currentTarget.classList;

        //Ha az aktuálisan megkattintott gombom klasszai közül tartalmazza a decrease classt ...
        if(style.contains("decrease")){

            //...akkor csökkentjük az alapértéket
            count--;
        }

        else if(style.contains("increase")){

            //...növeljük az alapértéket
            count++;
        }

        else{

            //...visszaállítjuk 0-ra
            count = 0;
        }

        //színek hozzáadása span-hez
        if(count > 0){

            value.style.color = "green";
        }
        else if(count < 0){

            value.style.color = "red";
        }

        else{

            value.style.color = "black";
        }



        value.textContent = count;
    })

})

/*  
// Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

//Egyszerű módszer

increase.addEventListener('click', ()=>{

    //Növelem az alapértékem eggyel, megnézem, hogy nagyobb-e mint nulla, ha nagyobb hozzáadok egy zöld betűszínt, majd az alapértékem aktuális értékét beállítom a value id-van ellátott span-nek
    count++;

    if(count > 0){

        value.style.color = "green";
    }
    value.textContent = count;
})

decrease.addEventListener('click', ()=>{

    //Csökkentem az alapértékem eggyel, megnézem, hogy kisebb-e mint nulla, ha kisebb hozzáadok egy piros betűszínt, majd az alapértékem aktuális értékét beállítom a value id-van ellátott span-nek
    count--;

    if(count < 0){

        value.style.color = "red";
    }
    value.textContent = count;
})

reset.addEventListener('click', ()=>{

    //Csökkentem az alapértékem eggyel, megnézem, hogy kisebb-e mint nulla, ha kisebb hozzáadok egy piros betűszínt, majd az alapértékem aktuális értékét beállítom a value id-van ellátott span-nek
    count = 0;

    //visszaállítom az alap betűszínt
    value.style.color = "black";

    value.textContent = count;
})


*/

