package blood.donation.app.repository;

import blood.donation.app.model.MedicalCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalCenterRepository extends JpaRepository<MedicalCenter,Long> {
}
