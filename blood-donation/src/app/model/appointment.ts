import { Center } from "./medicalCenter";
import { User } from "./User";

export interface Appointment {
    id: number;
    date: Date;
    user: User;
    medicalCenter: Center;
    taken: boolean;
}