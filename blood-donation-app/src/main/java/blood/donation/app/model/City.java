package blood.donation.app.model;

import javax.persistence.*;
import java.util.List;
@Entity
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @OneToMany
    private List<Address> addressList;
    @ManyToOne
    private Country country;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;
}
