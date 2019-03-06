

class animal{
    constructor(color){
        this.color = color;
    }
    run(){
        return "check privilage!!";
    }
}

class bear extends animal{
    constructor(){
        super();
        console.log(super.run());
    }
    aaa(){
        console.log('aaa');
    }

    bbb(){
        console.log('bbb');
    }
}
module.exports=bear;