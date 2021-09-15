/*Question 1

 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 * f
 */


/*Question 2 

0  after zero seconds
1  after one second
2  after two seconds 
3  after three seconds 
4  after four seconds 
----------------------------------------------------------------------------------------------------------------------------------------------------
3
----------------------------------------------------------------------------------------------------------------------------------------------------
true
[ ['carname','bmw' ],['carprice',1000000] ]
----------------------------------------------------------------------------------------------------------------------------------------------------
welcome undefined
----------------------------------------------------------------------------------------------------------------------------------------------------
0
1
----------------------------------------------------------------------------------------------------------------------------------------------------
0
1
4
2
3
*/


/*Question Three
1.String
----------------------------------------------------------------------------------------------------------------------------------------------------
2.NAN means Not A Number
Number , Math operation .....
if(isNaN(inputValue) == true)
----------------------------------------------------------------------------------------------------------------------------------------------------
3.JavaScript code runs in one line at a time manner and there is no possibility of running code in parallel
----------------------------------------------------------------------------------------------------------------------------------------------------
4.polymorphism is one of the behaviours of Object Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors 
*/

/*Question Four
1.
function sumobjectvalues(obj) {
var sum =0 ;
for (var a in obj )
if( typeof (obj[a])==="number"){
sum+=obj[a] ;
}
console.log(sum) ;
    }
    let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  test : "hi" 
}
sumobjectvalues(salaries) ;

5.
var arr=[] ;
arr.push(10) ;
arr.push(5) ;
arr.push(20) ;
arr.push(12) ;
arr.push(50) ;
var x=0
var index ;
for (let i=0 ; i<=arr.length;i++){
if (arr[i]>x)
{
    x=arr[i] ;
    index=i ;
}
}
console.log("the max value is"+x+"and its index is "+index) ;
----------------------------------------------------------------------------------------------------------------------------------------------------
6.
*/

/*Question Five
1.function myobject(name,message)
{
name=this.name ;
message=this.name;
function getname (){
    return name.toString() ;
}

function getmessage (){
return message.toString() ;
}
}

----------------------------------------------------------------------------------------------------------------------------------------------------
const arr = [{ id: 1, username: 'Nuah' }, { id: 2, username: 'Mohamed' }, { id: 3, username: 'Ahmed' }];

function find(arr, name) {
  const { length } = arr;
  
  const found = arr.some(el => el.username === john);
 return found ;
}
console.log(find(arr, 'john'));
*/