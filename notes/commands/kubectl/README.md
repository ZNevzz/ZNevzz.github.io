# KUBE CTL Commands

- [Official Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## CLUSTER, NODE, INFO

## DEPLOY

### CREATE

### APPLY

### QUERY

- kubectl get pods --show-labels
- kubectl get pods --selector=app=nginx
- kubectl get pod my-pod -o yaml                # Get a pod's YAML
- kubectl logs -l name=myLabel                        # dump pod logs, with label name=myLabel (stdout)


## DEBUGGING

- kubectl get events --selector=app=nginx

### 0/1 Node available. Taint present

[concept](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) , 
[direct](https://stackoverflow.com/questions/53381739/kube-system-pod-warning-failedscheduling-default-scheduler-no-nodes-available-t) , [others](https://managedkube.com/kubernetes/k8sbot/troubleshooting/pending/pod/2019/02/22/pending-pod.html#introduction-troubleshooting-pending-pods)	

- kubectl describe node node1 | grep Taint		# fetch Taint <key>
- kubectl taint node node1 <key>:NoSchedule-

### LOGS

### EXEC

## QUICKIES


### PLAYGROUND

#### katacoda

#### labs.play-with-k8s

- kubeadm config images pull;kubeadm init --apiserver-advertise-address $(hostname -i) --pod-network-cidr 10.5.0.0/16;kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml;echo "source <(kubectl completion bash)" >> ~/.bashrc; echo "Completed..."


##### Quickstart images

- kubectl create deployment ngingx --image=nginx
- kubectl create deployment python39 --image=python:3.9
- kubectl create deployment java16 --image=openjdk:16-slim-buster
- kubectl apply -f https://k8s.io/examples/application/guestbook/redis-master-deployment.yaml
- kubectl create deployment first-deployment --image=katacoda/docker-http-server
- kubectl apply -f /opt/kubernetes-dashboard.yaml



### VARIABLES

- T=$(kubectl get ns jsonpath='items[*].metadata[?@name=="default"].name)
- NS=$(kubectl get ns -o jsonpath='
- PO=$(
kubectl get po --selector=app=ngingx -o jsonpath="{.items[0].metadata.name}"
)

- kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'
- 


#### NAMESPACE

#### POD

- EXPORT POD=$(
kubectl get pods -o 
)
- kubectl get po POD
