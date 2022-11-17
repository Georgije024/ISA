package blood.donation.app.service;

import blood.donation.app.model.User;
import blood.donation.app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User fetchUserByEmail(String email){
        List<User> users = userRepository.findAll();
        for(User user: users){
            if(user.getEmail().equals(email)){
                return user;
            }
        }
        return null;
    }
}
