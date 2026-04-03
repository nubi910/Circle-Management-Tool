package com.gfl2.cmt.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@Configuration
public class CMTConfiguration {

	public void addViewControllers(ViewControllerRegistry registry) {
	    registry.addViewController("/{path:[^\\.]*}")
	            .setViewName("forward:/index.html");
	}
}
