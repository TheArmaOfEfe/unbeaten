import React, { useState, useEffect } from 'react';
import './styles.css'; // CSS dosyanızı buraya ekleyin

// Logo bileşeni
const Logo = () => (
  <div className="logo">
    <img src="unbeaten.png" alt="Logo" />
  </div>
);


// Kişi bileşeni
const Person = ({ name, image, title, description, onClick }) => (
  <div className="kisi" data-name={name} onClick={() => onClick(name)}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <div className="adi">{description}</div>
  </div>
);

// Görünüm bileşeni
const View = ({ target, isActive, onClose, content, music }) => {
  return (
    <div className={`gorunumu ${isActive ? 'active' : ''}`} data-target={target}>
      {isActive && music && <audio src={music} autoPlay loop />}
      <div className="pencere-icerigi" style={{ maxHeight: '50rem', overflowY: 'auto' }}>
        <span className="kapat" onClick={onClose} style={{ position: 'absolute', right: '1rem', top: '1rem', zIndex: 1000, fontSize: '3rem' }}>×</span>
        {content}
      </div>
    </div>
  );
};


// Uygulama bileşeni
const App = () => {
  const [activeView, setActiveView] = useState(window.location.hash.substring(1));

  useEffect(() => {
    const handleHashChange = () => {
      setActiveView(window.location.hash.substring(1));
    };

    // URL hash değişikliğini dinle
    window.addEventListener('hashchange', handleHashChange);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handlePersonClick = (name) => {
    setActiveView(name);
    window.location.hash = name; // URL'deki hash değerini güncelle
  };

  const handleCloseView = () => {
    setActiveView('');
    window.location.hash = ''; // URL'deki hash değerini temizle
  };

  // Her kişi için içerik
  const viewContent = {
    atilla: (
      <>
        <img src="images/atilla1.jpg" alt="Atilla" />
        <p>Attila, Hun topluluklarının hükümdarı olduğu 434 tarihinden, 453’teki ölümüne kadar Hun İmparatorluğu’nun hükümdarıdır. Hükümdarlığı sırasında sürekli Roma ve Batı imparatorluklarına karşı seferler düzenlemiştir; bu sebeple Orta Çağ ve Batı kaynaklarında savaşcı yönüyle ün salmıştır. İmparatorluğunu, dönemin Avrupa’sının büyük bölümünü kaplayacak şekilde genişletti.</p>
      </>
    ),
    Oguzhan: (
      <>
        <img src="images/Oğuzhan1.jpg" alt="Oguzhan" />
        <p>Oğuz Kağan ya da Oğuz Han, Türk ve Altay mitolojisinde Oğuz Türklerinin atasıdır. Mete Han olarak da bilinir ve Asya Hun İmparatorluğu’nun kurucusudur. Zamanla çevresindeki bütün Türk boylarını bayrağı altında toplayarak, savaşlar ve fetihler ile Türk devletinin sınırlarını çok genişletmiştir. Çinlileri büyük bir yenilgiye uğratmış, hatta Çin Seddi’nin Türk boylarının saldırılarına karşı yapıldığı söylenmektedir.</p>
      </>
    ),
    alparslan: (
      <>
        <img src="images/alparslan.jpg" alt="Alparslan" />
        <p>Sultan Alpaslan dönemi, Büyük Selçuklu Devleti’nde ciddi değişimlerin olduğu bir zaman dilimidir. O, babasının ve amcasının siyasi mirasını kendi eli altında birleştirmiştir; böylece ikili teşkilat özellikleri gösteren yönetim anlayışı merkeziyetçiliğe dönmüştür ve Malazgirt Zaferi ile Anadolu'nun kapılarını açarak ismini tarihe altın harflerle kazımıştır.</p>
      </>
    ),
    dedekorkut: (
      <>
        <img src="images/dede12.jpg" alt="Dede Korkut" />
        <p>Dede Korkut, Türk edebiyatının köklü figürlerinden biridir. Hikayeleri, Oğuz Türkleri’nin destanlarını ve kahramanlık öykülerini içerir. Aşiret yaşamını, sadakati, sevgiyi ve onuru ele alır. Bu hikayeler, Türk kültüründe milli kimliğin oluşmasında önemli bir rol oynamıştır. Yaşadığı dönem ve gerçek kimliği hakkında kesin bilgiler bulunmamaktadır; ancak eserleri, Türk edebiyatının temel taşlarından biridir. </p>
      </>
    ),
    ertugrul: (
      <>
        <img src="images/ertuğrul.jpg" alt="Ertuğrul" />
        <p>Ertuğrul Gazi, Osmanlı İmparatorluğu’nun kurucusu Osman Bey’in babasıdır ve Osmanlı Hanedanı’nın atası olarak kabul edilir. Kayı boyuna mensup olan Ertuğrul Gazi, Anadolu’nun fethi sürecinde önemli bir rol oynamıştır. Selçuklu Sultanı Alaeddin Keykubad’a bağlı olarak Bizans’a karşı savaşmış ve bölgedeki Türkmenlerin lideri olarak tanınmıştır.</p>
      </>
    ),
    kasgarlimahmut: (
      <>
        <img src="images/kaşgarlı.jpg" alt="Kaşgarlı Mahmut" />
        <p>Kaşgarlı Mahmut, Türk dili ve kültürü ile ilgili çeşitli çalışmalar yapmıştır. “Divan-ı Lügat-it Türk” eserinin yazarı olan dil bilimcidir. Kaşgarlı Mahmut, Sacidiye Medresesi’nde eğitim almıştır. Tahsilini tamamladıktan sonra Orta Asya’da dolaşarak Türk dilini detaylı bir şekilde incelemeye başlamıştır. Anadolu’yu gezdikten sonra çeşitli lehçeler ve diller üzerinde çalışmalarını sürdürmek amacıyla Bağdat’a gitmiş ve orada kalmıştır. Eseri olan "Divan-ı Lügat-it Türk"ü 1072 yılında başlayıp 1074 yılında tamamlamıştır. </p>
      </>
    ),
    evliya: (
      <>
        <img src="images/evliya.jpg" alt="Evliya Çelebi" />
        <p>Evliya Çelebi, 17. yüzyılda yaşamış ünlü bir Osmanlı gezgini, yazar ve tarihçidir. Evliya Çelebi, Osmanlı İmparatorluğu’nun farklı bölgelerini ve ülkelerini gezerek birçok bilgi toplamış ve “Seyahatname” adlı eserinde bu gözlemlerini ve yaşadıklarını anlatmıştır. Seyahatnamesi, Osmanlı dönemindeki coğrafya, kültür, tarih ve toplum yapısı hakkında kapsamlı bir kaynak olarak kabul edilir. Seyahatnamesi, hem tarihi hem de edebi açıdan büyük bir değere sahiptir.</p>
      </>
    ),
    ali: (
      <>
        <img src="images/alikuscu.jpg" alt="Ali Kuşçu" />
        <p>Ali Kuşçu, Osmanlı İmparatorluğu döneminde yaşamış önemli bir bilim insanıdır. Matematik, astronomi ve fizik alanlarında çalışmış, özellikle trigonometri ve astronomi konularında eserler vermiştir. Osmanlı sarayında da görev almış ve Fatih Sultan Mehmed’in danışmanı olmuştur.</p>
      </>
    ),
    yunusemre: (
      <>
        <img src="images/yunusemre2.jpeg" alt="Yunus Emre" />
        <p>Yunus Emre, Türk edebiyatının ve düşünce dünyasının en önemli isimlerinden biridir. 13. yüzyılın Türk halk şairlerinden olan Yunus Emre’nin hayatı hakkında kesin bilgilere sahip olmak zor olsa da, Anadolu’da yaşamış ve eserleriyle büyük bir etki bırakmıştır. Yunus Emre’nin yaşamıyla ilgili kesin bilgiler olmasa da, Anadolu’da dolaşarak halk arasında bir ozan olduğu bilinmektedir. Özellikle İslam tasavvufunu ve insan sevgisini ön plana çıkaran eserleriyle tanınır. Şiirlerinde sıkça aşk, sevgi, dostluk, doğa ve insanlık gibi evrensel temalara yer vermiştir. Dili sade ve halkın anlayabileceği bir üslupla yazılmıştır. Yunus Emre’nin en önemli eserleri arasında “Divan-ı Yunus Emre” ve “Risâletü’n-Nushiyye” bulunmaktadır.</p>
      </>
    ),
    osmangazi: (
      <>
        <img src="images/osmangazi1.webp" alt="Osman Gazi" />
        <p>Osman Gazi, Osmanlı İmparatorluğu’nun kurucusu olan Türk lideridir. Osmanlı Devleti’nin temellerini atan Osman Bey’in oğludur. Babası Osman Bey’in vefatının ardından beyliğin başına geçmiş ve Osmanlı Beyliği’ni genişletmek için önemli adımlar atmıştır. İznik ve Bursa’yı fethetmiş ve beyliğini genişletmiştir. Savaş taktikleri ve yönetim becerileriyle de tanınır. Oğlu Orhan Gazi’ye güçlü bir devlet bırakmıştır. Osman Gazi, Osmanlı Devleti’nin temelini atmış ve kuruluş dönemindeki başarılarıyla Türk tarihinde önemli bir yere sahiptir. Osmanlı İmparatorluğu’nun kurucusu olarak, Türk tarihinde ve dünya tarihinde büyük bir etki bırakmıştır.</p>
      </>
    ),
    timur: (
      <>
        <img src="images/timur1.jpg" alt="Timur" />
        <p>Timur, Orta Asya’da doğmuş ve 14. yüzyılın sonları ile 15. yüzyılın başlarında yaşamış bir Türk hükümdarı ve askeri liderdir. Özbekistan’ın Semerkand şehrinde doğmuş olan Timur, Türk kültürüne ilgi göstermiş ve büyük fetihler gerçekleştirmiştir. Ancak savaşlarındaki vahşet ve acımasızlığı ile de ünlüdür. 1405 yılında ölümünden sonra imparatorluğu parçalanmıştır. Timur’un adı, hem yaptığı fetihler ile hem de yenilmez bir hükümdar olarak tarihe geçmiştir.</p>
      </>
    ),
    yildirim: (
      <>
        <img src="images/beyazid.jpg" alt="Yıldırım Beyazid" />
        <p>Yıldırım Bayezid, Osmanlı İmparatorluğu’nun dördüncü padişahıdır. 1402 yılında Ankara Savaşı’nda Timur’a yenilerek esir düşmüştür. Babası I. Murad’ın vefatı üzerine Osmanlı tahtına geçmiştir. Hükümdarlığı döneminde Balkanlar’da genişlemeler yapmış, Bizans İmparatorluğu üzerine seferler düzenlemiştir. Ancak Timur’un Ankara Savaşı’nda Osmanlılara karşı kazandığı zaferle Osmanlı İmparatorluğu büyük bir darbe almıştır. Yıldırım Bayezid, Timur’un esiri olarak ömrünün geri kalan kısmını geçirmiş ve 1403 yılında ölmüştür. Yıldırım Bayezid, Osmanlı İmparatorluğu’nun genişlemesinde önemli bir rol oynamış ve dönemindeki askeri başarıları ile tanınmıştır.</p>
      </>
    ),
    aksemsettin: (
      <>
        <img src="images/akşemsettin.jpg" alt="Akşemsettim" />
        <p>Akşemseddin, Osmanlı Devleti’nin önemli alimlerinden biridir. II. Murad ve Fatih Sultan Mehmed’in hocasıdır. Fetih hazırlıklarında danışmanlık yapmış, İstanbul’un fethinde rol almış ve şehrin fethinden sonra ilk Cuma hutbesini vermiştir. Osmanlı’nın manevi liderlerinden biri olarak kabul edilir.</p>
      </>
    ),
    fsm: (
      <>
        <img src="images/fsm1.jpg" alt="Fatih Sultan Mehmet" />
        <p>Fatih Sultan Mehmed, Osmanlı İmparatorluğu’nun yedinci padişahıdır ve İstanbul’un fethiyle tarihe geçmiştir. Babası II. Murad’dan tahtı devraldığında genç yaşta olmasına rağmen, hükümdarlığı boyunca önemli başarılar elde etmiştir. En önemli başarısı, 29 Mayıs 1453 tarihinde İstanbul’u fethetmesidir. Bu fetih, Bizans İmparatorluğu’nun sonunu getirmiş ve Osmanlı İmparatorluğu’nu dünya tarihindeki en güçlü imparatorluklardan biri haline getirmiştir. İstanbul’un fethinden sonra şehri yeniden inşa ettirmiş, birçok kültürel ve dini eserin yapılmasını sağlamıştır. Fatih Sultan Mehmed, Osmanlı İmparatorluğu’nun altın çağını yaşamasını sağlayan etkili bir hükümdar olarak hatırlanır.</p>
      </>
    ),
    yss: (
      <>
        <img src="images/yavuz1.jpg" alt="Yavuz Sultan Selim" />
        <p>Yavuz Sultan Selim, Osmanlı İmparatorluğu’nun dokuzuncu padişahıdır. Tahta geçtikten sonra Osmanlı İmparatorluğu’nu önemli fetihlere götürmüştür. Özellikle Safevi İmparatorluğu’na karşı savaşarak, Tebriz’i ele geçirmiş ve Safevi topraklarını genişletmiştir. Ayrıca, Mısır’ı fethederek Memlük Sultanlığı’nı ortadan kaldırmış ve Osmanlı topraklarına katmıştır. Bu sayede Osmanlı İmparatorluğu’nun kontrolü Doğu Akdeniz’e kadar uzanmıştır.</p>
      </>
    ),
    mimar: (
      <>
        <img src="images/mimarsinan.jpg" alt="Mimar Sinan" />
        <p>Mimar Sinan, Osmanlı İmparatorluğu’nun en ünlü mimarıdır ve yaklaşık 1000’den fazla eserin mimarı olarak kabul edilir. En önemli eserleri arasında Süleymaniye Camii ve Selimiye Camii bulunur. Osmanlı mimarisinin en önemli temsilcilerinden biridir.</p>
      </>
    ),
    kanuni: (
      <>
        <img src="images/süleman2.jpg" alt="Kanuni Sultan Süleyman" />
        <p>Kanuni Sultan Süleyman, Osmanlı İmparatorluğu’nun onuncu padişahıdır. Osmanlı tarihinde adaletine ve bilgeliğine olan inanç nedeniyle “Kanuni” unvanını almıştır. “Kanuni” yani “kanun sahibi” unvanıyla anılmıştır. Süleyman, Osmanlı İmparatorluğu’nun en uzun süre hüküm süren padişahıdır ve tahtta yaklaşık 46 yıl boyunca kalmıştır. Kanuni Sultan Süleyman’ın hükümdarlığı döneminde Osmanlı İmparatorluğu, Balkanlar, Orta Doğu ve Kuzey Afrika’da büyük topraklar kazanmıştır. Viyana’nın kuşatılması, Mohaç Meydan Muharebesi gibi önemli olaylar bu döneme denk gelir. Kanuni Sultan Süleyman, Osmanlı tarihinde “muhteşem” olarak anılan bir döneme hükmetmiştir.</p>
      </>
    ),
    piri: (
      <>
        <img src="images/piri.jpg" alt="Piri Reis" />
        <p>Piri Reis, Osmanlı döneminde yaşamış ünlü bir denizci, haritacı ve kaşiftir. Osmanlı donanmasında yüksek rütbeli bir amiral olarak birçok deniz seferine katılmıştır. Aynı zamanda bir haritacı olarak da tanınır. En ünlü eseri "Kitab-ı Bahriye"dir; bu eser, denizciler için hazırlanmış bir denizcilik rehberi olup Akdeniz’in ve çevresinin detaylı haritalarını içerir. Ayrıca, Piri Reis’in en ünlü eserlerinden biri de "Piri Reis Haritası"dır. Bu harita, Amerika kıtasını gösteren en eski haritalardan biridir. Piri Reis, denizcilik ve haritacılık alanındaki çalışmalarıyla Osmanlı İmparatorluğu’nun deniz gücünü artırmış ve coğrafi keşiflere önemli katkılarda bulunmuştur.</p>
      </>
    ),
    sokullu: (
      <>
        <img src="images/sokullu.jpg" alt="Sokullu Mehmed Paşa" />
        <p>Sokullu Mehmed Paşa, Osmanlı İmparatorluğu’nun Kanuni Sultan Süleyman döneminde önemli bir devlet adamıdır. Sadrazam olarak uzun süre görev yapmış, imparatorluğun yönetimi ve dış ilişkilerinde etkili olmuştur. Osmanlı’nın Macaristan ve Avusturya’ya karşı düzenlediği seferlerde önemli roller oynamıştır. Kültürel ve ekonomik alanda da gelişmelere katkı sağlamıştır.</p>

      </>
    ),
    ataturk: (
      <>
        <img src="images/ataturk.gif" alt="Mustafa Kemal Atatürk" />
        <p>Mustafa Kemal Atatürk, 1881’de Selanik’te doğdu. Askeri eğitim aldı ve genç yaşta subay oldu. I. Dünya Savaşı’nda görev aldı. Savaş sonrası, Anadolu’ya geçerek Türk Kurtuluş Savaşı’nı yönetti. Zaferle sonuçlanan savaş sonrası, 1923’te Türkiye Cumhuriyeti’ni kurdu ve ilk Cumhurbaşkanı oldu. Modern Türkiye’nin temellerini atan Atatürk, eğitimden hukuka, dil ve alfabe reformundan kadın haklarına kadar pek çok alanda devrimler gerçekleştirdi. Atatürk, 10 Kasım 1938’de hayatını kaybetti.</p>
      </>
    ),
    gaziosmanpasa: (
      <>
        <img src="images/gaziosmanpaşa.jpg" alt="Gazi Osman Paşa" />
        <p>Gazi Osman Paşa, 19. yüzyılda yaşamış bir Osmanlı askeri ve devlet adamıdır. Özellikle Plevne Savunması’ndaki kahramanlığıyla tanınır. Osmanlı ordusunda yüksek rütbeli bir subay olarak görev yapmış ve çeşitli savaşlarda önemli roller üstlenmiştir. Plevne’deki savunması sırasında gösterdiği direnişle “Gazi” unvanını almıştır.</p>
      </>
    ),
    nene: (
      <>
        <img src="images/nene.jpg" alt="Nene Hatun" />
        <p>Nene Hatun, Türk Kurtuluş Savaşı sırasında önemli bir kahramanlık örneği gösteren bir Türk kadınıdır. Erzurum’un Ruslar tarafından işgaline karşı direniş göstermiş ve cepheye silah alarak katılmıştır. Bir Rus askerini öldürerek diğerlerini kaçırmış ve Erzurum’un düşmesini bir süreliğine engellemiştir. Cesareti ve fedakarlığıyla Türk milletinin mücadelesine katkı sağlamış ve Türk kadınları için bir sembol olmuştur.</p>
      </>
    ),
    // Diğer kişilerin içeriklerini buraya ekleyebilirsiniz
  };
  

  return (
    <div className="kapsayici">
      <Logo />
      <div className="insan-kapsayici">
        {/* Kişileri buraya ekleyin */}
        <Person
          name="Atilla"
          image="images/atilla1.jpg"
          title="Atilla"
          description="Tanrının Kırbacı"
          onClick={handlePersonClick}
        />
        <Person
          name="Oguzhan"
          image="images/Oğuzhan2.jpg"
          title="Oğuz Han"
          description="Türklerin Atası"
          onClick={handlePersonClick}
        />
        <Person
          name="Alparslan"
          image="images/alparslan.jpg"
          title="Alparslan"
          description="Bir yuvamız olsun diye..."
          onClick={handlePersonClick}
        />
        <Person
          name="dedekorkut"
          image="images/dede12.jpg"
          title="Dede Korkut"
          description="Bozkırın Hikayeci Dedesi"
          onClick={handlePersonClick}
        />
        <Person
          name="kasgarlimahmut"
          image="images/kaşgarlı2.jpg"
          title="Kaşgarlı Mahmut"
          description="Türklerin İlk Sözlük Yazarı"
          onClick={handlePersonClick}
        />
        <Person
          name="evliya"
          image="images/evliya.jpg"
          title="Evliya Çelebi"
          description="Osmanlı Gezgini"
          onClick={handlePersonClick}
        />
        <Person
          name="ali"
          image="images/alikuscu.jpg"
          title="Ali Kuşçu"
          description="Astronomi Hocası"
          onClick={handlePersonClick}
        />
        <Person
          name="yunusemre"
          image="images/yunusemre1.jpeg"
          title="Yunus Emre"
          description="Tasavvufun Sesi"
          onClick={handlePersonClick}
        />
        <Person
          name="osmangazi"
          image="images/osmangazi2.jpeg"
          title="Osman Gazi"
          description="Beyler Beyi"
          onClick={handlePersonClick}
        />
        <Person
          name="timur"
          image="images/timur2.jpeg"
          title="Timur"
          description="Sahip Kıran"
          onClick={handlePersonClick}
        />
        <Person
          name="yildirim"
          image="images/beyazid2.jpg"
          title="I. Beyazid"
          description="Yıldırım Beyazid"
          onClick={handlePersonClick}
        />
        <Person
          name="aksemsettin"
          image="images/akşemsettin.jpg"
          title="Mehmed Şemseddin"
          description="Akşemseddin"
          onClick={handlePersonClick}
        />
        <Person
          name="fsm"
          image="images/fsm2.jpg"
          title="Fatih Sultan Mehmed"
          description="Grand Turco 'Büyük Türk'"
          onClick={handlePersonClick}
        />
         <Person
          name="yss"
          image="images/yavuz2.jpeg"
          title="I. Selim"
          description="Yavuz Sultan Selim"
          onClick={handlePersonClick}
        />
         <Person
          name="mimar"
          image="images/mimarsinan.jpg"
          title="Sinaneddin Yusuf"
          description="Mimar Sinan"
          onClick={handlePersonClick}
        />
         <Person
          name="kanuni"
          image="images/süleman.jpg"
          title="I. Süleyman"
          description="Kanûnî Sultan Süleyman"
          onClick={handlePersonClick}
        />
         <Person
          name="piri"
          image="images/piri.jpg"
          title="Muhyiddin Pîrî Bey"
          description="Pîrî Reis"
          onClick={handlePersonClick}
        />
         <Person
          name="sokullu"
          image="images/sokullu.jpg"
          title="Sokullu Mehmed Paşa"
          description="İmparatorluğun Sadrazamı"
          onClick={handlePersonClick}
        />
         <Person
          name="ataturk"
          image="images/ataturk.png"
          title="Mustafa Kemal"
          description="Atatürk ,Ulu Önder, Mareşal, Gazi, Başkomutan, Başöğretmen"
          onClick={handlePersonClick}
        />
         <Person
          name="gaziosmanpasa"
          image="images/gaziosmanpaşa.jpg"
          title="Gazi Osman Paşa"
          description="Plevne Kahramanı"
          onClick={handlePersonClick}
        />
         <Person
          name="nene"
          image="images/nene.jpg"
          title="Nene Hatun"
          description="3. Ordunun Nenesi"
          onClick={handlePersonClick}
        />
  
        {/* Diğer kişileri buraya ekleyebilirsiniz */}
      </div>
      <div className={`kapsayici-gorunumu ${activeView ? 'active' : ''}`} style={{ display: activeView ? 'flex' : 'none' }}>
        {/* Görünümleri buraya ekleyin */}
        <View 
           target="atilla"
           isActive={activeView === 'Atilla'}
           onClose={handleCloseView}
           content={viewContent.atilla}
           music="images/eskiata.mp3"
        />
        <View
          target="Oguzhan"
          isActive={activeView === 'Oguzhan'}
          onClose={handleCloseView}
          content={viewContent.Oguzhan}
          music="images/eskiata.mp3" 
        />
        <View
          target="alparslan"
          isActive={activeView === 'Alparslan'}
          onClose={handleCloseView}
          content={viewContent.alparslan}
          music="images/eskiata.mp3"
        />
         <View
          target="Dede Korkut"
          isActive={activeView === 'dedekorkut'}
          onClose={handleCloseView}
          content={viewContent.dedekorkut}
          music="images/eskiata.mp3"
        />
         <View
          target="kasgarlimahmut"
          isActive={activeView === 'kasgarlimahmut'}
          onClose={handleCloseView}
          content={viewContent.kasgarlimahmut}
          music="images/ottoman.mp3"
        />
        <View
          target="evliya"
          isActive={activeView === 'evliya'}
          onClose={handleCloseView}
          content={viewContent.evliya}
          music="images/ney.mp3"
        />
         <View
          target="ali"
          isActive={activeView === 'ali'}
          onClose={handleCloseView}
          content={viewContent.ali}
          music="images/ottoman.mp3"
        />
          <View
          target="yunusemre"
          isActive={activeView === 'yunusemre'}
          onClose={handleCloseView}
          content={viewContent.yunusemre}
          music="images/ney.mp3"
        />
        <View
          target="osmangazi"
          isActive={activeView === 'osmangazi'}
          onClose={handleCloseView}
          content={viewContent.osmangazi}
          music="images/ottoman.mp3"
        />
         <View
          target="timur"
          isActive={activeView === 'timur'}
          onClose={handleCloseView}
          content={viewContent.timur}
          music="images/ottoman.mp3"
        />
         <View
          target="yildirim"
          isActive={activeView === 'yildirim'}
          onClose={handleCloseView}
          content={viewContent.yildirim}
          music="images/ottoman.mp3"
        />
          <View
          target="aksemsettin"
          isActive={activeView === 'aksemsettin'}
          onClose={handleCloseView}
          content={viewContent.aksemsettin}
          music="images/ottoman.mp3"
        />
          <View
          target="fsm"
          isActive={activeView === 'fsm'}
          onClose={handleCloseView}
          content={viewContent.fsm}
          music="images/fatih.mp3"
        />
        <View
          target="yss"
          isActive={activeView === 'yss'}
          onClose={handleCloseView}
          content={viewContent.yss}
          music="images/ottoman.mp3"
        />
        <View
          target="yss"
          isActive={activeView === 'yss'}
          onClose={handleCloseView}
          content={viewContent.yss}
          music="images/ottoman.mp3"
        />
         <View
          target="mimar"
          isActive={activeView === 'mimar'}
          onClose={handleCloseView}
          content={viewContent.mimar}
          music="images/ottoman.mp3"
        />
         <View
          target="kanuni"
          isActive={activeView === 'kanuni'}
          onClose={handleCloseView}
          content={viewContent.kanuni}
          music="images/ottoman.mp3"
        />
         <View
          target="piri"
          isActive={activeView === 'piri'}
          onClose={handleCloseView}
          content={viewContent.piri}
          music="images/deniz.mp3"
        />
         <View
          target="sokullu"
          isActive={activeView === 'sokullu'}
          onClose={handleCloseView}
          content={viewContent.sokullu}
          music="images/ottoman.mp3"
        />
         <View
          target="ataturk"
          isActive={activeView === 'ataturk'}
          onClose={handleCloseView}
          content={viewContent.ataturk}
          music="images/ataturk.mp3"
        />
         <View
          target="gaziosmanpasa"
          isActive={activeView === 'gaziosmanpasa'}
          onClose={handleCloseView}
          content={viewContent.gaziosmanpasa}
          music="images/gaziosmanpasa.mp3"
        />
        <View
          target="nene"
          isActive={activeView === 'nene'}
          onClose={handleCloseView}
          content={viewContent.nene}
          music="images/canakkale.mp3"
        />
        
        {/* Diğer görünümleri buraya ekleyebilirsiniz */}
      </div>
    </div>
  );
};

export default App;