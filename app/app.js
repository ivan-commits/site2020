// Automatic titre

let tab = ["Développeur Full stack","Passioné d'informatique","Créateur de sites web mobile"];
let element = document.getElementById('para');

function AnimationText(element,tab){

    function splitText(phrase,element){

        let lettre = ''
        for(let i = 0;i<phrase.length;i++){
            let result ='';
            lettre += phrase[i]
            result = lettre
            setTimeout(()=>element.innerHTML = result,120*i)
        }
    }
    //Compte le nombre de phrase dans un array

    function nombrePhrase(tab){

        for(let i = 0; i<tab.length;i++){
            nbPhrase = i
            if(i == tab.length){
                return nbPhrase;
            }
        }
        for(let i=0; i<=nbPhrase; i++){
            setTimeout(()=>
                    setTimeout(()=>
                            splitText(tab[i],element)
                        ,1500*i)
                ,3000*i)

        }
    }
    nombrePhrase(tab)

}

for(let i = 0;i<20;i++){
    setTimeout(()=>    AnimationText(element,tab),15500*i)
}

// Préférence

let remote = document.getElementById('remote');
let preference = document.getElementById('preference');
let btnMod = document.getElementById('btnMod');

let css = document.getElementById('css');

remote.addEventListener('click', function(){
    if(preference.className == 'preferenceInitiale'){
        preference.className = 'preferenceActive'
        console.log(preference.className)
        remote.style.transform = 'rotate(90deg)'
    }else if(preference.className == 'preferenceActive'){
        preference.className = 'preferenceDesactive'
        console.log(preference.className)
        remote.style.transform = 'rotate(0deg)'
    }
    else if(preference.className =='preferenceDesactive'){
        preference.className = 'preferenceActive'
        console.log(preference.className)
        remote.style.transform = 'rotate(90deg)'
    }

})

btnMod.addEventListener('click', function(){
    if(btnMod.className == 'btnModDesactive'){
        btnMod.className = 'btnModActive'
        css.setAttribute('href','css/dark.css');
    }else if(btnMod.className = 'btnModActive'){
        btnMod.className = 'btnModDesactive'
        css.setAttribute('href','css/style.css');
    }
})