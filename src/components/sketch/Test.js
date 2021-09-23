import Sketch from "react-p5";

const Test = (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    //p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = (p5) => {
    p5.text(props.name, 60, 250);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} class="" />
    </div>
  );
};

export default Test;
