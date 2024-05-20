import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';
import Navbar from '../components/Navbar';
import hero from '../assets/hero.jpg'

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
        <>
            <Navbar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
                <div className="container mx-auto p-4">

                    <h3 className="text-2xl font-bold mb-4 text-white">Encrypt Message</h3>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Message</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={plainText}
                                onChange={(e) => setPlainText(e.target.value)}
                                placeholder="Enter message"
                                rows="5"
                            ></textarea>
                            <button className="btn btn-info w-1/3 mb-4" onClick={encryptMessage}>Encrypt</button>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white">Receiver&apos;s Public Key</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={receiverPublicKey}
                                onChange={(e) => setReceiverPublicKey(e.target.value)}
                                placeholder="Enter receiver's public key"
                                rows="5"
                            ></textarea>
                            <input type="file" className="file-input file-input-bordered w-full bg-slate-500 text-white" onChange={(e) => uploadKey(e, 'public')} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2 text-white">Encrypted Message</h3>
                            <textarea
                                className="textarea textarea-bordered w-full opacity-60"
                                value={encryptedText}
                                readOnly
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-white" >Sender&apos;s Private Key</h3>
                            <textarea
                                className="textarea textarea-bordered w-full mb-2 opacity-60"
                                value={senderPrivateKey}
                                onChange={(e) => setSenderPrivateKey(e.target.value)}
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

export default Encrypt;
