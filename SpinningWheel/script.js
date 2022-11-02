(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 45; // deg
  
    // Counter clockwise by deg
    const rewards = {
      1: "200 Gold",
      2: "Orb",
      3: "-100Gold",
      4: "+1 potion",
      5: "10 Gold",
      6: "Sword",
      7: "+1 Lvl",
      8: "+2 potions",
    }
    
    const handleWin = (actualDeg) => {
      const winner = Math.ceil(actualDeg / zoneSize);
      display.innerHTML = rewards[winner];
    }
    
    startButton.addEventListener('click', () => {
      // Reset display
      display.innerHTML = "-";
      // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation: 5000 for 10s 
      deg = Math.floor(5000 + Math.random() * 5000);
      // Set the transition on the wheel
      wheel.style.transition = 'all 10s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      //To start the next spin from the last deg result
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      handleWin(actualDeg);
    });
  })();