
function Sidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-64 mr-4 max-h-fit">
      <h2 className="text-xl font-semibold mb-4">Filter Produk</h2>

      {/* Filter Harga */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Harga Produk</h3>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Harga Minimum"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Harga Maksimum"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Kategori Produk */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Kategori Produk</h3>
        <div className="space-y-2">
          <div>
            <input type="checkbox" id="kambing-boer" />
            <label htmlFor="kambing-boer" className="ml-2">
              Kambing Boer
            </label>
          </div>
          <div>
            <input type="checkbox" id="kambing-saanen" />
            <label htmlFor="kambing-saanen" className="ml-2">
              Kambing Saanen
            </label>
          </div>
          <div>
            <input type="checkbox" id="kambing-jawarandu" />
            <label htmlFor="kambing-jawarandu" className="ml-2">
              Kambing Jawarandu
            </label>
          </div>
        </div>
      </div>

      {/* Paket Bundling */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Paket Bundling</h3>
        <div className="space-y-2">
          <div>
            <input type="checkbox" id="layanan-masak" />
            <label htmlFor="layanan-masak" className="ml-2">
              Kambing + Layanan Masak
            </label>
          </div>
          <div>
            <input type="checkbox" id="layanan-pemotongan" />
            <label htmlFor="layanan-pemotongan" className="ml-2">
              Kambing + Layanan Pemotongan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
