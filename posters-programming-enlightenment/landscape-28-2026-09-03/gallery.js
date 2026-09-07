'use strict';

const posters = window.POSTERS;
const grid = document.querySelector('#poster-grid');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerCaption = document.querySelector('#viewer-caption');
const viewerDownload = document.querySelector('#viewer-download');
const status = document.querySelector('#result-count');
let activeSeries = 'all';
let currentIndex = 0;
let opener = null;

function source(poster) {
  return `${poster.series}-series/${poster.file}`;
}

function visiblePosters() {
  return posters.filter(poster => activeSeries === 'all' || poster.series === activeSeries);
}

function showPoster(poster) {
  const visible = visiblePosters();
  currentIndex = visible.findIndex(item => item.id === poster.id);
  viewerImage.src = source(poster);
  viewerImage.alt = `${poster.title}；《编程启蒙：思维与代码》横版海报`;
  viewerCaption.textContent = `${poster.id} · ${poster.title} · ${currentIndex + 1} / ${visible.length}`;
  viewerDownload.href = source(poster);
  viewerDownload.download = `${poster.id}-${poster.file}`;
  if (!viewer.open) {
    opener = document.activeElement;
    viewer.showModal();
  }
}

function movePoster(offset) {
  const visible = visiblePosters();
  showPoster(visible[(currentIndex + offset + visible.length) % visible.length]);
}

function buildGallery() {
  for (const poster of posters) {
    const figure = document.createElement('figure');
    figure.className = 'card';
    figure.dataset.series = poster.series;
    const link = document.createElement('a');
    link.className = 'poster-link';
    link.href = source(poster);
    link.setAttribute('aria-label', `放大查看 ${poster.id} ${poster.title}`);
    const picture = document.createElement('img');
    picture.src = source(poster);
    picture.alt = `${poster.id} ${poster.title}，《编程启蒙：思维与代码》海报`;
    picture.width = 1920;
    picture.height = 1080;
    picture.loading = 'lazy';
    picture.decoding = 'async';
    link.append(picture);
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      showPoster(poster);
    });
    const caption = document.createElement('figcaption');
    const details = document.createElement('div');
    const label = document.createElement('span');
    label.className = 'caption-label';
    label.textContent = `${poster.id} / ${poster.style}`;
    const title = document.createElement('h2');
    title.textContent = poster.title;
    details.append(label, title);
    const download = document.createElement('a');
    download.className = 'download-link';
    download.href = source(poster);
    download.download = `${poster.id}-${poster.file}`;
    download.textContent = '原图 ↓';
    download.setAttribute('aria-label', `下载 ${poster.id} 原始 PNG 图片`);
    caption.append(details, download);
    figure.append(link, caption);
    grid.append(figure);
  }
}

for (const button of document.querySelectorAll('[data-filter]')) {
  button.addEventListener('click', () => {
    activeSeries = button.dataset.filter;
    for (const filter of document.querySelectorAll('[data-filter]')) {
      filter.setAttribute('aria-pressed', String(filter === button));
    }
    for (const figure of grid.children) {
      figure.hidden = activeSeries !== 'all' && figure.dataset.series !== activeSeries;
    }
    status.textContent = `${visiblePosters().length} 张横版原图`;
  });
}

document.querySelector('#viewer-close').addEventListener('click', () => viewer.close());
document.querySelector('#viewer-prev').addEventListener('click', () => movePoster(-1));
document.querySelector('#viewer-next').addEventListener('click', () => movePoster(1));
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); movePoster(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); movePoster(1); }
});
viewer.addEventListener('close', () => { if (opener instanceof HTMLElement) opener.focus(); });
buildGallery();
