import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Henrique Andrade · Gestor de Tráfego Pago',
  description: 'Ajudo negócios a atrair mais clientes com Meta Ads e automação com IA.',
};

export default function BioPage() {
  const servicos = [
    { icone: '📊', nome: 'Meta Ads', desc: 'Campanhas no Facebook e Instagram com foco em resultado' },
    { icone: '🤖', nome: 'Automação com IA', desc: 'Sistemas que respondem, qualificam e fecham clientes' },
    { icone: '🌐', nome: 'Landing Pages', desc: 'Páginas otimizadas para converter visitante em cliente' },
  ];

  const nichos = ['Saúde', 'Beleza', 'Clínicas', 'Infoprodutores', 'Varejo', 'Serviços locais', 'Educação'];

  const cases = [
    { nome: 'Dra. Kalendra Vilete', nicho: 'Saúde', link: 'https://demos.ohenriqueandrade.com.br/clientes/dra-kalendra/' },
  ];

  return (
    <main className='min-h-screen bg-gray-50 py-10 px-4'>
      <div className='max-w-md mx-auto flex flex-col gap-4'>

        {/* PERFIL */}
        <div className='bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-3 text-center'>
          <div className='w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-2xl font-bold text-blue-600'>
            HA
          </div>
          <div>
            <p className='font-bold text-gray-900 text-lg'>Henrique Andrade</p>
            <span className='inline-block mt-1 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>
              Gestor de Tráfego Pago · IA
            </span>
          </div>
          <p className='text-sm text-gray-500 leading-relaxed'>
            Ajudo negócios a atrair mais clientes com Meta Ads e automação com inteligência artificial de forma previsível e escalável.
          </p>
          <p className='text-xs text-gray-400 flex items-center gap-1'>
            📍 Governador Valadares, MG
          </p>
        </div>

        {/* METRICAS */}
        <div className='grid grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200'>
          {[
            { num: '5+', label: 'anos de experiência' },
            { num: '3x', label: 'ROAS médio' },
            { num: '10+', label: 'nichos atendidos' },
          ].map((m) => (
            <div key={m.label} className='bg-white py-4 px-2 flex flex-col items-center gap-1'>
              <span className='text-xl font-bold text-gray-900'>{m.num}</span>
              <span className='text-xs text-gray-400 text-center leading-tight'>{m.label}</span>
            </div>
          ))}
        </div>

        {/* SERVICOS */}
        <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>
          <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 pt-4 pb-2'>O que eu faco</p>
          <div className='divide-y divide-gray-100'>
            {servicos.map((s) => (
              <div key={s.nome} className='flex items-center gap-3 px-5 py-3'>
                <div className='w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-base shrink-0'>
                  {s.icone}
                </div>
                <div>
                  <p className='text-sm font-semibold text-gray-900'>{s.nome}</p>
                  <p className='text-xs text-gray-400'>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NICHOS */}
        <div className='bg-white rounded-2xl border border-gray-200 p-5'>
          <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3'>Nichos que atendo</p>
          <div className='flex flex-wrap gap-2'>
            {nichos.map((n) => (
              <span key={n} className='text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full'>
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* CASES */}
        <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>
          <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 pt-4 pb-2'>Projetos recentes</p>
          <div className='divide-y divide-gray-100'>
            {cases.map((c) => (
              <a key={c.nome} href={c.link} target='_blank' rel='noopener'
                className='flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors'>
                <div className='w-2 h-2 rounded-full bg-blue-600 shrink-0'></div>
                <div className='flex-1'>
                  <p className='text-sm font-semibold text-gray-900'>{c.nome}</p>
                </div>
                <span className='text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full'>{c.nicho}</span>
              </a>
            ))}
            <div className='flex items-center gap-3 px-5 py-3 opacity-40'>
              <div className='w-2 h-2 rounded-full bg-gray-300 shrink-0'></div>
              <p className='text-sm text-gray-400'>Mais cases em breve</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className='flex flex-col gap-3'>
          <a href='https://wa.me/5533999732338?text=Ola%20Henrique,%20vim%20pelo%20Instagram%20e%20quero%20saber%20mais.'
            target='_blank' rel='noopener'
            className='flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-2xl font-semibold hover:bg-green-600 transition-colors'>
            <span className='text-xl'>💬</span>
            <div className='flex-1'>
              <p className='text-sm font-semibold'>Falar no WhatsApp</p>
              <p className='text-xs text-green-100'>Resposta rápida, sem enrolação</p>
            </div>
            <span className='text-green-200'>→</span>
          </a>
          <a href='https://ohenriqueandrade.com.br'
            className='flex items-center gap-3 bg-blue-600 text-white px-5 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors'>
            <span className='text-xl'>🌐</span>
            <div className='flex-1'>
              <p className='text-sm font-semibold'>Ver meu site completo</p>
              <p className='text-xs text-blue-200'>Cases, serviços e contato</p>
            </div>
            <span className='text-blue-200'>→</span>
          </a>
          <a href='https://www.instagram.com/henriqueandrade.trafego' target='_blank' rel='noopener'
            className='flex items-center gap-3 bg-white text-gray-900 border border-gray-200 px-5 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors'>
            <span className='text-xl'>📸</span>
            <div className='flex-1'>
              <p className='text-sm font-semibold'>Seguir no Instagram</p>
              <p className='text-xs text-gray-400'>@henriqueandrade.trafego</p>
            </div>
            <span className='text-gray-300'>→</span>
          </a>
        </div>

        {/* RODAPE */}
        <p className='text-center text-xs text-gray-400 pt-2'>
          ohenriqueandrade.com.br · Governador Valadares, MG
        </p>

      </div>
    </main>
  );
}