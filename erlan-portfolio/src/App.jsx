const skills = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git / GitHub', 'React — основы']

const projects = [
  {
    number: '01',
    title: 'Блог на Django',
    description: 'Учебное веб-приложение для публикации статей и управления контентом.',
    technologies: ['Python', 'Django'],
  },
  {
    number: '02',
    title: 'Интернет-магазин',
    description: 'Концепция магазина с каталогом товаров и понятной структурой страниц.',
    technologies: ['Django', 'HTML', 'CSS'],
  },
  {
    number: '03',
    title: 'Hangman',
    description: 'Игра «Виселица» с графическим интерфейсом на Python.',
    technologies: ['Python', 'Tkinter'],
  },
]

function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#home" aria-label="На главную">EA<span>.</span></a>
        <nav aria-label="Главная навигация">
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#education">Образование</a>
        </nav>
        <a className="header-link" href="#contact">Контакты ↗</a>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ПОРТФОЛИО · 2026</p>
            <h1>Асанов Эрлан<br /><span>Рустанбекович.</span></h1>
            <p className="role">Студент программных технологий</p>
            <p className="intro">
              Изучаю программирование и веб-разработку. Мне интересно создавать
              понятные цифровые продукты, развивать технические навыки и применять
              знания на практике.
            </p>
            <div className="actions">
              <a className="button button-dark" href="#projects">Смотреть проекты <span>↗</span></a>
              <a className="button button-light" href="#about">Обо мне</a>
            </div>
            <p className="availability"><span /> Открыт к учебным проектам и стажировкам</p>
          </div>

          <div className="hero-art" aria-label="Монограмма EA">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <span className="monogram">EA</span>
            <span className="art-caption">DEVELOPER IN PROGRESS</span>
            <span className="art-star">✳</span>
            <span className="art-location">BISHKEK · KG</span>
          </div>
        </section>

        <section className="section wrap" id="about">
          <p className="eyebrow">01 / ПРОФИЛЬ</p>
          <div className="two-column">
            <h2>Обо мне<span>.</span></h2>
            <div>
              <p className="section-copy">
                Я студент Кыргызско-Германского института прикладной информатики
                (INAI), направление «Программные технологии». Изучаю основы
                разработки программного обеспечения, веб-технологии и базы данных.
                Стараюсь развиваться через практику и учебные проекты.
              </p>
              <div className="facts">
                <div><span>Местоположение</span><strong>Бишкек, Кыргызстан</strong></div>
                <div><span>Институт</span><strong>INAI</strong></div>
                <div><span>Направление</span><strong>Программные технологии</strong></div>
                <div><span>Интересы</span><strong>Веб-разработка · Программирование</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="skills">
          <p className="eyebrow">02 / ИНСТРУМЕНТЫ</p>
          <div className="two-column">
            <h2>Навыки<span>.</span></h2>
            <div>
              <p className="section-copy">Технологии и инструменты, с которыми знаком в рамках обучения и практики.</p>
              <div className="skill-list">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <p className="eyebrow">03 / ПРАКТИКА</p>
          <div className="projects-title">
            <h2>Избранные проекты<span>.</span></h2>
            <p>Учебные работы</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-meta"><span>{project.number}</span><span>↗</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="small-note">Перед публикацией добавь ссылки на реальные репозитории, если они есть.</p>
        </section>

        <section className="section wrap" id="education">
          <p className="eyebrow">04 / ОБРАЗОВАНИЕ</p>
          <div className="two-column">
            <h2>Образование<span>.</span></h2>
            <div className="education-card">
              <div className="education-mark">↗</div>
              <div>
                <p className="date">2025 — настоящее время</p>
                <h3>Кыргызско-Германский институт прикладной информатики</h3>
                <p className="section-copy">INAI · Программные технологии</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <p className="eyebrow">05 / КОНТАКТЫ</p>
            <h2>Есть идея?<br /><span>Давайте обсудим.</span></h2>
            <p>Открыт к новым знакомствам, командной работе и возможностям развития.</p>
            <a className="button button-dark" href="mailto:your-email@example.com">Написать мне ↗</a>
            <p className="small-note">Замени example@example.com в коде на актуальный адрес перед публикацией.</p>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="logo" href="#home">EA<span>.</span></a>
        <p>Асанов Эрлан Рустанбекович · 2026</p>
        <a href="#home">Наверх ↑</a>
      </footer>
    </>
  )
}

export default App
