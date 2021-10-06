const randomDiv = () => {
  const container = document.getElementById("background");

  const createDiv = () => {
    let randomX = Math.floor(Math.random() * document.body.scrollWidth - 80) + 80;
    let randomY = Math.floor(Math.random() * document.body.scrollHeight - 80);
    let randomNum = Math.floor(Math.random() * 10);
    let color;

    if (randomNum % 2 == 0) {
      color = "grey";
    } else {
      color = "red";
    }

    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="box" style='right: ${randomX}px; top: ${randomY}px;'>
                                                        <div class='dot ${color}' style='transform: scale(0.${randomNum});'></div>
                                                    </div>`
    );
  };


  const moveOnMouseEnter = () => {
    let dots = document.querySelectorAll(".box");



    const moveCircleAway = (mouse, object) => {
      let boundingDimensions = object.getBoundingClientRect();
      let mouseX = mouse.x;
      let mouseY = mouse.y;
      let circleDimensions = object.children[0].getBoundingClientRect();



      const statementHelperY = (
        circleCoordinate,
        mouseCoordinate,
        position
      ) => {
        let step;

        if (circleCoordinate > mouseCoordinate) {

          step = circleCoordinate - mouseCoordinate;

          if (parseInt(object.style[position].replace("px", "")) + step * 5 < document.body.scrollHeight - 80) {

            object.style[position] = `${
              parseInt(object.style[position].replace("px", "")) + step * 5 
            }px`;

          }
        }
        if (circleCoordinate < mouseCoordinate) {
          step = mouseCoordinate - circleCoordinate;
          if (
            parseInt(object.style[position].replace("px", "")) - step * 5  < document.body.scrollHeight - 80) {

            object.style[position] = `${
              parseInt(object.style[position].replace("px", "")) - step * 5 
            }px`;

          }
        }
        // Don't do anything if the coordinates are same
      };




      

      const statementHelperX = (
        circleCoordinate,
        mouseCoordinate,
        position
      ) => {
        let step;


        if (circleCoordinate > mouseCoordinate) {
          step = circleCoordinate - mouseCoordinate;
          
          if (parseInt(object.style[position].replace("px", "")) - step * 5  < document.body.scrollWidth - 80) {

            object.style[position] = `${
              parseInt(object.style[position].replace("px", "")) - step * 5 
            }px`;

          }
        }
        if (circleCoordinate < mouseCoordinate) {
          step = mouseCoordinate - circleCoordinate;
          if (
            parseInt(object.style[position].replace("px", "")) + step * 5  < document.body.scrollWidth - 80) {

            object.style[position] = `${
              parseInt(object.style[position].replace("px", "")) + step * 5  
            }px`;

          }
        }
        // Don't do anything if the coordinates are same
      };



      statementHelperX(circleDimensions.x, mouseX, "right");
      statementHelperY(circleDimensions.y, mouseY, "top");
    };

    

    dots.forEach((e) => {
      e.addEventListener("mouseenter", (mouse) => {
        moveCircleAway(mouse, e);
      });


    });
  };

  for (let i = 0; i <= document.body.scrollHeight / 50; i++) {
    createDiv();
  }
  
  if(window.innerWidth >= 1024){
    
    for (let i = 0; i <= document.body.scrollHeight / 25; i++) {
      createDiv();
    }
    moveOnMouseEnter();

  }
};

export default randomDiv;
