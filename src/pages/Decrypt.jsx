import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';
import Navbar from '../components/Navbar';
import hero from '../assets/hero.jpg'

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
        <>

            <Navbar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
                <div className="container mx-auto p-4">

                    <h3 className="text-2xl font-bold mb-4 text-white">Decrypt Message</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Encrypted Message</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={encryptedText}
                                onChange={(e) => setEncryptedText(e.target.value)}
                                placeholder="Enter encrypted message"
                                rows="5"
                            ></textarea>
                            <button className="btn btn-success mb-4 w-1/4" onClick={decryptMessage}>Decrypt</button>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Sender&apos;s Public Key</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={senderPublicKey}
                                onChange={(e) => setSenderPublicKey(e.target.value)}
                                placeholder="Enter sender's public key"
                                rows="5"
                            ></textarea>
                            <input type="file" className="file-input file-input-bordered w-full bg-slate-500 text-white" onChange={(e) => uploadKey(e, 'public')} />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Decrypted Message</h3>
                            <textarea
                                className="textarea textarea-bordered w-full opacity-60"
                                value={decryptedText}
                                readOnly
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Receiver&apos;s Private Key</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={receiverPrivateKey}
                                onChange={(e) => setReceiverPrivateKey(e.target.value)}
                                placeholder="Enter your private key"
                                rows="5"
                            ></textarea>
                            <input type="file" className="file-input file-input-bordered w-full bg-slate-500 text-white" onChange={(e) => uploadKey(e, 'private')} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Decrypt;
