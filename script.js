


document.addEventListener("DOMContentLoaded", () => {


    let hunger = 100;
    let happiness = 100;
    let energy = 100;
    const petImage = document.getElementById("pet-image");
    
    function updateBars() {
    document.getElementById("hunger-bar").style.width = hunger + '%';
    document.getElementById("happiness-bar").style.width = happiness + '%';
    document.getElementById("energy-bar").style.width = energy + '%';
     
     if (hunger < 30 || happiness < 30 || energy < 30) {
        petImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltC5QWGcWiv3qf16oR48iQVdszWdeEI4kww&s"; // sad
    } else {
      petImage.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjl3JecvyMxaUZgu9BBLOnAKdBAJvXXQhoQ&s";
     }
    }
     function feedPet() {
        hunger = Math.min(100,hunger + 20);
        happiness = Math.min(100, happiness + 5);
        updateBars();
     }
     function playWithPet() {
        happiness = Math.min(100, happiness + 20);
        energy = Math.max(0, energy-10);
        hunger = Math.max(0, hunger - 10);
        updateBars();
     }
     function putToSleep() {
        energy = Math.min(100, energy + 30);
        hunger =Math.max(0, hunger - 10);
        updateBars();
     }
     function degradeStats(){
    hunger =Math.max(0, hunger - 1);
    happiness = Math.max(0, happiness - 1);
    energy = Math.max(0,energy - 1);
    updateBars();
     }
    
     setInterval(degradeStats, 1000);
     updateBars();
    
    
     window.feedPet = feedPet;
     window.playWithPet = playWithPet;
     window.putToSleep = putToSleep;
    });