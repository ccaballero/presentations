---
author: Carlos Eduardo Caballero Burgoa
title: Full Stack Javascript

---
# Fedora 21 Release Party
## full-stack javascript en fedora 21
![alt text](http://localhost:9000/img/fedora.jpg "fedora")

---
![alt text](http://localhost:9000/img/node.png "node.js")
Node.js es un entorno de programación en la capa del servidor basado en el lenguaje de programación ECMAScript.

- Asincrono.
- Orientado a eventos.
- basado en el motor V8.

---
# ssh

```
systemctl enable sshd.service
systemctl start sshd.service
```

---
# node.js / npm

```
yum install nodejs
yum install npm

yum install grunt
yum install grunt-cli
```

---
# git

```
yum install git
```

---
# nginx
![alt text](http://localhost:9000/img/nginx.png "nginx")

```
yum install nginx

systemctl enable nginx.service
systemctl start nginx.service
```

---
# iptables

```
vim /etc/sysconfig/iptables

-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT

service iptables restart
```

---
# couchdb
![alt text](http://localhost:9000/img/couchdb.png "couchdb")

```
yum install couchdb

systemctl enable couchdb.service
systemctl start couchdb.service
```

---
# redis
![alt text](http://localhost:9000/img/redis.png "redis")

```
yum install redis
```

---
# reverse proxy

```
location /some/path/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:3003;
}
```

---
# systemd

```
[Service]
ExecStart=[node binary] /home/srv-node-sample/[main file]
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=node-sample
User=srv-node-sample
Group=srv-node-sample
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
---
# systemd

```
systemctl enable node-sample
systemctl start node-sample
```

---
# Referencias
- http://www.smashingmagazine.com/2013/11/21/introduction-to-full-stack-javascript/
- https://fedoraproject.org/wiki/Features/NodeJS
- https://fedoraproject.org/wiki/Nginx
- https://www.digitalocean.com/community/tutorials/how-to-configure-the-nginx-web-server-on-a-virtual-private-server

---
- https://docs.fedoraproject.org/en-US/Community_Services_Infrastructure/1/html/Security_Policy/HostIptables-Standard-Introduction-Prerequisites.html#id669278
- http://wiki.apache.org/couchdb/Installing_on_Fedora17
- https://binaryhash.wordpress.com/2014/08/09/install-redis-server-on-fedora-20/
- https://www.digitalocean.com/community/tutorials/how-to-deploy-node-js-applications-using-systemd-and-nginx

---
# gracias ...

