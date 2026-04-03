package com.gfl2.cmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfl2.cmt.entity.Circle;

@Repository
public interface CircleRepository extends JpaRepository<Circle, Long> {


	
}
