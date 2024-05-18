import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';

const Decrypt = () => {
    const [senderPublicKey, setSenderPublicKey] = useState('');
    const [receiverPrivateKey, setReceiverPrivateKey] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const decryptMessage = () => {
        const parts = encryptedText.split("::");
        const encrypted = parts[0];
        const signed = parts[1];

        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(receiverPrivateKey);
        const decrypted = decrypt.decrypt(encrypted);

        const verify = new JSEncrypt();
        verify.setPublicKey(senderPublicKey);
        const hash = CryptoJS.SHA256(decrypted).toString();
        const verified = verify.verify(hash, signed, CryptoJS.SHA256);

        if (verified) {
            setDecryptedText(decrypted);
        } else {
            setDecryptedText("Verification failed");
        }
    };

    const uploadKey = (e, type) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (type === 'public') {
                setSenderPublicKey(event.target.result);
            } else {
                setReceiverPrivateKey(event.target.result);
            }
        };
        reader.readAsText(e.target.files[0]);
    };

    return (
        <div>
            <h3>Decrypt Message</h3>
            <textarea
                value={encryptedText}
                onChange={(e) => setEncryptedText(e.target.value)}
                placeholder="Enter encrypted message"
                rows="5"
                cols="50"
            ></textarea>
            <div>
                <h3>Senders Public Key</h3>
                <textarea
                    value={senderPublicKey}
                    onChange={(e) => setSenderPublicKey(e.target.value)}
                    placeholder="Enter sender's public key"
                    rows="5"
                    cols="50"
                ></textarea>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'public')} />
            </div>
            <div>
                <h3>Receivers Private Key</h3>
                <textarea
                    value={receiverPrivateKey}
                    onChange={(e) => setReceiverPrivateKey(e.target.value)}
                    placeholder="Enter your private key"
                    rows="5"
                    cols="50"
                ></textarea>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'private')} />
            </div>
            <button onClick={decryptMessage}>Decrypt</button>
            <div>
                <h3>Decrypted Message</h3>
                <textarea value={decryptedText} readOnly rows="5" cols="50"></textarea>
            </div>
        </div>
    );
};

export default Decrypt;
