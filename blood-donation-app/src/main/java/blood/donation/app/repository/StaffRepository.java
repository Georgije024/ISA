package blood.donation.app.repository;

import blood.donation.app.model.Staff;
import blood.donation.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository  extends JpaRepository<Staff,Long> {
}
