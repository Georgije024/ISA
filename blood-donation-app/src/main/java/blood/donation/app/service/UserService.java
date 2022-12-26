package blood.donation.app.service;

import blood.donation.app.model.LoginUser;
import blood.donation.app.model.User;
import blood.donation.app.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@Slf4j
public class UserService{

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

    public User checkUser(LoginUser loginUser) {
        return null;
    }

    public User takeSrvey(Long userId) {
        User user = userRepository.findById(userId).get();
        user.setSurvey(true);
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).get();
    }


    public User login(LoginUser loginUser) {
        User user = fetchUserByEmail(loginUser.getEmail());
        if(user.getPassword().equals(loginUser.getPassword())){
            return user;
        }
        return null;
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email).get();
//        User user = new User();
//        List<User> users = userRepository.findAll();
//        for(User u : users){
//            if(u.getEmail().equals(email)){
//                return u;
//            }
//        }
//        return null;
    }
}
