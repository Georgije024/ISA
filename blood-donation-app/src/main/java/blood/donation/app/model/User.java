package blood.donation.app.model;

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
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String phoneNumber;
    @Column
    private String jmbg;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @Column
    private Gender gender;
    @Column
    private String job;
    @Column
    private String biography;
    @Column
    private UserRole userRole;
    @Column
    private boolean survey = false;
    @Column
    private Date bloodDonationDate;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;

}
