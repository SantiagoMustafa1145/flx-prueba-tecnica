export default function ErrorView() {
  return (
    <div className="container">
      <div>
        <a
          href="/"
          title="Volver al inicio"
          aria-label="Volver a la página de inicio"
        >
          <img
            src="https://camo.githubusercontent.com/dca1d655abd7ea1708ae59b18cbd35b9192018d30b82a53ab32427c7484573c3/68747470733a2f2f666c65787875732e636f6d2e61722f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f6c6f676f2d666c65787875732d6865616465722d7076386c696168386b6876367866796e767a3033736f39763938736b327472353068747339776537646b2e706e67"
            alt="Logo de la empresa Flexxus"
            title="Logo de la empresa Flexxus"
            aria-label="Logo de la empresa Flexxus"
          />
        </a>
        <div className="error-view">
          <h1>¡Vaya, algo ha salido mal!</h1>
          <p>Intentemos nuevamente más tarde.</p>
          <a
            href="/"
            title="Volver al inicio"
            aria-label="Volver a la página de inicio"
          >
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}
