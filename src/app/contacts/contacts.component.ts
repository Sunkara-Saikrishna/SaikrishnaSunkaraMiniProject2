import { Component, OnInit } from '@angular/core';
import { Contact } from './contact' ;
import { ContactServices } from './contact.sevices';
import { from } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { ResourceLoader } from '@angular/compiler';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  cons: Contact[];   // this should be sorted before display!!!
  arr:string[]; // Hodls Onle names of Contact - using for sorting Mech.
  sorted:Contact[]; // Sorted Contats details
  searched:Contact[]; // Holds search data results. Using Regex.
  hiddenstatus:string;
  txt:string;
  notfound:boolean = false;
  show:boolean= true;
  tempcon : Contact // Using for New Contact insert
  nametext:string = "";
  numbertext:string = "";
  constructor( private contactservices:ContactServices ) 
  { 
    
    this.cons =[]; // Holds contacts from ContactServices.ts (Actual)
   
    this.arr =[];
    this.sorted=[];
    this.searched = [];

    this.cons = this.contactservices.dispCons();
  
    this.sorting();

    this.hiddenstatus = "hidden";
  }


 
  ngOnInit(): void {
  }
  alert(){
    alert("clikced");
  }

  AddContact(){
      this.hiddenstatus = "";

  }
 
  Add(n:string,n1:string){
    
    this.tempcon = new Contact();
    this.tempcon.name = n;
    this.tempcon.number = n1;
    this.contactservices.contacts.push(this.tempcon);
    this.cons = this.contactservices.dispCons();
    this.sorted = [];
    this.arr=[];
    this.sorting();
    this.hiddenstatus = "hidden";
    //this.refresh();
  }

  search(n:string){
    var re = new RegExp (n.toLocaleLowerCase());
    this.searched = []; // Always when function called array should be empty.
    
   if(n.length>0)
    {
      for(let i=0;i<this.sorted.length;i++)
      {
        if(this.sorted[i].name.toLocaleLowerCase().match(re))
        {
           this.txt = this.sorted[i].name;
           this.searched.push(this.sorted[i]);
        }
        else{
          this.notfound = true;
        }
        
      }
    }

  }

  sorting()
  {
    
    for(let i=0;i<this.cons.length;i++) // pushing names into arr
    {
       this.arr.push(  this.cons[i].name);
    }
    this.arr.sort();                    // Sorting Arr >> names in ascending order
    for(let i=0;i<this.arr.length;i++)
    {
      for(let j=0; j<this.cons.length;j++)
      {
        if(this.cons[j].name == this.arr[i] )
        {
          this.sorted.push(this.cons[j]); // this hold the sorted Data. [sorted]>> Contact Objects
          break;

        }
      }
    }

  }

  delete(c:Contact) // Removing from both arrays Sorted and Cons (main array)
  {
   
   const index = this.sorted.indexOf(c);
   const index1 = this.cons.indexOf(c);

   console.log("The index of the value is: "+index);
   console.log("Index from Cons Array is: "+ index1);

   var remove = this.sorted.splice(index,1);
   var remove1 = this.cons.splice(index1,1);

   console.log(remove);
   console.log(remove1);  
 }

  refresh(){
    window.location.reload();
  }




}
