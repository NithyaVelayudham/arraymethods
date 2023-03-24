// 1. array methods of tostring();
function arraytostring()
{
    var a= String(document.getElementById("num1").value);
    let text = a.split(",");
    document.getElementById("demo").innerHTML= text.toString();
} 
// 2. array methods of pop();
function pop(){
    const a= String(document.getElementById("num1").value);
    let text= a.split(",");
    let b= text.pop();
document.getElementById("demo").innerHTML="Popped Element:"+" "+b;
    document.getElementById("d1").innerHTML =
    "Array after Pop Method:"+" "+text;
   /* document.getElementById("demo").innerHTML = 
    "Popped Element:"+ ""+ a + "<br>"+
     "Array after Pop Method:"+" "+text1;*/

}
// 3. array methods of Shift();
function shift(){
    let text = String(document.getElementById("num1").value);
    let text1 = text.split(",");
    let a= text1.shift();
    document.getElementById("demo").innerHTML="The Shift Element is:"+" "+a;
    document.getElementById("d1").innerHTML ="Array after Shift Method:"+" "+text1;;
   
    /*document.getElementById("demo").innerHTML = 
    "The Shift Element is:"+" "+a+ "<br>"+
     "Array after Shift Method is:"+" "+text1;*/
}

// 4. join() array methods;
function join(){
    let text = String(document.getElementById("num2").value);
    let text1=String(document.getElementById("a1").value);
    let a = text.split(",");
    let b= a.join(text1);
    document.getElementById("demo1").innerHTML="The joint Element is:"+" "+text1;
    document.getElementById("d2").innerHTML ="Array after join  Method:"+" "+b;
   
    /*document.getElementById("demo1").innerHTML = 
    "Thejoin Element is:"+" "+text1+ "<br>"+
     "Array after join Method is:"+" "+b;*/
}

// 5. push() array methods;
function push(){
    let text = String(document.getElementById("num2").value);
    let text1=String(document.getElementById("a1").value);
    let a = text.split(",");
    let b= a.push(text1);
    document.getElementById("demo1").innerHTML=
    "The push Element array length:"+" "+b;
    document.getElementById("d2").innerHTML ="Array after push  Method:"+" "+a;
   
    /*document.getElementById("demo1").innerHTML = 
    "The push Element array length is:"+" "+a+ "<br>"+
     "Array after push Method is:"+" "+b;*/
}

// 6. unshift() array methods;
function unshift(){
    let text = String(document.getElementById("num2").value);
    let text1=String(document.getElementById("a1").value);
    let a = text.split(",");
    let b= a.unshift(text1);
    document.getElementById("demo1").innerHTML=
    "The unshift Element array length:"+" "+b;
    document.getElementById("d2").innerHTML ="Array after unshift Method:"+" "+a;
   
    /*document.getElementById("demo1").innerHTML = 
    "The unshift Element array length is:"+" "+b+ "<br>"+
     "Array after unshift Method is:"+" "+a;*/
}
// 7. concat() array methods;
function concat()
{
    let text = String(document.getElementById("num2").value);
    let text1 = String(document.getElementById("a1").value);
    let a = text.split(",");
    let b = text1.split(",");
    const c = a.concat(b);
    document.getElementById("demo1").innerHTML =c;
}
// 8. lenth() array methods;
function length(){
    const text = String(document.getElementById("num2").value);
    let fruits =text .split(",");
    document.getElementById("demo1").innerHTML = fruits;
    let f =String(document.getElementById("a1").value);
    fruits[fruits.length] =f;
document.getElementById("demo1").innerHTML = fruits;
    }

// 9. delete() array methods;
function Delete()
{
    let text = String(document.getElementById("num2").value);
    let a =String(document.getElementById("a1").value);
    let array = text.split(",");
    delete array[a];
    document.getElementById("demo1").innerHTML = array;
}
// 9. slice array methods;
function slice(){
    let text = String(document.getElementById("num3").value);
        let text1 = Number(document.getElementById("a2").value);
        let a = Number(document.getElementById("a3").value);
        const array= text.split(",");
        let c = array.slice(text1,a);
        document.getElementById("demo2").innerHTML = "Sliced Array:"+"  "+c;
    }
    // 9. splice array methods;
    function splice()
    {
        let text = String(document.getElementById("num4").value);
        let n1 = Number(document.getElementById("a4").value);
        let n2 = Number(document.getElementById("a5").value);
        let t1 = String(document.getElementById("a6").value);
        const array = text.split(",");
        let z = array.splice(n1,n2,t1);
        document.getElementById("demo3").innerHTML="The Removed Element :"+" "+z;
        document.getElementById("d3").innerHTML = "Array after splice Method:"+" "+array;
        
        //document.getElementById("demo3").innerHTML =  "Removed elements:"+" "+result+"<br>"+ "Array after Splice:"+" "+array;
    }

