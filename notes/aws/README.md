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
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Security-Pillar.pdf)

- The ability to protect information, systems, and assets while delivering business value
through risk assessments and mitigation strategies.

- AWS shared responsibility model
	- Security ‘in’ the Cloud - Customer app,data,firewall config
	- Security ‘of’ the cloud - AWS is responsible for protecting the infrastructure 
- Products
    - Identity Management: MFA, IAM, SSO, Organizations, Directory Service, Cognito,  Systems Manager, Config, Secrets Manager
    - Permissions Management: SCP Organizations, ABAC, Access Analyzer, Resouce Access Manager
    - Configure: CloudTrail, Config, GuardDuty, Security Hub, VPC Flow logs, CloudWatch Logs Insights, S3 Object Lock
    - Investigate: GuardDuty, EventBridge, Config events
    - Protecting Networks: Transit Gateway, ACL SUB
    - Encrypt and manage data: IAM, MFA, KMS, Organizations
    - Perform detailed logging, monitoring, alert: ,CloudWatch
    - Perform detailed logging, monitoring, alert: CloudTrail,CloudWatch
    - Resilient storage, versioning, life cycle management: S3, ELB, EBS, RDS
    - VPC, CloudFront, Shield, WAF

- Design Principles
	- Implement a strong identity foundation
	- Enable traceability
	- Apply security at all layers
	- Automate security best practices
	- Protect data in transit and at rest
	- Keep people away from data
	- Prepare for security events
	
#### Reliability
[Read more](https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf)
-  ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to
 meet demand, and mitigate disruptions such as misconfigurations or transient network issues
- Products
	- CloudWatch, IAM, VPC, AWS Trusted Advisor, AWS Shield, CloudTrail, Config, Auto Scaling, CloudWatch,Glacier, CloudFormation, KMS
- Service limits (http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html?ref=wellarchitected-wp)
- Design Principles
	- Test recovery procedures
	- Automatically recover from failure
	- Scale horizontally to increase aggregate system availability
	- Stop guessing capacity
	- Manage change in automation

#### Performance Efficiency
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Performance-Efficiency-Pillar.pdf?ref=wellarchitected-wp)
- ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve
- Products
	- CloudWatch, Auto Scaling, EBS, S3, RDS, DynamoDB, Route53, VPC, AWS Direct Connect, AWS Blog, AWS Lambda, ElastiCache, CloudFront, Snowball 
- Design Principles

	- Democratize advanced technologies
	- Go global in minutes
	- Use serverless architectures
	- Experiment more often
	- Mechanical sympathy

#### Cost Optimization
[Read more](https://d0.awsstatic.com/whitepapers/architecture/AWS-Cost-Optimization-Pillar.pdf?ref=wellarchitected-wp)
- ability to avoid or eliminate unneeded cost or suboptimal resources.
- Products
	-  Cost Explorer, CloudWatch, Trusted Advisor, Aurora, RDS, Direct Connect, CloudFront, Auto Scaling a, 
- Design Principles
	- Adopt a consumption model
	- Measure overall efficiency
	- Stop spending money on data center operations
	- Analyze and attribute expenditure
	- Use managed services to reduce cost of ownership
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
		- Perform operations as code
		- Annotate documentation
		- Make frequent, small, reversible changes
		- Refine operations procedures frequently
		- Anticipate failure
		- Learn from all operational failures


### Global Infrastructure
[Read more](https://aws.amazon.com/about-aws/global-infrastructure/?p=ngi&loc=0)

#### Region vs AZ vs ELocation

- Region: geographical area , ex: us-west1, south, north-east123; don't automatically replicate resources across Regions;global footprint
- AZ: 1+ data centers with redundant power, networking, and connectivity in an AWS Region;Within region, atleast 2 zones connected with low latency; fault tolerant
- Edge Location: CloudFront n/w to deliver content with low latency
- Local Zones: compute, storage, database, and other select AWS services closer to end-users
- Wavelength: deliver single-digit millisecond latencies to mobile devices and end-users; 5G network; reduces the extra network hops
- Outposts: AWS services, infras, operating models to any data center, co-location space, on-premises facility
- FACTS	:
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

- Topics

Storage Classes
Security 
Data Consistency
Cross-Region Replication
Versioning
Lifecycle Management

Presigned URLs
MFA Delete
Bucket Policies

- Features
	- Available: multi AZ
	- Durable: multi Region	
	- Cost Optimized: low cost storage
	- Secure: SSL Certificate, IAM, Encryption, Policies, ACL
	- Scalable: elastic nature
	- Notifications: Lambda,SNS,SQS
	- High Performance: Multipart upload using n/w, Transfer Acceleration using Edge Location
	- Archive: Glacier, Deep Archive
	- Distribution: Directly or source to CloudFront Edge Location
	- Static website hosting
	- Disaster Recovery: Auto replication in multi AZ, manual copy to Regions
	- Best practice: secure access permissions, Cross-Region Replication, versioning, functioning, regularly tested backup
	
- Requests types:

	- PUT
	- COPY
	- POST
	- LIST
	- GET
	- SELECT
	- Lifecycle Transition

- Charges
	- Storage
		- Standard and Intelligent storage class=data is stored within a single month. Price is reduced as you add more and more data within the same month.
		- Intelligent-tiering= Above + fee for monitoring and automating lifecycle
	Access,,,
	- Management: 
		- Amazon S3 inventory: priced per million objects, auditing and reporting for replication and encryption actions
		- Analytics: priced per million objects monitored per month, analyze access patterns
		- Object tagging: priced per 10K tags applied per month, categorize your storage
	- location of your bucket
	- Transfer
		- INTO  S3 From the internet, OUT to  CloudFront: FREE
		- Data transferred via a COPY request: within region FREE, across regions CHARGED
		- Data transferred b/w EC2 and S3: within region FREE, across regions CHARGED
	- Free Tier: 5 GB of Amazon S3 Standard storage, 20,000 Get Requests, 2,000 Put Requests, 15GB of data transfer in, and 15GB of data transfer out each month for one year
	- every version of an object stored or requested
	-

- Security
	- Access: IAM policies, bucket policies, ACLs, Query String Authentication
	- Audit: CloudTrail
	- Encryption: SSE-S3, SSE-C, SSE-KMS(PCI-DSS, HIPAA/HITECH, and FedRAMP industry requirements)
	- Amazon Macie helps you prevent data loss by automatically discovering, classifying, and protecting sensitive data stored, delivers alerts when it detects risk of unauthorized access or inadvertent data leaks
	- Content-MD5 checksums and cyclic redundancy checks (CRCs) to detect data corruption
	- Access Points: create hundreds of access points per bucket, representing a new way of provisioning access to shared data set, decompose one large bucket policy into separate,
	- create a Service Control Policy (SCP) and require that all access points be restricted to a Virtual Private Cloud (VPC), firewalling your data to within your private networks. Using access points, you can easily test new access control policies before migrating applications to the access point, or copying the policy to an existing access point

- Consistency
	- RAW: PUTS in all regions
	- Eventual for overwrite PUTS + DELETES (multi AZ)
	- objects > 100 MB, consider using the Multipart Upload

- Buckets
	- Folder where objects can be read,write,delete
	- Max size of object = 5TB, Max Buckets = 100
	- Naming convention: 3-63 characters,1+ labels, (.) separator, lowercase+numbers+hyphens(not at the beginning)
	- If an object key name consists of a single period (.), or two periods (..), you can’t download the object using the Amazon S3 console
	- S3 Object Tagging to organize your data across all of your S3 buckets and/or prefixes
	
- Storage Classes
	- Standard
		- frequent access,high throughput availability durability, low latency, 99.9%
		- apps, real time access, uploads, storage

	- Standard Infrequent Access
		- less frequent, rapid access, low cost storage, retreival fee
		- database backups, disaster recovery, long-term
		- If an object is less than 128 KB, Amazon S3 charges you for 128 KB. 
	
	- Intelligent-Tiering
		- 2 tier storage: frequent access + lower-cost
		- mall monthly monitoring and automation fee per object(min size=128kb)
		- moves objects after observing for 30 days
		- not suitable for <128kb as charges are applied as standard
		- If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days
		
	- One Zone-IA
		- less availability, resilience
		- 20% less cost
			
	- Glacier
		- archiving rarely accessed data, secure volt feature, lowest cost availability
		- database backups, audit, compliance
		- set rules to migrate from s3 after 120 days
		- minimum storage duration period of 90 days
		- before the 90-day minimum, you are charged for 90 days
		- all other interactions with S3 Glacier require that you use the AWS CLI or code
	
	- Glacier Deep Archive
		- Ideal alternative to magnetic tape libraries
		- 7-10 years storage
		- 12 hours retreival
		- minimum storage duration period of 180 days
		- before the 180-day minimum, you are charged for 180 days
		
		

 ||S3 Standard|S3 Intelligent-Tiering*|S3 Standard-IA|S3 One Zone-IA†|S3 Glacier|S3 Glacier Deep Archive|
|--- |--- |--- |--- |--- |--- |--- |
|Designed for durability|99.999999999% (11 9’s)|99.999999999% (11 9’s)|99.999999999% (11 9’s)|99.999999999% (11 9’s)|99.999999999% (11 9’s)|99.999999999% (11 9’s)|
|Designed for availability|99.99%|99.9%|99.9%|99.5%|99.99%|99.99%|
|Availability SLA|99.9%|99%|99%|99%|99.9%|99.9%|
|Availability Zones|≥3|≥3|≥3|1|≥3|≥3|
|Minimum capacity charge per object|N/A|N/A|128KB|128KB|40KB|40KB|
|Minimum storage duration charge|N/A|30 days|30 days|30 days|90 days|180 days|
|Retrieval fee|N/A|N/A|per GB retrieved|per GB retrieved|per GB retrieved|per GB retrieved|
|First byte latency|milliseconds|millseconds|milliseconds|milliseconds|select minutes or hours|select hours|
|Storage type|Object|Object|Object|Object|Object|Object|
|Lifecycle transitions|Yes|Yes|Yes|Yes|Yes|Yes|

- Retrieval Options
	- Expedited: 1-5 mins, charge per request per GB, request has to less than 250 MB
	- Standard: 3-5 hours, charge per 1k request, lower charge per GB 
	- Bulk: 5-8 hours, lowest charge per 1k+ requests, lowest charge per GB
	- Provisioned Capacity Unit: 
		- upfront fee within a month at a fixed cost to use Expedited 
		- Guarantees that your retrieval capacity for Expedited retrievals will be available when you need it
		- at least 3 expedited retrievals can be performed every 5 minutes and provides up to 150MB/s of retrieval throughput
		- Each unit of provisioned capacity costs $100 per month from the date of purchase
	
- Versioning
	- preserve, retrieve, restore using ID for each object Key
	- bucket states: unversioned, v-enabled, v-suspended

- Cross Region Replication
	- automatic asynchronous

- MFA delete option

- Life Cycle Management
	- move across storage classes based on rules
	- max 1k rules per bucket, whole or subject of objects inside a bucket
	- Standard --> IA: 128kb, 30 days

#### Amazon CloudFront: 


## MUST Read

- [Overview](https://d1.awsstatic.com/whitepapers/aws-overview.pdf)
- [Pricing](https://d1.awsstatic.com/whitepapers/aws_pricing_overview.pdf)
- [Security](https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf)
- [Well Architected](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)
- [DDoS](https://d1.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf)

## BEST PRACTICES

### GENERALIZED

- Enable SSE for data at rest
- Implement least-privilege access
	- SNS: Administrators, Publishers, Subscribers
- Enforce encryption for data in transit using connections over HTTPS (TLS) using the aws:SecureTransport condition in the topic policy to force requests to use SSL



- SQS: least privilege access permissions for SQS queue, Deploy DLQ, Enable SSE using KMS, Encrypt in transit
- Lambda: Least privilege access IAM role, Enable X-Ray, Enable reusing connections with Keep-Alive for NodeJs


### SNS
- Ensure topics aren't publicly accessible by:
	- Avoid creating policies with Principal set to ""
	- 
- IAM role to manage temporary credentials for applications or services that need to access Amazon SNS
- Consider using VPC endpoints to access Amazon SNS
 
 
 
## EXAM SAA CO2

 ----
 
Design Resilient Architectures

1.1 Design a multi-tier architecture solution
1.2 Design highly available and/or fault-tolerant architectures
1.3 Design decoupling mechanisms using AWS services
1.4 Choose appropriate resilient storage

You need to understand the various block, file and object storage technologies such as Amazon EBS, Instance Store, Amazon EFS and Amazon S3, and know their use cases.
multi-tier application architectures
decouple application components using technologies such as Amazon SQS and Amazon SWF.
implementing high availability and fault tolerance.
Amazon Elastic Load Balancing, Amazon Route 53, Amazon RDS Read Replicas and Multi-AZ, AWS Global Accelerator and Amazon CloudFront.
AWS Global Infrastructure in order to determine how to design application stacks to best use the underlying infrastructure architecture


Design High-Performing Architectures

This domain makes up 28% of the exam and includes the following 4 objectives:
2.1 Identify elastic and scalable compute solutions for a workload
2.2 Select high-performing and scalable storage solutions for a workload
2.3 Select high-performing networking solutions for a workload
2.4 Choose high-performing database solutions for a workload

best storage and database services
to increase performance include a caching layer -Amazon ElastiCache, Amazon DynamoDB DAX, or Amazon CloudFront
implement elasticity and scalability to your application architectures.
Elasticity and scalability services at the application, storage, and database layers

Design Secure Applications and Architectures

3.1 Design secure access to AWS resources
3.2 Design secure application tiers
3.3 Select appropriate data security options

authentication, authorization, and access and applying encryption to data.
design isolation and separation through AWS service architecture, Amazon EC2 instance deployment options and Amazon VPC configuration.
creating users, groups, and roles using AWS IAM, multi-factor authentication, AWS Directory Services at a high-level and when to use them.
DDoS mitigation include AWS Auto Scaling, Amazon CloudFront, and Amazon Route 53.
CloudWatch, CloudTrail, when and what penetration testing you are allowed to perform within the AWS cloud and what compliance programs AWS comply with.
Amazon VPC, AWS KMS, AWS CloudHSM, AWS IAM, Amazon Cognito, and AWS Directory Services.

