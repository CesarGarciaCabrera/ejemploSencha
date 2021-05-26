//Funciones
let tempResultado="";
let ritResultado="";
let oxiResultado="";

//parseFloat(tempResultado);


function calcTemp(){
    let temp= $("#temp").val(); 
    let tempr=parseFloat(temp);
    console.log("Se guardo el valor "+temp+" en la variable temp");
    if(tempr >36.7){
        tempResultado="Comunicarse con el médico";
    }
    else{
        tempResultado="No es necesario ir al médico";
    }
}

function calcRit(){
    let rit= $("#rit").val(); 
    let ritr=parseFloat(rit);
    console.log("Se guardo el valor "+rit+" en la variable rit");
    if(ritr >59 && ritr<101){
        ritResultado="Normal";
    }
    else{
        ritResultado="Comunicarse con el médico";
    }
}

function calcOx(){
    let oxi= $("#oxi").val(); 
    let oxir=parseFloat(oxi);
    console.log("Se guardo el valor "+oxi+" en la variable oxi");
    if(oxir >94 && oxir<101){
        oxiResultado="Normal";
    }
    else{
        oxiResultado="Comunicarse con el médico";
    }
}

function calcPres(){
    let pres= $("#pres").val(); 
    let presr=parseFloat(pres);
    console.log("Se guardo el valor "+pres+" en la variable pres");
    if(presr >59 && presr<101){
        presResultado="Normal";
    }
    else{
        presResultado="Comunicarse con el médico";
    }
}

function result(){
    calcTemp();
    calcRit();
    calcOx()
    alert("Temperatura: "+tempResultado+"\nRitmo cardiaco: "+ritResultado+"\nOxigenación: "+oxiResultado);
}