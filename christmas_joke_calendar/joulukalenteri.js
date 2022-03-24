function avaaLuukku (elem) {
    var x = parseInt(document.getElementById(elem.id).value,10);
    var day = new Date().getDate();
    var month = new Date().getMonth();

    
    if (x <= day && month == 11 ) {
        if (x == 1) {
            alert("Miksi joulupukilla on poro pulkan edessä?\r\n- Koska elefantin varpaita palelee pakkasella");
        } if (x == 2) {
            alert("Miksi joulupukki ei anna apulaistensa valjastaa poroa?\r\n– Koska ne ovat aivan tonttuja.");
        } if (x == 3) {
            alert("Mikä on huonomuististen joululaulu?\r\n– Koska meillä on joulu.");
        } if (x == 4) {
            alert("Mistä tiedät yöllä, että vuoteessasi on lumiukko?\r\n– Heräät aivan märkänä.");
        } if (x == 5) {
            alert("Miksi kutsutaan vanhaa lumiukkoa?\r\n– Vedeksi.");
        } if (x == 6) {
            alert("Miksi laihialaiset lapset menevät metsään jouluaattona?\r\n- He katsovat toiko joulupukki kuusen alle lahjoja.");
        } if (x == 7) {
            alert("– Miksi kirkonkellot soivat jouluna?\r\n– Joku vetää narusta.");
        } if (x == 8) {
            alert("Mikä on lammaspaimenten joululaulu?\r\n– Kili C kili C kulkunen…");
        } if (x == 9) {
            alert("Miksi joulupukki ei jää eläkkeelle?\r\n- Kun on töissä vain yhden päivän vuodessa, ei paljon eläkettä kerkeä karttumaan.");
        } if (x == 10) {
            alert("Elämän kiertokulku: \r\n1. Uskot joulupukkiin.\r\n2. Et usko joulupukkiin.\r\n3. Olet joulupukki.\r\n4. Näytät joulupukilta.");
        } if (x == 11) {
            alert("Kuka on Petteri Punakuonon perässä laukkaava poro?\r\n– Rudolf Ruskeakuono. Se on yhtä nopea kuin Petteri, mutta pysähtyy hitaammin.");
        } if (x == 12) {
            alert("Miksi joulupukki meni psykiatrille?\r\n– Hän ei enää uskonut itseensä.");
        } if (x == 13) {
            alert("Miksi joulupukilla ei ole lapsia?\r\n– Hänellä on leikkikalut.");
        } if (x == 14) {
            alert("Miksi jouluaatto muistuttaa tavallista työpäivää?\r\n– Sinä teet itse kaikki työt, mutta lihava mies puvussa saa kaiken kunnian.");
        } if (x == 15) {
            alert("Jos joulupukki konttaa sisään, onko hän humalassa?\r\n– Ei välttämättä. Pukin toimenkuvaan kuuluu, että hän käy välillä kontillaan.");
        } if (x == 16) {
            alert("Mikä on porojen suurin toive?\r\n– Päästä vetämään joulupukkia");
        } if (x == 17) {
            alert("Mikä on majavien joululaulu?\r\n– Joulupuu on nakerrettu.");
        } if (x == 18) {
            alert("Mikä on Ruotsin soitetuin joululaulu?\r\n– Silvian joululaulu.");
        } if (x == 19) {
            alert("Mikä on narsistin joululaulu?\r\n– Mää oon niin kaunis.");
        } if (x == 20) {
            alert("Mikä on maailman kulunein joululaulu?\r\n– Klisee, klisee kulkuset.");
        } if (x == 21) {
            alert("Mitä joulupukki sanoi syödessään lihaa?\r\n– Hyvästi Petteri");
        } if (x == 22) {
            alert("Miksi jouluna ei saa riisuutua valot päällä?\r\n- Tonttu voi tulla ikkunan taa.");
        } if (x == 23) {
            alert("Mitä eroa on Joulupukilla ja basistilla?\r\n- Joulupukilla on lahjoja.");
        } if (x == 24) {
            alert("Mikä on suurempi kuin joulukuusi?\r\n- Jouluseitsemän.");
        } 
    } else {
        alert("Aijai, ethän availe luukkuja vielä?")
    }


}