const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full">
          
          {/* Bagian Kiri dengan Gambar */}
          <div className="w-1/2">
            <img
              src="https://source.unsplash.com/600x800/?goat,animal"
              alt="Goat"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          
          {/* Bagian Kanan dengan Form Login */}
          <div className="w-1/2 p-8 bg-gray-100 rounded-r-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Masuk ke KambingFresh</h2>
            <p className="text-gray-600 mb-6">Silahkan Masukkan Email dan Kata Sandi</p>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="KambingFresh@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Kata Sandi</label>
                <input
                  type="password"
                  placeholder="Kata Sandi"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
  
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Ingat Saya
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Lupa Kata Sandi?
                </a>
              </div>
  
              <a href="/utama" className="w-full">
                    <button
                      type="button"
                      className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-900 transition duration-300"
                    >
                      Masuk
                    </button>
               </a>
            </form>
  
            <p className="text-gray-600 mt-4 text-center">
              Belum mempunyai akun? <a href="/singup" className="text-blue-600 hover:underline">Daftar</a>
            </p>
  
            <div className="flex items-center mt-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-600 text-sm">Atau masuk menggunakan</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
  
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-blue-600 text-white p-2 rounded-full">
                <i className="fab fa-facebook-f"></i> {/* Ikon Facebook */}
              </button>
              <button className="bg-red-600 text-white p-2 rounded-full">
                <i className="fab fa-google"></i> {/* Ikon Google */}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;