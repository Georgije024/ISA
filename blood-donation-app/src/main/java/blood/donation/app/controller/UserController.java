package blood.donation.app.controller;

import blood.donation.app.model.LoginUser;
import blood.donation.app.model.User;
import blood.donation.app.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        String tempEmail = user.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)){
            User userObj = userService.fetchUserByEmail(tempEmail);
            if(userObj != null){
                return new ResponseEntity<>("Korisnik sa tom adresom vec postoji", HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(userService.saveUser(user),HttpStatus.OK);
    }

    @GetMapping("/survey/{userId}")
    public User survey(@PathVariable("userId") String userId){
        return userService.takeSrvey(Long.valueOf(userId));
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable("userId") String userId){
        return userService.getUser(Long.valueOf(userId));
    }

    @PostMapping("/login")
    public ResponseEntity<?> checkUser(@RequestBody LoginUser loginUser){
        User user = userService.checkUser(loginUser);
        if(user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
