package com.example.sample.user.controller


import com.example.sample.ConstStrings
import com.example.sample.DTO.ResponseDto
import com.example.sample.twilio.TwilioSmsService

import com.example.sample.user.DTO.UserLoginDataDto
import com.example.sample.user.modal.User
import com.example.sample.user.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class UserController(private val userService :UserService,private val twilioSmsService:TwilioSmsService) {
    @CrossOrigin
    @GetMapping
    fun getAllUsers():ResponseEntity<ResponseDto>{
        return ResponseEntity.ok(ResponseDto(HttpStatus.OK,userService.getAllUsers()))
    }

    @CrossOrigin
    @PostMapping("/login")
    fun loginUser(@RequestBody logindata :UserLoginDataDto):ResponseEntity<Any>{
            userService.loginUser(logindata)
            return ResponseEntity.ok(userService.loginUser(logindata))
    }

    @PostMapping
    @CrossOrigin
    fun addUser(@RequestBody user:User ,@RequestParam("no") no:String):ResponseEntity<ResponseDto>{
       //    userService.saveUser(user)
           twilioSmsService.verifyPhoneNo("+918850919565")
           twilioSmsService.sendSms("+918850919565")
            return ResponseEntity.ok().body(ResponseDto(HttpStatus.OK,ConstStrings.NEW_USER_ADDED))

    }

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long):ResponseEntity<ResponseDto>{
            userService.deleteUser(id)
            return ResponseEntity.ok().body(ResponseDto(HttpStatus.OK,ConstStrings.DELETED_SUCCESFULLY))
    }
}