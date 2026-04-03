package com.gfl2.cmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfl2.cmt.entity.CUser;

@Repository
public interface CUserRepository extends JpaRepository<CUser, Long> {
	
	public CUser findByName(String username);
	
	public CUser findByUid(String uid);
	
	
}
