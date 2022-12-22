package blood.donation.app.controller;

import blood.donation.app.dto.AppointmentDTO;
import blood.donation.app.model.Appointment;
import blood.donation.app.model.MedicalCenter;
import blood.donation.app.service.BloodDonationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("blood")
public class BloodDonationController {

    private final BloodDonationService bloodDonationService;

    public BloodDonationController(BloodDonationService bloodDonationService) {
        this.bloodDonationService = bloodDonationService;
    }

    @GetMapping()
    public ResponseEntity<List<String>> getBloodDonationDays(){
        List<String> days = bloodDonationService.getBloodDonationDays();
        if(days != null){
            return new ResponseEntity<>(days, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/createAppointments")
    public ResponseEntity<String> createAppointments(){
        bloodDonationService.createAppointments();
        return null;
    }

    @PostMapping("/takeAppointment/{appointmentId}/{userId}")
    public ResponseEntity<String> takeAppointment(@PathVariable("appointmentId") String appointmentId,@PathVariable("userId") String userId){
        bloodDonationService.takeAppointment(Long.valueOf(appointmentId),Long.valueOf(userId));
        return null;
    }

    @PostMapping("/cancelAppointment/{appId}")
    public ResponseEntity<String> cancelApointment(@PathVariable("appId") String appId){
        bloodDonationService.cancelApointment(Long.valueOf(appId));
        return null;
    }

    @GetMapping("/appointments/{centerId}")
    public List<AppointmentDTO> getAvaliableAppointments(@PathVariable("centerId") String id) {
        List<AppointmentDTO> appointments = bloodDonationService.getAvaliableAppointments(Long.valueOf(id));
        return appointments;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<AppointmentDTO>> getAppointmentsByUser(@PathVariable("userId") String userId){
        List<AppointmentDTO> appointmentDTOS = bloodDonationService.getAppointments(Long.valueOf(userId));
        if(appointmentDTOS != null){
            return new ResponseEntity<>(appointmentDTOS, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
