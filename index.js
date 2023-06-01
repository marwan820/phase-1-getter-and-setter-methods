// Add your Circle class here
// create a class of Circle
// radius parameter
// use MATH.PI for pi
//define getter methods for -diameter
//                          -circumference
//                          - area 
// which will calculate each value using this. and pi
// setter for the same getter methods 
// Math.sqrt() for area setter 

class Circle {
    constructor(radius){
        this.radius = radius 
    }
   get diameter(){
    return this.radius * 2
   }
   get circumference(){
     return Math.PI * this.diameter
   }
   
   get area (){
     return Math.PI * (this.radius **2)
   } 
   set diameter(newDiameter){
     this.radius= newDiameter/2
   }
   set circumference(newCircumference){
    this.radius = newCircumference/(Math.PI *2)
   }
   set area(newArea){
    this.radius = Math.sqrt(newArea/Math.PI)
   }
   

    

    
   }
    let circle = new Circle(10)

    //console.log(circle.diameter)

    circle.diameter = 20

    console.log(circle.circumference)





