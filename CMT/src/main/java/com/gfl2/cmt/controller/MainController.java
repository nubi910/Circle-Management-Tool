package com.gfl2.cmt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/main")
@Slf4j
public class MainController {

	@GetMapping("/hello")
	public String hello() {
		return "Hello, Circle Management!";
	}
	
	
}
