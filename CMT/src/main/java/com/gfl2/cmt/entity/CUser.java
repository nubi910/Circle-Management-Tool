package com.gfl2.cmt.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Access;
import jakarta.persistence.AccessType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "TB_C_USER")
@Data
public class CUser {
	
	@Id
	@Column(name = "UID", nullable = false, insertable = true )
	int uid;
	
	@Column(name = "NAME", nullable = false, insertable = true)
	String name;
	
	@Column(name = "REG_DT", nullable = false, insertable = true , options = "DEFAULT CURRENT_TIMESTAMP")
	LocalDateTime reg_dt;
	
	@Column(name = "UPDATE_DT", nullable = true, insertable = true)
	LocalDateTime update_dt;
	
	@OneToMany(mappedBy = "cUser")
	List<CUserRegHistory> cUserRegHistory;
	
	@OneToMany(mappedBy = "cUser")
	List<CUserZuzakHistory> cUserZuzakHistory;
	
	
}
