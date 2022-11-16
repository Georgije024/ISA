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
public class MedicalCenter {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;
    @OneToOne
    private Address address;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;
    @Column
    private double rating;
}
