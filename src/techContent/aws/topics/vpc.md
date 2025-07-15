# AWS VPC (Virtual Private Cloud)

## Key Concepts
- **Virtual Network:** VPC lets you provision a logically isolated section of AWS Cloud.
- **Subnets:** Divide your VPC's IP range into smaller segments.
- **Route Tables:** Control traffic routing within the VPC.
- **Internet Gateway:** Enables internet access for resources in public subnets.
- **NAT Gateway:** Allows private subnet resources to access the internet securely.
- **Security Groups & NACLs:** Control inbound/outbound traffic at instance and subnet levels.
- **Peering & VPN:** Connect VPCs and on-premises networks securely.

## Real-World Example
- **Multi-Tier Web Application:** Deploy web, app, and database tiers in separate subnets for security and scalability.
- **Hybrid Cloud:** Extend on-premises networks to AWS using VPN or Direct Connect.

## Interview Q&A
**Q: What is a VPC and why is it important?**
A: A VPC is a virtual network dedicated to your AWS account, providing control over networking, security, and routing.

**Q: How do you secure resources in a VPC?**
A: Use security groups, NACLs, private subnets, and restrict access via IAM and routing.

**Q: What is the difference between a security group and a NACL?**
A: Security groups are stateful and operate at the instance level; NACLs are stateless and operate at the subnet level.

## References
- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/index.html)
- [VPC Best Practices](https://aws.amazon.com/answers/networking/aws-single-vpc-design/)

## Relevant Image
![AWS VPC Overview](https://d1.awsstatic.com/diagrams/product-page-diagrams/Amazon-VPC@2x.7d7e6b7e2b2e2e7e2e7e2e7e2e7e2e7e.png)
