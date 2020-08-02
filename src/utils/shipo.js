class Shipo {
    constructor (x, y, rotation) {
        this.x = x
        this.y = y
        this.rotation = rotation
    }

    rotateRight = () => {
        this.rotation = (this.rotation + 90)%360
      }
    
    rotateLeft = () => {
        this.rotation = (this.rotation + 270)%360
      }
    
    move = () => {
        switch(this.rotation) {
          case (0):
            if (this.x === 7) return
            this.x++
            break;
          case (90):
            if (this.y === 7) return
            this.y++
            break;
          case (180):
            if (this.x === 1) return
            this.x--
            break;
          case (270): 
          if (this.y === 1) return
            this.y--
            break;
        }
      }

    print = () => {
        console.log(this.x , this.y, this.rotation)
    }
}

export default Shipo