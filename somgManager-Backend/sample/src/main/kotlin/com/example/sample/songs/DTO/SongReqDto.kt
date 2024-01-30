package com.example.sample.songs.DTO

import com.example.sample.user.modal.User
import org.springframework.web.multipart.MultipartFile

class SongReqDto(
        var artist: String="",
        var duration: String="",
        var genre: String="",
        var language: String="",
        var releaseYear: String="",
        var title: String="",
        var type: String="",
        var user: String=""
) {
}