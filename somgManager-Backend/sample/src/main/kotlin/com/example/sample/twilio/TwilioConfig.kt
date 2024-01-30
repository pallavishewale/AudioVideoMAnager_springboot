package com.example.sample.twilio

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Configuration

@Configuration
@ConfigurationProperties("twilio")
class TwilioConfig {
    var twilioAccountSid: String = ""
    var twilioAuthToken: String = ""
    var twilioTrialNumber:String=""
    var verifyServiceSid:String=""
}