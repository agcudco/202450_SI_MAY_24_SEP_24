package ec.edu.espe.webservices;

import java.util.List;

import ec.edu.espe.model.Producto;
import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public interface ProductService {

	@WebMethod
	Producto getById(int id);
	
	@WebMethod
    void saveProdct(Producto producto);

    @WebMethod
    List<Producto> getAllProducts();
}
