package blood.donation.app.repository;

import blood.donation.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<User,Long> {

    public User findByEmail(String emailid);
}
