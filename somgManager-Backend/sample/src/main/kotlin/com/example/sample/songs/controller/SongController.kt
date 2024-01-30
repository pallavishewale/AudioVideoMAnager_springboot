package com.example.sample.songs.controller


import com.example.sample.ConstStrings
import com.example.sample.DTO.ResponseDto
import com.example.sample.songs.DTO.SongReqDto
import com.example.sample.songs.modal.Song
import com.example.sample.songs.service.SongsService
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile


@RestController
@RequestMapping("/songs")
class SongController(private val songService: SongsService) {


    @GetMapping("/{type}")
    fun getAllSongs(@PathVariable type: String): ResponseEntity<ResponseDto> {
        println("************** get Songs data by type api")
        return ResponseEntity.ok(ResponseDto(HttpStatus.OK, songService.getAllSongsByType(type)))
    }

    @CrossOrigin
    @PostMapping
    fun addSong(
            @RequestParam("file") file: MultipartFile,
            @RequestParam("image") image: MultipartFile,
            @RequestParam("songData") songDataJson: String,
    ): ResponseEntity<ResponseDto> {
        val objectMapper = ObjectMapper()
        val songReqDto: SongReqDto = objectMapper.readValue(songDataJson, SongReqDto::class.java)
        var songObj = Song(
                    null,
                    songReqDto.title,
                    songReqDto.artist,
                    songReqDto.genre,
                    songReqDto.duration,
                    songReqDto.releaseYear.toInt(),
                    songReqDto.language,
                    songReqDto.type,
                    image.bytes,
                    file.bytes,
                    songReqDto.user.toLong()
            )
            songService.saveSong(songObj)
            return ResponseEntity.ok().body(ResponseDto(HttpStatus.OK,ConstStrings.NEW_SONG_ADDED))

    }

    @DeleteMapping("/{id}")
    fun deleteSong(@PathVariable id: Long): ResponseEntity<ResponseDto> {
            songService.deleteSong(id)
            return ResponseEntity.ok().body(ResponseDto(HttpStatus.OK,ConstStrings.DELETED_SUCCESFULLY))


    }
}