import { useState } from 'react';
import Header from '../components/Header';
import WardrobeItem from '../components/WardrobeItem';

const initialItems = [
  { id: 1, name: "白色 T 恤", category: "上衣", color: "白", img: null, favorite: true },
  { id: 2, name: "牛仔褲", category: "褲裝", color: "藍", img: null },
  { id: 3, name: "黑色洋裝", category: "連衣裙", color: "黑", img: null },
  { id: 4, name: "短裙", category: "裙子", color: "粉", img: null },
];

export default function Wardrobe({theme,setTheme}){
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState("全部");
  const categories = ["全部", "上衣", "褲裝", "裙子", "連衣裙"];
  const filtered = items.filter((it) => filter === "全部" || it.category === filter);

  return (
    <div className="pb-32 px-4 pt-6 lg:pl-72">
      <Header title="智慧衣櫃" theme={theme} setTheme={setTheme} />

      <div className="mt-3 flex gap-2 overflow-x-auto mb-4">
        {categories.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded-full ${filter === c ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map((it) => (
          <WardrobeItem key={it.id} item={it} />
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-600">近 30 天未穿</h3>
        <div className="mt-2 h-28 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400">尚無資料</div>
      </div>
    </div>
  );
}
