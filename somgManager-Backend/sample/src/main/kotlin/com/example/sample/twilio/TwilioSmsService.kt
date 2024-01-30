package com.example.sample.twilio

import com.twilio.Twilio
import org.springframework.beans.factory.annotation.Autowired
import com.twilio.type.PhoneNumber
import com.twilio.rest.api.v2010.account.Message
import com.twilio.rest.verify.v2.Service
import com.twilio.rest.verify.v2.service.Verification
import org.springframework.stereotype.Service as Service1

@Service1
class TwilioSmsService {
    @Autowired
    private lateinit var twilioConfig: TwilioConfig
    val messageBody = "\"Welcome to MeloSongs! \uD83C\uDFB6 Thank you for joining " +
                        "our music community." + "Stay tuned for the latest hits and personalized playlists." +
                        " Feel the rhythm, feel the melody! \uD83C\uDFB5\uD83D\uDCF1 #MeloSongsApp\""

    fun sendSms(to: String) {
        Twilio.init(twilioConfig.twilioAccountSid, twilioConfig.twilioAuthToken)

        val from = PhoneNumber(twilioConfig.twilioTrialNumber)
        val message = Message.creator(PhoneNumber(to), from, messageBody).create()

        println("SMS sent with SID: ${message.sid}")
    }


    fun verifyPhoneNo(toPhoneNo:String){
        Twilio.init(twilioConfig.twilioAccountSid, twilioConfig.twilioAuthToken)
        // Create a Verify service (you can create this in your Twilio console)
       //   val service = Service.creator(twilioConfig.verifyServiceSid).create()

        // Generate a verification code and send it to the user
        val toNo = PhoneNumber(toPhoneNo) // Replace with the user's phone number
        val verification = Verification.creator(twilioConfig.verifyServiceSid,   toPhoneNo , "sms").create()

        println("Verification SID: ${verification.sid}")
        println("Verification : ${verification.status}")
        println("Verification SID: ${verification}")
    }
}