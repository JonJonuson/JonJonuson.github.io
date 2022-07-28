<template><div><h1 id="almennt" tabindex="-1"><a class="header-anchor" href="#almennt" aria-hidden="true">#</a> Almennt</h1>
<p>Velkomin í hjálpina fyrir Skútuna, nýju skipaskránna og lögskráningarkerfi Samgöngustofu.
Leiðbeiningarnar eru kaflaskiptar eftir aðgerðum og sjást þær í stikunni hér að ofan. Undirkaflar birtast svo vinstra megin á síðunni. Einnig má nota leitina efst til hægri.</p>
<p><a href="https://skutantest.samgongustofa.is/" target="_blank" rel="noopener noreferrer">Skútan<ExternalLinkIcon/></a></p>
<p><a href="http://127.0.0.1:5500/skutan/3002-mobile.html" target="_blank" rel="noopener noreferrer">3002 forsíða<ExternalLinkIcon/></a></p>
<h2 id="innskraning" tabindex="-1"><a class="header-anchor" href="#innskraning" aria-hidden="true">#</a> Innskráning</h2>
<!-- relative path -->
<Badge text="Innri notandi" style="background: black; text-transform: uppercase; padding: 0px 4px; margin: 20px 0 10px"/>
<br/>Skráir sig inn með núverandi auðkenni sín hjá Samgöngustofu.
<br/>
<!-- <Badge text="Ytri notandi" style="margin: 10px 0 -10px 0"/> -->
<Badge text="Ytri notendur" style="background: orange !important; text-transform: uppercase; padding: 0px 4px; margin: 30px 0 -10px 0"/>
<ul>
<li>Ytri skoðunaraðilar</li>
<li>Lögskráningaraðilar</li>
<li>Útgerðir/eigendur skipa</li>
<li>Landhelgisgæslan</li>
<li>Fulltrúar skóla</li>
</ul>
<p>Áður en ytri notandi getur notað Skútuna verður að vera búið að stofna aðgang.
Hægt er að sækja um hér: <RouterLink to="/getting-started.html">Sækja um aðgang</RouterLink></p>
<p>Tvær leiðir eru til að skrá sig inn í kerfið. Annars vegar með <code v-pre>ÍSLYKLI</code> eða beint í innskráningarforminu með því að skrá notendanafn og lykilorð.
Ef íslykill er notaður er smellt er á hnappinn <code v-pre>SKRÁ INN MEÐ ÍSLYKLI</code> og símanúmer og rafræn auðkenni skráð. Ef ekki tekst að skrá sig með rafrænum skilríkjum sendið þá tölvupóst á <a href="mailto:skutan@samgongustofa.is">Skútan email</a></p>
<h3 id="personuverndaryfirlysing" tabindex="-1"><a class="header-anchor" href="#personuverndaryfirlysing" aria-hidden="true">#</a> Persónuverndaryfirlýsing</h3>
<p>Við fyrstu innskráningu birtist gluggi með persónuverndaryfirlýsingu sem notandi þarf að samþykkja áður en hægt er að nota kerfið.</p>
<h2 id="forsiða-skutunnar" tabindex="-1"><a class="header-anchor" href="#forsiða-skutunnar" aria-hidden="true">#</a> Forsíða Skútunnar</h2>
<p><img src="images/fp.png" alt="Síða eftir innskráningu"></p>
<p>Á myndinni sést hvar  <RouterLink to="/#t%C3%ADmav%C3%A9lin">tímavélin</RouterLink> er staðsett í stikunni efst til vinstri. Til þess að vinna með skip er skipaskrárnúmer slegið inn í reitinn hægra megi.</p>
<h2 id="leit-að-skipi" tabindex="-1"><a class="header-anchor" href="#leit-að-skipi" aria-hidden="true">#</a> Leit að skipi</h2>
<p><img src="images/leit.png" alt="Leit að skipi"></p>
<p>Til að byrja að vinna með skip þarf að skrá skipaskrárnúmer í blámerkta reitinn  á mynd 1.2 og smella á enter hnappinn á lyklaborðinu.</p>
<p>Einnig er hægt er að sjá öll skip á skipaskrá með því að smella á Skip efst í stikunni og svo Skipaskrá úr valmynd.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Allar aðgerðir og hlekkir í Skútunni eru bláir á lit</p>
</div>
<h2 id="timavelin" tabindex="-1"><a class="header-anchor" href="#timavelin" aria-hidden="true">#</a> Tímavélin</h2>
<p>Áður en Skútan verður tekin í notkun haustið 2022 er mikilvægt að geta prófað hegðun kerfisins, m.a. gildistíma skírteina og skoðana og þar nýttum við okkur snilli hans Hannesar forritara til að smíða fyrir okkur tímavél – sýndartímavél.
Þegar færa skal skoðanir næsta árs (og fyrri ára) notum við tímavélina til að spóla fram og aftur í tímann, þannig að hægt sé t.a.m. að stökkva inn í skoðunarglugga og athuga hvað gerist t.d. ef skoðanir eru fallnar úr gildi.</p>
<table>
<thead>
<tr>
<th>Tímavélin</th>
<th>Val með músinni</th>
<th>Val með músinni</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="images/timavel.png" alt=""></td>
<td><img src="images/timavel-2.png" alt=""></td>
<td><img src="images/timavel-2.png" alt=""></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Hægt er að skrá dagsetningu beint inn í reitinn eða með að smella með músinni á dagsetningu. Ef fara þarf langt fram eða aftur í tímann má smella efst í dagatalinu þar sem mánuður og ár birtist (sjá myndir hér að ofan).</p>
</div>
<h2 id="leit-og-siur" tabindex="-1"><a class="header-anchor" href="#leit-og-siur" aria-hidden="true">#</a> Leit og síur</h2>
<p>Fyrir allar töflur sem birtast í Skútunni gildir að hægt er sía niðurstöðurnar með því að;</p>
<ul>
<li>
<p>skrá leitarstreng í leitarglugganum (sem staðsettur er hægra megin fyrir ofan töfluna)
<img src="images/filter-table.png" alt="Síur í töflum"></p>
</li>
<li>
<p>Í tilvikum þar sem örvar birtast í heiti dálka má smella á dálkinn og raða þannig í hækkandi eða lækkandi röð.
<img src="images/filter.png" alt="Síur í töflum"></p>
</li>
<li>
<p>Ef það eru fleiri en 50 raðir í töflunni þarf að fletta á milli síðna (e. pagination) eða stilla fjölda sem birtist sem</p>
</li>
</ul>
<h3 id="ovirkar-færslur" tabindex="-1"><a class="header-anchor" href="#ovirkar-færslur" aria-hidden="true">#</a> Óvirkar færslur</h3>
<p>Þegar hakað er við Sýna óvirkar færslur birtast eldri skráningar (sem eru ekki lengur virkar) og má þannig nálgast sögu tiltekins skráningaratriðis - í þessu dæmi birtast þannig allar eldri skráningar kennimerkis skips.</p>
<p><img src="images/ovirkar.png" alt="Óvirkar færslur"></p>
<h2 id="innslattareitir-e-form" tabindex="-1"><a class="header-anchor" href="#innslattareitir-e-form" aria-hidden="true">#</a> Innsláttareitir (e. form)</h2>
<p>Ef reitur er <Badge text="*"/> merktur verður notandinn að skrá gögn í reitinn áður en hægt er að vista formið.</p>
</div></template>
