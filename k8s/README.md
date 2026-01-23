# Kubernetes Deployment for gen-sp

## Prerequisites

1. kubectl configured and connected to your cluster ✅ (You've done this!)
2. `gen-sp` namespace created ✅ (You've done this!)
3. Docker image pushed to DigitalOcean Container Registry

## Step 1: Create Image Pull Secret

Before deploying, create a secret so Kubernetes can pull images from DigitalOcean registry:

```powershell
kubectl create secret docker-registry registry-secret \
  --docker-server=registry.digitalocean.com \
  --docker-username=YOUR_DIGITALOCEAN_USERNAME \
  --docker-password=YOUR_DIGITALOCEAN_ACCESS_TOKEN \
  -n gen-sp
```

Replace:
- `YOUR_DIGITALOCEAN_USERNAME`: Your DigitalOcean username (e.g., `devops@discconsult.ai`)
- `YOUR_DIGITALOCEAN_ACCESS_TOKEN`: Your DigitalOcean API token

## Step 2: Update deployment.yaml

Edit `k8s/deployment.yaml` and replace:
- `YOUR_REGISTRY` with your actual registry name (e.g., `brevet`)

So line 20 should be:
```yaml
image: registry.digitalocean.com/brevet/gen-sp:latest
```

## Step 3: Deploy

```powershell
# Deploy the application
kubectl apply -f k8s/deployment.yaml

# Deploy the service
kubectl apply -f k8s/service.yaml

# Optional: Deploy ingress (if you want to use a domain)
kubectl apply -f k8s/ingress.yaml
```

## Step 4: Verify Deployment

```powershell
# Check deployment status
kubectl get deployments -n gen-sp

# Check pods
kubectl get pods -n gen-sp

# Check service
kubectl get services -n gen-sp

# View logs
kubectl logs -f deployment/gen-sp-deployment -n gen-sp
```

## Step 5: Get External IP

```powershell
kubectl get services -n gen-sp
```

Copy the `EXTERNAL-IP` and update your Cloudflare DNS:
- Add an A record pointing to that IP

## After GitHub Actions Pushes New Image

Once GitHub Actions builds and pushes a new Docker image:

```powershell
kubectl rollout restart deployment/gen-sp-deployment -n gen-sp

# Monitor the rollout
kubectl rollout status deployment/gen-sp-deployment -n gen-sp
```

## Troubleshooting

### Pods not starting
```powershell
# Check pod status
kubectl get pods -n gen-sp

# Describe pod for errors
kubectl describe pod -n gen-sp -l app=gen-sp

# Check logs
kubectl logs -n gen-sp -l app=gen-sp
```

### Image pull errors
- Verify the image pull secret exists: `kubectl get secrets -n gen-sp`
- Check the image name in deployment.yaml matches your registry
- Verify the image exists: `docker pull registry.digitalocean.com/YOUR_REGISTRY/gen-sp:latest`

### Service not accessible
- Check service type is `LoadBalancer`
- Wait a few minutes for DigitalOcean to assign an external IP
- Verify pods are running: `kubectl get pods -n gen-sp`

## Scaling

```powershell
# Scale up to 3 replicas
kubectl scale deployment/gen-sp-deployment --replicas=3 -n gen-sp

# Scale down to 1 replica
kubectl scale deployment/gen-sp-deployment --replicas=1 -n gen-sp
```
