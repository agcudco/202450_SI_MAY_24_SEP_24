package ec.edu.espe.server;


import ec.edu.espe.webservices.impl.CategoriaServiceImpl;
import ec.edu.espe.webservices.impl.ProductServicesImpl;
import jakarta.xml.ws.Endpoint;

public class ServerWS {

	public static void main(String[] args) {
		String url = "http://0.0.0.0/8088/producto";
		Endpoint.publish(url, new ProductServicesImpl());
		System.out.println(url + " deployed");
		
		
		String urlCategoria = "http://0.0.0.0/8088/categoria";
        Endpoint.publish(urlCategoria, new CategoriaServiceImpl());
        System.out.println(urlCategoria + " deployed");
	}

}
