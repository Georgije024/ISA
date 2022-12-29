package blood.donation.app.service;

import blood.donation.app.model.LoginUser;
import blood.donation.app.model.User;
import blood.donation.app.model.UserRole;
import blood.donation.app.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
@Slf4j
public class UserService{

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private EmailSenderService emailSenderService;
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    

    public User register(User user) {
        user.setUserRole(UserRole.USER);
        String randomCode = RandomString.make(64);
        user.setVerificationCode(randomCode);
        return userRepository.save(user);
    }

    public void sendVerificationEmail(User user, String siteURL){
        //JavaMailUtil javaMailUtil = new JavaMailUtil();
        //javaMailUtil.sendMail("isamejl2022@gmail.com",user.getVerificationCode());


        String subject = "Please verify your registration";
        String senderName = "ISA2022";
        String mailContent = "<p>Dear"+ user.getName() + " "+ user.getSurname()+ ",</p>";
        mailContent += "<p> Please click the link below to verify registration:</p>";
        String verifyURL = siteURL + "/user/verify?code="+user.getVerificationCode();
        mailContent += "<h3><a href=\""+ verifyURL+ "\">VERIFY</a></h3>";
        mailContent += "<p>Thank you<br>The Blood donation <p>";

        //sendMail();

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("mejlzaisu@gmail.com");
        message.setTo(user.getEmail());
        message.setText(mailContent);
        //message.setText("http://localhost:8086/api/user/verify?code="+user.getVerificationCode());
        message.setSubject(subject);
        try{
            mailSender.send(message);
        }catch(Exception e){
            log.error("failed to send email", e);
            throw new IllegalStateException("failed to send email");
        }
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void sendMail(){
//        emailSenderService.sendEmail("tanasic.georgije1999@gmail.com","subject","content");
//    }

    public boolean verify(String verificationCode){
        User user = userRepository.findByVerificationCode(verificationCode);

        if(user == null || user.isAccountVerified()){
            return false;
        }else{
            userRepository.enable(user.getId());
            return true;
        }
    }


    private String buildEmail(String name, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Confirm your email</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> Thank you for registering. Please click on the below link to activate your account: </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <a href=\"" + link + "\">Activate Now</a> </p></blockquote>\n Link will expire in 15 minutes. <p>See you soon</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
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
