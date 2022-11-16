package blood.donation.app.service;

import blood.donation.app.dto.MedicalCenterDTO;
import blood.donation.app.mapper.MedicalCenterMapper;
import blood.donation.app.model.MedicalCenter;
import blood.donation.app.repository.MedicalCenterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalCenterService {

    private final MedicalCenterRepository medicalCenterRepository;
    private MedicalCenterMapper medicalCenterMapper = new MedicalCenterMapper();

    public MedicalCenterService(MedicalCenterRepository medicalCenterRepository) {
        this.medicalCenterRepository = medicalCenterRepository;
    }

    public List<MedicalCenterDTO> getCenters(){
        return medicalCenterMapper.entityListToDtoList(medicalCenterRepository.findAll());
    }
}
