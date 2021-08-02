//var omar=document.querySelector(".clock .hand.second");
//var omarMIN=document.querySelector(".clock .hand.minute");
//var sec=1;
//var min=1;

    setInterval(setClock,1000)

    const hourHand=document.querySelector('[data-hour-hand')
    const minuteHand=document.querySelector('[data-minute-hand')
    const secondHand=document.querySelector('[data-second-hand]')

     function setClock(){
        const thedate=new Date() ;
        const sec=thedate.getSeconds()/60;
        const min=(thedate.getMinutes()+sec)/60
        const hour=(thedate.getHours()+min)/12;

        setRotation(secondHand,sec)
        setRotation(minuteHand,min)
        setRotation(hourHand,hour)
        }
    
        function setRotation(elements,rotationRatio){
         elements.style.setProperty('--rotation',rotationRatio*360);
         
        }

       setClock()