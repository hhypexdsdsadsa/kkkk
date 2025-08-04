import React from 'react';
import { 
  Coffee, 
  Heart, 
  Star, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Zap,
  Shield,
  Target,
  BookOpen,
  MessageCircle,
  ChevronDown,
  Play,
  Flame,
  Brain,
  Dna,
  BarChart3,
  Pray,
  Sparkles,
  Muscle
} from 'lucide-react';

function App() {
  const handleCTAClick = () => {
    window.open('https://pay.disrupty.com/protocolo-jejum-cafe-preto', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section com VSL */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-amber-800/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  PROTOCOLO
                </span>
                <br />
                <span className="text-white">JEJUM COM</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  CAFÉ PRETO
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-orange-200 font-medium">
                O método que une ciência e fé para transformar seu corpo e sua vida espiritual
              </p>
            </div>

            {/* VSL Container */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                <div 
                  className="rounded-xl overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script src="https://fast.wistia.com/player.js" async></script>
                      <script src="https://fast.wistia.com/embed/gc9ywrd50y.js" async type="module"></script>
                      <style>
                        wistia-player[media-id='gc9ywrd50y']:not(:defined) { 
                          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gc9ywrd50y/swatch'); 
                          display: block; 
                          filter: blur(5px); 
                          padding-top: 56.25%; 
                          border-radius: 12px;
                        }
                      </style> 
                      <wistia-player media-id="gc9ywrd50y" aspect="16:9"></wistia-player>
                    `
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                ☕ QUERO TRANSFORMAR MINHA VIDA
              </button>
              
              <p className="text-sm text-gray-400">
                ⚡ Acesso imediato • 🔒 Compra 100% segura
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-gray-800 to-gray-900"></div>

      {/* Segunda Seção: Você Reconhece Esses Sinais? */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              <span className="text-red-500">VOCÊ RECONHECE</span>
              <br />
              <span className="text-white">ESSES SINAIS?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                "Cansaço ao acordar, mesmo dormindo 8 horas",
                "Sensação constante de inchaço",
                "Perda de foco durante o dia",
                "Desânimo espiritual",
                "Ansiedade alimentar",
                "Baixa autoestima"
              ].map((symptom, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <p className="text-lg text-red-100">{symptom}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Se isso é familiar, você não está sozinha.
            </p>
            
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              ☕ QUERO SAIR DESSE CICLO
            </button>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-gray-800 to-orange-500/10"></div>

      {/* Terceira Seção: Pare de Cair nas Mesmas Armadilhas */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              <span className="text-orange-500">PARE DE CAIR NAS</span>
              <br />
              <span className="text-white">MESMAS ARMADILHAS</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">🥗</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Dietas Genéricas</h3>
                <p className="text-gray-300">Funcionam por 2 semanas, depois você volta ao peso anterior</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">🍵</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Chás Milagrosos</h3>
                <p className="text-gray-300">Promessas vazias que só drenam sua carteira</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Jejuns Aleatórios</h3>
                <p className="text-gray-300">Sem propósito e ciência, tudo é temporário</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Sem propósito e ciência, qualquer método é apenas mais uma tentativa frustrada.
            </p>
            
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              ☕ QUERO UM MÉTODO REAL
            </button>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-red-500/10 to-yellow-500/10"></div>

      {/* Quarta Seção: Conheça o Jejum com Café Preto */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/10 to-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              <span className="text-yellow-500">CONHEÇA O</span>
              <br />
              <span className="text-white">JEJUM COM CAFÉ PRETO</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                Jejum com Café Preto é um protocolo <span className="text-yellow-500 font-bold">simples</span>, 
                <span className="text-yellow-500 font-bold"> ancestral</span> e 
                <span className="text-yellow-500 font-bold"> validado pela ciência</span>.
              </p>
              
              <p className="text-lg text-orange-300 mb-6">
                Nada de modinha.
              </p>
              
              <p className="text-xl text-gray-200">
                Você acorda, toma um café puro e deixa o corpo e a mente entrarem em modo de cura.
              </p>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              ☕ QUERO CONHECER O MÉTODO
            </button>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-orange-500/20 to-blue-500/10"></div>

      {/* Quinta Seção: Ciência + Fé = Resultado */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="text-blue-500">CIÊNCIA</span>
              <span className="text-white"> + </span>
              <span className="text-green-500">FÉ</span>
              <span className="text-white"> = </span>
              <span className="text-yellow-500">RESULTADO</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Bloco Científico */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-8 text-center">BLOCO CIENTÍFICO</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Flame className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Lipólise</h4>
                      <p className="text-gray-300">Queima gordura sem atacar músculos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Aumento de Dopamina</h4>
                      <p className="text-gray-300">Mais foco e energia natural</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Dna className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Autofagia</h4>
                      <p className="text-gray-300">Limpeza celular profunda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <BarChart3 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Estabilidade de Insulina</h4>
                      <p className="text-gray-300">Sem compulsão alimentar</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bloco Espiritual */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-500 mb-8 text-center">BLOCO ESPIRITUAL</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Jejum como Prática Bíblica</h4>
                      <p className="text-gray-300">Tradição milenar de purificação</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Conexão Profunda com Deus</h4>
                      <p className="text-gray-300">Fortalecimento da fé e propósito</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Sparkles className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Renovação Interior</h4>
                      <p className="text-gray-300">Transformação que vem de dentro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Muscle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Disciplina Espiritual</h4>
                      <p className="text-gray-300">Fortalecimento da vontade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                ☕ QUERO ALIAR CIÊNCIA E FÉ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-green-500/10 to-purple-500/10"></div>

      {/* Sexta Seção: Conheça a Café GPT */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="text-purple-500">CONHEÇA A</span>
              <br />
              <span className="text-white">CAFÉ GPT</span>
            </h2>
            
            <p className="text-xl text-center text-gray-300 mb-12">
              A IA que acompanha você 24h, enviando versículos, dicas alimentares, motivação e monitoramento do progresso.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefícios */}
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-8">Benefícios da Café GPT:</h3>
                
                <div className="space-y-4">
                  {[
                    "Motivação diária personalizada",
                    "Versículo e reflexão matinal",
                    "Ajustes personalizados no protocolo",
                    "Check-ins emocionais",
                    "Receitas leves e saudáveis",
                    "Lembretes de quebra de jejum"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Exemplo de Conversa */}
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">Exemplo de Conversa:</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-500/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Coffee className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-blue-400">Café GPT</span>
                    </div>
                    <p className="text-gray-200">Bom dia! Como você está se sentindo hoje? 🌅</p>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-xl p-4 ml-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">V</span>
                      </div>
                      <span className="font-bold text-gray-400">Você</span>
                    </div>
                    <p className="text-gray-200">Meio desanimada...</p>
                  </div>
                  
                  <div className="bg-blue-500/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Coffee className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-blue-400">Café GPT</span>
                    </div>
                    <p className="text-gray-200">Entendo. Lembre-se: "Posso todas as coisas naquele que me fortalece" (Filipenses 4:13). Que tal começarmos com seu café e uma oração? ☕🙏</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                ☕ QUERO O SUPORTE DA CAFÉ GPT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-blue-500/10 to-orange-500/20"></div>

      {/* Sétima Seção: Como Funciona o Protocolo */}
      <section className="py-20 bg-gradient-to-br from-orange-500/20 to-yellow-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="text-orange-500">COMO FUNCIONA</span>
              <br />
              <span className="text-white">O PROTOCOLO</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-2xl p-6 text-center">
                <div className="text-6xl font-bold text-orange-500 mb-4">1</div>
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-white mb-3">Café em Jejum</h3>
                <p className="text-gray-300">Acorde e tome seu café preto, sem açúcar ou adoçante</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-2xl p-6 text-center">
                <div className="text-6xl font-bold text-orange-500 mb-4">2</div>
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-white mb-3">Oração Devocional</h3>
                <p className="text-gray-300">Dedique 10 minutos para oração e leitura bíblica</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-2xl p-6 text-center">
                <div className="text-6xl font-bold text-orange-500 mb-4">3</div>
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-white mb-3">Jejum de 12 a 16h</h3>
                <p className="text-gray-300">Mantenha o jejum pelo período determinado</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-2xl p-6 text-center md:col-span-2 lg:col-span-1">
                <div className="text-6xl font-bold text-orange-500 mb-4">4</div>
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-white mb-3">Quebra Leve</h3>
                <p className="text-gray-300">Alimente-se de forma consciente e saudável</p>
              </div>
              
              <div className="bg-gray-800/50 border border-orange-500/20 rounded-2xl p-6 text-center md:col-span-2 lg:col-span-2">
                <div className="text-6xl font-bold text-orange-500 mb-4">5</div>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">Mensagem da Café GPT</h3>
                <p className="text-gray-300">Receba orientação personalizada e motivação</p>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                ☕ QUERO SEGUIR ESSE RITUAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-yellow-500/10 to-gray-800"></div>

      {/* FAQ Section - Movida para antes da oferta */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="text-orange-500">PERGUNTAS</span>
              <br />
              <span className="text-white">FREQUENTES</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Posso adicionar açúcar ou adoçante no café?",
                  answer: "Não. O café deve ser consumido puro (preto) para não quebrar o jejum. Açúcar e adoçantes podem interferir nos benefícios metabólicos do protocolo."
                },
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer: "Os primeiros resultados podem ser percebidos já na primeira semana, como melhora na disposição e redução do inchaço. Resultados mais significativos aparecem entre 2-4 semanas de prática consistente."
                },
                {
                  question: "Posso fazer o jejum todos os dias?",
                  answer: "Sim, o protocolo foi desenvolvido para ser sustentável no longo prazo. Recomendamos começar gradualmente e sempre ouvir seu corpo."
                },
                {
                  question: "O método é baseado em princípios bíblicos?",
                  answer: "Sim! O jejum é uma prática milenar presente na Bíblia. Nosso protocolo une a sabedoria ancestral com descobertas científicas modernas."
                },
                {
                  question: "A Café GPT funciona 24 horas?",
                  answer: "Sim! Nossa IA está disponível 24/7 para te apoiar com motivação, versículos, dicas nutricionais e acompanhamento do seu progresso."
                },
                {
                  question: "Preciso de acompanhamento médico?",
                  answer: "Recomendamos consultar um profissional de saúde antes de iniciar qualquer protocolo, especialmente se você tem condições médicas pré-existentes."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 border border-orange-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-orange-500 mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-gray-900 to-orange-500/20"></div>

      {/* Oferta Principal */}
      <section className="py-20 bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-orange-500">OFERTA ESPECIAL</span>
              <br />
              <span className="text-white">PROTOCOLO COMPLETO</span>
            </h2>
            
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-orange-500/30">
              <div className="mb-8">
                <div className="text-gray-400 text-xl line-through mb-2">De R$ 497,00</div>
                <div className="text-5xl md:text-6xl font-black text-orange-500 mb-2">
                  R$ 97<span className="text-2xl">,00</span>
                </div>
                <div className="text-orange-300">ou 12x de R$ 9,70</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Protocolo Jejum com Café Preto Completo</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Acesso à Café GPT (IA 24h)</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Guia de Receitas Saudáveis</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Plano de Devocionais Diários</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Suporte Especializado</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Garantia de 7 dias</span>
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-6 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4"
              >
                ☕ QUERO TRANSFORMAR MINHA VIDA AGORA
              </button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>Garantia 7 dias</span>
                </div>
              </div>
            </div>
            
            <p className="text-orange-300 font-medium">
              ⏰ Oferta por tempo limitado - Não perca esta oportunidade!
            </p>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-orange-500/20 to-green-500/10"></div>

      {/* Resultados - Movida para depois da oferta */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="text-green-500">RESULTADOS</span>
              <br />
              <span className="text-white">REAIS</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Silva",
                  result: "-8kg em 30 dias",
                  testimony: "Nunca pensei que seria possível! O protocolo mudou não só meu corpo, mas minha relação com Deus. Me sinto mais conectada espiritualmente.",
                  image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                },
                {
                  name: "Ana Costa",
                  result: "-12kg em 45 dias",
                  testimony: "A Café GPT foi fundamental! Recebia versículos todos os dias que me motivavam a continuar. Perdi peso e ganhei fé.",
                  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                },
                {
                  name: "Carla Mendes",
                  result: "-15kg em 60 dias",
                  testimony: "Método simples e poderoso. Minha autoestima voltou e minha vida espiritual nunca esteve tão forte. Recomendo para todas!",
                  image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <div className="text-green-500 font-bold">{testimonial.result}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.testimony}"</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                ☕ QUERO ESSES RESULTADOS TAMBÉM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradiente de transição */}
      <div className="h-8 bg-gradient-to-b from-blue-500/10 to-gray-900"></div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Coffee className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Protocolo Jejum com Café Preto</h3>
            <p className="text-gray-400">Transformando vidas através da ciência e da fé</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Protocolo Jejum com Café Preto. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Este produto não substitui orientação médica profissional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;