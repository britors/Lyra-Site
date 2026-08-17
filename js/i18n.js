(() => {
  const DEFAULT_LOCALE = 'pt-BR';
  const LOCALES = ['pt-BR', 'en-US', 'es-ES'];
  const labels = {
    'pt-BR': 'Português', 'en-US': 'English', 'es-ES': 'Español',
  };

  const catalogs = {
    'en-US': {
      'Pular para o conteúdo': 'Skip to content', 'Abrir menu': 'Open menu', 'Sobre': 'About', 'A base': 'Foundation',
      'Ecossistema': 'Ecosystem', 'Livro': 'Book', 'Cronograma': 'Roadmap', 'Download': 'Download', 'Tema': 'Theme',
      'Ativar tema claro': 'Enable light theme', 'Ativar tema escuro': 'Enable dark theme', 'Navegação principal': 'Main navigation',
      'A Alpha 5 já está disponível': 'Alpha 5 is now available', 'Conheça o': 'Meet',
      'Marca Lyra OS e destaque da versão Alpha 5': 'Lyra OS brand and Alpha 5 release highlight',
      'Um sistema LTS feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.': 'An LTS system built to balance power, stability, and freedom — on desktop and server.',
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
      'O centro de controle do Lyra OS, pré-instalado e desenhado para deixar as decisões importantes sempre ao alcance.': 'The Lyra OS control center, preinstalled and designed to keep important choices within easy reach.',
      'Vega é a estrela mais brilhante da constelação de Lyra — o coração que orienta todo o sistema.': 'Vega is the brightest star in the Lyra constellation — the heart that guides the entire system.',
      'O Lyra OS vem com o': 'Lyra OS comes with', 'pré-instalado: uma coleção de ferramentas em uma interface gráfica simples e prática, pronta para facilitar tarefas e configurações do dia a dia.': 'preinstalled: a collection of tools in a simple, practical graphical interface, ready to make everyday tasks and configuration easier.',
      'Conhecer o LinuxToys': 'Discover LinuxToys',
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
      'As Alphas restantes avançam por gates: P0/P1 não passa para a etapa seguinte. Todas as features e a infraestrutura de i18n fecham até 06/10/2026; a última semana da Alpha 8 é exclusiva para estabilização.': 'The remaining Alphas advance through gates: P0/P1 issues do not move to the next stage. All features and i18n infrastructure close by Oct 6, 2026; Alpha 8’s final week is reserved for stabilization.',
      'Política de suporte da família Lyra OS 1.x': 'Lyra OS 1.x family support policy',
      'Família Lyra OS 1.x com suporte até outubro de 2032': 'Lyra OS 1.x family supported through October 2032',
      'A versão maior 1.x terá suporte até outubro de 2032. Cada versão menor mantém seu próprio ciclo de suporte e pode exigir a migração para uma versão 1.x mais recente.': 'The 1.x major version will be supported through October 2032. Each minor version has its own support cycle and may require an upgrade to a newer 1.x release.',
      '“1.0” e “1.1” são nomes de produto para os ciclos de release e complementam a versão de calendário (AAAA.MM) usada internamente. A família Lyra OS 1.x terá suporte até outubro de 2032.': '“1.0” and “1.1” are product names for release cycles and complement the calendar version (YYYY.MM) used internally. The Lyra OS 1.x family will be supported through October 2032.',
      'LANÇADA': 'RELEASED', 'ENTREGUE': 'DELIVERED', 'PUBLICAÇÃO · 14 AGO': 'RELEASE · AUG 14', '2 SEMANAS': '2 WEEKS', '2 SEMANAS · ESTABILIZAÇÃO': '2 WEEKS · STABILIZATION',
      '2 SEMANAS + HARDENING': '2 WEEKS + HARDENING', '4 SEMANAS': '4 WEEKS', '3 SEMANAS': '3 WEEKS', 'VERSÃO ESTÁVEL': 'STABLE RELEASE',
      '3 SEMANAS · SE NECESSÁRIA': '3 WEEKS · IF NEEDED', 'FEATURE FREEZE · 4 SEMANAS': 'FEATURE FREEZE · 4 WEEKS', 'UPGRADE + HARDENING': 'UPGRADE + HARDENING', 'LANÇAMENTO': 'RELEASE',
      'Fechamento do instalador e da publicação.': 'Installer and publishing completion.',
      'Antes rotulada Beta 1.': 'Previously labeled Beta 1.', 'Antes rotulada Beta 2.': 'Previously labeled Beta 2.',
      'i18n base, instalador em três idiomas e primeira onda de pacotes.': 'Base i18n, three-language installer, and first package wave.',
      'Descrição: o Lyra OS 1.0 oferece en-US, pt-BR e es-ES; outros idiomas ficam para ciclos futuros. O fluxo NVIDIA segue para a Alpha 5.': 'Description: Lyra OS 1.0 provides en-US, pt-BR, and es-ES; other languages are deferred to future cycles. The NVIDIA flow moves to Alpha 5.',
      'Bloqueadores do instalador e release, i18n restante, NVIDIA pós-instalação pelo Vega e contratos do Lyra Upgrade.': 'Installer and release blockers, remaining i18n, post-install NVIDIA through Vega, and Lyra Upgrade contracts.',
      'Qualificação de i18n e NVIDIA, core, preflight e serviço de update.': 'i18n and NVIDIA qualification, core, preflight, and update service.',
      'Interface, pós-boot, recuperação e rollback.': 'Interface, post-boot checks, recovery, and rollback.',
      'Upgrade entre releases e gate automatizado até 06/10; depois, somente estabilização.': 'Release upgrade and automated gate through Oct 6; stabilization only afterward.',
      'Descrição: a ISO NVIDIA dedicada foi cancelada; o Vega oferece o fluxo opcional com detecção, snapshot e rollback.': 'Description: the dedicated NVIDIA ISO was canceled; Vega provides the optional flow with detection, snapshot, and rollback.',
      'Congelamento funcional e correção de bugs.': 'Feature freeze and bug fixes.', 'Estabilidade, atualizações e regressões.': 'Stability, updates, and regressions.',
      'QA linguístico e correções finais.': 'Language QA and final fixes.', 'Somente bloqueadores P0/P1 e repetição do gate.': 'P0/P1 blockers and gate reruns only.',
      'ciclo com gate independente': 'independent gated cycle',
      'Alpha 5, Alpha 6, Alpha 7 e Alpha 8 são obrigatórias e possuem gates próprios. Um P0/P1 interrompe a ampliação de escopo da Alpha corrente. A semana de 06–13/10 recebe somente estabilização; sem gate verde, a fase Alpha continua.': 'Alpha 5, Alpha 6, Alpha 7, and Alpha 8 are mandatory and have their own gates. A P0/P1 issue stops scope expansion in the current Alpha. Oct 6–13 is reserved for stabilization; without a green gate, the Alpha stage continues.',
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
    'es-ES': {}
  };

  // Spanish reuses the complete English catalog as a safe fallback; overrides
  // below cover all primary navigation and public-facing summaries.
  Object.assign(catalogs['es-ES'], catalogs['en-US'], {
    'Pular para o conteúdo':'Saltar al contenido','Abrir menu':'Abrir menú','Sobre':'Acerca de','A base':'La base','Ecossistema':'Ecosistema','Livro':'Libro','Cronograma':'Hoja de ruta','Tema':'Tema',
    'A Alpha 5 já está disponível':'Alpha 5 ya está disponible','Marca Lyra OS e destaque da versão Alpha 5':'Marca Lyra OS y destaque de la versión Alpha 5','Conheça o':'Conoce','Um sistema LTS feito para encontrar o equilíbrio entre potência, estabilidade e liberdade — no desktop e no servidor.':'Un sistema LTS creado para equilibrar potencia, estabilidad y libertad, tanto en escritorio como en servidor.','Antes rotulada Beta 1.':'Antes denominada Beta 1.','Antes rotulada Beta 2.':'Antes denominada Beta 2.',
    'Harmonia. Performance. Liberdade.':'Armonía. Rendimiento. Libertad.','Harmonia · Performance · Liberdade':'Armonía · Rendimiento · Libertad','Escolher edição':'Elegir edición','Descobrir o projeto':'Descubrir el proyecto','Versão atual':'Versión actual','Base do sistema':'Base del sistema',
    '01 / A ideia':'01 / La idea','Um sistema que':'Un sistema que','não fica no caminho.':'no se interpone.','02 / A fundação':'02 / La base','A estabilidade':'La estabilidad','como ponto de partida.':'como punto de partida.','03 / O coração':'03 / El corazón','Tudo encontra seu centro.':'Todo encuentra su centro.',
    'O centro de controle do Lyra OS, pré-instalado e desenhado para deixar as decisões importantes sempre ao alcance.':'El centro de control de Lyra OS, preinstalado y diseñado para mantener las decisiones importantes siempre al alcance.','O Lyra OS vem com o':'Lyra OS incluye','pré-instalado: uma coleção de ferramentas em uma interface gráfica simples e prática, pronta para facilitar tarefas e configurações do dia a dia.':'preinstalado: una colección de herramientas con una interfaz gráfica sencilla y práctica, lista para facilitar las tareas y configuraciones cotidianas.','Conhecer o LinuxToys':'Conocer LinuxToys',
    '04 / A experiência':'04 / La experiencia','Familiar por natureza.':'Familiar por naturaleza.','Lyra por escolha.':'Lyra por elección.','05 / Para ir além':'05 / Para ir más allá','O livro oficial':'El libro oficial','do Lyra OS.':'de Lyra OS.','Idiomas da publicação':'Idiomas de publicación','Português e inglês.':'Solo portugués e inglés.','Cronograma completo':'Hoja de ruta','de releases.':'completa.',
    'Alpha 5–8 fecham o Desktop · feature freeze a partir da Beta 1':'Alpha 5–8 completan Desktop · congelación funcional desde Beta 1','07 / Uma nova etapa':'07 / Una nueva etapa','Escolha sua':'Elige tu','edição do Lyra.':'edición de Lyra.','Baixar Desktop':'Descargar Desktop','Baixar Server':'Descargar Server',
    'Política de suporte da família Lyra OS 1.x':'Política de soporte de la familia Lyra OS 1.x','Família Lyra OS 1.x com suporte até outubro de 2032':'Familia Lyra OS 1.x con soporte hasta octubre de 2032','A versão maior 1.x terá suporte até outubro de 2032. Cada versão menor mantém seu próprio ciclo de suporte e pode exigir a migração para uma versão 1.x mais recente.':'La versión mayor 1.x tendrá soporte hasta octubre de 2032. Cada versión menor mantiene su propio ciclo de soporte y puede requerir la actualización a una versión 1.x más reciente.','“1.0” e “1.1” são nomes de produto para os ciclos de release e complementam a versão de calendário (AAAA.MM) usada internamente. A família Lyra OS 1.x terá suporte até outubro de 2032.':'“1.0” y “1.1” son nombres de producto para los ciclos de lanzamiento y complementan la versión de calendario (AAAA.MM) utilizada internamente. La familia Lyra OS 1.x tendrá soporte hasta octubre de 2032.',
    'Contato':'Contacto','Galeria':'Galería','Recursos oficiais · 2026':'Recursos oficiales · 2026','Tudo o que você precisa para conhecer, testar e divulgar o Lyra OS.':'Todo lo necesario para conocer, probar y difundir Lyra OS.','01 / O projeto':'01 / El proyecto','Linux brasileiro.':'Linux brasileño.','Visão global.':'Visión global.','Estabilidade':'Estabilidad','Simplicidade':'Simplicidad','Elegância':'Elegancia',
    '02 / O nome':'02 / El nombre','Por que':'¿Por qué','03 / Para quem':'03 / Para quién','Feito para trabalhar.':'Hecho para trabajar.','Pronto para explorar.':'Listo para explorar.','Desenvolvedores':'Desarrolladores','Profissionais de TI':'Profesionales de TI','Empresas':'Empresas','Estudantes':'Estudiantes','Usuários de LTS':'Usuarios de LTS',
    '04 / Destaques':'04 / Destacados','O essencial,':'Lo esencial,','05 / Conheça o Vega':'05 / Conoce Vega','Seu sistema,':'Tu sistema,','em um só lugar.':'en un solo lugar.','Administração':'Administración','Configuração':'Configuración','Manutenção':'Mantenimiento','06 / Screenshots':'06 / Capturas','Veja o Lyra OS':'Mira Lyra OS','em contexto.':'en contexto.','07 / Especificações':'07 / Especificaciones','Ficha técnica.':'Ficha técnica.','Próximos passos.':'Próximos pasos.','Cronograma completo de releases.':'Hoja de ruta completa de versiones.','09 / Sobre o desenvolvedor':'09 / Sobre el desarrollador','10 / Imprensa & contato':'10 / Prensa y contacto','Obrigado pelo interesse no Lyra OS.':'Gracias por tu interés en Lyra OS.'
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
      'pt-BR': 'Lyra OS — Harmonia. Performance. Liberdade.',
      'en-US': 'Lyra OS — Harmony. Performance. Freedom.',
      'es-ES': 'Lyra OS — Armonía. Rendimiento. Libertad.'
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
