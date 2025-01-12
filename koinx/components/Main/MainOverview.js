import "./Main.css";
const overviewNavbar = [
  {
    id: 0,
    name: "Overview",
    isActive: false,
  },
  {
    id: 1,
    name: "Fundamentals",
    isActive: false,
  },
  {
    id: 2,
    name: "News Insights",
    isActive: false,
  },
  {
    id: 3,
    name: "Sentiments",
    isActive: false,
  },
  {
    id: 4,
    name: "Team",
    isActive: false,
  },
  {
    id: 5,
    name: "Technicals",
    isActive: false,
  },
];
export default function MainOverview() {
  return (
    <>
      <div className="main-left-overview">
        <div className="main-left-overview-navbar">
          {overviewNavbar.map((item) => {
            if (item.id == 0) {
              return (
                <div
                  className="main-left-overview-navbar-item active
                  "
                  key={item.id}
                >
                  {item.name}
                </div>
              );
            }
            return (
              <div className="main-left-overview-navbar-item" key={item.id}>
                {item.name}
              </div>
            );
          })}
          <div className="main-left-overview-navbar-item"> </div>
        </div>
        <div className="main-left-overview-content px-4 py-3 bg-white mt-4">
          <div className="main-left-overview-content-1">
            <div className="text-[24px] font-semibold">Performance</div>
            <div className="main-left-overview-content-1-description">
              <div className="flex gap-2 my-2 items-center justify-between text-[14px]">
                <div className="flex flex-col items-center justify-between">
                  <div>
                    Today<span>&apos;</span>s Low
                  </div>
                  <div className="py-3">36,930.22</div>
                </div>
                <div>
                  <img src="/range.svg" alt="range" className="w-[70em]" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div>
                    Today<span>&apos;</span>s Low
                  </div>
                  <div className="py-3 text-[16px]">36,930.22</div>
                </div>
              </div>
              <div className="flex gap-2 my-2 items-center justify-between text-[14px]">
                <div className="flex flex-col items-center justify-between">
                  <div>
                    Today<span>&apos;</span>s Low
                  </div>
                  <div className="py-3">36,930.22</div>
                </div>
                <div>
                  <img src="/range.svg" alt="range" className="w-[70em]" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div>
                    Today<span>&apos;</span>s Low
                  </div>
                  <div className="py-3 text-[16px]">36,930.22</div>
                </div>
              </div>
              <div>
                <div className="text-[18px] font-[500]">Fundamentals</div>
                <div className="grid md:grid-cols-2 md:gap-[100px] py-[5px]">
                  <div>
                    <div className="flex items-center justify-between py-[10px] border-b-2 border-gray-300">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Bitcoin Price
                      </div>
                      <div className="text-[14px] weight-[500]">$36,930.22</div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        24h Low / 24h High
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $16,382.07 / $16,874.12
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        7d Low / 7d High
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $16,382.07 / $16,874.12
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Traading Volume
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $23,249,202,782
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Market Cap Rank
                      </div>
                      <div className="text-[14px] weight-[500]">#1</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Bitcoin Price
                      </div>
                      <div className="text-[14px] weight-[500]">$36,930.22</div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        24h Low / 24h High
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $16,382.07 / $16,874.12
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        7d Low / 7d High
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $16,382.07 / $16,874.12
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Traading Volume
                      </div>
                      <div className="text-[14px] weight-[500]">
                        $23,249,202,782
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-[10px]">
                      <div className="text-[rgba(118,131,150,1)] text-[14px] weight-[500]">
                        Market Cap Rank
                      </div>
                      <div className="text-[14px] weight-[500]">#1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
