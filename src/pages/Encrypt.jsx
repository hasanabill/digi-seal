import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';

const Encrypt = () => {
    const [receiverPublicKey, setReceiverPublicKey] = useState('');
    const [senderPrivateKey, setSenderPrivateKey] = useState('');
    const [plainText, setPlainText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const encryptMessage = () => {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(receiverPublicKey);
        const encrypted = encrypt.encrypt(plainText);

        const sign = new JSEncrypt();
        sign.setPrivateKey(senderPrivateKey);
        const hash = CryptoJS.SHA256(plainText).toString();
        const signed = sign.sign(hash, CryptoJS.SHA256, "sha256");

        setEncryptedText(encrypted + "::" + signed);
    };

    const uploadKey = (e, type) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (type === 'public') {
                setReceiverPublicKey(event.target.result);
            } else {
                setSenderPrivateKey(event.target.result);
            }
        };
        reader.readAsText(e.target.files[0]);
    };

    return (
        <div>
            <h3>Encrypt Message</h3>
            <textarea
                value={plainText}
                onChange={(e) => setPlainText(e.target.value)}
                placeholder="Enter message"
                rows="5"
                cols="50"
            ></textarea>
            <div>
                <h3>Receivers Public Key</h3>
                <textarea
                    value={receiverPublicKey}
                    onChange={(e) => setReceiverPublicKey(e.target.value)}
                    placeholder="Enter receiver's public key"
                    rows="5"
                    cols="50"
                ></textarea>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'public')} />
            </div>
            <div>
                <h3>Senders Private Key</h3>
                <textarea
                    value={senderPrivateKey}
                    onChange={(e) => setSenderPrivateKey(e.target.value)}
                    placeholder="Enter your private key"
                    rows="5"
                    cols="50"
                ></textarea>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'private')} />
            </div>
            <button onClick={encryptMessage}>Encrypt</button>
            <div>
                <h3>Encrypted Message</h3>
                <textarea value={encryptedText} readOnly rows="5" cols="50"></textarea>
            </div>
        </div>
    );
};

export default Encrypt;
