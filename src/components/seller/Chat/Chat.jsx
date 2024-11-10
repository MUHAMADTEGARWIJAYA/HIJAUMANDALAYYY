
import { IoSettingsSharp, IoSearchSharp } from "react-icons/io5";

const ChatApp = () => {
  const chatUsers = [
    { name: "Indah", message: "udah sampai", date: "26/10/2024", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Arga", message: "ready kak?", date: "22/10/2024", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Dewi", message: "barter mau ga?", date: "18/10/2024", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Dimas", message: "bisa cod kak?", date: "16/10/2024", online: true, image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Arjuna", message: "harga fix ya", date: "12/10/2024", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Andika", message: "tolong cepat kirim", date: "04/10/2024", image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { name: "Fajar", message: "kapan restock lagi?", date: "30/09/2024", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Rizky", message: "ada garansi?", date: "28/09/2024", image: "https://randomuser.me/api/portraits/men/8.jpg" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-4 border-r shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Chat</h2>
          <IoSettingsSharp className="text-2xl text-gray-600 cursor-pointer" />
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Cari pengguna"
            className="w-full p-2 rounded-md border border-gray-300 pl-10"
          />
          <IoSearchSharp className="absolute left-3 top-3 text-gray-400" />
        </div>
        <ul>
          {chatUsers.map((chat, index) => (
            <li key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img
                src={chat.image}
                alt={`Foto profil ${chat.name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-grow">
                <h4 className="font-medium">{chat.name}</h4>
                <p className="text-sm text-gray-500">{chat.message}</p>
              </div>
              <div className="text-right text-xs text-gray-400">
                <p>{chat.date}</p>
                {chat.online && <span className="text-green-500 text-lg">•</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Konten Utama Chat */}
      <div className="w-2/3 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
          </div>
          <h2 className="mt-6 text-xl font-semibold">Mari kita mulai percakapan!</h2>
          <p className="text-gray-500">Silakan pilih pesan di samping untuk memulai obrolan dengan pembeli.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
