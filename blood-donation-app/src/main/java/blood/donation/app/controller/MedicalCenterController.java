package blood.donation.app.controller;

import blood.donation.app.model.MedicalCenter;
import blood.donation.app.service.MedicalCenterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("center")
public class MedicalCenterController {

    private final MedicalCenterService medicalCenterService;

    public MedicalCenterController(MedicalCenterService medicalCenterService) {
        this.medicalCenterService = medicalCenterService;
    }

    @GetMapping()
    public ResponseEntity<List<MedicalCenter>> getCenters(){
        List<MedicalCenter> medicalCenters = medicalCenterService.getCenters();
        if(medicalCenters != null){
            return new ResponseEntity<>(medicalCenters, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
