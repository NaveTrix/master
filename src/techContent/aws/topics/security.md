# AWS Security

## Key Concepts
- **IAM (Identity and Access Management):** Manage users, groups, roles, and permissions.
- **KMS (Key Management Service):** Create and control encryption keys.
- **CloudTrail:** Track user activity and API usage.
- **GuardDuty:** Threat detection and continuous security monitoring.
- **Security Groups & NACLs:** Control network access to resources.
- **Encryption:** At rest and in transit for data protection.

## Real-World Example
- **Least Privilege:** Grant users only the permissions they need using IAM policies.
- **Audit & Compliance:** Use CloudTrail logs for compliance and incident response.

## Interview Q&A
**Q: How do you secure AWS resources?**
A: Use IAM, encryption, security groups, NACLs, and monitoring tools like GuardDuty and CloudTrail.

**Q: What is the difference between IAM roles and users?**
A: Users are for people; roles are for AWS services or federated users.

**Q: How does AWS KMS work?**
A: KMS manages cryptographic keys for your applications and controls their use across AWS services.

## References
- [AWS Security Documentation](https://docs.aws.amazon.com/security/index.html)
- [AWS Security Best Practices](https://aws.amazon.com/architecture/security-identity-compliance/)

## Relevant Image
![AWS Security Overview](https://d1.awsstatic.com/diagrams/product-page-diagrams/AWS-Security@2x.7d7e6b7e2b2e2e7e2e7e2e7e2e7e2e7e.png)
