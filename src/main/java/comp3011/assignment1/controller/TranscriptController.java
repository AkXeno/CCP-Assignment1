package comp3011.assignment1.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class TranscriptController {

    @PostMapping("/api/v1/transcribe")
    public String transcribe(@RequestParam("audio") MultipartFile audioBlob) {
        System.out.println("Received file: " + audioBlob.getOriginalFilename());
        System.out.println("Content type: " + audioBlob.getContentType());
        System.out.println("Size in bytes: " + audioBlob.getSize());

        return "Server received " + audioBlob.getSize() + " bytes";
    }
}