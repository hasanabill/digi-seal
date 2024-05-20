# DigiSeal

DigiSeal is a web application designed to facilitate secure communication through the generation, encryption, and decryption of RSA keys. Users can generate their own public and private keys, encrypt messages using a recipient's public key, and decrypt messages using their own private key.

## Features

- **Generate RSA Key Pairs**: Users can generate RSA key pairs based on a passphrase.
- **Encrypt Messages**: Encrypt messages using the recipient's public key and sender's private key.
- **Decrypt Messages**: Decrypt messages using the sender's public key and receiver's private key.
- **Download and Upload Keys**: Download and upload keys for ease of use.

## Technologies Used

- React
- JSEncrypt
- CryptoJS
- Tailwind CSS
- DaisyUI

## Installation

To get started with DigiSeal, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/hasanabill/digi-seal.git
   cd digi-seal
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

### Generating Keys

1. Navigate to the "Generate Key" page.
2. Click the "Generate Keys" button.
3. Download the generated public and private keys.

### Encrypting Messages

1. Navigate to the "Encrypt" page.
2. Enter the message you want to encrypt in the "Message" field.
3. Enter the receiver's public key in the "Receiver's Public Key" field.
4. Enter your private key in the "Sender's Private Key" field.
5. Click the "Encrypt" button.
6. The encrypted message will be displayed and can be copied.

### Decrypting Messages

1. Navigate to the "Decrypt" page.
2. Enter the encrypted message in the "Encrypted Message" field.
3. Enter the sender's public key in the "Sender's Public Key" field.
4. Enter your private key in the "Receiver's Private Key" field.
5. Click the "Decrypt" button.
6. The decrypted message will be displayed if the verification is successful.

## Styling

This project uses Tailwind CSS and DaisyUI for styling. The configuration files for Tailwind CSS are `tailwind.config.js` and `postcss.config.js`.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

## Contact

For any questions or feedback, please contact [hasanabilna@gmail.com](mailto:hasanabilna@gmail.com).

---

Thank you for using DigiSeal! We hope this tool helps you secure your communications effectively.
