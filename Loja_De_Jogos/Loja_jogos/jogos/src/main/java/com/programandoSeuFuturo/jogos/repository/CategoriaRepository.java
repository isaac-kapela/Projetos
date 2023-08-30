package com.programandoSeuFuturo.jogos.repository;

import com.programandoSeuFuturo.jogos.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Integer>{

}


