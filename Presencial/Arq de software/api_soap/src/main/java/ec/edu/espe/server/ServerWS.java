package ec.edu.espe.server;

import ec.edu.espe.webservices.ProductoServices;
import ec.edu.espe.webservices.impl.ProductServicesImpl;
import jakarta.xml.ws.Endpoint;

public class ServerWS {

	public static void main(String[] args) {
		String url = "http://0.0.0.0/8088";
		Endpoint.publish(url, 
				new ProductServicesImpl());
		System.out.println(url + " deployed");
	}

}
