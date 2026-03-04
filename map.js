/* ─── MAP DATA ───────────────────────────────────────────────────────── */
const mapData = [
    {
        id: 'jambi-hq', province: 'jambi', type: 'project',
        lat: -1.4833, lng: 102.4407, color: '#2ecc71', icon: 'fa-leaf',
        title: 'FINCAPES Jambi Operations',
        sub: 'Main coordination hub for Jambi province activities including peatland restoration and flood monitoring.',
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '312k ha', l: 'Protected' }, { v: '42', l: 'Sites' }, { v: '18kt', l: 'CO₂/yr' }, { v: '2021', l: 'Start' }],
        component: '1100', tags: ['Peatland', 'REDD+', 'Flood Risk']
    },
    {
        id: 'jambi-kerinci', province: 'jambi', type: 'flood',
        lat: -2.0833, lng: 101.75, color: '#e74c3c', icon: 'fa-droplet',
        title: 'Kerinci Seblat Buffer',
        sub: 'High flood-risk buffer zone along the Merangin River. Active early warning systems and community resilience programs.',
        img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '8', l: 'Flood Events' }, { v: '15k', l: 'Residents' }, { v: '3m', l: 'Levee Raised' }, { v: 'High', l: 'Risk Level' }],
        component: '1100', tags: ['Flood Risk', 'Early Warning', 'Community']
    },
    {
        id: 'kal-central', province: 'kalimantan', type: 'project',
        lat: -.5, lng: 114.0, color: '#f0a500', icon: 'fa-paw',
        title: 'Central Kalimantan Hub',
        sub: 'Peatland carbon crediting and orangutan habitat conservation. Major REDD+ implementation zone.',
        img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '389k ha', l: 'Protected' }, { v: '1.4Mt', l: 'CO₂ Credits' }, { v: '28', l: 'Partners' }, { v: '2022', l: 'Start' }],
        component: '1300', tags: ['REDD+', 'Carbon Credits', 'Orangutan']
    },
    {
        id: 'kal-east', province: 'kalimantan', type: 'community',
        lat: 1.2, lng: 116.8, color: '#9b59b6', icon: 'fa-users',
        title: 'East Kalimantan Community Hub',
        sub: 'Community co-management zone for orangutan corridors. 51 villages engaged in conservation agreements.',
        img: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '51', l: 'Villages' }, { v: '18k ha', l: 'Corridor' }, { v: '2,400', l: 'Families' }, { v: 'High', l: 'Biodiversity' }],
        component: '1200', tags: ['Community', 'Corridor', 'Biodiversity']
    },
    {
        id: 'kal-west', province: 'kalimantan', type: 'project',
        lat: 0.8, lng: 110.4, color: '#f0a500', icon: 'fa-seedling',
        title: 'West Kalimantan — Kapuas Hulu',
        sub: 'Mangrove restoration and peatland conservation zone in Kapuas Hulu. Gender-responsive NbS implementation with local communities.',
        img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '125k ha', l: 'Protected' }, { v: '23', l: 'Sites' }, { v: '0.4Mt', l: 'CO₂/yr' }, { v: '2023', l: 'Start' }],
        component: '1200', tags: ['Mangrove', 'NbS', 'Peatland']
    },
    {
        id: 'lampung-bbs', province: 'lampung', type: 'project',
        lat: -4.5585, lng: 105.4068, color: '#3498db', icon: 'fa-paw',
        title: 'Bukit Barisan Selatan NP',
        sub: 'Sumatran tiger habitat conservation and flood-vulnerable watershed management in the Bukit Barisan range.',
        img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '146k ha', l: 'Protected' }, { v: '12', l: 'Tiger Range' }, { v: '0.6Mt', l: 'CO₂/yr' }, { v: '2020', l: 'Start' }],
        component: '1100', tags: ['Tiger', 'National Park', 'Watershed']
    },
    {
        id: 'lampung-com', province: 'lampung', type: 'community',
        lat: -5.4, lng: 104.9, color: '#9b59b6', icon: 'fa-wheat-awn',
        title: 'Tanggamus Agroforestry Hub',
        sub: 'Smallholder agroforestry transition program. 31 community sites across the Tanggamus buffer zone.',
        img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=80',
        stats: [{ v: '31', l: 'Sites' }, { v: '4,200', l: 'Farmers' }, { v: '22k ha', l: 'Agroforest' }, { v: 'Active', l: 'Status' }],
        component: '1200', tags: ['Agroforestry', 'Zero-Deforestation', 'Lampung']
    }
];

/* ─── BUILD MAP ──────────────────────────────────────────────────────── */
const map = L.map('leaflet-map', { center: [-1, 113], zoom: 5, scrollWheelZoom: false });
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 18
}).addTo(map);

/* Province zones */
L.rectangle([[-3, 101], [-0.5, 104.5]], { color: '#2ecc71', weight: 2, fillOpacity: .07, dashArray: '5 4' }).addTo(map).bindTooltip('Jambi');
L.rectangle([[-2.5, 108], [2, 119]], { color: '#f0a500', weight: 2, fillOpacity: .05, dashArray: '5 4' }).addTo(map).bindTooltip('East Kalimantan');
L.rectangle([[-2, 107.5], [2.5, 112]], { color: '#f0a500', weight: 2, fillOpacity: .04, dashArray: '5 4' }).addTo(map).bindTooltip('West Kalimantan');
L.rectangle([[-6, 104], [-3.5, 106.5]], { color: '#3498db', weight: 2, fillOpacity: .09, dashArray: '5 4' }).addTo(map).bindTooltip('Lampung');

function mkIcon(color, faIcon) {
    return L.divIcon({
        html: `<div style="width:34px;height:34px;border-radius:50%;background:${color};border:2.5px solid rgba(255,255,255,.6);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 6px ${color}30,0 4px 14px rgba(0,0,0,.4);cursor:pointer"><i class="fa-solid ${faIcon}" style="color:#fff;font-size:13px;pointer-events:none"></i></div>`,
        className: '', iconSize: [34, 34], iconAnchor: [17, 17]
    });
}

let leafletMarkers = [];
let currentDetail = '';
mapData.forEach(d => {
    const mk = L.marker([d.lat, d.lng], { icon: mkIcon(d.color, d.icon) }).addTo(map);
    mk.on('click', () => openDetail(d));
    mk._fincData = d;
    leafletMarkers.push(mk);
});

function openDetail(d) {
    currentDetail = d.id;
    gaEvent('map_marker_click', { location: d.id, province: d.province, type: d.type });

    const isMobile = window.innerWidth <= 768;
    const statsHtml = d.stats.map(s =>
        `<div class="ds-cell"><div class="ds-v">${s.v}</div><div class="ds-l">${s.l}</div></div>`
    ).join('');
    const tagsHtml = d.tags.map(t => `<span class="dtag">${t}</span>`).join('');

    if (isMobile) {
        // populate bottom sheet
        document.getElementById('mdsImg').src = d.img;
        document.getElementById('mdsTitle').textContent = d.title;
        document.getElementById('mdsSub').textContent = d.sub;
        document.getElementById('mdsStats').innerHTML = statsHtml;
        document.getElementById('mdsTags').innerHTML = tagsHtml;
        document.getElementById('mapDetailSheet').classList.add('open');
        document.body.style.overflow = 'hidden';
    } else {
        // desktop sidebar
        document.getElementById('tabProvinces').style.display = 'none';
        document.getElementById('tabLegend').style.display = 'none';
        const dp = document.getElementById('detailPanel');
        dp.classList.add('show');
        document.getElementById('detailImg').src = d.img;
        document.getElementById('detailTitle').textContent = d.title;
        document.getElementById('detailSub').textContent = d.sub;
        document.getElementById('detailStats').innerHTML = statsHtml;
        document.getElementById('detailTags').innerHTML = tagsHtml;
        document.querySelectorAll('.province-item').forEach(p => p.classList.remove('active'));
        document.getElementById('prov-' + d.province)?.classList.add('active');
        activateTab('provinces');
    }
    map.flyTo([d.lat, d.lng], 7, { duration: 1.2 });
}

function closeDetail() {
    document.getElementById('detailPanel').classList.remove('show');
    document.getElementById('tabProvinces').style.display = '';
}

function closeMobileDetail() {
    document.getElementById('mapDetailSheet').classList.remove('open');
    document.body.style.overflow = '';
}

function toggleMobileLegend(btn) {
    const legend = document.getElementById('mmcLegend');
    const isOpen = legend.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
}

function focusProvince(p) {
    document.querySelectorAll('.province-item').forEach(i => i.classList.remove('active'));
    document.getElementById('prov-' + p)?.classList.add('active');
    const centres = { jambi: [-1.8, 102.5, 6], kalimantan: [.5, 114.5, 6], 'kalimantan-east': [1.0, 116.0, 6], 'kalimantan-west': [0.5, 110.5, 7], lampung: [-5, 105.2, 7] };
    const c = centres[p] || [-1, 113, 5];
    map.flyTo([c[0], c[1]], c[2], { duration: 1.2 });
    gaEvent('map_province_click', { province: p });
}

function filterMarkers(tag, el) {
    document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    const compChip = document.querySelector('.comp-chip.active');
    const comp = compChip ? compChip.textContent.trim().replace(/.*—\s*/,'').trim() : 'all';
    // also sync mobile select if called from chip
    const locSel = document.querySelector('.mfm-select[onchange*="filterMarkers"]');
    if (locSel && el) locSel.value = tag;
    leafletMarkers.forEach(mk => {
        const d = mk._fincData;
        const locMatch = tag === 'all' || d.province === tag || d.type === tag;
        const compMatch = !compChip || compChip.textContent.includes('All') || d.component === comp;
        locMatch && compMatch ? mk.addTo(map) : map.removeLayer(mk);
    });
    gaEvent('map_filter', { filter: tag });
}


function filterByComponent(comp, el) {
    document.querySelectorAll('.comp-chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    // also sync mobile select if called from chip
    const compSel = document.querySelector('.mfm-select[onchange*="filterByComponent"]');
    if (compSel && el) compSel.value = comp;
    leafletMarkers.forEach(mk => {
        const d = mk._fincData;
        const show = comp === 'all' || d.component === comp;
        // respect active loc filter too
        const locChip = document.querySelector('.loc-chip.active');
        const locSel = document.querySelector('.mfm-select[onchange*="filterMarkers"]');
        const locTag = locChip
            ? locChip.textContent.trim().toLowerCase().replace('all locations','all')
            : (locSel ? locSel.value : 'all');
        const locMatch = locTag === 'all' || d.province === locTag || d.type === locTag;
        show && locMatch ? mk.addTo(map) : map.removeLayer(mk);
    });
    gaEvent('map_component_filter', { component: comp });
}
function showTab(name, el) {
    document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    activateTab(name);
}
function activateTab(name) {
    document.getElementById('tabProvinces').style.display = name === 'provinces' ? '' : 'none';
    document.getElementById('tabLegend').style.display = name === 'legend' ? '' : 'none';
    document.getElementById('detailPanel').classList.remove('show');
}

/* ─── PARALLAX ───────────────────────────────────────────────────────── */
const heroBg = document.getElementById('heroBg');
const impBg = document.getElementById('impBg');
window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    heroBg.style.transform = `translateY(${sy * .38}px)`;
    const imp = document.getElementById('impact-section');
    if (imp) {
        const rect = imp.getBoundingClientRect();
        impBg.style.transform = `translateY(${(rect.top + sy - sy) * .25}px)`;
    }
}, { passive: true });

/* ─── NAV SCROLL ─────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ─── INTERSECTION OBSERVER ──────────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-count]').forEach(el => countUp(el));
        io.unobserve(e.target);
    });
}, { threshold: .1 });
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => io.observe(el));

/* strip observer */
const stripObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('[data-count]').forEach(el => countUp(el));
        stripObs.unobserve(e.target);
    });
}, { threshold: .15 });
const strip = document.querySelector('.stats-wrap');
if (strip) stripObs.observe(strip);

/* ─── COUNTER ─────────────────────────────────────────────────────────── */
function countUp(el) {
    const raw = parseFloat(String(el.dataset.count).replace(/,/g, ''));
    const dec = parseInt(el.dataset.dec ?? 0);
    const dur = 2200; const t0 = performance.now();
    function step(t) {
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = e * raw;
        if (raw >= 10000) el.textContent = Math.round(v).toLocaleString('en');
        else if (dec > 0) el.textContent = v.toFixed(dec);
        else el.textContent = Math.round(v);
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/* ─── GALLERY FILTER ─────────────────────────────────────────────────── */
const _repoActive = { type: 'all', loc: 'all', yr: 'all', th: 'all' };
function filterRepo(dim, val, btn) {
    const selector = dim === 'type' ? '.ft:not(.ft-loc):not(.ft-yr):not(.ft-th)' :
                     dim === 'loc'  ? '.ft-loc' :
                     dim === 'yr'   ? '.ft-yr'  : '.ft-th';
    document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    _repoActive[dim] = val;
    applyRepoFilter();
    gaEvent('repository_filter', { dimension: dim, filter: val });
}
function searchRepo() { applyRepoFilter(); }
function applyRepoFilter() {
    const q = document.getElementById('repoSearch').value.toLowerCase();
    document.querySelectorAll('.repo-item').forEach(item => {
        const tags = (item.dataset.tags || '').toLowerCase();
        const title = (item.querySelector('.ro-title')?.textContent || '').toLowerCase();
        const mType = _repoActive.type === 'all' || tags.includes(_repoActive.type);
        const mLoc  = _repoActive.loc  === 'all' || tags.includes(_repoActive.loc);
        const mYr   = _repoActive.yr   === 'all' || tags.includes(_repoActive.yr);
        const mTh   = _repoActive.th   === 'all' || tags.includes(_repoActive.th);
        const mQ    = !q || (tags + title).includes(q);
        item.style.display = mType && mLoc && mYr && mTh && mQ ? '' : 'none';
    });
}

/* ─── LIGHTBOX ────────────────────────────────────────────────────────── */
document.querySelectorAll('.repo-item').forEach(item => {
    item.addEventListener('click', () => {
        const badge = item.querySelector('.repo-badge');
        const badgeType = (badge?.dataset.type || badge?.textContent || '').toLowerCase();
        if (badgeType.includes('video') || badgeType.includes('report')) return;
        const src = item.querySelector('img')?.src;
        if (!src) return;
        document.getElementById('lb-img').src = src;
        document.getElementById('lb').classList.add('open');
        document.body.style.overflow = 'hidden';
        gaEvent('media_view', { type: 'photo', src });
    });
});
function closeLb() {
    document.getElementById('lb').classList.remove('open');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb() });

/* ─── GA4: DOWNLOAD ──────────────────────────────────────────────────── */
function downloadItem(e, filename) {
    e.stopPropagation();
    gaEvent('file_download', { file_name: filename, file_extension: filename.split('.').pop() });
    // In production: trigger actual download
    alert('Download: ' + filename + '\n(GA4 event fired: file_download)');
}

/* ─── SCROLL DEPTH TRACKING ─────────────────────────────────────────── */
(function () {
    const depths = [25, 50, 75, 90];
    const fired = new Set();
    window.addEventListener('scroll', () => {
        const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        depths.forEach(d => {
            if (pct >= d && !fired.has(d)) {
                fired.add(d);
                gaEvent('scroll_depth', { percent: d });
            }
        });
    }, { passive: true });
})();