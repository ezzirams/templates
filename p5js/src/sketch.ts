import './style.css'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 800);
  }

  p.draw = () => {
    p.background("#282c34")
  }
}

new p5(sketch);
