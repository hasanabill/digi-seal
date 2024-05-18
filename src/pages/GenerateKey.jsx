import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';

const GenerateKey = () => {
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const generateKeys = () => {
        const encrypt = new JSEncrypt({ default_key_size: 512 });
        const pubKey = encrypt.getPublicKey();
        const privKey = encrypt.getPrivateKey();
        setPublicKey(pubKey);
        setPrivateKey(privKey);

    };

    const downloadKey = (key, type) => {
        const element = document.createElement("a");
        const file = new Blob([key], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${type}.key`;
        document.body.appendChild(element);
        element.click();
    };

    const uploadKey = (e, type) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (type === 'public') {
                setPublicKey(event.target.result);
            } else {
                setPrivateKey(event.target.result);
            }
        };
        reader.readAsText(e.target.files[0]);
    };

    return (
        <div className="container mx-auto p-4">
            <button className="btn btn-primary mb-4" onClick={generateKeys}>Generate Keys</button>
            <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Public Key</h3>
                <textarea className="textarea textarea-bordered w-full mb-2" value={publicKey} readOnly rows="5"></textarea>
                <button className="btn btn-secondary mr-2" onClick={() => downloadKey(publicKey, 'public')}>Download Public Key</button>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'public')} />
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">Private Key</h3>
                <textarea className="textarea textarea-bordered w-full mb-2" value={privateKey} readOnly rows="5"></textarea>
                <button className="btn btn-secondary mr-2" onClick={() => downloadKey(privateKey, 'private')}>Download Private Key</button>
                <input type="file" className="file-input file-input-bordered" onChange={(e) => uploadKey(e, 'private')} />
            </div>
        </div>
    );
};

export default GenerateKey;
