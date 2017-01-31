const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0; 

        this._tail = new Node();
        this._head = new Node();

        this.mass_index = [];
        this.revers_mas = [];

        this.mass_buff = [];

        this.count = 1;
    }

    append(data) {       
        this.count = 1;
        if(this.length==0){
            this._tail.data = data;
            this._tail.prev = null;
            this._tail.next = null;

            this._head.data = data;
            this._head.prev = null;
            this._head.next = null;

            this.mass_index[this.length] = this._tail.data;

            this.length++;

           /* console.log("first tail");
            console.log(this._tail);
            console.log("_________________________");
            console.log("Second head");
            console.log(this._head);
            console.log("_________________________");
            console.log("Length - "+this.length);
            console.log("////////////////////////////////////////////");*/
        }else if(this.length==1){
            
            this._head.data = this._head.data; //42
            this._tail.data = data; //123

            this._tail.next = this._head.data; //42
            this._tail.prev = null; //null

            this._head.prev = this._tail.data; //123
            this._head.next = null; //null
            
            this.mass_index[this.length] = this._tail.data;

            this.length++;

        }else if(this.length>1){

            this._head.next = this._tail.next; //42
            this._head.data = this._tail.data;//123
            
            this._tail.data = data;//413
            this._head.prev = this._tail.data//413

            this._tail.next = this._head.data;//123
            this._tail.prev = null;
            
            this.mass_index[this.length] = this._tail.data;

            this.length++;                 
        }       
    }

    head() {
        if(this.count==0){            
            return null;
        }else{            
            return this.mass_index[0];
        }        
    }

    tail() {
        if(this.count==0){            
            return null;
        }else{            
            this.len = this.mass_index.length;
            return this.mass_index[this.len-1];
        }        
    }

    at(index) {
        this.count = 1;
        return this.mass_index[index];
    }

    insertAt(index, data) {
        this.count = 1;
        this.count_ins = 0;
        this.new_var = 0;
        this.len = this.mass_index.length; 
        for(var i=0; i<this.len; i++){
            this.revers_mas[i] = this.mass_index[i];
        }
    
        for(var x=0; x<this.len; x++){
            if(index==x){
                 this.mass_buff[index] = data;
                 this.count_ins++; 
            }if(index<x){
                this.mass_buff[this.count_ins] = this.revers_mas[x-1];
                this.count_ins++;
            }else{
                this.mass_buff[this.count_ins] = this.revers_mas[x];
                this.count_ins++; 
            }            
        }

        this.length = 0;
        for(var y=0; y<this.len+1;y++){
            this.new_var = this.mass_buff[y];
            this.append(this.new_var);
        }
    }

    isEmpty() {
        this.count = 1;
        if(this.length==0){
            return true;
        }else if(this.length>0){
            return false;
        }
    }

    clear() {
        this._tail.data = null;
        this._tail.prev = null;
        this._tail.next = null;

        this._head.data = null;
        this._head.prev = null;
        this._head.next = null;

        this.length=0;

        this.count = 0;
    }

    deleteAt(index) {
        this.count = 1;
        this.count_del = 0;
        this.new_var = 0;
        this.len = this.mass_index.length; 
        for(var i=0; i<this.len; i++){
            this.revers_mas[i] = this.mass_index[i];
        }
        this.length = 0;
        for(var x=0; x<this.len; x++){
            if(index==this.revers_mas[x]){
                continue;
            }
            this.mass_buff[this.count_del] = this.revers_mas[x];
            this.new_var = this.mass_buff[this.count_del];
            this.count_del++;           
            this.append(this.new_var);
        }       
    }

    reverse() {
        this.count = 1;
        this.count_rev = 0;
        this.new_var = 0;
        this.len = this.mass_index.length; 
        for(var i=this.len; i>0; i--){
            this.revers_mas[this.count_rev] = this.mass_index[i-1];
            this.count_rev++;
        }
        this.length = 0;
        for(var x=0; x<this.len; x++){
            this.new_var = this.revers_mas[x];
            this.append(this.new_var);
        }
    }

    indexOf(data) {
        this.count = 1;
        for(var i=0;i<this.mass_index.length;i++){
            if(this.mass_index[i]==data){
                return i;
            }else if((i==this.mass_index.length-1)&&(data!=this.mass_index[this.mass_index.length-1])){
                return -1;
            }
        }
    }
}

module.exports = LinkedList;
