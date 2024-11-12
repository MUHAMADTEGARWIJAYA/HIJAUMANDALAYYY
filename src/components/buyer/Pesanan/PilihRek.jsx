import { useState } from "react";

function PaymentMethod() {
  const [selectedTab, setSelectedTab] = useState("transfer");

  return (
    <div className="flex justify-center items-center min-h-fit bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Tab Header */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedTab("transfer")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedTab === "transfer" ? "bg-teal-800 text-white" : "bg-gray-200"
            }`}
          >
            Transfer Bank
          </button>
          <button
            onClick={() => setSelectedTab("virtual")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedTab === "virtual" ? "bg-teal-800 text-white" : "bg-gray-200"
            }`}
          >
            Virtual Account/Mobile Banking
          </button>
        </div>

        {/* Payment Methods */}
        {selectedTab === "transfer" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-700">Pilih Bank</h3>
            <div className="flex flex-wrap justify-between">
              {/* Bank Options */}
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="bca" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_BCA_2020.svg/512px-Logo_BCA_2020.svg.png" alt="BCA" className="w-12 h-12" />
                <span className="text-gray-600">Bank BCA</span>
              </label>
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="mandiri" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Bank_Mandiri_logo.svg" alt="Mandiri" className="w-12 h-12" />
                <span className="text-gray-600">Bank Mandiri</span>
              </label>
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="bni" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Bank_BNI_logo.svg" alt="BNI" className="w-12 h-12" />
                <span className="text-gray-600">Bank BNI</span>
              </label>
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="bri" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bank_BRI_logo.svg" alt="BRI" className="w-12 h-12" />
                <span className="text-gray-600">Bank BRI</span>
              </label>
            </div>
          
          </div>
        )}

        {selectedTab === "virtual" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-700">Pilih Bank</h3>
            <div className="flex flex-wrap justify-between">
              {/* Virtual Account Options */}
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="permata" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Bank_Permata_logo.svg" alt="Permata" className="w-12 h-12" />
                <span className="text-gray-600">Bank Permata</span>
              </label>
              <label className="flex items-center space-x-2 w-1/4">
                <input type="radio" name="bank" value="bsi" className="form-radio" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_Bank_BSI.svg" alt="BSI" className="w-12 h-12" />
                <span className="text-gray-600">Bank BSI</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentMethod;
