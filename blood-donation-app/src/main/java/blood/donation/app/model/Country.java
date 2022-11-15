package blood.donation.app.model;
import javax.persistence.*;
import java.util.List;
@Entity
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @OneToMany
    @Column(nullable = false)
    private List<City> city;
    @Column(columnDefinition = "integer default 0")
    private Boolean isDeleted = false;
}
