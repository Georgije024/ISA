package blood.donation.app.controller;

import blood.donation.app.service.BloodDonationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping()
    public ResponseEntity<String> createAppointments(){
        return null;
    }
}
