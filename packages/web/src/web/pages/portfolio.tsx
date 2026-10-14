import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';
import { ArrowUpRight, ArrowDown, MapPin, Menu, X, Scale, Fingerprint, Compass, Plus } from 'lucide-react';
import './portfolio.css';

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Batistela+1060+Guararapes+SP';
const steps = [
  { title: 'Antes de tudo,\nescutar.', label: 'ESCUTA & PROXIMIDADE', text: 'Cada história tem seu contexto. O primeiro passo é compreender sua situação, suas dúvidas e o que realmente importa para você.', icon: Fingerprint, image: 'columns' },
  { title: 'Clareza para\ndecidir.', label: 'ANÁLISE & ORIENTAÇÃO', text: 'Traduzir questões jurídicas em informação compreensível. Entender os caminhos possíveis é essencial para uma decisão consciente.', icon: Scale, image: 'facade' },
  { title: 'Um caminho,\ncom direção.', label: 'CUIDADO & RESPONSABILIDADE', text: 'Uma atuação pautada pela ética, pela atenção aos detalhes e pelo respeito às particularidades de cada questão.', icon: Compass, image: 'interior' },
];

function ApproachCard({ index, progress, reduced }: { index: number; progress: MotionValue<number>; reduced: boolean }) {
  const data = steps[index]!;
  const start = index === 0 ? 0 : index === 1 ? .12 : .48;
  const end = index === 0 ? .01 : index === 1 ? .47 : .84;
  const y = useTransform(progress, [start, end, 1], [index === 0 ? 0 : 670, 0, (2-index)*-18]);
  const rotation = useTransform(progress, [start, end], [index === 0 ? -3 : 14, 0]);
  const rotateX = useTransform(progress, [start, end], [index === 0 ? 0 : -18, 0]);
  const scale = useTransform(progress, [0, .5, 1], index === 0 ? [1, .96, .91] : index === 1 ? [1, 1, .955] : [1, 1, 1]);
  const Icon = data.icon;
  return <motion.article className={`approach-card card-${index}`} style={reduced ? {} : { y, rotate: rotation, rotateX, scale, zIndex: index + 1 }}>
    <div className="card-content"><div className="card-top"><span className="eyebrow">{data.label}</span><Icon size={25} strokeWidth={1}/></div><h3>{data.title}</h3><p>{data.text}</p><div className="card-bottom"><span>RODRIGUES FERNANDES</span><span>0{index+1} / 03</span></div></div>
    <div className="card-photo"><img src={`/images/${data.image}.webp`} alt="" loading="lazy"/><span>RF.</span></div>
  </motion.article>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const active = useTransform(scrollYProgress, [0, .47, .84], [1, 2, 3]);
  const activeLabel = useTransform(active, value => `0${Math.round(value)} / 03`);
  const close = () => setMenuOpen(false);
  return <>
    <a href="#principal" className="skip-link">Ir para o conteúdo</a>
    <header className="header wrap">
      <a className="brand" href="#inicio" aria-label="Rodrigues Fernandes Advocacia — início"><span className="monogram">R<span>F</span><i/></span><span className="brand-name">RODRIGUES FERNANDES<small>ADVOCACIA</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal"><a href="#escritorio" onClick={close}>O escritório</a><a href="#abordagem" onClick={close}>Nossa abordagem</a><a href="#localizacao" onClick={close}>Localização</a></nav>
      <a className="header-cta" href="#localizacao">Encontre o escritório <ArrowUpRight size={16}/></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <main id="principal">
      <section className="hero wrap" id="inicio">
        <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
          <div className="eyebrow hero-eyebrow"><span className="gold-line"/> DIREITO COM PROPÓSITO</div>
          <h1>Seu direito.<br/>Nossa <em>dedicação.</em></h1>
          <p>Mais do que questões jurídicas,<br className="desktop-break"/> cuidamos do que é importante para você.</p>
          <a href="#escritorio" className="button dark-button">Conheça o escritório <ArrowUpRight size={19}/></a>
          <div className="hero-location"><MapPin size={15} strokeWidth={1.4}/><span>Guararapes, São Paulo</span><span className="small-line"/><span>Ética. Clareza. Proximidade.</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={reduced ? false : { opacity: 0, y: 35, rotate: 4 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1.2, delay: .18 }}>
          <span className="orbit orbit-one"/><span className="orbit orbit-two"/>
          <div className="hero-back-card back-one"/><div className="hero-back-card back-two"><span>UM OLHAR ATENTO.<br/>UM CAMINHO SEGURO.</span></div>
          <div className="hero-front-card"><img src="/images/columns.webp" alt="Composição arquitetônica ilustrativa de colunas em pedra"/><div className="photo-shade"/><div className="photo-top"><span>RODRIGUES FERNANDES</span><Plus size={17} strokeWidth={1}/></div><div className="photo-bottom"><span className="photo-monogram">RF<span>.</span></span><div>Solidez nos princípios.<br/><em>Humanidade na atuação.</em></div></div></div>
          <div className="art-caption"><span>01 — PRINCÍPIOS QUE NOS MOVEM</span><span className="caption-line"/></div>
          <div className="art-seal"><Scale size={25} strokeWidth={1}/><span>COMPROMISSO<br/>COM O SEU DIREITO</span></div>
        </motion.div>
      </section>
      <div className="hero-foot wrap"><a href="#abordagem"><span className="scroll-circle"><ArrowDown size={15}/></span>Role para conhecer nossa abordagem</a><span>ADVOCACIA COM ATENÇÃO A CADA DETALHE <Plus size={13}/></span></div>
      <section className="intro wrap" id="escritorio"><div className="section-marker"><span className="eyebrow">01 / O ESCRITÓRIO</span><span className="gold-line"/></div><div className="intro-body"><h2>Por trás de cada questão,<br/>existe uma <em>história.</em></h2><div className="intro-details"><p>A Rodrigues Fernandes Advocacia está em Guararapes, São Paulo. Um espaço para compreender suas questões e conversar sobre os próximos passos.</p><p>Nosso propósito é aproximar o direito da sua realidade, com uma comunicação clara e um olhar cuidadoso para cada situação.</p></div></div></section>
      <section ref={sectionRef} className={`approach ${reduced ? 'reduced' : ''}`} id="abordagem"><div className="approach-sticky wrap"><div className="approach-copy"><span className="eyebrow">02 / NOSSA ABORDAGEM</span><h2>O cuidado está<br/>em cada <em>etapa.</em></h2><p>Uma relação de confiança começa na escuta e se constrói com clareza e responsabilidade.</p><div className="progress-track"><motion.div style={{ scaleX: reduced ? 1 : scrollYProgress }}/></div><div className="progress-label"><span>ESCUTA</span><span>CLAREZA</span><span>DIREÇÃO</span></div><div className="stack-hint"><ArrowDown size={15}/><span>Continue rolando para explorar</span><motion.span className="step-count">{activeLabel}</motion.span></div></div><div className="card-stage">{steps.map((_, index) => <ApproachCard key={index} index={index} progress={scrollYProgress} reduced={!!reduced}/>)}</div></div></section>
      <section className="location wrap" id="localizacao"><div className="location-copy"><span className="eyebrow">03 / ESTAMOS PERTO</span><h2>Uma conversa.<br/>O primeiro <em>passo.</em></h2><p>Encontre a Rodrigues Fernandes Advocacia<br/>em Guararapes e conheça o escritório.</p><address><MapPin size={22} strokeWidth={1}/><span>Rua João Batistela, 1060<small>Guararapes — São Paulo</small></span></address><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="button dark-button">Como chegar <ArrowUpRight size={19}/></a></div><a className="location-map" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver endereço no Google Maps"><div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/><div className="map-road road-d"/><span className="street street-one">R. João Batistela</span><span className="street street-two">GUARARAPES / SP</span><div className="map-pin"><span>RF.</span><i/></div><div className="map-label">Rodrigues Fernandes<small>Rua João Batistela, 1060</small></div><div className="map-link">Abrir no Google Maps <ArrowUpRight size={18}/></div><span className="map-disclaimer">Representação ilustrativa · consulte a rota no Maps</span></a></section>
    </main>
    <footer className="footer"><div className="wrap footer-top"><a className="brand" href="#inicio"><span className="monogram">R<span>F</span><i/></span><span className="brand-name">RODRIGUES FERNANDES<small>ADVOCACIA</small></span></a><span>Seu direito. Nossa dedicação.</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={17}/></a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Rodrigues Fernandes Advocacia.</span><span>Conteúdo institucional. Não substitui orientação jurídica individual.</span></div></footer>
  </>;
}