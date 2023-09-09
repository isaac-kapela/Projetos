package com.programandoSeuFuturo.jogos.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;


@Entity
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String nome;

    private String descricao;

    @Size(max = 5000, message = "O link da foto não pode ser maior do que 5000 caracteres!")
    private String imagem;

   @NotNull
    private double preco;

    @JsonProperty("esta_favoritado")
    private boolean estaFavoritado;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    @JsonIgnoreProperties("jogos")
    private  Categoria categoria;




    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public boolean isEstaFavoritado() {
        return estaFavoritado;
    }

    public void setEstaFavoritado(boolean estaFavoritado) {
        this.estaFavoritado = estaFavoritado;
    }



}
