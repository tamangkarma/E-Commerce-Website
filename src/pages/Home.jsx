import { Slidebar } from "../components/swiper";
import { sections } from "../Data/Data";



const Home = () => {
  return (
    <>
      <div className="">
        <Slidebar />
        <div className="flex flex-wrap justify-center gap-6 my-10">
          {sections.map((section, idx) => (
            <div key={idx} className="w-72 bg-white shadow p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 mx-auto object-contain"
                    />
                    <p className="text-sm mt-2">{item.title}</p>
                  </div>
                ))}
              </div>
              <p className="text-blue-600 text-sm mt-4 cursor-pointer hover:underline">
                {section.linkText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
