# Cryptography

## Key Concepts
- **Encryption:** Protecting data using algorithms (AES, RSA, etc.).
- **Hashing:** One-way transformation for data integrity.
- **Digital Signatures:** Verify authenticity and integrity.
- **PKI (Public Key Infrastructure):** Framework for managing digital certificates.

## Real-World Example
- Using SSL/TLS to encrypt web traffic.

## Interview Q&A
**Q: What is the difference between encryption and hashing?**
A: Encryption is reversible with a key; hashing is one-way.

**Q: What is PKI?**
A: A system for managing public/private keys and digital certificates.

## References
- [Cryptography Basics](https://www.cloudflare.com/learning/ssl/what-is-cryptography/)

## Relevant Image
![Cryptography](https://www.cloudflare.com/img/learning/cryptography/cryptography-diagram.png)

# Advanced Cryptography

## Key Concepts
- **Symmetric vs Asymmetric Encryption:** AES, DES, RSA, ECC
- **Hybrid Encryption:** Combining symmetric and asymmetric for secure key exchange
- **Digital Certificates & PKI:** X.509, certificate authorities, trust chains
- **TLS/SSL:** Secure communication protocols for the web
- **Quantum Cryptography:** Post-quantum algorithms, quantum key distribution
- **Cryptanalysis:** Attacks on cryptographic systems (brute force, side-channel, chosen-plaintext)

## Real-World Example
- Using RSA to securely exchange an AES session key for encrypted messaging.
- Implementing HTTPS with TLS certificates for a secure website.

## Best Practices
- Always use well-vetted libraries (e.g., OpenSSL, libsodium)
- Rotate keys regularly and use strong key management
- Stay updated on cryptographic vulnerabilities

## Interview Q&A
**Q: What is the difference between RSA and ECC?**
A: ECC offers similar security to RSA but with smaller key sizes and better performance.

**Q: What is a digital certificate?**
A: A digital document that uses a digital signature to bind a public key with an identity.

**Q: What is quantum cryptography?**
A: Cryptography that leverages quantum mechanics for secure communication, resistant to quantum attacks.

## References
- [NIST Cryptography](https://csrc.nist.gov/topics/cryptography)
- [Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)

## Diagram
![Advanced Cryptography](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/images/cryptography-diagram.png)
