import './press-play.css'

export function PressPlay() {
  return (
    <section className="press-play" id="product-tour">
      <img className="press-play__bg" src="/images/press-play.png" alt="" />

      <h2 className="press-play__title">
        <span>Press</span>
        <span>play</span>
      </h2>

      {/* кнопка play - это summary. Когда details открыт, показывается видео */}
      <details className="video">
        <summary aria-label="Play video">
          <img src="/images/play.svg" alt="" />
        </summary>
        <video src="/video/oneflow-demo.mp4" poster="/images/press-play.png" controls />
      </details>
    </section>
  )
}
