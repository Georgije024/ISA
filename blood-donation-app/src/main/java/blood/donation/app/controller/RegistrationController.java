package blood.donation.app.controller;

import blood.donation.app.model.User;
import blood.donation.app.service.RegistrationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("register")
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        String tempEmail = user.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)){
            User userObj = registrationService.fetchUserByEmail(tempEmail);
            if(userObj != null){
                return new ResponseEntity<>("Korisnik sa tom adresom vec postoji", HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(registrationService.saveUser(user),HttpStatus.OK);
    }
}
