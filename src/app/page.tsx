import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getLatestPosts() {
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(raw);
      return { slug: file.replace(".mdx", ""), ...data } as {
        slug: string; title: string; date: string; excerpt: string; category: string;
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
}

const servicos = [
  { icone: "📊", titulo: "Meta Ads", desc: "Campanhas no Facebook e Instagram com foco em resultado. Setup, otimizacao e escala." },
  { icone: "🤖", titulo: "Automacao com IA", desc: "Sistemas que respondem, qualificam e fecham clientes automaticamente via WhatsApp." },
  { icone: "🌐", titulo: "Landing Pages", desc: "Paginas otimizadas para converter visitante em cliente, integradas as campanhas." },
];

const cases = [
  { nome: "Dra. Kalendra Vilete", nicho: "Medicina da Dor - Saude", desc: "Landing page para captacao de consultas particulares em Governador Valadares.", link: "https://demos.ohenriqueandrade.com.br/clientes/dra-kalendra/" },
  { nome: "Deposito Santa Luzia", nicho: "Varejo - Automacao", desc: "Automacao de pre-atendimento via WhatsApp com IA para loja de materiais.", link: "#" },
  { nome: "Automacao de Alunos", nicho: "Infoprodutos - IA", desc: "Sistema de gestao de alunos com agentes SDR e Tutor integrados ao Hotmart.", link: "#" },
];

export default function Home() {
  const posts = getLatestPosts();
  return (
    <main>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Gestor de Trafego Pago e Automacao com IA
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            Mais clientes para o seu negocio —{" "}
            <span className="text-blue-600">com metodo e inteligencia.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
            Combino trafego pago no Meta com automacao por IA para criar sistemas de aquisicao de clientes que trabalham por voce de forma previsivel e escalavel.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5533999999999?text=Ola%20Henrique,%20vim%20pelo%20site%20e%20quero%20conversar%20sobre%20trafego%20pago."
              target="_blank"
              rel="noopener"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >Falar no WhatsApp</a>
            <Link
              href="/blog"
              className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors"
            >Ver o blog</Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
            <span><strong className="text-gray-900 font-semibold">5+</strong> anos de experiencia</span>
            <span><strong className="text-gray-900 font-semibold">3x</strong> ROAS medio</span>
            <span><strong className="text-gray-900 font-semibold">10+</strong> nichos atendidos</span>
            <span><strong className="text-gray-900 font-semibold">GV</strong> e regiao</span>
          </div>
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">O que eu faco</p>
          <h2 className="text-2xl font-bold mb-10">Servicos</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {servicos.map((s) => (
              <div key={s.titulo} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-colors">
                <span className="text-2xl mb-4 block">{s.icone}</span>
                <h3 className="font-bold text-gray-900 mb-2">{s.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Projetos reais</p>
          <h2 className="text-2xl font-bold mb-10">Cases</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {cases.map((c) => (
              <a
                key={c.nome}
                href={c.link}
                target={c.link !== "#" ? "_blank" : undefined}
                rel="noopener"
                className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-colors block"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{c.nicho}</p>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{c.nome}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      {posts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Conteudo</p>
                <h2 className="text-2xl font-bold">Ultimos do blog</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-colors block"
                >
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-3">{post.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Pronto para atrair mais clientes?</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">Fale comigo pelo WhatsApp e vamos conversar sobre o seu negocio sem compromisso.</p>
            <a
              href="https://wa.me/5533999732338?text=Ola%20Henrique,%20vim%20pelo%20site%20e%20quero%20conversar%20sobre%20trafego%20pago."
              target="_blank"
              rel="noopener"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >Falar no WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
