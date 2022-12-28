package blood.donation.app.service;

import blood.donation.app.dto.AppointmentDTO;
import blood.donation.app.mapper.AppointmentMapper;
import blood.donation.app.model.Appointment;
import blood.donation.app.model.MedicalCenter;
import blood.donation.app.model.Staff;
import blood.donation.app.model.User;
import blood.donation.app.repository.AppointmentRepository;
import blood.donation.app.repository.MedicalCenterRepository;
import blood.donation.app.repository.StaffRepository;
import blood.donation.app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;

@Service
public class BloodDonationService {
    private final AppointmentRepository appointmentRepository;
    private final MedicalCenterRepository medicalCenterRepository;
private final StaffRepository staffRepository;
    private final UserRepository userRepository;
    private AppointmentMapper appointmentMapper = new AppointmentMapper();


    public BloodDonationService(AppointmentRepository appointmentRepository, MedicalCenterRepository medicalCenterRepository, StaffRepository staffRepository, UserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.medicalCenterRepository = medicalCenterRepository;
        this.staffRepository = staffRepository;
        this.userRepository = userRepository;
    }

    public List<String> getBloodDonationDays(){
        List<String> days = new ArrayList<String>();

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        String pattern = "dd/MM/yyyy";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);


        for(int i = 0; i <5; i++){
            if(cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY){
                break;
            }
            if(cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY){
                continue;
            }
            String date = simpleDateFormat.format(cal.getTime()) + " " + getDay(cal);


            days.add(date);
            cal.add(Calendar.DATE,1);
        }
    return days;

    }

    private String getDay(Calendar calendar){
        if(calendar.get(Calendar.DAY_OF_WEEK) == Calendar.MONDAY){
            return "Ponedeljak";
        }
        else if(calendar.get(Calendar.DAY_OF_WEEK) == Calendar.TUESDAY){
            return "Utorak";
        }
        else if(calendar.get(Calendar.DAY_OF_WEEK) == Calendar.WEDNESDAY){
            return "Sreda";
        }
        else if(calendar.get(Calendar.DAY_OF_WEEK) == Calendar.THURSDAY){
            return "Četvrtak";
        }
        else{
            return "Petak";
        }
    }

    public String createAppointments(){
        List<MedicalCenter> medicalCenters = medicalCenterRepository.findAll();
        List<Staff> staff = staffRepository.findAll();

        for(MedicalCenter medicalCenter : medicalCenters) {

            Calendar cal = Calendar.getInstance();
            cal.setTime(new Date());
            SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
            Calendar start = Calendar.getInstance();
            Calendar end = Calendar.getInstance();

            for (int i = 0; i < 5; i++) {
                if (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY) {
                    break;
                }
                if (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) {
                    continue;
                }

                start.set(Calendar.HOUR_OF_DAY, 8);
                start.set(Calendar.MINUTE, 0);
                start.set(Calendar.SECOND, 0);
                start.set(Calendar.MILLISECOND, 0);
                end.set(Calendar.HOUR_OF_DAY, 16);
                end.set(Calendar.MINUTE, 0);
                end.set(Calendar.SECOND, 0);
                end.set(Calendar.MILLISECOND, 0);
                LocalDateTime startApp = start.getTime().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
                LocalDateTime endApp = end.getTime().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();

                while (startApp.isBefore(endApp)) {
                    Appointment appointment = new Appointment();
                    appointment.setDate(java.util.Date.from(startApp.atZone(ZoneId.systemDefault()).toInstant()));
                    appointment.setMedicalCenter(medicalCenter);
                    appointment.setStaff(staff);
                    appointmentRepository.save(appointment);
                    startApp = startApp.plusMinutes(30);
                }

//            for(LocalDateTime date = startApp; date.isBefore(endApp); date.plusHours(1)){
//                Appointment appointment = new Appointment();
//                appointment.setDate(java.util.Date.from(date.atZone(ZoneId.systemDefault()).toInstant()));
//                appointmentRepository.save(appointment);
//                date.plusMinutes(30);
//            }
                cal.add(Calendar.DATE, 1);
                start.add(Calendar.DATE, 1);
                end.add(Calendar.DATE, 1);
            }
        }
        createAppointmentsUser1(staff);
        return "true";
    }

    private void createAppointmentsUser1(List<Staff> staff){
        MedicalCenter medicalCenter = medicalCenterRepository.findById(Long.valueOf(1)).get();
        User user = userRepository.findById(Long.valueOf(1)).get();
        Calendar cal = Calendar.getInstance();

        cal.set(2021, 5, 25,8,30);
        Appointment appointment = new Appointment();
        appointment.setDate(cal.getTime());
        appointment.setMedicalCenter(medicalCenter);
        appointment.setUser(user);
        appointment.setStaff(staff);
        appointmentRepository.save(appointment);

        cal.set(2022, 2, 14,11,00);
        Appointment appointment1 = new Appointment();
        appointment1.setDate(cal.getTime());
        appointment1.setMedicalCenter(medicalCenter);
        appointment1.setUser(user);
        appointment1.setStaff(staff);
        appointmentRepository.save(appointment);

        List<Appointment> appointments = user.getAppointments();
        appointments.add(appointment);
        appointments.add(appointment1);
        user.setAppointments(appointments);
        userRepository.save(user);
    }

    public List<AppointmentDTO> getAvaliableAppointments(Long id) {
        List<Appointment> appointments = appointmentRepository.findAll();
        List<Appointment> returnValue = new ArrayList<Appointment>();

        for(Appointment appointment : appointments){
            if(appointment.getMedicalCenter().getId().equals(id) && appointment.isTaken()==false && appointment.getDate().after(new Date())){
                returnValue.add(appointment);
            }
        }
        return appointmentMapper.entityListToDtoList(returnValue);
    }

    public void takeAppointment(Long appointmentId, Long userId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).get();
        User user = userRepository.findById(userId).get();

        appointment.setTaken(true);
        appointment.setUser(user);
        appointmentRepository.save(appointment);

        user.setBloodDonationDate(new Date());

        List<Appointment> appointments = user.getAppointments();
        if(appointment==null){
            appointments = new ArrayList<Appointment>();
        }
        appointments.add(appointment);
        user.setAppointments(appointments);
        userRepository.save(user);
    }

    public List<AppointmentDTO> getAppointments(Long userId) {
        List<Appointment> appointments = appointmentRepository.findAll();
        List<AppointmentDTO> appointmentDTOS = new ArrayList<AppointmentDTO>();

        for(Appointment appointment : appointments){
            if(appointment.getUser()!=null) {
                if (appointment.getUser().getId().equals(userId)) {
                    appointmentDTOS.add(appointmentMapper.entityToDto(appointment));
                }
            }
        }
        return appointmentDTOS;
    }

    public void cancelApointment(Long appId) {
        Appointment appointment = appointmentRepository.findById(appId).get();
        appointment.setTaken(false);
        appointment.setUser(null);
        appointmentRepository.save(appointment);
    }
}
