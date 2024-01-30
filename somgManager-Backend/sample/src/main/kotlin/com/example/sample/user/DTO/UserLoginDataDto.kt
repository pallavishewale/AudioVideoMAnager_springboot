package com.example.sample.user.DTO

import lombok.Getter
import lombok.Setter

@Getter
@Setter
class UserLoginDataDto(
        val username:String,
       val  password:String
) {

}