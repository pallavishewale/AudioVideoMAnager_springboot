package com.example.sample.DTO

import org.springframework.http.HttpStatus

class ResponseDto (
        var status:HttpStatus,
        var result:Any
){

}