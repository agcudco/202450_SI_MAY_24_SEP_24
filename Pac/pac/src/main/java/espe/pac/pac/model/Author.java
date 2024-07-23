package espe.pac.pac.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "autor")
public class Author {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private String lastName;

	private String dni;

	private Date dateBirth;

	private String country;

	@OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Book> books;

	/**
	 * @param id
	 * @param name
	 * @param lastName
	 * @param dni
	 * @param dateBirth
	 * @param country
	 * @param books
	 */
	public Author(Long id, String name, String lastName, String dni, Date dateBirth, String country, List<Book> books) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.dni = dni;
		this.dateBirth = dateBirth;
		this.country = country;
		this.books = books;
	}

	/**
	 * @param id
	 * @param name
	 * @param lastName
	 * @param dni
	 * @param dateBirth
	 * @param country
	 */
	public Author(Long id, String name, String lastName, String dni, Date dateBirth, String country) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.dni = dni;
		this.dateBirth = dateBirth;
		this.country = country;
	}

	/**
	 * 
	 */
	public Author() {
		// TODO Auto-generated constructor stub
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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @return the dni
	 */
	public String getDni() {
		return dni;
	}

	/**
	 * @param dni the dni to set
	 */
	public void setDni(String dni) {
		this.dni = dni;
	}

	/**
	 * @return the dateBirth
	 */
	public Date getDateBirth() {
		return dateBirth;
	}

	/**
	 * @param dateBirth the dateBirth to set
	 */
	public void setDateBirth(Date dateBirth) {
		this.dateBirth = dateBirth;
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
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
