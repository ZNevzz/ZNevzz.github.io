# AWS

## Links
[Glossary](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html) |
[Solutions](https://aws.amazon.com/solutions) |
[Whitepapers](http://aws.amazon.com/whitepapers) |
[Knowledge Centre](https://aws.amazon.com/premiumsupport/knowledge-center/) |
[RampUp](https://d1.awsstatic.com/training-and-certification/Learning_Paths/RampUp_Architect_102019_final.pdf) |
[FAQs](https://aws.amazon.com/faqs/) |

## Introduction
- component = code, configuration and AWS Resources that together deliver against a requirement
- workload = identify a set of components that together deliver business value
- Milestones =  key changes in your architecture as it evolves throughout the product lifecycle
- Architecture = being how components work together in a workload.
- technology portfolio = collection of workloads that are required for the business to operate

## AWS Facts

- cheapest EC2 instance type: t2.nano
- expensive regions: EU,HK

### Pillars of the AWS Well-Architected Framework
[Read more](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)

#### Security
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Security-Pillar.pdf?ref=wellarchitected-wp)

	- The ability to protect information, systems, and assets while delivering business value
through risk assessments and mitigation strategies.

	#AWS shared responsibility model
	- Security ‘in’ the Cloud - Customer app,data,firewall config
	- Security ‘of’ the cloud - AWS is responsible for protecting the infrastructure 
	- Data Protection
		- Encrypt and manage data: IAM MFA, KMS, AWS Organizations
		- Perform detailed logging, monitoring, alert: CloudTrail,CloudWatch
		- Resilient storage, versioning, life cycle management: S3, ELB, EBS, RDS
		- Amazon VPC, Amazon CloudFront, AWS Shield, AWS WAF

	- Design Principles

Implement a strong identity foundation
Enable traceability
Apply security at all layers
Automate security best practices
Protect data in transit and at rest
Prepare for security events
	
#### Reliability
[Read more](https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf)
-  ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues
	- CloudWatch, IAM, VPC, AWS Trusted Advisor, AWS Shield, CloudTrail, Config, Auto Scaling, CloudWatch,Glacier CloudFormation, KMS
- Service limits (http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html?ref=wellarchitected-wp)
	- Design Principles

Test recovery procedures
Automatically recover from failure
Scale horizontally to increase aggregate system availability
Stop guessing capacity
Manage change in automation

#### Performance Efficiency
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Performance-Efficiency-Pillar.pdf?ref=wellarchitected-wp)
- ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve
- CloudWatch, Auto Scaling, EBS, S3, RDS, DynamoDB, Route53, VPC, AWS Direct Connect, AWS Blog, AWS Lambda, ElastiCache, CloudFront, Snowball 
	- Design Principles

Democratize advanced technologies
Go global in minutes
Use serverless architectures
Experiment more often
Mechanical sympathy

#### Cost Optimization
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Cost-Optimization-Pillar.pdf?ref=wellarchitected-wp)
- ability to avoid or eliminate unneeded cost or suboptimal resources.
-  Cost Explorer, CloudWatch, Trusted Advisor, Aurora, RDS, Direct Connect, CloudFront, Auto Scaling a, 

	- Design Principles
	
Adopt a consumption model
Measure overall efficiency
Stop spending money on data center operations
Analyze and attribute expenditure
Use managed services to reduce cost of ownership

- Drivers of cost with AWS: compute(hourly), storage(per GB), outbound data transfer(per GB)
- Japanese Consumption Tax

#### Operational Excellence
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Operational-Excellence-Pillar.pdf?ref=wellarchitected-wp)
- ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures
	- AWS CloudFormation = provision resources in an orderly and consistent fashion from your development through production environments
	- AWS Config
	- Amazon CloudWatch
	- Amazon Elasticsearch Service (Amazon ES)
	
	- Design Principles

Perform operations as code
Annotate documentation
Make frequent, small, reversible changes
Refine operations procedures frequently
Anticipate failure
Learn from all operational failures


### Global Infrastructure
[Read more](https://aws.amazon.com/about-aws/global-infrastructure/?p=ngi&loc=0)

#### Region vs AZ vs ELocation

- Region: geographical area , ex: us-west1, south, north-east123; don't automatically replicate resources across Regions;global footprint
- AZ: 1+ data centers with redundant power, networking, and connectivity in an AWS Region;Within region, atleast 2 zones connected with low latency; fault tolerant
- Edge Location: CloudFront n/w to deliver content with low latency
- Local Zones: compute, storage, database, and other select AWS services closer to end-users
- Wavelength: deliver single-digit millisecond latencies to mobile devices and end-users;5G network;reduces the extra network hops
- Outposts: AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility
- stats:
	- Regions = 22(launched) + 4 (announced)
	- AZs = 69
	- LZs = 1
	- EDGE location = 199
	- Regional EDGE Caches = 11
	- Countries = 245
	- Direct Connect Locations = 97


### Products
	
	Compute

EC2: VM aaS

Batch: Batch Jobs

ECR: fully-managed Docker container registry

ECS: fully managed container orchestration service

EKS: Kubernetes on AWS

Elastic Beanstalk: Deploy & manage web applications

EC2 Image Builder: creation, maintenance, validation, sharing, and deployment of Linux or Windows Server image

Lambda: run code without provisioning or managing servers.

Launch Wizard:  SQL Server offers you a guided way of sizing, configuring, and deploying self-managed high availability SQL Server

Lightsail: Offers you everything needed to build an application or website, plus a cost-effective, monthly plan.

Outposts: fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to virtually any datacenter, co-location space

ParallelCluster

Serverless Application Model (AWS SAM)

Serverless Application Repository


	Storage

S3

Backup

EBS

EFS

FSx

S3 Glacier

Snowball

Storage Gateway

	Database: 

Aurora

DocumentDB

DynamoDB

ElastiCache

Managed Apache Cassandra Service

Neptune

QLDB

RDS

Redshift

- Network & CDN:
	VPC
	CloudFront
	Route 53
	API Gateway
	Direct Connect
	AWS App Mesh
	AWS Cloud Map
	Global Accelerator

- Security, Identity, Compliance:
	IAM
	Resource Access Manager
	Cognito
	Secrets Manager
	GuardDuty
	Inspector
	Amazon Macie
	AWS Single Sign-On
	Certificate Manager
	Key Management Service
	CloudHSM
	Directory Service
	WAF & Shield
	Artifact
	Security Hub

- App integration: 
	Step Functions
	Amazon EventBridge
	Amazon MQ
	Simple Notification Service
	Simple Queue Service
	SWF

- Analytics:
	Athena
	EMR
	CloudSearch
	Elasticsearch Service
	Kinesis
	QuickSight
	Data Pipeline
	AWS Glue
	AWS Lake Formation
	MSK

	Machine Learning
Apache MXNet on AWS

CodeGuru Profiler

CodeGuru Reviewer

Comprehend

Deep Learning AMI

DeepComposer

DeepLens

DeepRacer

Elastic Inference

Forecast

Fraud Detector

Kendra

Lex

Machine Learning

Personalize

Polly

Rekognition

SageMaker

Textract

Transcribe

Translate

- Migration
	AWS Migration Hub
	Application Discovery Service
	Database Migration Service
	Server Migration Service
	AWS Transfer for SFTP
	Snowball
	DataSync

- IoT:
	IoT Core
	Amazon FreeRTOS
	IoT 1-Click
	IoT Analytics
	IoT Device Defender
	IoT Device Management
	IoT Events
	IoT Greengrass
	IoT SiteWise
	IoT Things Graph

- BlockChain:
	Amazon Managed Blockchain

- Media Services:
	Elastic Transcoder
	Kinesis Video Streams
	MediaConnect
	MediaConvert
	MediaLive
	MediaPackage
	MediaStore
	MediaTailor
	Elemental Appliances & Software

- Mobile:
	AWS Amplify
	Mobile Hub
	AWS AppSync
	Device Farm
	
- Gaming:
	Amazon GameLift

- AR/VR:
	Amazon Sumerian

	Developer Tools

Cloud9

CodeBuild

CodeCommit

CodeDeploy

CodePipeline

CodeStar

Tools & SDKs 

X-Ray


### Compute

#### EC2: provides resizable compute capacity

- Features: Elastic Computing, Flexible Hosting, AWS Inte, Reliable, Secure, Low Cost	

- AMI: information required to launch an instance
	- Predefined template/ customized
	- includes:
		- A template for the root volume
		- AMI launch permissions
		- block device mapping
	- Types of root device storage for AMIs
		- Instance store (S3) 
		- EBS
		- Instance store vs EBS
			- Creation: Amazon S3 template vs Amazon EBS snapshot
			- Boot time: <5 min vs <1 min 
			- Size: 10 TB vs 16 GB
			- States: running,terminated vs running,stopped,terminated
			- Data: deleted vs persisted even after instance deletion
	- [Types of virtualization](https://cloudacademy.com/blog/aws-ami-hvm-vs-pv-paravirtual-amazon/)
		- PV: provides near native speed, requires some modification
		- HVM: not aware that they are sharing processing time 
	- HVM and EBS combination is recommended

- Instance Types: 
	- ECU, vCPU, Processor & Architecture, ClockSpeed, Memory, Storage, EBS, Network, IPv6, AES-NI, AVX, Turbo Boost
	- Micro: low traffic websites
	- General: Small apps ex: A-,T-,M- 
	- Compute: Highest performance for video,batch,web processing ex: C-
	- Memory: In memory processing like real time processing, SharePoint ex: R-, Z-, X-
	- Storage low latency, high IOPS, NOSQL DB, Data File systems, log processing ex: H-, I-, D-
	- GPU: Graphics optimized EX: G-, P-, F-
	- FPGA: Customize FPGA to perform hardware acceleration
	
	- Notes:
		- T3 instances start in *Unlimited mode* by default, giving users the ability to sustain high CPU performance over any desired time frame while keeping cost as low as possible.
		

- Instance purchasing options:
	- based on PRICE by price desc
		- on-demand: time based, max 20
		- reserved: long-term, up to 75% discount, 1 or 3 year, max 20
		- spot: low compute prices, bid demand-supply, max limit depends on price if increased by 10 dollars
		- dedicated: physical EC2 server,reduce costs by using your existing server-bound software licenses
		- savings plan:  $/hour for a 1 or 3 year term

	- based on FUNCTION
		- burstable: fixed CPU, autoscale to 100%
		- EBS optimized: high IO processing
		- cluster n/w: connected to cluster of ec2
		- dedicated: security



### Storage


#### EBS: provides persistent block-level storage volumes

#### S3: provides cloud storage

- Features
	- Available: multi AZ
	- Durable: multi Region	
	- Cost Optimized: low cost storage
	- Secure: SSL Certificate, IAM, Encryption
	- Scalable: elastic nature
	- Notifications: Lambda,SNS,SQS
	- High Performance: Multipart upload using n/w, Acceleration using Edge Location
	- Archive:
	- Distribution: Directly or source to CloudFront Edge Location
	- Static website hosting
	- Disaster Recovery: Auto replication in multi AZ, manual copy to Regions

- Consistency
	- RAW for PUTS in all regions
	- Eventual for overwrite PUTS + DELETES 

- Buckets
	- Folder where objects can be read,write,delete
	- Max size of object = 5TB, Max Buckets = 100
	- Naming convention: 3-63 characters,1+ labels, (.) separator, lowercase+numbers+hyphens(not at the beginning)
	
- Storage Classes
	- Standard
		- frequent access,high throughput availability durability, low latency, 99.9%
		- apps, real time access, uploads, storage
		- DURABILITY AVAILABILTIY 11 and 4 9s

	- Standard Infrequent Access
		- less frequent, rapid access, low cost storage, retreival fee
		- database backups
		
	- Reduced Redundancy Storage
		-	non critical data, lower durabiltiy availabiltity
		- thumbnails, transcoded media, reproducible data
		
	- Glacier
		- archiving rarely accessed data, secure volt feature, lowest cost availability
		- database backups, audit, compliance
		- set rules to migrate from s3 after 120 days
		
- Retrieval Options
	- Expedited: 1-5 mins, charge per request per GB
	- Standard: 3-5 hours, charge per 1k request, lower charge per GB 
	- Bulk: 5-8 hours, lowest charge per 1k+ requests, lowest charge per GB
