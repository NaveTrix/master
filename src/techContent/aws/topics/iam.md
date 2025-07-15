# AWS IAM (Identity & Access Management)

## Key Concepts
- IAM manages users, groups, roles, and permissions for AWS resources.
- Supports fine-grained access control using policies (JSON documents).
- Enables secure delegation and least-privilege access.

## Real-World Examples

### Example 1: User Management
- Create IAM users for developers with specific permissions.

### Example 2: Role-Based Access
- Assign roles to EC2 instances for S3 access without storing credentials.

### Example 3: Multi-Factor Authentication (MFA)
- Enforce MFA for sensitive operations and root accounts.

## Interview Questions & Answers

**Q1: What is IAM in AWS?**
A: IAM is a service for managing access to AWS resources securely.

**Q2: Real-time: How do you grant temporary access to a third party?**
A: Create an IAM role with limited permissions and use AWS STS for temporary credentials.

**Q3: What is the principle of least privilege?**
A: Grant only the permissions required to perform a task, reducing security risks.

## References
- [AWS IAM Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [IAM Best Practices](https://aws.amazon.com/iam/resources/best-practices/)

![AWS IAM Diagram](https://d1.awsstatic.com/diagrams/iam-diagram.7d7b6e7b8e4b4e6b8e4b4e6b8e4b4e6b8e4b4e6b.png)
*Image Source: AWS*
