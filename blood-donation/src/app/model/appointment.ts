import { MedicalCenterDTO } from "./medicalCenterDTO";
import { Staff } from "./staff";
import { User } from "./User";

export interface Appointment {
    id: number;
    date: Date;
    user: User;
    medicalCenterDTO: MedicalCenterDTO;
    taken: boolean;
    staff: Staff[];
}