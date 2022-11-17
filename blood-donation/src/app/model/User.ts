import { Address } from "./address";

export class User{
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

    constructor(email:string,password:string,name:string,surname:string,address:Address,phoneNumber:string,jmbg:string,gender:number,job:string,biography:string){
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
    }
}