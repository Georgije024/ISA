import { MedicalCenterDTO } from "./medicalCenterDTO";
import { User } from "./User";

export interface Appointment {
    id: number;
    date: Date;
    user: User;
    medicalCenterDTO: MedicalCenterDTO;
    taken: boolean;
}