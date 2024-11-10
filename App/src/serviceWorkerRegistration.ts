const isLocalhost: boolean = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:[0-9]+)){3}$/)
);

interface Config {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

export function register(config?: Config): void {
  if ('serviceWorker' in navigator) {
    const publicUrl = new URL(
      import.meta.env.VITE_PUBLIC_URL || '',
      window.location.href
    );
    if (publicUrl.origin !== window.location.origin) return;

    window.addEventListener('load', () => {
      const swUrl = `${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log('PWA: Service worker зарегистрирован.');
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) return;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('Обновление доступно; перезагрузите страницу.');
              config?.onUpdate?.(registration);
            } else {
              console.log('Контент кэширован для работы в офлайне.');
              config?.onSuccess?.(registration);
            }
          }
        };
      };
    })
    .catch((error) =>
      console.error('Ошибка регистрации service worker:', error)
    );
}

function checkValidServiceWorker(swUrl: string, config?: Config): void {
  fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && !contentType.includes('javascript'))
      ) {
        navigator.serviceWorker.ready.then((registration) =>
          registration.unregister().then(() => window.location.reload())
        );
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => console.log('Не удается подключиться к интернету.'));
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) =>
      registration.unregister()
    );
  }
}
