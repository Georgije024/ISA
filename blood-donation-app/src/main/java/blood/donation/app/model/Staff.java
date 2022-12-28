package blood.donation.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column
    private String surname;
    @Column
    private String phoneNumber;
    @Column
    private String jmbg;
    @Column
    private UserRole userRole;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;
}
