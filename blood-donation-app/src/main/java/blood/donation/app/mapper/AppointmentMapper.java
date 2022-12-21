package blood.donation.app.mapper;

import blood.donation.app.dto.AppointmentDTO;
import blood.donation.app.model.Appointment;

import java.util.List;
import java.util.stream.Collectors;

public class AppointmentMapper implements Mapper<Appointment, AppointmentDTO> {
    private  MedicalCenterMapper medicalCenterMapper = new MedicalCenterMapper();

    @Override
    public AppointmentDTO entityToDto(Appointment entity) {
        AppointmentDTO appointmentDTO = new AppointmentDTO();
        appointmentDTO.setId(entity.getId());
        appointmentDTO.setDate(entity.getDate());
        appointmentDTO.setMedicalCenterDTO(medicalCenterMapper.entityToDto(entity.getMedicalCenter()));
        appointmentDTO.setUser(entity.getUser());
        appointmentDTO.setTaken(entity.isTaken());
        return appointmentDTO;
    }

    @Override
    public List<AppointmentDTO> entityListToDtoList(List<Appointment> entities) {
        return entities.stream().map(x -> entityToDto(x)).collect(Collectors.toList());
    }

    @Override
    public Appointment dtoToEntity(AppointmentDTO dto) {
        return null;
    }

    @Override
    public List<Appointment> dtoListToEntityList(List<AppointmentDTO> dtos) {
        return null;
    }
}
