package blood.donation.app.service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class JavaMailUtil {

    public void sendMail(String recepient, String code) throws Exception{
        Properties properties = new Properties();

        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp.gmail.com");
        properties.put("mail.smtp.port","587");

        String myAccountEmail = "isamejl2022@gmail.com";
        String password = "iajqmxywoortqadh";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(myAccountEmail,password);
            }
        });

        Message message = prepareMessage(session,myAccountEmail,recepient,code);
        Transport.send(message);
        System.out.println("Message sent successfully");
    }

    private static Message prepareMessage(Session session, String myAccountEmail, String recepient,String code) {
        Message message = new MimeMessage(session);
        try {
            message.setFrom(new InternetAddress(myAccountEmail));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
            message.setSubject("Confirim email");
            message.setText("http://localhost:8086/api/user/verify?code="+code);
            return message;
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
