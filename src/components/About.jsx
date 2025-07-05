function About() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#F5E8DC] rounded-2xl mb-12 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/assets/img/about.jpg" alt="Pizza" className="w-full h-80 object-cover shadow-lg"/>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Daha yaxşı inqrediyentlər. Daha yaxşı pizza.
              </h2>
              
              <div className="space-y-4">
                <p className="lg:text-lg">
                  Biz bilirik ki, bir şeyə nə qədər əmək sərf etsən, bir o qədər çox bəhrəsini 
                  görərsən. Beləliklə, ABS-in Indiana ştatında hazırlanan ilk Papa Johns 
                  pizzasından tutmuş bu günə qədər, 45 ölkədə 5000-dən çox restoran ilə 
                  biz həmişə ən yaxşı pizza hazırlamaq üçün ən yaxşı inqrediyentlərdən 
                  istifadə etmişik.
                </p>
                
                <p className="lg:text-lg">
                  Heç vaxt dondurulmayan təzə xəmirimiz, xüsusi pizza sousumuz, italyan 
                  pendirimiz, təzə tərəvəzlər və keyfiyyətli ət növləri haqqında hər şeyi 
                  öyrənin.
                </p>
              </div>

              <div className="mt-8">
                <button className="bg-[#CFEB0B] hover:bg-transparent cursor-pointer text-black border-1 px-6 py-2 rounded-full text-md font-medium transition-colors">
                  DAHA ƏTRAFLI
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5E8DC] rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2">
              <img src="/assets/img/about1.jpg" alt="Pizza" className="w-full h-80 object-cover shadow-lg"/>
            </div>

            <div className="order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Biz komandamızı sevirik
              </h2>
              
              <div className="space-y-4">
                <p className="lg:text-lg">
                  Əsas inancımız sadədir - işçilərimizin qayğısına qalmaq, onları həvəsləndirmək, dəstəkləmək, təlimatlandırmaq, onlara ən yaxşı inqrediyentləri və ən yaxşı avadanlıqları verərək ən yüksək keyfiyyətli pizza hazırlamaqdır.
                </p>
                
                <p className="lg:text-lg">
                  Bizi hər gün ruhlandıran budur və buna görə də biz, davamlı olaraq ən yaxşı pizza və ən yaxşı xidməti təklif etmək üçün çalışırıq.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About