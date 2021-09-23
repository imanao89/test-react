import Sketch from "react-p5";

const P5jsICON = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    //p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = (p5) => {
    p5.fill(234, 31, 81);
    p5.noStroke();
    p5.rect(50, 50, 250, 250);
    p5.fill(255);
    p5.textStyle(p5.BOLD);
    p5.textSize(120);
    p5.text("p5*", 60, 250);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} class="" />
    </div>
  );
};

export default P5jsICON;
