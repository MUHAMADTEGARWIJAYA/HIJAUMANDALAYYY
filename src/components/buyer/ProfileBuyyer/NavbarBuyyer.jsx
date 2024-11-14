import { useState } from 'react';

function Navbar() {
    const [activeTab, setActiveTab] = useState('Pesanan Saya');

    const tabs = ['Pesanan Saya', 'Belum Bayar', 'Dikirim', 'Selesai'];

    return (
        <div className="flex bg-white rounded-md shadow-md max-w-5xl mt-10 overflow-hidden">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-center font-semibold ${
                        activeTab === tab
                            ? 'bg-teal-700 text-white'
                            : 'bg-white text-gray-700'
                    } hover:bg-teal-700 hover:text-white transition duration-300`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Navbar;
