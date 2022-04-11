import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

public class MainServer {
    public static void main(String[] args) throws Exception {
        Server server=new Server(8080);
        String webDir="/Users/harsha/Documents/Jetty/gradleJetty/src/main/webapp";
        WebAppContext webapp = new WebAppContext();
        webapp.setContextPath("/");
        webapp.setDescriptor(webDir+"/WEB-INF/web.xml");

;        webapp.setResourceBase(webDir);
        webapp.setParentLoaderPriority(true);
        server.setHandler(webapp);
        server.start();
        server.join();
    }
}
