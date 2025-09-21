import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import AssistantCard from '../components/AssistantCard';
import CategoryGrid from '../components/CategoryGrid';
import DesktopRightPanel from '../components/DesktopRightPanel';

export default function Home({theme,setTheme}){
  return (
    <div className="pb-32 lg:pl-72"> {/* add left padding for sidebar on lg */}
      <div className="lg:pr-80"> {/* reserve space for right panel on lg */}
        <div className="app-max px-4">

          <Header title="智慧穿搭" theme={theme} setTheme={setTheme} />

          <main className="space-y-4">
            <WeatherCard />
            <AssistantCard />

            <section>
              <h2 className="text-lg font-semibold mb-3">快速分類</h2>
              <CategoryGrid />
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">今日熱銷 / 新品推薦</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col">
                  <div className="h-40 bg-gray-50 rounded-md flex items-center justify-center">🧥</div>
                  <div className="mt-3 font-medium">輕薄外套</div>
                  <div className="text-sm text-gray-500">NT$ 1200</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col">
                  <div className="h-40 bg-gray-50 rounded-md flex items-center justify-center">👟</div>
                  <div className="mt-3 font-medium">運動鞋</div>
                  <div className="text-sm text-gray-500">NT$ 2200</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Desktop right panel - visible on lg and up */}
      <div className="fixed top-8 right-8 hidden lg:block w-80">
        <DesktopRightPanel />
      </div>
    </div>
  );
}
