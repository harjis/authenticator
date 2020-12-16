# How to setup

1. Create values.yaml file in the repository 
where authenticator is going to be installed from

```yaml
backendHost: backend-cluster-ip-service
backendPort: 3000
```

2. Create secrets for okta
```shell script
kubectl create secret generic oktaClientId --from-literal OKTA_CLIENTID=my-id
kubectl create secret generic oktaIssuer --from-literal OKTA_ISSUER=my-issuer
```

3. Install authenticator with
````shell script
helm install authenticator authenticator -f authenticator_values.yaml
````

4. Route all backend trafic through the authenticator:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
    - http:
        paths:

          - path: /api/
            pathType: Prefix
            backend:
              service:
                name: authenticator-cluster-ip-service
                port:
                  number: 5000 
```
