package blood.donation.app.controller;

import blood.donation.app.model.AuthRequest;
import blood.donation.app.model.LoginUser;
import blood.donation.app.model.User;
import blood.donation.app.service.UserService;
import blood.donation.app.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;
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
        return new ResponseEntity<>(userService.register(user),HttpStatus.OK);
    }

    @GetMapping("/survey/{userId}")
    public User survey(@PathVariable("userId") String userId){
        return userService.takeSrvey(Long.valueOf(userId));
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable("userId") String userId){
        return userService.getUser(Long.valueOf(userId));
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception{
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
            );
        }catch(Exception e){
           throw new Exception("Invalid username/password");
        }
        User user = userService.getByEmail(authRequest.getEmail());
        return jwtUtil.generateToken(authRequest.getEmail(),user.getUserRole().name(),user.getId());
    }

}
