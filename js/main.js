let counter = 0;
document.getElementById("counter").innerHTML = counter; //initial set

function handleAction(type) {
      if (type === "click") {
        //increment by 1
        counter += 1;
      } else if (type === "reset") {
        //resets  to zero
        counter = 0;
      } else {
        //default
        document.getElementById("counter").innerHTML = counter;
      }
      document.getElementById("counter").innerHTML = counter;
}
