


class person {


    
    private name:string;
   
     a:number=9;



     

     method(name:string,...z):number{
        const a = 6;
        //this.a = a;

        console.log(name);

        let x:any = '5';
        let y = 5;

        if(x === y){
            console.log('equal');
        }




        for(var i = 0; i<z.length;i++){
            console.log(z[i]);
        }

        console.log(this.a);
        console.log(a);
        return 3;

    }

    constructor(a:number=4){
        this.a=a;
    }


}

const a = new person(676);

//a.$name = 'a';


a.method('divyanshu');
a.method('divyanshu',45,'sdfs');
console.log(btoa('password'));


var b = new person(345);
