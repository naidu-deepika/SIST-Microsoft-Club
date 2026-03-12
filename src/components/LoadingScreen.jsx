function LoadingScreen() {
  return (
    <div className="loading-container">

      <div className="spinner"></div>

      <h2 className="loading-text">LOADING...</h2>

      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>

    </div>
  );
}

export default LoadingScreen;
