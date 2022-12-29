package blood.donation.app.service;

import blood.donation.app.dto.AppointmentDTO;
import blood.donation.app.dto.MedicalCenterDTO;
import blood.donation.app.mapper.AppointmentMapper;
import blood.donation.app.mapper.MedicalCenterMapper;
import blood.donation.app.repository.AppointmentRepository;
import blood.donation.app.repository.MedicalCenterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalCenterService {

    private final MedicalCenterRepository medicalCenterRepository;
    private MedicalCenterMapper medicalCenterMapper = new MedicalCenterMapper();
    private AppointmentMapper appointmentMapper = new AppointmentMapper();

    private final AppointmentRepository appointmentRepository;

    public MedicalCenterService(MedicalCenterRepository medicalCenterRepository, AppointmentRepository appointmentRepository) {
        this.medicalCenterRepository = medicalCenterRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public List<MedicalCenterDTO> getCenters(){
        return medicalCenterMapper.entityListToDtoList(medicalCenterRepository.findAll());
    }

    public MedicalCenterDTO getCenter(Long Id) {
        return medicalCenterMapper.entityToDto(medicalCenterRepository.findById(Id).get());
    }

    public AppointmentDTO getAppointment(Long appointmentId) {
        return appointmentMapper.entityToDto(appointmentRepository.findById(appointmentId).get());
    }
}
