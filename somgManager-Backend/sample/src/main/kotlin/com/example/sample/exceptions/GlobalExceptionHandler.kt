package com.example.sample.exceptions

import com.example.sample.DTO.ResponseDto
import lombok.extern.apachecommons.CommonsLog
import org.hibernate.query.sqm.tree.SqmNode.log
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler


@CommonsLog
@RestControllerAdvice
class GlobalExceptionHandler : ResponseEntityExceptionHandler() {

    @ExceptionHandler(value = arrayOf(CustomExceptionMessage::class))
    fun handleBadRequestException(ex: CustomExceptionMessage): ResponseEntity<ResponseDto> {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseDto(HttpStatus.BAD_REQUEST, ex.message!!))
    }

    @ExceptionHandler(value = arrayOf(Exception::class))
    fun handleInternalServerErrorException(ex: Exception?): ResponseEntity<ResponseDto> {
       println("Exception :::::"+ex!!)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseDto(HttpStatus.BAD_REQUEST, ex!!.message!!))
    }
}