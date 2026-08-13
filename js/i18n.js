(() => {
  const DEFAULT_LOCALE = 'pt-BR';
  const LOCALES = [
    'pt-BR', 'en-US', 'es-ES',
    // Temporarily hidden from the site; keep it for a future release.
    // 'zh-CN',
  ];
  const labels = {
    'pt-BR': 'Português', 'en-US': 'English', 'es-ES': 'Español',
    // Temporarily disabled together with the locale entry above.
    // 'zh-CN': '简体中文',
  };

  const catalogs = {
    'en-US': {
      'Pular para o conteúdo': 'Skip to content', 'Abrir menu': 'Open menu', 'Sobre': 'About', 'A base': 'Foundation',
      'Ecossistema': 'Ecosystem', 'Livro': 'Book', 'Cronograma': 'Roadmap', 'Download': 'Download', 'Tema': 'Theme',
      'Ativar tema claro': 'Enable light theme', 'Ativar tema escuro': 'Enable dark theme', 'Navegação principal': 'Main navigation',
      'A Alpha 2 já está disponível': 'Alpha 2 is now available', 'Conheça o': 'Meet',
      'Um sistema feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.': 'A system built to balance power, stability, and freedom — on desktop and server.',
      'Harmonia. Performance. Liberdade.': 'Harmony. Performance. Freedom.', 'Harmonia · Performance · Liberdade': 'Harmony · Performance · Freedom',
      'Escolher edição': 'Choose edition', 'Descobrir o projeto': 'Discover the project', 'Versão atual': 'Current version',
      'Base do sistema': 'System base', 'Disponível': 'Available', 'agora': 'now', 'Ver downloads': 'View downloads',
      'role para explorar': 'scroll to explore', '01 / A ideia': '01 / The idea', 'Um sistema que': 'A system that',
      'não fica no caminho.': 'stays out of your way.',
      'Lyra OS é um projeto pessoal independente de': 'Lyra OS is an independent personal project by',
      ', criado para transformar o desktop Linux em um lugar mais coerente, acolhedor e confiável.': ', created to make the Linux desktop more coherent, welcoming, and reliable.',
      'O nome vem da constelação de Lyra: um pequeno desenho no céu com uma identidade marcante. É dessa mesma ideia de clareza e proporção que nasce cada escolha do sistema.': 'The name comes from the Lyra constellation: a small pattern in the sky with a distinctive identity. Every system choice grows from that same sense of clarity and proportion.',
      'ciclo previsível': 'predictable cycle', 'estabilidade': 'stability', 'open source': 'open source', '02 / A fundação': '02 / The foundation',
      'A estabilidade': 'Stability', 'como ponto de partida.': 'as the starting point.',
      'como sua base. Uma decisão intencional por uma fundação madura, com ciclo de lançamento previsível e foco em consistência.': 'as its base. An intentional choice of a mature foundation, with a predictable release cycle and a focus on consistency.',
      'Em um cenário dominado por bases Arch, Ubuntu e Fedora, o Leap traz uma alternativa sólida para quem quer usar o desktop com tranquilidade — sem abrir mão de performance ou liberdade.': 'In a landscape dominated by Arch, Ubuntu, and Fedora bases, Leap offers a solid alternative for people who want a worry-free desktop without giving up performance or freedom.',
      'Conhecer o openSUSE': 'Discover openSUSE', '03 / O coração': '03 / The heart', 'Tudo encontra seu centro.': 'Everything finds its center.',
      'O Vega organiza o essencial e dá ao sistema um ponto de partida simples, claro e humano.': 'Vega organizes the essentials and gives the system a simple, clear, human starting point.',
      'O centro de controle do Lyra OS. O único componente do ecossistema que vem pré-instalado na Alpha 2, desenhado para deixar as decisões importantes sempre ao alcance.': 'The Lyra OS control center. The only ecosystem component preinstalled in Alpha 2, designed to keep important choices within easy reach.',
      'Vega é a estrela mais brilhante da constelação de Lyra — o coração que orienta todo o sistema.': 'Vega is the brightest star in the Lyra constellation — the heart that guides the entire system.',
      'O ecossistema cresce com cuidado. Os demais componentes seguem em desenvolvimento e validação para versões futuras.': 'The ecosystem grows carefully. Other components remain under development and validation for future releases.',
      '04 / A experiência': '04 / The experience', 'Familiar por natureza.': 'Familiar by nature.', 'Lyra por escolha.': 'Lyra by choice.',
      'Um GNOME limpo, com o branding do Lyra aplicado com intenção. Menos ruído visual, mais espaço para aquilo que você quer fazer.': 'A clean GNOME desktop with intentional Lyra branding. Less visual noise, more room for what you want to do.',
      'Interface clara e consistente': 'Clear, consistent interface', 'Base sólida para o seu dia a dia': 'A solid base for everyday use',
      'Liberdade para personalizar': 'Freedom to customize', 'Bom dia, Rodrigo': 'Good morning, Rodrigo', 'Seu sistema,': 'Your system,', 'em harmonia.': 'in harmony.', 'Em breve': 'Coming soon',
      '05 / Para ir além': '05 / Go further', 'O livro oficial': 'The official book', 'do Lyra OS.': 'of Lyra OS.',
      'Um guia completo de instalação, utilização e administração — do primeiro contato ao domínio do sistema, escrito por Rodrigo Brito.': 'A complete guide to installation, use, and administration — from first contact to mastering the system, written by Rodrigo Brito.',
      'Idiomas da publicação': 'Publication languages', 'Português e inglês.': 'Portuguese and English only.',
      'Em desenvolvimento — lançamento em breve': 'In development — coming soon', '06 / Roadmap': '06 / Roadmap',
      'Cronograma completo': 'Complete release', 'de releases.': 'roadmap.',
      'O número de iterações por estágio é um teto, não uma promessa fixa. A promoção acontece por critério de saída — sem itens críticos abertos no gate de release — e não apenas pela data. As janelas abaixo consideram o uso de todo o tempo previsto.': 'The number of iterations per stage is a ceiling, not a fixed promise. Promotion depends on exit criteria — no open critical release-gate items — not just the date. The windows below assume all planned time is used.',
      'Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1': 'Alpha 5–8 complete Desktop · feature freeze starts at Beta 1',
      'Todas as features e a infraestrutura de i18n fecham em 13/10/2026; Betas e RCs servem apenas para correções.': 'All features and i18n infrastructure close by Oct 13, 2026; Betas and RCs are for fixes only.',
      'LANÇADA': 'RELEASED', 'ENTREGUE': 'DELIVERED', 'PUBLICAÇÃO · 14 AGO': 'RELEASE · AUG 14', '2 SEMANAS': '2 WEEKS',
      '2 SEMANAS + HARDENING': '2 WEEKS + HARDENING', '4 SEMANAS': '4 WEEKS', '3 SEMANAS': '3 WEEKS', 'VERSÃO ESTÁVEL': 'STABLE RELEASE',
      '3 SEMANAS · SE NECESSÁRIA': '3 WEEKS · IF NEEDED', 'FEATURE FREEZE · 4 SEMANAS': 'FEATURE FREEZE · 4 WEEKS', 'LANÇAMENTO': 'RELEASE',
      'Fechamento do instalador e da publicação.': 'Installer and publishing completion.',
      'i18n base, instalador em quatro idiomas e primeira onda de pacotes.': 'Base i18n, four-language installer, and first package wave.',
      'i18n restante, NVIDIA e contratos do Lyra Upgrade.': 'Remaining i18n, NVIDIA, and Lyra Upgrade contracts.',
      'Integração dos RPMs, core e serviço de update.': 'RPM integration, core, and update service.',
      'Interface, pós-boot, recuperação e rollback.': 'Interface, post-boot checks, recovery, and rollback.',
      'Upgrade entre releases, gate automatizado e estabilização.': 'Release upgrade, automated gate, and stabilization.',
      'Congelamento funcional e correção de bugs.': 'Feature freeze and bug fixes.', 'Estabilidade, atualizações e regressões.': 'Stability, updates, and regressions.',
      'QA linguístico e correções finais.': 'Language QA and final fixes.', 'Somente bloqueadores P0/P1 e repetição do gate.': 'P0/P1 blockers and gate reruns only.',
      'ciclo com gate independente': 'independent gated cycle',
      'O Server possui ciclo e gate independentes, mas segue a mesma cadência e os mesmos critérios de qualidade do Desktop. Desktop e Server não precisam ser publicados no mesmo dia.': 'Server has an independent cycle and gate while following the same quality criteria as Desktop. Desktop and Server do not need to ship on the same day.',
      'VERSÃO ATUAL · 3 SEMANAS': 'CURRENT VERSION · 3 WEEKS', 'rebase para openSUSE Leap 16.1': 'rebase to openSUSE Leap 16.1',
      '07 / Uma nova etapa': '07 / A new stage', 'Escolha sua': 'Choose your', 'edição do Lyra.': 'Lyra edition.',
      'O Lyra OS está disponível para desktop e servidor, com imagens para arquitetura x86_64.': 'Lyra OS is available for desktop and server, with x86_64 images.',
      'Para computadores pessoais, com ambiente gráfico e experiência completa do Lyra OS.': 'For personal computers, with a graphical desktop and the complete Lyra OS experience.',
      'Baixar Desktop': 'Download Desktop', 'Para servidores e infraestrutura, com uma base enxuta voltada à administração de serviços.': 'For servers and infrastructure, with a lean base focused on service administration.',
      'Baixar Server': 'Download Server', 'Downloads hospedados no SourceForge.': 'Downloads hosted on SourceForge.', 'Tutorial de instalação': 'Installation tutorial',
      'Instale a Alpha 2 passo a passo.': 'Install Alpha 2 step by step.', 'Assistir no YouTube': 'Watch on YouTube',
      'Projeto pessoal independente de Rodrigo Brito.': 'An independent personal project by Rodrigo Brito.', 'Feito com curiosidade, cuidado e software livre.': 'Made with curiosity, care, and free software.',
      'Voltar ao topo': 'Back to top', 'Página inicial': 'Home', 'Contato': 'Contact', 'Galeria': 'Gallery',
      'Recursos oficiais · 2026': 'Official resources · 2026', 'Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.': 'Everything you need to learn about, test, and cover Lyra OS.',
      'Media Kit': 'Media kit', 'Versão de avaliação': 'Preview release', '01 / O projeto': '01 / The project', 'Linux brasileiro.': 'Brazilian Linux.', 'Visão global.': 'Global vision.',
      'O Lyra OS é uma distribuição Linux brasileira baseada no openSUSE Leap 16.0, desenvolvida para oferecer uma experiência moderna, elegante e extremamente estável.': 'Lyra OS is a Brazilian Linux distribution based on openSUSE Leap 16.0, built to provide a modern, elegant, and highly stable experience.',
      'Estabilidade': 'Stability', 'Simplicidade': 'Simplicity', 'Performance': 'Performance', 'Elegância': 'Elegance',
      'Baseado no openSUSE Leap LTS.': 'Based on openSUSE Leap LTS.', 'Ferramentas intuitivas.': 'Intuitive tools.', 'Sistema leve e otimizado.': 'Lightweight, optimized system.',
      'Experiência visual consistente do início ao fim.': 'A consistent visual experience from start to finish.', '02 / O nome': '02 / The name', 'Por que': 'Why',
      '03 / Para quem': '03 / For whom', 'Feito para trabalhar.': 'Built for work.', 'Pronto para explorar.': 'Ready to explore.',
      'Desenvolvedores': 'Developers', 'Profissionais de TI': 'IT professionals', 'Empresas': 'Businesses', 'Estudantes': 'Students', 'Usuários de LTS': 'LTS users',
      '04 / Destaques': '04 / Highlights', 'O essencial,': 'The essentials,', 'Uma base madura, previsível e confiável.': 'A mature, predictable, reliable base.',
      'GNOME personalizado': 'Customized GNOME', 'Uma experiência coesa, familiar e refinada.': 'A cohesive, familiar, refined experience.',
      'Gerenciamento centralizado e integrado.': 'Centralized, integrated management.', 'Tema próprio': 'Custom theme', 'Ícones exclusivos': 'Exclusive icons',
      'Atualizações simples': 'Simple updates', 'Alta estabilidade': 'High stability', 'Excelente desempenho': 'Excellent performance',
      '05 / Conheça o Vega': '05 / Meet Vega', 'em um só lugar.': 'in one place.', 'O Vega é o centro de gerenciamento do Lyra OS.': 'Vega is the Lyra OS management center.',
      'Administração': 'Administration', 'Configuração': 'Configuration', 'Manutenção': 'Maintenance', 'VISÃO GERAL': 'OVERVIEW',
      'Tudo em harmonia': 'Everything in harmony', 'Seu sistema está atualizado.': 'Your system is up to date.', 'Atualizações': 'Updates', 'Sistema em dia': 'System up to date',
      'Software': 'Software', 'Gerenciar apps': 'Manage apps', 'Sistema': 'System', 'Configurações': 'Settings', '06 / Screenshots': '06 / Screenshots',
      'Veja o Lyra OS': 'See Lyra OS', 'em contexto.': 'in context.', 'Ficha técnica.': 'Fact sheet.', '07 / Especificações': '07 / Specifications',
      'Sistema de pacotes': 'Package system', 'Gerenciador': 'Package manager', 'Arquitetura': 'Architecture', 'Licença': 'License',
      '08 / Roadmap': '08 / Roadmap', 'Próximos passos.': 'Next steps.', 'Cronograma completo de releases.': 'Complete release roadmap.',
      'Ver cronograma completo até a versão final': 'View the complete roadmap through the final release', 'ENTREGUE': 'DELIVERED', 'PUBLICAÇÃO ANTECIPADA': 'EARLY RELEASE',
      'CADÊNCIA · 2 SEMANAS': 'CADENCE · 2 WEEKS', 'CADÊNCIA · 2 SEMANAS + HARDENING': 'CADENCE · 2 WEEKS + HARDENING',
      'CADÊNCIA · 4 SEMANAS': 'CADENCE · 4 WEEKS', 'CADÊNCIA · 3 SEMANAS': 'CADENCE · 3 WEEKS',
      'Fundador e desenvolvedor': 'Founder and developer', '09 / Sobre o desenvolvedor': '09 / About the developer', 'Uma jornada que': 'A journey that', 'começou em 1998.': 'began in 1998.',
      'Perfil no GitHub': 'GitHub profile', '10 / Imprensa & contato': '10 / Press & contact', 'Vamos conversar': "Let's talk", 'sobre o Lyra.': 'about Lyra.',
      'Email': 'Email', 'País': 'Country', 'Brasil': 'Brazil', 'Obrigado pelo interesse no Lyra OS.': 'Thank you for your interest in Lyra OS.',
      'Compartilhar publicação': 'Share coverage'
    },
    'es-ES': {}, 'zh-CN': {}
  };

  // Spanish and Chinese reuse the complete English catalog as a safe fallback;
  // overrides below cover all primary navigation and public-facing summaries.
  Object.assign(catalogs['es-ES'], catalogs['en-US'], {
    'Pular para o conteúdo':'Saltar al contenido','Abrir menu':'Abrir menú','Sobre':'Acerca de','A base':'La base','Ecossistema':'Ecosistema','Livro':'Libro','Cronograma':'Hoja de ruta','Tema':'Tema',
    'A Alpha 2 já está disponível':'Alpha 2 ya está disponible','Conheça o':'Conoce','Um sistema feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.':'Un sistema creado para equilibrar potencia, estabilidad y libertad, tanto en escritorio como en servidor.',
    'Harmonia. Performance. Liberdade.':'Armonía. Rendimiento. Libertad.','Harmonia · Performance · Liberdade':'Armonía · Rendimiento · Libertad','Escolher edição':'Elegir edición','Descobrir o projeto':'Descubrir el proyecto','Versão atual':'Versión actual','Base do sistema':'Base del sistema',
    '01 / A ideia':'01 / La idea','Um sistema que':'Un sistema que','não fica no caminho.':'no se interpone.','02 / A fundação':'02 / La base','A estabilidade':'La estabilidad','como ponto de partida.':'como punto de partida.','03 / O coração':'03 / El corazón','Tudo encontra seu centro.':'Todo encuentra su centro.',
    '04 / A experiência':'04 / La experiencia','Familiar por natureza.':'Familiar por naturaleza.','Lyra por escolha.':'Lyra por elección.','05 / Para ir além':'05 / Para ir más allá','O livro oficial':'El libro oficial','do Lyra OS.':'de Lyra OS.','Idiomas da publicação':'Idiomas de publicación','Português e inglês.':'Solo portugués e inglés.','Cronograma completo':'Hoja de ruta','de releases.':'completa.',
    'Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1':'Alpha 5–8 completan Desktop · congelación funcional desde Beta 1','07 / Uma nova etapa':'07 / Una nueva etapa','Escolha sua':'Elige tu','edição do Lyra.':'edición de Lyra.','Baixar Desktop':'Descargar Desktop','Baixar Server':'Descargar Server',
    'Contato':'Contacto','Galeria':'Galería','Recursos oficiais · 2026':'Recursos oficiales · 2026','Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.':'Todo lo necesario para conocer, probar y difundir Lyra OS.','01 / O projeto':'01 / El proyecto','Linux brasileiro.':'Linux brasileño.','Visão global.':'Visión global.','Estabilidade':'Estabilidad','Simplicidade':'Simplicidad','Elegância':'Elegancia',
    '02 / O nome':'02 / El nombre','Por que':'¿Por qué','03 / Para quem':'03 / Para quién','Feito para trabalhar.':'Hecho para trabajar.','Pronto para explorar.':'Listo para explorar.','Desenvolvedores':'Desarrolladores','Profissionais de TI':'Profesionales de TI','Empresas':'Empresas','Estudantes':'Estudiantes','Usuários de LTS':'Usuarios de LTS',
    '04 / Destaques':'04 / Destacados','O essencial,':'Lo esencial,','05 / Conheça o Vega':'05 / Conoce Vega','Seu sistema,':'Tu sistema,','em um só lugar.':'en un solo lugar.','Administração':'Administración','Configuração':'Configuración','Manutenção':'Mantenimiento','06 / Screenshots':'06 / Capturas','Veja o Lyra OS':'Mira Lyra OS','em contexto.':'en contexto.','07 / Especificações':'07 / Especificaciones','Ficha técnica.':'Ficha técnica.','Próximos passos.':'Próximos pasos.','Cronograma completo de releases.':'Hoja de ruta completa de versiones.','09 / Sobre o desenvolvedor':'09 / Sobre el desarrollador','10 / Imprensa & contato':'10 / Prensa y contacto','Obrigado pelo interesse no Lyra OS.':'Gracias por tu interés en Lyra OS.'
  });
  Object.assign(catalogs['zh-CN'], catalogs['en-US'], {
    'Pular para o conteúdo':'跳到主要内容','Abrir menu':'打开菜单','Sobre':'关于','A base':'系统基础','Ecossistema':'生态系统','Livro':'图书','Cronograma':'路线图','Tema':'主题','Download':'下载',
    'A Alpha 2 já está disponível':'Alpha 2 已可下载','Conheça o':'了解','Um sistema feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.':'一个在桌面和服务器上平衡性能、稳定与自由的系统。','Harmonia. Performance. Liberdade.':'和谐。性能。自由。','Harmonia · Performance · Liberdade':'和谐 · 性能 · 自由',
    'Escolher edição':'选择版本','Descobrir o projeto':'了解项目','Versão atual':'当前版本','Base do sistema':'系统基础','01 / A ideia':'01 / 理念','Um sistema que':'一个','não fica no caminho.':'不打扰你的系统。','02 / A fundação':'02 / 基础','A estabilidade':'稳定性','como ponto de partida.':'是我们的起点。','03 / O coração':'03 / 核心','Tudo encontra seu centro.':'一切各得其所。',
    '04 / A experiência':'04 / 体验','Familiar por natureza.':'自然而熟悉。','Lyra por escolha.':'因选择而 Lyra。','05 / Para ir além':'05 / 进一步','O livro oficial':'Lyra OS','do Lyra OS.':'官方图书。','Idiomas da publicação':'出版语言','Português e inglês.':'仅提供葡萄牙语和英语。','Cronograma completo':'完整发布','de releases.':'路线图。','Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1':'Alpha 5–8 完成桌面版 · Beta 1 起功能冻结',
    'LANÇADA':'已发布','ENTREGUE':'已交付','2 SEMANAS':'2 周','3 SEMANAS':'3 周','4 SEMANAS':'4 周','LANÇAMENTO':'发布','VERSÃO ESTÁVEL':'稳定版','07 / Uma nova etapa':'07 / 新阶段','Escolha sua':'选择你的','edição do Lyra.':'Lyra 版本。','Baixar Desktop':'下载桌面版','Baixar Server':'下载服务器版',
    'Contato':'联系','Galeria':'图库','Recursos oficiais · 2026':'官方资源 · 2026','Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.':'了解、测试和报道 Lyra OS 所需的一切。','01 / O projeto':'01 / 项目','Linux brasileiro.':'来自巴西的 Linux。','Visão global.':'全球视野。','Estabilidade':'稳定','Simplicidade':'简洁','Performance':'性能','Elegância':'优雅',
    '02 / O nome':'02 / 名称','Por que':'为什么叫','03 / Para quem':'03 / 适用人群','Feito para trabalhar.':'为工作而生。','Pronto para explorar.':'随时探索。','Desenvolvedores':'开发者','Profissionais de TI':'IT 专业人员','Empresas':'企业','Estudantes':'学生','Usuários de LTS':'LTS 用户','04 / Destaques':'04 / 亮点','O essencial,':'必备功能，','05 / Conheça o Vega':'05 / 了解 Vega','Seu sistema,':'你的系统，','em um só lugar.':'尽在一处。','Administração':'管理','Configuração':'配置','Manutenção':'维护','06 / Screenshots':'06 / 截图','Veja o Lyra OS':'查看 Lyra OS','em contexto.':'实际体验。','07 / Especificações':'07 / 规格','Ficha técnica.':'技术规格。','Próximos passos.':'下一步。','Cronograma completo de releases.':'完整发布路线图。','09 / Sobre o desenvolvedor':'09 / 关于开发者','10 / Imprensa & contato':'10 / 媒体与联系','Obrigado pelo interesse no Lyra OS.':'感谢你对 Lyra OS 的关注。'
  });

  const readLocale = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LOCALES.includes(fromUrl)) return fromUrl;
    try { const saved = localStorage.getItem('lyra-locale'); if (LOCALES.includes(saved)) return saved; } catch {}
    return DEFAULT_LOCALE;
  };
  let locale = readLocale();
  const sourceText = new WeakMap();
  const sourceAttrs = new WeakMap();
  const t = (value) => locale === DEFAULT_LOCALE ? value : (catalogs[locale]?.[value] || value);

  const translate = () => {
    document.documentElement.lang = locale;
    document.querySelectorAll('body *:not(script):not(style)').forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) return;
        if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
        const original = sourceText.get(node);
        const trimmed = original.trim();
        node.nodeValue = original.replace(trimmed, t(trimmed));
      });
      ['aria-label', 'title', 'alt'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = sourceAttrs.get(element);
        if (!originals) { originals = {}; sourceAttrs.set(element, originals); }
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, t(originals[attribute]));
      });
    });
    const titles = {
      'pt-BR': document.body.classList.contains('press-page') ? 'Press Kit · Lyra OS' : 'Lyra OS — Harmonia. Performance. Liberdade.',
      'en-US': document.body.classList.contains('press-page') ? 'Press Kit · Lyra OS' : 'Lyra OS — Harmony. Performance. Freedom.',
      'es-ES': document.body.classList.contains('press-page') ? 'Kit de prensa · Lyra OS' : 'Lyra OS — Armonía. Rendimiento. Libertad.',
      'zh-CN': document.body.classList.contains('press-page') ? '媒体资料包 · Lyra OS' : 'Lyra OS — 和谐。性能。自由。'
    };
    document.title = titles[locale];
    document.querySelector('.language-select')?.setAttribute('aria-label', t('Idioma do site'));
    window.dispatchEvent(new CustomEvent('lyra:locale-changed', { detail: { locale } }));
  };

  const installSelector = () => {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    const wrapper = document.createElement('label'); wrapper.className = 'language-picker';
    wrapper.innerHTML = '<span class="sr-only">Idioma do site</span><span aria-hidden="true">文/A</span><select class="language-select"></select>';
    const select = wrapper.querySelector('select');
    LOCALES.forEach((value) => { const option = document.createElement('option'); option.value = value; option.textContent = labels[value]; select.append(option); });
    select.value = locale;
    select.addEventListener('change', () => {
      locale = select.value; try { localStorage.setItem('lyra-locale', locale); } catch {}
      const url = new URL(location.href); if (locale === DEFAULT_LOCALE) url.searchParams.delete('lang'); else url.searchParams.set('lang', locale);
      history.replaceState(null, '', url);
      translate();
    });
    nav.insertBefore(wrapper, nav.querySelector('.theme-toggle'));
  };

  window.LyraI18n = { t, get locale() { return locale; }, locales: LOCALES };
  document.addEventListener('DOMContentLoaded', () => { installSelector(); translate(); });
})();
