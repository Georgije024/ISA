package blood.donation.app.mapper;

import blood.donation.app.dto.MedicalCenterDTO;
import blood.donation.app.model.MedicalCenter;

import java.util.List;
import java.util.stream.Collectors;

public class MedicalCenterMapper implements Mapper<MedicalCenter, MedicalCenterDTO> {
    @Override
    public MedicalCenterDTO entityToDto(MedicalCenter entity) {
        MedicalCenterDTO medicalCenterDTO = new MedicalCenterDTO();
        medicalCenterDTO.setId(entity.getId());
        medicalCenterDTO.setName(entity.getName());
        medicalCenterDTO.setRating(entity.getRating());
        medicalCenterDTO.setAddress(entity.getAddress().getStreet() + " " + entity.getAddress().getStreetNumber());
        medicalCenterDTO.setCity(entity.getAddress().getCity().getName());
        medicalCenterDTO.setCountry(entity.getAddress().getCity().getCountry().getName());
        medicalCenterDTO.setIsDeleted(entity.getIsDeleted());
        return medicalCenterDTO;
    }

    @Override
    public List<MedicalCenterDTO> entityListToDtoList(List<MedicalCenter> entities) {
        return entities.stream().map(x -> entityToDto(x)).collect(Collectors.toList());
    }

    @Override
    public MedicalCenter dtoToEntity(MedicalCenterDTO dto) {
        return null;
    }

    @Override
    public List<MedicalCenter> dtoListToEntityList(List<MedicalCenterDTO> dtos) {
        return null;
    }
}
