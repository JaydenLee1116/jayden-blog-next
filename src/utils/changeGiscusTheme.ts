export function changeGiscusTheme(theme: 'light_high_contrast' | 'dark_high_contrast') {
  function sendMessage<T>(message: T) {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
    document.documentElement.setAttribute('data-theme', theme);
  }

  sendMessage({
    setConfig: {
      theme,
    },
  });
}
