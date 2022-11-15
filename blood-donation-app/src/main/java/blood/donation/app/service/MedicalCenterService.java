package blood.donation.app.service;

import blood.donation.app.model.MedicalCenter;
import blood.donation.app.repository.MedicalCenterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalCenterService {

    private final MedicalCenterRepository medicalCenterRepository;

    public MedicalCenterService(MedicalCenterRepository medicalCenterRepository) {
        this.medicalCenterRepository = medicalCenterRepository;
    }

    public List<MedicalCenter> getCenters(){
        return medicalCenterRepository.findAll();
    }
}
