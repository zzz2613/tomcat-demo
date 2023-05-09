FROM image-registry.openshift-image-registry.svc:5000/openshift/tomcat:8.0.51-jre8-alpine

COPY tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF/context.xml
COPY index.jsp /usr/local/tomcat/webapps/ROOT/index.jsp

EXPOSE 8080
