const A= {
         Y:"Test1", 
         X:{ 
             Z:"Test" 
            } 
        }

// copying an object
const B=Object.create(A);
A.G="hello";

console.log(A,A.X,B.G)
