FROM docker-private.zzz2613.com:5000/dev/tomcat:8.0.51-jre8-alpine

COPY tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF/context.xml

COPY index_files /usr/local/tomcat/webapps/ROOT/index_files
COPY index.jsp /usr/local/tomcat/webapps/ROOT/index.jsp

EXPOSE 8080
