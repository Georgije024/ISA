package blood.donation.app.dto;

import blood.donation.app.model.MedicalCenter;
import blood.donation.app.model.Staff;
import blood.donation.app.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private Long id;
    private Date date;
    private User user;
    private MedicalCenterDTO medicalCenterDTO;
    private boolean taken;
    private List<Staff> staff;
}
