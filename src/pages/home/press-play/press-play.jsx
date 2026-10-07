import './press-play.css'

export function PressPlay() {
  return (
    <section className="press-play" id="product-tour">
      <img className="press-play-bg" src="/images/press-play.png" alt="" />

      <h2 className="press-play-title">
      </h2>
      <details className="video">
        <summary aria-label="Play video">
          <img src="/images/play.svg" alt="Play" />
        </summary>
        <video src="/video/oneflow-demo.mp4" poster="/images/press-play.png" controls />
      </details>
    </section>
  )
}
