package ec.edu.espe.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "editorial")
public class Editorial {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name", nullable = false, length = 100)
	private String nombre;

	@Column(name = "country", length = 50)
	private String pais;

	@Column(name = "address")
	private String direccion;

	@Column(name = "phone")
	private String telefono;

	@OneToMany(mappedBy = "editorial")
	@JsonManagedReference
	private List<Book> books;

	/**
	 * 
	 */
	public Editorial() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param id
	 * @param nombre
	 * @param pais
	 * @param direccion
	 * @param telefono
	 */
	public Editorial(Long id, String nombre, String pais, String direccion, String telefono) {
		this.id = id;
		this.nombre = nombre;
		this.pais = pais;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	/**
	 * @param id
	 * @param nombre
	 * @param pais
	 * @param direccion
	 * @param telefono
	 * @param books
	 */
	public Editorial(Long id, String nombre, String pais, String direccion, String telefono, List<Book> books) {
		this.id = id;
		this.nombre = nombre;
		this.pais = pais;
		this.direccion = direccion;
		this.telefono = telefono;
		this.books = books;
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
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * @return the pais
	 */
	public String getPais() {
		return pais;
	}

	/**
	 * @param pais the pais to set
	 */
	public void setPais(String pais) {
		this.pais = pais;
	}

	/**
	 * @return the direccion
	 */
	public String getDireccion() {
		return direccion;
	}

	/**
	 * @param direccion the direccion to set
	 */
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	/**
	 * @return the telefono
	 */
	public String getTelefono() {
		return telefono;
	}

	/**
	 * @param telefono the telefono to set
	 */
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * @return the books
	 */
	public List<Book> getBooks() {
		return books;
	}

	/**
	 * @param books the books to set
	 */
	public void setBooks(List<Book> books) {
		this.books = books;
	}

}
