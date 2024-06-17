package ec.edu.espe.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "books")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "title", nullable = false, length = 100)
	private String title;

	private String author;

	private int noPaginas;

	@Column(name = "edition")
	private String edicion;

	private String genero;

	@ManyToOne
	@JoinColumn(name = "id_editorial")
	@JsonBackReference
	private Editorial editorial;

	/**
	 * 
	 */
	public Book() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param id
	 * @param title
	 * @param author
	 * @param noPaginas
	 * @param edicion
	 * @param genero
	 * @param editorial
	 */
	public Book(Long id, String title, String author, int noPaginas, String edicion, String genero,
			Editorial editorial) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.noPaginas = noPaginas;
		this.edicion = edicion;
		this.genero = genero;
		this.editorial = editorial;
	}

	/**
	 * @param id
	 * @param title
	 * @param author
	 * @param noPaginas
	 * @param edicion
	 * @param genero
	 */
	public Book(Long id, String title, String author, int noPaginas, String edicion, String genero) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.noPaginas = noPaginas;
		this.edicion = edicion;
		this.genero = genero;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the author
	 */
	public String getAuthor() {
		return author;
	}

	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}

	/**
	 * @return the noPaginas
	 */
	public int getNoPaginas() {
		return noPaginas;
	}

	/**
	 * @param noPaginas the noPaginas to set
	 */
	public void setNoPaginas(int noPaginas) {
		this.noPaginas = noPaginas;
	}

	/**
	 * @return the edicion
	 */
	public String getEdicion() {
		return edicion;
	}

	/**
	 * @param edicion the edicion to set
	 */
	public void setEdicion(String edicion) {
		this.edicion = edicion;
	}

	/**
	 * @return the genero
	 */
	public String getGenero() {
		return genero;
	}

	/**
	 * @param genero the genero to set
	 */
	public void setGenero(String genero) {
		this.genero = genero;
	}

	/**
	 * @return the editorial
	 */
	public Editorial getEditorial() {
		return editorial;
	}

	/**
	 * @param editorial the editorial to set
	 */
	public void setEditorial(Editorial editorial) {
		this.editorial = editorial;
	}

}
