package ec.edu.espe.webservices;

import ec.edu.espe.model.Producto;
import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;

import java.util.List;

@WebService(serviceName = "ProductWS")
public class ProductoServices {
	
	@WebMethod(operationName = "sellingPrice")
    public double sellingPrice(@WebParam(name="Price") double price){
        return price * 1.05;
    }

	@WebMethod(operationName = "getById")
    public Producto getProductoById(@WebParam(name = "Id") int id){
        return new Producto(id,"Laptop","Laptop hp",1200);
    }

	@WebMethod(operationName = "listAll")
    public List<Producto> listarTodos(){
        return List.of(
                new Producto(1,"Mouse","mouse usb",12),
                new Producto(2,"Teclado","Teclado inalambrico",5)
        );
    }
}
