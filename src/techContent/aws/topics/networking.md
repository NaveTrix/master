# AWS Networking & Content Delivery

## Key Concepts
- **Route 53:** Scalable DNS and domain registration service.
- **CloudFront:** Content Delivery Network (CDN) for low-latency delivery.
- **Elastic Load Balancing (ELB):** Distributes incoming traffic across multiple targets.
- **Direct Connect:** Dedicated network connection from on-premises to AWS.
- **VPC Peering & Transit Gateway:** Connect multiple VPCs and on-premises networks.

## Real-World Example
- **Global Web Application:** Use CloudFront for fast content delivery and Route 53 for DNS failover.
- **Hybrid Cloud:** Connect on-premises data centers to AWS using Direct Connect.

## Interview Q&A
**Q: What is AWS CloudFront?**
A: CloudFront is a CDN that delivers data, videos, and APIs globally with low latency.

**Q: How does Route 53 provide high availability?**
A: By using health checks, DNS failover, and routing policies.

**Q: What is the difference between VPC Peering and Transit Gateway?**
A: Peering connects two VPCs directly; Transit Gateway connects multiple VPCs and on-premises networks at scale.

## References
- [AWS Networking Documentation](https://docs.aws.amazon.com/networking/index.html)
- [CloudFront Best Practices](https://aws.amazon.com/cloudfront/)

## Relevant Image
![AWS Networking Overview](https://d1.awsstatic.com/diagrams/product-page-diagrams/Amazon-CloudFront@2x.7d7e6b7e2b2e2e7e2e7e2e7e2e7e2e7e.png)
