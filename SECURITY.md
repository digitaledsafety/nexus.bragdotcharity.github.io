# Security and Private Key Management

This document outlines industry-standard methods for managing private keys and secrets in the `brag.charity` ecosystem, ensuring they are never exposed in version control.

## 1. Local Development (Standard)

### Environment Variables (`.env`)
For local development and testing, use the `.env` file. A template is provided in `.env.example`.
- **Action:** Copy `.env.example` to `.env` and fill in your keys.
- **Security:** Ensure `.env` is listed in your `.gitignore` file.

### Hardhat Configuration Variables (`vars`)
Hardhat 3 provides a native way to manage secrets securely on your local machine using the `vars` command. This is preferred over `.env` files because the secrets are stored in a centralized location outside the project directory.

**Example Commands:**
```bash
npx hardhat vars set SEPOLIA_PRIVATE_KEY
npx hardhat vars set ALCHEMY_API_KEY
```

To see all set variables:
```bash
npx hardhat vars list
```

## 2. CI/CD Pipelines (Standard)

In automated environments like GitHub Actions, secrets should be stored as **Repository Secrets**.

- **GitHub Actions:**
  - Go to `Settings > Secrets and variables > Actions`.
  - Add `SEPOLIA_PRIVATE_KEY`, `ALCHEMY_API_KEY`, etc.
  - Access them in your workflow YAML using `${{ secrets.VARIABLE_NAME }}`.

## 3. Production Environments (Advanced)

For mainnet deployments or long-running infrastructure, use a dedicated Secret Management Service.

### Cloud Secret Managers
Services like **AWS Secrets Manager**, **Google Cloud Secret Manager**, and **Azure Key Vault** provide:
- Granular access control (IAM).
- Automatic rotation.
- Audit logging.

### HashiCorp Vault
A popular open-source tool for managing secrets, certificates, and other sensitive data. It can be self-hosted or used as a managed service.

### KMS-based Signing (Best Practice)
For maximum security, avoid ever loading the raw private key into your application's memory. Instead, use a **Key Management Service (KMS)** like AWS KMS or GCP KMS.
- The private key is generated and stored inside a Hardware Security Module (HSM).
- Transactions are sent to the KMS API to be signed.
- The raw private key never leaves the HSM.

## 4. Hardware Wallets

For manual deployments, use a hardware wallet (e.g., Ledger, Trezor) through a tool like `hardhat-ledger`. This ensures that the private key never touches an internet-connected computer.

---

**Remember: If a private key is committed to GitHub, it is compromised. Revoke it immediately and move any funds.**
