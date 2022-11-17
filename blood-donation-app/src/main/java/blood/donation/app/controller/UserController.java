package blood.donation.app.controller;

import blood.donation.app.model.User;
import blood.donation.app.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
