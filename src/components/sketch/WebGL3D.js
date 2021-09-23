import Sketch from "react-p5";

const WebGL3D = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    //p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    //p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = (p5) => {
    p5.background(100);
    p5.noStroke();

    p5.push();
    p5.translate(-300, 200);
    p5.rotateY(1.25);
    p5.rotateX(-0.9);
    p5.box(100);
    p5.pop();

    p5.noFill();
    p5.stroke(255);
    p5.push();
    p5.translate(500, window.innerHeight * 0.35, -200);
    p5.sphere(300);
    p5.pop();
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} class="" />
    </div>
  );
};

export default WebGL3D;
