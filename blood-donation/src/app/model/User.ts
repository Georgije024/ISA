import { Address } from "./address";

export class User{
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    address: Address;
    phoneNumber: string;
    jmbg: string;
    gender: number;
    job: string;
    biography: string;
    survey: boolean;
    bloodDonationDate: Date;

    constructor(id:number,email:string,password:string,name:string,surname:string,address:Address,phoneNumber:string,jmbg:string,gender:number,job:string,biography:string,survey:boolean,bloodDonationDate:Date){
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.jmbg = jmbg;
        this.gender = gender;
        this.job = job;
        this.biography = biography;
        this.survey = survey;
        this.bloodDonationDate = bloodDonationDate;
    }
}