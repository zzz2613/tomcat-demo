FROM default-route-openshift-image-registry.apps.ocp4.inno.com/zzz2613-workspace/tomcat:8.0.51-jre8-alpine

COPY tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF/context.xml

EXPOSE 8080
