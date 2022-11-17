package blood.donation.app.model;

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
@Table(name = "Userrrrtable")
public class User {
    @Id
    private String id;
    @Column(unique = true)
    private String email;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String surname;
    @OneToOne
    private Address address;
    @Column
    private String phoneNumber;
    @Column
    private String jmbg;
    @Column
    private Gender gender;
    @Column
    private String job;
    @Column
    private String biography;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;
}
