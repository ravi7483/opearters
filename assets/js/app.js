var cl = console.log;

// operators 


//1) assignment

var x; // declration
x =10; // assignment
cl(x);

// 2) addition

var x =10;
var y =20;

var q = 20;
var z = x +y;
cl(z); 

var fname = "sonya";
var wname = "radhika";
var result = fname +" "+ wname;

cl(result);

// substraction

var z = x - y - q;
cl(z);


// Multiplication

var z = x * y * q ;
cl(z);

// Divided 

var z = y / x / q;
cl(z);

// Modulus

var z = y % x ;
cl(z);


var z = 24 % 10;
cl(z);

x = x +1;
cl(x);


x +=1;
cl(x);

var y = 30;
	// y = y +5;
	y +=5;
	cl(y);
	
	y -=5;
	cl(y);
	
	y *= 5;
	cl(y);
	
	y /= 3;
	cl(y);
	
	// x +=1
var y = 20;
    // y +=1;
	y ++;
	cl(y);	
	
	y--;
	cl(y);

// equality operaters		

// double equal to (==)
				  // ONLY CHECKS VALUE NOT THERE DATA TYPE
var x = 10;
var y = 10;
var z = "10";
var p = 20;
var q = "20";

var result = (x==y);
cl(result); // T

var result = (x==z);
cl(result); // T

var result = (x==p);
cl(result);  // F	

// TRIPLE EQUAL TO OR Strically equal to (===);
							// checks value and datatype as well as
var x = 10;
var y = 10;
var z = "10";
var p = 20;
var q = "20";

var result = (x===y);
cl(result); // T

var result = (x===z);
cl(result); // F

var result = (x===p);
cl(result); // F

var result = (x===q);
cl(result); // F

// NOT Equal to :- it only check value

var x = 10;
var y = 10;
var z = "10";
var p = 20;
var q = "20";

var result = (x !=y);
cl(result); // F

var result = (x !=z);
cl(result); // F

var result = (x !=q);
cl(result); // T

var result = (x !=p);
cl(result); // T


var result = (y !=z);
cl(result); // f

var result = (p !=q);
cl(result) // f

var result = (z !=p);
cl(result); // t

// Strically Equal to

var x = 10;
var y = 10;
var z = "10";
var p = 20;
var q = "20";

var result = (x !==y);
cl(result); // F

var result = (x !==z);
cl(result); // T

var result = (x !==q);
cl(result); // T

var result = (x !==p);
cl(result); //  T

// Assignment operator (=)

var a = 100;
cl(a);

// addition operator (+)

var x =10;
var y = 20;

var result = x+y;
cl(result); 

var fname = "sonya ";
var wname = "Radhika ";

var person = fname + wname;
cl(person);

// substraction operator (-)

result = y -x;
cl(result);
