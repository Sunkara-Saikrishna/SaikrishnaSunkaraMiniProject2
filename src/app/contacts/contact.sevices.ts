import {Contact} from './contact';

export class  ContactServices {

    contact:Contact;
    con1:Contact;
    con2:Contact;
    con3:Contact;
    con4:Contact;
    con5:Contact;

    contacts : Contact[];

    constructor() {
        this.contacts = [];

        this.con1 = new Contact();
        this.con2 = new Contact();
        this.con3 = new Contact();
        this.con4 = new Contact();
        this.con5 = new Contact();

        //this.con1.id = 1;
        this.con1.name = "Eric Elliot";
        this.con1.number = "222-555-6575";

       // this.con2.id = 2;
        this.con2.name = "Steve-jobs";
        this.con2.number = "220-657-6754";

       // this.con3.id = 3;
        this.con3.name = "Fred Allen";
        this.con3.number = "210-657-876";

       // this.con4.id = 4;
        this.con4.name = "Steve-Wozniak";
        this.con4.number = "343-675-8786";

        //this.con5.id = 5;
        this.con5.name = "Bill Gates";
        this.con5.number = "234-567-9789";

        this.contacts.push(this.con1);
        this.contacts.push(this.con2);
        this.contacts.push(this.con3);
        this.contacts.push(this.con4);
        this.contacts.push(this.con5);
       


    }

    dispCons() :Contact[]{
        return this.contacts;
    }

} 