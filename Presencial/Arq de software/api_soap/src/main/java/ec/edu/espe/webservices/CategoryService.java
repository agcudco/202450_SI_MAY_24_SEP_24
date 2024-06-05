package ec.edu.espe.webservices;

import java.util.List;

import ec.edu.espe.model.Categoria;
import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public interface CategoryService {
	
	@WebMethod
	Categoria getById(int id);

	@WebMethod
	void saveCategoria(Categoria categoria);

	@WebMethod
	List<Categoria> getAllCategorias();

	@WebMethod
	void deleteById(int id);
}
