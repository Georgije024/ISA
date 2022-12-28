import { Address } from "./address";
import { Appointment } from "./appointment";
import { UserRole } from "./role";

export class User{
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    address?: Address;
    phoneNumber: string;
    jmbg: string;
    gender: number;
    job: string;
    biography: string;
    survey: boolean;
    bloodDonationDate: Date;
    userRole: UserRole;
    appointments: Appointment[];
    token?: string;

    constructor(id:number,email:string,password:string,name:string,surname:string,address:Address,phoneNumber:string,jmbg:string,gender:number,job:string,biography:string,survey:boolean,bloodDonationDate:Date,userRole:UserRole,appointments:Appointment[]){
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
        this.userRole = userRole;
        this.appointments = appointments;
    }
}