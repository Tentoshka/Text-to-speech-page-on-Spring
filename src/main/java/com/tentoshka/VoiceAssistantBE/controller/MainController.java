package com.tentoshka.VoiceAssistantBE.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String index(@RequestParam(value = "text", defaultValue = "Hello, World!") String text, Model model) {
        model.addAttribute("text", text);
        return "index";
    }
}
