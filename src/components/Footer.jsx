const Footer = () => {
  return (
    <footer className="bg-[#65A17A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Şirkətimiz</h3>
            <ul className="space-y-2">
              <li><a href="#" >Haqqımızda</a></li>
              <li><a href="#" >Restoranlar</a></li>
              <li><a href="#" >İnqrediyentlər</a></li>
              <li><a href="#" >Papa Bonus</a></li>
              <li><a href="#" >Papa Talk</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Dəstək</h3>
            <ul className="space-y-2">
              <li><a href="#">Bizimlə əlaqə saxlayın</a></li>
              <li><a href="#">Qeydiyyatdan keçin</a></li>
              <li><a href="#">Sual-Cavab</a></li>
              <li><a href="#">Bizim dəstəyimiz</a></li>
            </ul>
          </div>

          <div className="">
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <form className="mb-6">
                <div className="flex flex-col gap-3 items-start md:items-end">
                  <input type="email" placeholder="E-poçt ünvanını daxil et" className="px-4 py-2 rounded-md bg-white placeholder-gray-500 ml-0 md:ml-3 w-full"/>
                  <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                    ABUNƏ OLUN
                  </button>
                </div>
              </form>
              <p className="text-xs opacity-90 max-w-md">
                Qeydiyyatdan keçməklə məni Papa John's-dan marketing e-məktublarını almağa razıyam. Məxfilik Siyasətimizdə bax
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#65A17A] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
              Daha Yaxşı İnqrediyentlər. Daha Yaxşı Pizza.
            </h2>
            <div className="text-center md:text-right">
              <img src="../assets/img/PJ-logo.png" alt="logo" className="h-[40px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#65A17A] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-6 text-sm">
            <a href="#" >Məxfilik siyasəti</a>
            <a href="#" >Kuki faylları ilə əlaqəli siyasət</a>
            <a href="#" >Şərtlər və Qaydalar</a>
            <a href="#" >Xəritə</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;