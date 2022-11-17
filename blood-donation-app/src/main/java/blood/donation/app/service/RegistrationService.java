package blood.donation.app.service;

import blood.donation.app.model.User;
import blood.donation.app.repository.RegistrationRepository;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    private final RegistrationRepository registrationRepository;

    public RegistrationService(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }


    public User saveUser(User user){
        return registrationRepository.save(user);
    }

    public User fetchUserByEmail(String email){
        return registrationRepository.findByEmail(email);
    }
}
