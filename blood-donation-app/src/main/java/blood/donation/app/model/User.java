package blood.donation.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique=true)
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
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Appointment> appointments;
    @Column
    private boolean survey = false;
    @Column
    private Date bloodDonationDate;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;

}
