package blood.donation.app.dto;

import blood.donation.app.model.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalCenterDTO {
    private Long id;
    private String name;
    private double rating;
    private String address;
    private String city;
    private String country;
    private Boolean isDeleted;
}
