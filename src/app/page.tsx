"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Users, TrendingUp, Camera, Hash, Clock, Target, Zap, BarChart3, Star, Gift, MessageCircle } from 'lucide-react'

const modules = [
  {
    id: 1,
    title: "Fundamentos da Viralização",
    icon: <TrendingUp className="w-8 h-8" />,
    content: {
      intro: "Entenda os princípios fundamentais que fazem conteúdo viralizar nas redes sociais",
      topics: [
        {
          title: "O que é Viralização?",
          content: "Viralização é o fenômeno onde um conteúdo se espalha rapidamente através das redes sociais, alcançando milhões de pessoas em pouco tempo. No Instagram e TikTok, isso acontece quando o algoritmo identifica que seu conteúdo está gerando alto engajamento (curtidas, comentários, compartilhamentos) e decide mostrá-lo para mais pessoas. A viralização não é sorte - é ciência. Existem padrões específicos que você pode seguir para aumentar drasticamente suas chances de criar conteúdo viral."
        },
        {
          title: "Psicologia do Compartilhamento",
          content: "As pessoas compartilham conteúdo por razões emocionais específicas: para se sentirem inteligentes, para entreter amigos, para expressar sua identidade, ou para ajudar outros. Conteúdo que evoca emoções fortes (surpresa, alegria, raiva, nostalgia) tem 3x mais chances de ser compartilhado. O cérebro humano é programado para prestar atenção em novidades, contrastes e padrões inesperados. Use isso a seu favor criando conteúdo que quebra expectativas e gera reações emocionais imediatas."
        },
        {
          title: "Algoritmos do Instagram e TikTok",
          content: "O algoritmo do Instagram prioriza: tempo de visualização, engajamento nos primeiros minutos, relacionamento com o criador, e relevância do conteúdo. Já o TikTok foca em: taxa de conclusão do vídeo, re-assistidas, compartilhamentos, e tempo gasto na tela. Ambos algoritmos 'testam' seu conteúdo com uma pequena audiência primeiro. Se performar bem, expandem o alcance. Por isso, os primeiros 30 minutos após postar são cruciais. O algoritmo também considera a consistência - postar regularmente no mesmo horário aumenta sua visibilidade."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Criação de Conteúdo Magnético",
    icon: <Camera className="w-8 h-8" />,
    content: {
      intro: "Aprenda a criar conteúdo irresistível que prende a atenção desde o primeiro segundo",
      topics: [
        {
          title: "Hook Perfeito nos Primeiros 3 Segundos",
          content: "Os primeiros 3 segundos determinam se alguém vai parar para assistir seu conteúdo ou continuar scrollando. Use técnicas como: começar com uma pergunta intrigante ('Você sabia que...?'), fazer uma afirmação controversa, mostrar o resultado final primeiro, ou criar suspense visual. No TikTok, 65% das pessoas decidem se vão assistir o vídeo completo nos primeiros 3 segundos. Use texto na tela, cores contrastantes, movimentos rápidos ou expressões faciais exageradas para capturar atenção instantaneamente."
        },
        {
          title: "Storytelling para Redes Sociais",
          content: "Toda história viral segue uma estrutura: Problema → Tensão → Resolução. Mesmo em vídeos de 15 segundos, você pode contar uma história completa. Use a técnica do 'loop narrativo': comece mostrando o final, depois volte ao início para explicar como chegou lá. Histórias pessoais performam 5x melhor que conteúdo genérico. Compartilhe fracassos, transformações, descobertas. As pessoas se conectam com vulnerabilidade e autenticidade. Use cliffhangers para manter as pessoas assistindo até o final."
        },
        {
          title: "Elementos Visuais que Convertem",
          content: "Cores vibrantes aumentam engajamento em 80%. Use contrastes fortes, especialmente vermelho, amarelo e azul. Texto na tela deve ocupar no máximo 20% do vídeo e usar fontes grandes e legíveis. Movimentos rápidos e cortes dinâmicos mantêm atenção. A regra dos terços funciona: posicione elementos importantes nos pontos de intersecção. Use close-ups no rosto para criar conexão emocional. Backgrounds simples fazem você se destacar. Iluminação natural ou ring light fazem diferença dramática na qualidade visual."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Timing e Frequência Estratégica",
    icon: <Clock className="w-8 h-8" />,
    content: {
      intro: "Descubra quando e com que frequência postar para maximizar seu alcance",
      topics: [
        {
          title: "Melhores Horários para Postar",
          content: "Instagram: 11h-13h e 19h-21h nos dias úteis performam melhor para a maioria dos nichos. Terça, quarta e quinta são os dias com maior engajamento. TikTok: 6h-10h e 19h-23h são ideais, com picos às 9h e 21h. Fins de semana funcionam bem no TikTok. Mas atenção: teste seus próprios horários! Vá em Insights e analise quando sua audiência está online. Poste consistentemente no mesmo horário por 2 semanas e compare resultados. Fuso horário da sua audiência é mais importante que o seu."
        },
        {
          title: "Frequência Ideal de Postagem",
          content: "Instagram: 1 post no feed por dia + 3-5 stories + 3-4 reels por semana é o ideal para crescimento. Mais que isso pode saturar sua audiência. TikTok: 1-3 vídeos por dia é perfeito. O algoritmo favorece criadores ativos. Qualidade sempre supera quantidade, mas consistência é fundamental. Crie um calendário editorial e siga religiosamente. Use ferramentas de agendamento para manter regularidade mesmo quando não puder postar manualmente. Audiências esperam consistência - quebrar o padrão pode prejudicar alcance."
        },
        {
          title: "Estratégia de Batch Content",
          content: "Grave 10-15 vídeos em uma sessão para ter conteúdo para semanas. Use roupas diferentes e cenários variados para parecer que foram gravados em dias diferentes. Crie templates de conteúdo que você pode reutilizar: 'Coisas que eu faria se...', 'Erros que cometi...', 'Dicas que mudaram minha vida...'. Tenha sempre 5-7 vídeos prontos como backup. Isso reduz stress e mantém qualidade alta. Use um dia da semana só para criação de conteúdo. Planejamento antecipado permite aproveitar trends no momento certo."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Hashtags e SEO Social",
    icon: <Hash className="w-8 h-8" />,
    content: {
      intro: "Domine a arte das hashtags e otimização para ser descoberto por milhões",
      topics: [
        {
          title: "Estratégia de Hashtags Inteligente",
          content: "Use a regra 5-5-5: 5 hashtags grandes (1M+ posts), 5 médias (100K-1M posts), 5 pequenas (menos de 100K posts). Hashtags pequenas têm menos competição e maior chance de você aparecer no topo. No Instagram, use 20-30 hashtags. No TikTok, 3-5 hashtags são suficientes. Pesquise hashtags relacionadas ao seu nicho e veja quais estão crescendo. Crie hashtags próprias para sua marca. Evite hashtags banidas ou shadowbanned. Use ferramentas como Hashtagify ou Display Purposes para pesquisa."
        },
        {
          title: "SEO para Redes Sociais",
          content: "Seu nome de usuário deve conter palavras-chave do seu nicho. Bio deve ser otimizada com termos que pessoas buscam. Use palavras-chave nas legendas naturalmente. No TikTok, fale palavras-chave em voz alta - o algoritmo 'escuta' o áudio. Legendas automáticas ajudam na descoberta. Responda comentários com palavras-chave relevantes. Use localização quando relevante. Nomes de arquivos dos vídeos também importam - renomeie antes de fazer upload. Pense como sua audiência busca conteúdo e otimize para essas buscas."
        },
        {
          title: "Trending Topics e Sounds",
          content: "Use sons trending nos primeiros 2-3 dias para máximo alcance. No TikTok, sons virais podem multiplicar seu alcance por 10x. Adapte trends para seu nicho - não copie exatamente, mas dê sua versão única. Monitore a aba 'Descobrir' diariamente para identificar trends emergentes. Use ferramentas como TrendTok ou Later Influence para rastrear trends. Participe de challenges populares rapidamente. Crie suas próprias trends usando sons originais. Trends têm ciclo de vida curto - aja rápido quando identificar uma oportunidade."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Engajamento e Comunidade",
    icon: <Users className="w-8 h-8" />,
    content: {
      intro: "Construa uma comunidade engajada que amplifica seu conteúdo organicamente",
      topics: [
        {
          title: "Técnicas de Engajamento Avançadas",
          content: "Faça perguntas específicas nas legendas que exigem respostas detalhadas. Use 'comentário fixado' para direcionar conversas. Responda TODOS os comentários nas primeiras 2 horas - isso sinaliza ao algoritmo que seu conteúdo gera engajamento. Crie conteúdo que naturalmente gera debate (mas evite polêmicas desnecessárias). Use enquetes nos Stories para aumentar interação. Mencione seguidores em Stories quando eles comentam algo interessante. Crie 'inside jokes' com sua comunidade. Engajamento genuíno sempre supera números inflados artificialmente."
        },
        {
          title: "Construção de Comunidade Leal",
          content: "Compartilhe bastidores da sua vida/trabalho para criar conexão pessoal. Responda DMs pessoalmente sempre que possível. Crie conteúdo exclusivo para seguidores fiéis. Use Stories para conversas mais íntimas e espontâneas. Celebre marcos da comunidade (seguidores, aniversários). Crie hashtag própria para sua comunidade se identificar. Faça lives regulares para interação em tempo real. Lembre-se de nomes de seguidores frequentes. Uma comunidade de 10K pessoas engajadas vale mais que 100K seguidores passivos."
        },
        {
          title: "Colaborações Estratégicas",
          content: "Colabore com criadores do mesmo nicho mas não concorrentes diretos. Duetos no TikTok podem viralizar mais que vídeos solo. Participe de lives de outros criadores. Comente genuinamente em posts de criadores maiores - pode gerar seguidores. Crie conteúdo em resposta a outros criadores (sem ser negativo). Use a função 'Remix' do Instagram estrategicamente. Organize challenges com outros criadores. Cross-promotion funciona quando há valor mútuo. Networking genuíno sempre supera autopromoção forçada."
        }
      ]
    }
  },
  {
    id: 6,
    title: "Análise e Otimização de Performance",
    icon: <BarChart3 className="w-8 h-8" />,
    content: {
      intro: "Use dados para otimizar sua estratégia e multiplicar seus resultados",
      topics: [
        {
          title: "Métricas que Realmente Importam",
          content: "Alcance e impressões mostram quantas pessoas viram seu conteúdo. Taxa de engajamento (curtidas + comentários + compartilhamentos ÷ alcance) é mais importante que números absolutos. Tempo médio de visualização indica qualidade do conteúdo. Taxa de salvamento mostra valor percebido. Crescimento de seguidores deve ser consistente, não apenas picos. No TikTok, taxa de conclusão é crucial. Analise quais posts geraram mais seguidores novos. Monitore quando pessoas param de assistir seus vídeos para identificar pontos fracos."
        },
        {
          title: "Ferramentas de Analytics Essenciais",
          content: "Instagram Insights (gratuito) fornece dados básicos mas valiosos. Creator Studio do Facebook oferece insights mais detalhados. TikTok Analytics mostra performance detalhada dos vídeos. Ferramentas pagas como Hootsuite, Sprout Social ou Later oferecem análises mais profundas. Google Analytics pode rastrear tráfego vindo das redes sociais. Use planilhas para acompanhar crescimento mensal. Defina KPIs específicos para seu nicho. Analise concorrentes com ferramentas como Social Blade."
        },
        {
          title: "Otimização Baseada em Dados",
          content: "Teste A/B diferentes tipos de thumbnail, títulos e horários de postagem. Identifique padrões nos seus posts mais performáticos. Replique elementos que funcionam em novos conteúdos. Abandone formatos que consistentemente performam mal. Use dados para decidir frequência de postagem ideal. Ajuste estratégia de hashtags baseado em performance. Otimize duração dos vídeos baseado em tempo médio de visualização. Dados devem guiar criatividade, não limitá-la. Teste constantemente e adapte rapidamente."
        }
      ]
    }
  },
  {
    id: 7,
    title: "Trends e Viral Hacking",
    icon: <Zap className="w-8 h-8" />,
    content: {
      intro: "Aprenda a identificar e surfar trends antes que se tornem mainstream",
      topics: [
        {
          title: "Identificação Precoce de Trends",
          content: "Monitore criadores de nicho específicos que frequentemente iniciam trends. Use ferramentas como Google Trends, TrendTok, e Hashtagify para identificar tendências emergentes. Observe padrões em conteúdo que está começando a crescer rapidamente. Acompanhe influenciadores internacionais - trends frequentemente migram entre países. Participe de grupos e comunidades do seu nicho para insights antecipados. Analise comentários em posts virais para identificar demandas não atendidas. Trends começam pequenas e explodem - entre cedo para máximo benefício."
        },
        {
          title: "Adaptação Criativa de Trends",
          content: "Nunca copie trends exatamente - adapte para seu nicho e personalidade. Use a estrutura da trend mas mude o contexto completamente. Combine múltiplas trends em um único conteúdo. Crie versões 'opostas' de trends populares. Use trends de outros nichos e adapte para o seu. Adicione elementos únicos que só você pode oferecer. Timing é crucial - muito cedo e ninguém entende, muito tarde e você parece copiador. Sua versão deve ser memorável e compartilhável por si só."
        },
        {
          title: "Criação de Trends Próprias",
          content: "Crie formatos únicos que outros possam replicar facilmente. Use sons originais que se tornem reconhecíveis. Desenvolva challenges que envolvam sua audiência. Crie hashtags memoráveis e fáceis de usar. Documente processos ou transformações de forma única. Use elementos visuais distintivos que se tornem sua marca. Colabore com outros criadores para amplificar sua trend. Seja consistente com elementos que quer que se tornem virais. Trends próprias estabelecem você como líder de opinião no seu nicho."
        }
      ]
    }
  },
  {
    id: 8,
    title: "Monetização e Crescimento Sustentável",
    icon: <Target className="w-8 h-8" />,
    content: {
      intro: "Transforme sua audiência viral em receita consistente e crescimento a longo prazo",
      topics: [
        {
          title: "Estratégias de Monetização Direta",
          content: "Creator Fund do TikTok e Instagram Reels Play Bonus oferecem pagamento por visualizações. Lives permitem receber presentes virtuais convertíveis em dinheiro. Parcerias com marcas são mais lucrativas que fundos de criadores. Crie produtos digitais (cursos, ebooks, templates) relacionados ao seu conteúdo. Ofereça consultoria ou serviços baseados na sua expertise. Use link na bio para direcionar para produtos próprios. Affiliate marketing funciona quando produtos são genuinamente úteis para sua audiência. Diversifique fontes de renda para estabilidade."
        },
        {
          title: "Parcerias e Colaborações Comerciais",
          content: "Micro-influenciadores (10K-100K seguidores) frequentemente têm melhores taxas de engajamento que mega-influenciadores. Crie media kit profissional com estatísticas e exemplos de trabalho. Seja transparente sobre preços e entregas. Negocie contratos que permitam criatividade. Trabalhe apenas com marcas alinhadas aos seus valores. Use #publi ou #ad conforme exigido por lei. Mantenha autenticidade mesmo em conteúdo pago. Parcerias de longo prazo são mais valiosas que campanhas pontuais. Construa relacionamentos genuínos com marcas."
        },
        {
          title: "Crescimento Sustentável vs Viral Momentâneo",
          content: "Viral momentâneo pode trazer milhões de views mas poucos seguidores fiéis. Foque em construir audiência que se importa com seu conteúdo, não apenas entretenimento. Diversifique tipos de conteúdo para não depender apenas de trends. Construa presença em múltiplas plataformas. Desenvolva produtos/serviços que não dependem de algoritmos. Invista em email marketing para comunicação direta. Crie conteúdo evergreen que continua relevante. Sustentabilidade vem de valor consistente, não apenas entretenimento viral."
        }
      ]
    }
  },
  {
    id: 9,
    title: "Ferramentas e Automação",
    icon: <Play className="w-8 h-8" />,
    content: {
      intro: "Otimize seu workflow com as melhores ferramentas e técnicas de automação",
      topics: [
        {
          title: "Ferramentas de Criação de Conteúdo",
          content: "CapCut (gratuito) é ideal para edição no celular com templates virais. Canva Pro oferece templates para Stories e posts. InShot é perfeito para edições rápidas. Adobe Premiere Pro para edições profissionais. Loom para gravação de tela. Unsplash e Pexels para imagens gratuitas. Remove.bg para remover fundos. Lensa AI para avatares únicos. VSCO para filtros consistentes. Reface para face swaps virais. Invista em ferramentas que economizam tempo sem comprometer qualidade."
        },
        {
          title: "Agendamento e Automação Inteligente",
          content: "Later permite agendamento visual para Instagram. Hootsuite gerencia múltiplas contas. Buffer oferece análises detalhadas. Creator Studio do Facebook é gratuito e eficiente. TikTok não permite agendamento nativo - use ferramentas terceiras. Agende posts para horários de pico da sua audiência. Use automação para responder DMs comuns. Crie templates de resposta para comentários frequentes. Automatize cross-posting entre plataformas com cuidado. Mantenha toque humano mesmo com automação."
        },
        {
          title: "Organização e Produtividade",
          content: "Use Notion ou Trello para calendário editorial. Google Drive para armazenar conteúdo em nuvem. Crie pastas organizadas por tipo de conteúdo. Use naming conventions consistentes para arquivos. Mantenha banco de ideias sempre atualizado. Crie templates para diferentes tipos de post. Use timer Pomodoro para sessões de criação focadas. Batch similar tasks (gravação, edição, postagem). Defina dias específicos para cada atividade. Produtividade consistente supera surtos criativos esporádicos."
        }
      ]
    }
  },
  {
    id: 10,
    title: "Casos de Sucesso e Estratégias Avançadas",
    icon: <Star className="w-8 h-8" />,
    content: {
      intro: "Analise casos reais de sucesso e implemente estratégias de criadores que viralizaram",
      topics: [
        {
          title: "Anatomia de Conteúdos Virais",
          content: "Vídeos virais frequentemente combinam: timing perfeito + conteúdo emocional + formato familiar com twist único. 'Charlie Bit My Finger' viralizou por ser genuíno e inesperado. 'Gangnam Style' combinou música cativante com dança memorável. No TikTok, danças simples viralizam porque são fáceis de replicar. Transformações (antes/depois) performam bem porque satisfazem curiosidade. Tutoriais rápidos viralizam quando resolvem problemas comuns. Analise vídeos virais do seu nicho e identifique elementos comuns."
        },
        {
          title: "Estratégias de Criadores de Sucesso",
          content: "MrBeast investe pesado em thumbnails e títulos clickbait éticos. Charli D'Amelio manteve consistência em dança mesmo após viralizar. Khaby Lame criou formato único (reações sem falar) e manteve. Emma Chamberlain revolucionou vlogs com edição frenética. Zach King dominou ilusões visuais como nicho. James Charles construiu império educando sobre maquiagem. Estude criadores do seu nicho: que formatos usam? Como engajam? Que elementos únicos têm? Adapte estratégias para sua personalidade."
        },
        {
          title: "Planejamento de Longo Prazo",
          content: "Defina objetivos específicos: 100K seguidores em 6 meses, 1M de views mensais. Crie roadmap de conteúdo para próximos 3 meses. Planeje campanhas sazonais (Natal, Verão, etc.). Desenvolva múltiplas series de conteúdo para consistência. Invista em aprendizado contínuo - algoritmos mudam constantemente. Construa team quando necessário (editor, designer, assistente). Diversifique plataformas gradualmente. Mantenha autenticidade mesmo com crescimento. Sucesso sustentável requer visão de longo prazo, não apenas táticas de curto prazo."
        }
      ]
    }
  }
]

export default function ViralCourse() {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentTopic, setCurrentTopic] = useState(0)

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1)
      setCurrentTopic(0)
    }
  }

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1)
      setCurrentTopic(0)
    }
  }

  const nextTopic = () => {
    const currentModuleData = modules[currentModule]
    if (currentTopic < currentModuleData.content.topics.length - 1) {
      setCurrentTopic(currentTopic + 1)
    } else if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1)
      setCurrentTopic(0)
    }
  }

  const prevTopic = () => {
    if (currentTopic > 0) {
      setCurrentTopic(currentTopic - 1)
    } else if (currentModule > 0) {
      setCurrentModule(currentModule - 1)
      const prevModuleData = modules[currentModule - 1]
      setCurrentTopic(prevModuleData.content.topics.length - 1)
    }
  }

  const currentModuleData = modules[currentModule]
  const currentTopicData = currentModuleData.content.topics[currentTopic]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-black p-6 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            VIRAL MASTERY
          </h1>
          <p className="text-xl md:text-2xl text-center text-purple-200">
            Curso Completo: Como Viralizar no Instagram e TikTok
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-purple-800/30 rounded-full px-6 py-2 border border-purple-500">
              <span className="text-purple-300">Módulo {currentModule + 1} de {modules.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bonus Buttons */}
      <div className="bg-gradient-to-r from-purple-900/50 to-black/50 border-b border-purple-800/30">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bonus 1 - Templates */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-6 border border-purple-600/50 hover:border-purple-500 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                    BÔNUS 1
                  </h3>
                  <p className="text-purple-400 text-sm">Exclusivo para Alunos</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                +50 Templates Prontos para Viralizar
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Acesse nossa biblioteca exclusiva com mais de 50 templates testados e aprovados que já geraram milhões de visualizações. Formatos prontos para usar no Instagram e TikTok, organizados por categoria e nicho.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-sm text-purple-400">
                  <span>✨ 50+ Templates</span>
                  <span>📱 Prontos para usar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-400">R$ 5,99</span>
                  <a 
                    href="https://app.monetizze.com.br/checkout/DKE361187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-colors group-hover:shadow-lg group-hover:shadow-purple-500/30"
                  >
                    Acessar Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Bonus 2 - Grupo de Ideias */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-6 border border-purple-600/50 hover:border-purple-500 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                    BÔNUS 2
                  </h3>
                  <p className="text-purple-400 text-sm">Comunidade VIP</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Grupo de Novas Ideias Todos os Dias
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Entre no nosso grupo exclusivo onde compartilhamos diariamente novas ideias de conteúdo, trends emergentes e oportunidades de viralização. Networking com outros criadores e suporte direto da nossa equipe.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 text-sm text-purple-400">
                  <span>💡 Ideias diárias</span>
                  <span>🚀 Trends em tempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-400">R$ 17,80</span>
                  <a 
                    href="https://app.monetizze.com.br/checkout/DGD361188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-colors group-hover:shadow-lg group-hover:shadow-purple-500/30"
                  >
                    Entrar no Grupo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Navigation */}
      <div className="bg-gray-900 border-b border-purple-800">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => {
                  setCurrentModule(index)
                  setCurrentTopic(0)
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === currentModule
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {index + 1}. {module.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Module Overview */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-purple-900/50 to-gray-900/50 rounded-2xl p-6 border border-purple-800/30 sticky top-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-600 rounded-xl">
                  {currentModuleData.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-300">Módulo {currentModule + 1}</h3>
                  <p className="text-sm text-gray-400">{currentModuleData.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {currentModuleData.content.intro}
              </p>

              <div className="space-y-2">
                {currentModuleData.content.topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTopic(index)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-all duration-300 ${
                      index === currentTopic
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {index + 1}. {topic.title}
                  </button>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6 pt-6 border-t border-purple-800/30">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progresso do Módulo</span>
                  <span>{Math.round(((currentTopic + 1) / currentModuleData.content.topics.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentTopic + 1) / currentModuleData.content.topics.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-purple-800/30 shadow-2xl">
              {/* Animated Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative p-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full">
                    {currentModuleData.icon}
                  </div>
                </div>
              </div>

              {/* Topic Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                {currentTopicData.title}
              </h2>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-gradient-to-r from-purple-900/20 to-transparent rounded-xl p-8 border-l-4 border-purple-500">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    {currentTopicData.content}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-purple-800/30">
                <button
                  onClick={prevTopic}
                  disabled={currentModule === 0 && currentTopic === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Anterior
                </button>

                <div className="flex gap-2">
                  {currentModuleData.content.topics.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTopic ? 'bg-purple-500' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTopic}
                  disabled={currentModule === modules.length - 1 && currentTopic === currentModuleData.content.topics.length - 1}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-900 disabled:text-gray-600 rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
                >
                  Próximo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Module Navigation */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevModule}
                disabled={currentModule === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Módulo Anterior
              </button>

              <button
                onClick={nextModule}
                disabled={currentModule === modules.length - 1}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-900 disabled:text-gray-600 rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
              >
                Próximo Módulo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-purple-900 mt-16 p-8 border-t border-purple-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-purple-300 mb-4">
            🚀 Transforme seu Conteúdo em Viral
          </h3>
          <p className="text-gray-300 text-lg">
            Domine as estratégias que fazem milhões de pessoas pararem para assistir seu conteúdo
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-purple-400">
            <span>✨ 10 Módulos Completos</span>
            <span>📱 Instagram & TikTok</span>
            <span>🎯 Estratégias Comprovadas</span>
          </div>
        </div>
      </footer>
    </div>
  )
}