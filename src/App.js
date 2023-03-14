import React, { useState } from "react";
import Modal from "./lib/components/modal";

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setIsModalVisible(true);
    };

    const handleClosing = (e) => {
        setIsModalVisible(false);
    };


    return (
        <div>
            <button onClick={handleSave}>Envoyer</button>
            {isModalVisible && (
                <Modal message={"User Created Successfully"} onClose={handleClosing} />
            )}
        </div>
    )
}

export default App
