import './Cities.css';
import InfoBox from "./InfoBox/InfoBox";
import avanos_image from '../../assets/images/avanos.png';
import bayburt_image from '../../assets/images/bayburt.png';
import balıkesir_image from '../../assets/images/balıkesir.png';
import yozgat_image from '../../assets/images/yozgat.png';
import karabük_image from '../../assets/images/karabük.png';

function Main() {
    let items = [
        {
            id: 1,
            image: avanos_image,
            header: "Avanos",
            about: "Nevşehir'e bağlı bu güzel ilçemizin ismi Avar Türkleri'ne dayanmaktadır. Mehmet Eröz'ün Anadolu kentlerini incelediği çalışmalarında belirtilen bu gerçek, bu kentin kökeniyle ve tarihsel kimliğiyle alakalı müthiş bilgiler saklamaktadır.",
        },
        {
            id: 2,
            image: bayburt_image,
            header: "Bayburt",
            about: "Bayburt'un adına Dede Korkut Hikayeleri'nden ulaşıyoruz. Bu ilimizin Gümüşhane'den kopup vilayet olmasında terörle mücadele amacı güdüldüğü söylenmektedir. Ayrıca tek 'Baksı Müzesi' burada bulunmaktadır "
        },
        {
            id: 3,
            image: balıkesir_image,
            header: "Balıkesir",
            about: "Balıkesir'in ismi 'Bal-ı Kesir' yani balın bol bulunduğu bir kent olmasından gelir. İlçeleri kendinden meşhur bu şehir, Kuvâ-yi Milliye hareketinin de filizlendiği kenttir."
        },
        {
            id: 4,
            image: yozgat_image,
            header: "Yozgat",
            about: "İç Anadolu'da yer alan bu kentin eski ismi Bozok'tur. Yozgat ismi Yozgad haliyle binlerce yıl önce de kullanılmaktaydı.Bazı göndermeler yapan ve genelde bazı örgütlerle özdeşleşen 'Dağlara Gel Dağlara' türküsü bu ile aittir. Çünkü Celali İsyanları ve Çapanoğlu İsyanları da burada meydana gelmiştir.Türkiye'nin ilk milli parkı da buradaki Çamlık'tır.",
        },
        {
            id: 5,
            image: karabük_image,
            header: "Karabük",
            about: "Bük' çalı demektir. Karabük, Demir Çelik kurulmadan önce 10 haneden oluşan ve Safranbolu'ya bağlı bir mezra imiş...Ayrıca Kırıkkale gibi burada da hava boşluğu vardır ve üstünden uçaklar geçmez.",
        }
    ];

    return (
        <>
            <main className="main">
                <section className="infobox-container">
                    {
                        items.map((item) => {
                            return <InfoBox key={item.id} image={item.image} header={item.header} about={item.about} />
                        })
                    }
                </section>
            </main>
        </>
    );
}
export default Main;