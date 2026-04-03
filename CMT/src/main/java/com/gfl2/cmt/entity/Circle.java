package com.gfl2.cmt.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Circle {

	@Id
	int id;
	
	@Column(name = "circle_name", nullable = false, insertable = true)
	String circleName;
	
	
}
