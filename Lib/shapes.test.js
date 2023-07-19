const {Circle, Square, Triangle} = require("./shapes")


  describe('Triangle', () => {
    test('Should render correctly', () => {
      const shape = new Triangle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
  });

describe('Circle', () => {
    test('Should render correctly', () => {
      const shape = new Circle();
      var color =('black')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
  });

  describe('Square', () => {
      test('Should render correctly', () => {
        const shape = new Square();
        var color =('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
      });
    });