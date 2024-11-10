import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

createRoot(document.getElementById('root')!).render(<App />);

serviceWorkerRegistration.register();
